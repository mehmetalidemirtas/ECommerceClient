import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaederComponent } from './heaeder/heaeder.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaederComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaederComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
