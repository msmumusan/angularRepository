import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './attributes.component.html',
  styles: [
  ]
})
export class AttributesComponent {

  currentValue = '0'

  // Multi classes
  multiClass = "bg-info"

  singleClass = true

  textSize = 20

  changeTextSize(size: any) {
    this.textSize = size
  }

}
