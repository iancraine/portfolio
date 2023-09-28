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
  }

  public animation():void{
    const elements = gsap.utils.toArray<HTMLElement>('.animated-ele');
    elements.forEach((ele) => {
      // let tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.animated-ele',
      //     start: '40% center',
      //     end: '60% center',
      //     scrub: false,
      //     markers: true,
      //     toggleActions: 'play reverse play'
      //   }
      // });
      // tl.to('.animated-ele',{
      //   opacity: 1,
      //   duration: .5
      // })
      gsap.to(ele,{
        opacity: 1,
        scrollTrigger: {
          trigger: ele,
          start: '20% center',
          end: '60% center',
          scrub: false,
          markers: true,
          toggleActions: 'play reverse play reverse'
        }
      })
    });
    
  }
}
