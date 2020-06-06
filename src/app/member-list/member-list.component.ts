import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../_services/cliente.service';
import { AlertifyService } from '../_services/alertify.service';
import { Cliente } from '../_models/cliente';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  clientes: Cliente[];
  totalRecordCount: number;
  selectedPage: number;
  recordsPerPage: number;

  constructor(private clienteService: ClienteService, private router: Router, private alertify: AlertifyService
    ) {
      this.totalRecordCount = 330;
      this.recordsPerPage = 10;
      this.selectedPage = 1;
    }

  ngOnInit() {
    this.loadClientes();
  }

  selectPage(page: number) {
    this.selectedPage = page;
    this.loadClientes();
  }

  loadClientes() {
  this.clienteService.getClientes(this.selectedPage).subscribe((entrada: any) => {
  this.totalRecordCount = entrada.count;
  this.clientes = entrada.data;
  }, error => {
    this.alertify.error(error);
  });

  }

  deleteCliente(cliente: Cliente): void {
    this.clienteService.deleteCliente(cliente.Id)
      .subscribe( data => {
        this.clientes = this.clientes.filter(u => u !== cliente);
      });
  }
  editarCliente(cliente: Cliente): void {
    this.router.navigate(['clientes/edit', cliente]);
  }
    addCliente(): void {
      this.router.navigate(['clientes/add']);
  }

  }
