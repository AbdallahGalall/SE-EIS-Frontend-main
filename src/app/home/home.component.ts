import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
