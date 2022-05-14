import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualScrollSampleComponent } from './virtual-scroll-sample/virtual-scroll-sample.component';
import { VirtualScrollSample2Component } from './virtual-scroll-sample2/virtual-scroll-sample2.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

const routes: Routes = [
  { path: 'virtualScroll', component: VirtualScrollSampleComponent },
  { path: 'virtualScroll2', component: VirtualScrollSample2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
