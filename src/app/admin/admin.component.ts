import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { TableNavComponent } from '../table-nav/table-nav.component';
import { TablesComponent } from '../tables/tables.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule,HeaderComponent,SideBarComponent,TableNavComponent,TablesComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
