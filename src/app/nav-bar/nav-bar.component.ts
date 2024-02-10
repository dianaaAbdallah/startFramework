
import { Component,HostListener  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
 
//  ngAfterViewInit() {
//   
//     
//     console.log(navwidth)

//     console.log(offset)
    
   

//   }

@HostListener('window:scroll', ['$event'])

onWindowScroll() {
    // let element = document.querySelector('.navbar') as HTMLElement;

  var  navHeight:any=$('.navbar').height(); 

  var offset:any=$(window).scrollTop();  

  if(offset>navHeight)
  {
    $('.navbar').height(30); 
  }
 else{
  $('.navbar').height(60); 
 }
  }
}