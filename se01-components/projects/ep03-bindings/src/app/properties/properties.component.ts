import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {

  hideBtn = true



  switchBtnState() {
    this.hideBtn = !this.hideBtn
  }

  parentKeyword: string =""
 
  getInputKeyword(input: any){
    this.parentKeyword = input.value
    input.value =""
  }

  backGround = "Yellow"
}
