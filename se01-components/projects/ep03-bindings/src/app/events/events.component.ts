import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './events.component.html',
  styles: [
  ]
})
export class EventsComponent {

  from = ["JavaScript", "TypeScript", "Angular", "Spring"]

  to: string[] = []

  private dragValue?: string

  drag(event: any) {
    this.dragValue = event.target?.innerText
  }


  drop(event: any) {
    if (this.dragValue) {
      if (event.target.id == "to" && this.dragValue) {
        this.to.push(this.dragValue)
        this.from = this.from.filter(a => a != this.dragValue)
      } else if (event.target.id == "from") {
        this.from.push(this.dragValue)
        this.to = this.to.filter(a => a != this.dragValue)
      }
      this.dragValue = undefined
    }
  }

}
