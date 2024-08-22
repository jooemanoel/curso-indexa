import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrls: ['./formulario-contato.component.css']
})
export class FormularioContatoComponent {

  contatoForm!: FormGroup;

  constructor(
    private service: ContatoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.carregarContato();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      obs: new FormControl('')
    });
  }

  obterControle(nome: string): FormControl {
    const control = this.contatoForm.get(nome);
    if (!control) {
      throw new Error(`Controle de formulário não encontrado: ${nome}`);
    }
    return control as FormControl;
  }

  carregarContato() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarContato(parseInt(id)).subscribe((contato) => {
        this.contatoForm.patchValue(contato);
      });
    }
  }

  salvarContato() {
    if (this.contatoForm.valid) {
      const novoContato = this.contatoForm.value;
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      novoContato.id = id ? parseInt(id) : null;
      this.service.salvarContato(novoContato).subscribe(() => {
        this.contatoForm.reset();
        this.router.navigateByUrl('/lista-contatos');
      });
    }
  }

  aoSelecionarArquivo(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.lerArquivo(file);
    }
  }

  lerArquivo(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        this.contatoForm.get('avatar')?.setValue(reader.result);
      }
    }
    reader.readAsDataURL(file);
  }

  cancelar() {
    this.router.navigateByUrl('/lista-contatos');
  }
}
