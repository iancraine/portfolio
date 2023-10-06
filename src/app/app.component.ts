import { Component, OnInit } from '@angular/core';
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

  constructor(){
  }

  ngOnInit(): void {
    // this.animation();
    this.startAnimation();
    this.text();
  }

  public animation(){
    

    const elements = gsap.utils.toArray<HTMLElement>('.animated-ele');
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
}
