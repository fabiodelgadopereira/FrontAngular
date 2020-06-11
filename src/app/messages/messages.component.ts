import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../_services/contato.service';
import { AlertifyService } from '../_services/alertify.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
              private contatoService: ContatoService, private alertify: AlertifyService) { }

    addForm: FormGroup;

    ngOnInit() {
      this.addForm = this.formBuilder.group({
        Nome: ['', Validators.required],
        Mensagem: ['', Validators.required],
        Email: ['', Validators.required]
      });
    }

    enviar(): void {
      console.log('teste');
      this.contatoService.enviar(this.addForm.value)
      .subscribe( data => {
        this.addForm.reset();
        this.alertify.success('Mensagem enviada com sucesso!');
      }, error => {
        this.alertify.error(error);
      });
  }
    }


