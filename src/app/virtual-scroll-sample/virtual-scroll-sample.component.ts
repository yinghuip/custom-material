import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll-sample',
  templateUrl: './virtual-scroll-sample.component.html',
  styleUrls: ['./virtual-scroll-sample.component.css']
})
export class VirtualScrollSampleComponent implements OnInit {
  items = Array.from({length: 50}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit(): void {
  }

}
