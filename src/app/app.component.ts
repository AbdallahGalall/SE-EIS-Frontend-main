import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TableNavComponent } from './table-nav/table-nav.component';
import { TablesComponent } from './tables/tables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,AdminComponent,SideBarComponent,TableNavComponent,TablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EIS-Front';
}
