import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  total: any = 0
  arr = []
  num = 1
  sum = 0
  data: any = [
    { name: "Potato", quantity: 1, price: 100 },
    { name: 'Tomato', quantity: 1, price: 200 },
    { name: 'Ginger', quantity: 1, price: 150 },
    { name: 'Cauliflower', quantity: 1, price: 300 }
  ]
  constructor() { }

  ngOnInit(): void {
    this.data.map((elem) => {
      this.total = this.total + elem.price
    })
  }
  onAddData(myForm) {
    if (myForm.controls.proName.value == null || myForm.controls.proName.value == '' || myForm.controls.proPrice.value == null || myForm.controls.proPrice.value == '') {
      return alert("please fill up the form")
    }
    this.data.push({ name: myForm.controls.proName.value, quantity: 1, price: myForm.controls.proPrice.value })
    this.total = this.total + myForm.controls.proPrice.value
  }
  increase(detail) {
    this.num += 1
    detail.quantity+= 1
    this.total += detail.price
  }
  decreaseItem(detail) {
    if (detail.quantity !== 1) {
      detail.quantity -=   1
      this.total -= detail.price
    }
  }

  deleteItem(i, detail) {
    this.data.splice(i, 1)
    this.total = this.total - detail.price * detail.quantity
  }
}