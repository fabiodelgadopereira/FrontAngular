import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../_services/cliente.service';
import { AlertifyService } from '../_services/alertify.service';
import { Cliente } from '../_models/cliente';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
              private clienteService: ClienteService, private alertify: AlertifyService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      Nome: ['', Validators.required],
      Cidade: ['', Validators.required],
      Email: ['', Validators.required],
      Sexo: ['', Validators.required]
    });
  }
  AddCliente(): void {
    this.clienteService.addCliente(this.addForm.value)
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
