import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/components/contato/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.component.html',
  styleUrls: ['./perfil-contato.component.css']
})
export class PerfilContatoComponent {
  contato: Contato = {
    id: 0,
    nome: '',
    avatar: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  };

  constructor(
    private service: ContatoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarContato(parseInt(id)).subscribe((contato) => {
        this.contato = contato;
      });
    }
  }

  excluir() {
    this.service.excluirContato(this.contato.id).subscribe(() => {
      this.router.navigateByUrl('/lista-contatos');
    });
  }
}
