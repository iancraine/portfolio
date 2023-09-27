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

  public animation(){
    let elements = document.querySelectorAll('.animated-ele');
    elements.forEach((ele) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.animated-ele',
          start: 'center center',
          end: 'bottom center',
          scrub: true,
          markers: true,
        }
      });
      tl.to('.animated-ele',{
        opacity: 0,
        // duration: 5
      })
    })
    
  }
}
