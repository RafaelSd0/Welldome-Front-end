import { Component } from '@angular/core';
import { GraphComponent } from "../../components/graph/graph.component";
import { FormComponent } from "../../components/form/form.component";
@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [GraphComponent, FormComponent],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent {

}
