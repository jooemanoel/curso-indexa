import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  @Input() titulo: string = '';
  @Input() bannerScr: string = '';
  @Input() telaInicial: boolean = false;
}
