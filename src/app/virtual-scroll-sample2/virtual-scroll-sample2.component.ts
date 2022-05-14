import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll-sample2',
  templateUrl: './virtual-scroll-sample2.component.html',
  styleUrls: ['./virtual-scroll-sample2.component.css']
})
export class VirtualScrollSample2Component implements OnInit {
  items = Array.from({length: 100}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit(): void {
  }

  clickLikeEvent(item: string){
    alert('click ' + item)
  }

}
