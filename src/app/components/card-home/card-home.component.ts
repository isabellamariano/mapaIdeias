import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/services/categoria.service';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit {

  cate: any;
  constructor(
    private categoria: CategoriaService
    ) { }

  ngOnInit() {
    this.categoria.getCategorias().then(d => {
      this.cate = d;
    });
  }
}
