import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { GraphsComponent } from "./pages/graphs/graphs.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NotificationPageComponent } from "./pages/notification-page/notification-page.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, GraphsComponent, FooterComponent, NotificationPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welldome';

}
