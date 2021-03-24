import { Component, Input } from "@angular/core";

@Component({

    selector: 'app-prop-child-binding',
    template: `
                <ul>
                    <li *ngFor="let item of list">{{item}}</li>
                </ul>
           `

})
export class PropBindingChildComponent {

    list: string[] = []

    @Input()
    set inputKeyword(str: string) {
        if (str) {
            this.list.push(str)
        }
    }



}