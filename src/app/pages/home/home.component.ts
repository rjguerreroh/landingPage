import { Component, OnInit } from '@angular/core';
import { CardImgComponent } from "../../components/card-img/card-img.component";
import { BreadcrumbsComponent } from "../../shared/breadcrumbs/breadcrumbs.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardImgComponent, BreadcrumbsComponent, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private _dataService: DataService){}
  dataCard!: any[];

  ngOnInit(): void {
    this.dataCard = this._dataService.getCardData();
  }

}
