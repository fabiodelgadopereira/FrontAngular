import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../_services/cliente.service';
import { AlertifyService } from '../../_services/alertify.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
              private clienteService: ClienteService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  addForm: FormGroup;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    this.addForm = this.formBuilder.group({
      Id: [params.Id, Validators.required],
      Nome: [params.Nome, Validators.required],
      Cidade: [params.Cidade, Validators.required],
      Email: [params.Email, Validators.required],
      Sexo: [params.Sexo, Validators.required]
    });
  } );
  }

  loadClientes(id: number) {
  }
  EditCliente(): void {
    this.clienteService.editCliente(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['clientes']);
    }, error => {
      this.alertify.error(error);
    });
}
cancel() {
  this.router.navigate(['clientes']);
 }

}
