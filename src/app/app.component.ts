import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(){
  }

  ngOnInit(): void {
    this.animation();
    this.startAnimation();

  }

  public animation():void{
    const elements = gsap.utils.toArray<HTMLElement>('.animated-ele');
    elements.forEach((ele) => {
      gsap.to(ele,{
        opacity: 1,
        y: 50,
        scrollTrigger: {
          trigger: ele,
          start: '20% center',
          end: '80% center',
          scrub: false,
          markers: true,
          toggleActions: 'play reverse play reverse'
        }
      })
    });
    
  }
  public startAnimation():void{
    let tl = gsap.timeline();
    tl.to('.color-one',{
      x:'-100vw',
      duration: .4,
    });
    tl.to('.color-two',{
      y:'-100vh',
      duration: .5,
    });
    tl.to('.color-three',{
      x:'100vw',
      duration: .3,
    });
  };
}
