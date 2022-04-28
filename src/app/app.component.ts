import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'app';

  x:number = 0;
  y:number = 0;
  width:number = 100;
  height:number = 100;  
  

  ngOnInit(): void {
  }

  showValue(e:any) {  
    let sliderName = e.target.id.toLowerCase();
    console.log(typeof(sliderName));
    switch(sliderName){
      case 'slider1':
        this.x = e.target.value;
        break;
      case 'slider2':
        this.y = e.target.value;
        break;
      case 'slider3':
        this.width = e.target.value;
        break;
      case 'slider4':
        this.height = e.target.value;
        break;
    }
    // this.sliderValue.innerHTML = slider.value;
    // var sliderPosition = ( slider.value / slider.max )
    
    // if(slider.value === slider.min) {
    //   sliderValue.style.left = ((sliderPosition * 100)  + 2 ) + "%";
    // }
    // else if ( slider.value === slider.max) {
    //   sliderValue.style.left =  ((sliderPosition * 100) - 2 ) + "%";
    // } 
    // else {
    //   sliderValue.style.left = ((sliderPosition * 100)) + "%";
    // }
  }

}
