import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  @Input() nome: string = ''
  @Input() telefone: string = ''
  @Input() id?: number;
  @Input() avatar: string | ArrayBuffer = '';
}
