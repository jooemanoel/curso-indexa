import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContatoComponent } from './perfil-contato.component';

describe('PerfilContatoComponent', () => {
  let component: PerfilContatoComponent;
  let fixture: ComponentFixture<PerfilContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilContatoComponent]
    });
    fixture = TestBed.createComponent(PerfilContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
