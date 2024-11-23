import { Component } from '@angular/core';
import { GraphComponent } from "../../components/graph/graph.component";

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [GraphComponent],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent {

}
