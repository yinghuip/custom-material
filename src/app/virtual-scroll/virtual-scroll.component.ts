import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements AfterViewInit {
 
  @Input() data: any[] = [];
  @ContentChild('scrollItem') scrollItemTemplate: TemplateRef<any> | null = null; 
  @ContentChild('footer') footerTemplate: TemplateRef<any> | null = null; 
  @ContentChild('header') headerTemplate: TemplateRef<any> | null = null; 
  @ViewChild('scroller') scrollerElementRef: ElementRef<any> | null = null; 
  constructor() { 
    
  }

  ngAfterViewInit(): void {
    console.log(this.scrollerElementRef)
  }

}
