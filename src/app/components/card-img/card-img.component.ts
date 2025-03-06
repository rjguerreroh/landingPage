import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-img.component.html',
  styleUrl: './card-img.component.css'
})
export class CardImgComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() img!: string;
  classString!: String;


  constructor(){

    
  }
  ngOnInit(): void {
    this.classString = "card_img flex items-end rounded-lg p-3 bg-[url(/" + this.img +")] bg-cover bg-center";
    console.log(this.classString);
  }
 

 
  
}
