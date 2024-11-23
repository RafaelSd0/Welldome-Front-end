import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [TableModule, CommonModule, FormComponent],
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent  {
  products = [
    { code: '001', name: 'Product A', category: 'Category 1', quantity: 100 },
    { code: '002', name: 'Product B', category: 'Category 2', quantity: 200 },
  ];



  // pegar os dados da api e transformar em um array de objetos
}
