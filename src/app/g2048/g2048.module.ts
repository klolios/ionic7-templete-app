import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';  // Изменено на forChild()
import { G2048RoutingModule } from './g2048-routing.module'; 
import { G2048Component } from './g2048.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),  // Используем forChild() для дочерних модулей
    G2048RoutingModule  
  ],
  declarations: [G2048Component],
  exports: [G2048Component]
})
export class G2048Module {}