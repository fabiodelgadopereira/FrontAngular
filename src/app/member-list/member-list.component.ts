import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../_services/cliente.service';
import { AlertifyService } from '../_services/alertify.service';
import { Cliente } from '../_models/cliente';

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

  constructor(private clienteService: ClienteService, private alertify: AlertifyService
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
  console.log(this.selectedPage);
  this.clienteService.getClientes(this.selectedPage).subscribe((clientes: Cliente[]) =>{
  this.clientes = clientes;
  }, error => {
    this.alertify.error(error);
  });

  }

  deleteCliente(cliente: Cliente): void {
    console.log(cliente.id);
    this.clienteService.deleteCliente(cliente.id)
      .subscribe( data => {
        this.clientes = this.clientes.filter(u => u !== cliente);
      });
  }

  }
