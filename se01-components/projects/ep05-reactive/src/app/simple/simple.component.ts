import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './simple.component.html',
  styles: [
  ]
})
export class SimpleComponent {
  /*
    form: FormGroup
  
    name: FormControl
    nameValue: string
  
    constructor() {
      this.name = new FormControl
      this.form = new FormGroup({
        name: this.name,
        gender: new FormControl,
        contact: new FormGroup({
          phone: new FormControl,
          email: new FormControl
        })
  
      })
      this.nameValue = this.name.value
    } */

  form: FormGroup


  // constructor(builder: FormBuilder) {
  //   this.form = builder.group({
  //     name: "",
  //     gender: "Male",
  //     contact: builder.group({
  //       phone: "",
  //       email: ""
  //     })
  //   })
  // }

  categories = [
    { id: 1, name: "Foods" },
    { id: 2, name: "Drink" },
    { id: 3, name: "Snack" },
    { id: 1, name: "Accessories" },
  ]

  constructor(private builder: FormBuilder) {
    this.form = builder.group({
      name: "",
      category: "",
      price: 0,
      size: builder.group({
        uk: 0,
        us: 0
      }),
      // colors: builder.array([
      //   builder.control("")
      // ]),

      // props: builder.array([
      //   builder.group({
      //     property: "",
      //     value: ""
      //   })
      // ])

      colors: builder.array([]),
      props: builder.array([])
    })

    this.addColor()
    this.addProperty()
  }

  log() {
    console.log(this.form)
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl
  }

  get category(): FormControl {
    return this.form.get('category') as FormControl
  }

  get colors(): FormArray {
    return this.form.get('colors') as FormArray
  }

  addColor() {
    this.colors.push(this.builder.control(""))
  }

  removeColor(index: number) {
    this.colors.removeAt(index)
    if (!this.colors.length) {
      this.addColor()
    }
  }

  get props(): FormArray{
    return this.form.get('props') as FormArray
  }

  addProperty(){
    this.props.push(this.builder.group({
      property: "",
      value: ""
    }))
  }

  removeProperty(index: number){
    this.props.removeAt(index)
    if(!this.props.length){
      this.addProperty()
    }
  }

}
