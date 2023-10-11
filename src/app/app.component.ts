import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  public words:Array<string> =[
    'A Developer.',
    'A Traveler.',
    'A Learner.'
  ];

  @ViewChild("skills") skills!: ElementRef;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    // this.animation();
    this.startAnimation();
    this.text();
  }

  public animation(){
    

    let elements = gsap.utils.toArray<HTMLElement>('.animated-ele');
    elements.forEach((ele) => {
      gsap.to(ele,{
        opacity: 1,
        y: 50,
        scrollTrigger: {
          trigger: ele,
          start: 'top 80%',
          end: '80% center',
          scrub: false,
          markers: true,
          toggleActions: 'play reverse play reverse'
        }
      }).pause()
    });

    gsap.to('.cursor',{
      opacity: 0,
      ease: 'power2.inOut',
      repeat: -1
    });

    gsap.to('.about-section', {
      opacity: 1,
      y: 50,
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: '80% 30%',
        scrub: false,
        markers: true,
        toggleActions: 'play reverse play reverse'
      }
    });

    gsap.to('.skills-section', {
      opacity: 1,
      y: 50,
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%',
        end: 'bottom center',
        scrub: false,
        markers: true,
        toggleActions: 'play reverse play reverse'
      }
    });

    gsap.from('.projectsTitle',{
      x: 1000,
      duration: .5,
      scrollTrigger: {
        trigger:'.projects-section',
        start: 'top 80%',
        end: 'bottom center',
        scrub: false,
        markers: true,
        toggleActions: 'play reverse play reverse'
      }
    });

    elements = gsap.utils.toArray<HTMLElement>('.slide');
    elements.forEach((ele) => {
      gsap.from(ele,{
        x: -1000,
        duration: 1,
        delay: .5,
        scrollTrigger: {
          trigger:'.projects-section',
          start: 'top 80%',
          end: 'bottom center',
          scrub: false,
          markers: true,
          toggleActions: 'play reverse play reverse'
        }
      });
    });

    elements = gsap.utils.toArray<HTMLElement>('.imgTrans');
    elements.forEach((ele) => {
      gsap.from(ele,{
        x: 1000,
        opacity: 0,
        delay: .5,
        duration: 1,
        scrollTrigger: {
          trigger:'.projects-section',
          start: 'top 80%',
          end: 'bottom center',
          scrub: false,
          markers: true,
          toggleActions: 'play reverse play reverse'
        }
      });
    });

  }

  public text(){
    let mainTl = gsap.timeline({repeat:-1,});

    this.words?.forEach(word => {
      let timel = gsap.timeline({
        repeat:1, 
        yoyo: true,
      repeatDelay: 1});
      timel.to('.text',{duration:1, text:word});
      mainTl.add(timel);
    })

  }

  public startAnimation():void{
    let tl = gsap.timeline();
    tl.to('.color-one',{
      x:'-100vw',
      duration: .4,
      delay: .2
    });
    tl.to('.color-two',{
      y:'-100vh',
      duration: .5,
    });
    tl.to('.color-three',{
      x:'100vw',
      duration: .3,
      onComplete: () => {this.animation();}
    });
  };

  public newTab(link: string){
    window.open(
      link, "_blank"
    );
  }

  public scroll(target: HTMLElement){
    target.scrollIntoView({behavior: "smooth", block: "start"});
  }
}
