import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allClient: Client[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private clientService: ClientService) {}
  ngOnInit(): void {
     this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
  get() {
    this.clientService.getAll().subscribe((data) => {
      this.allClient = data;
      console.log("data=",data);
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.clientService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allClient = this.allClient.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}

