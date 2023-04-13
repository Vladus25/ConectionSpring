import { Component, OnInit } from '@angular/core';
import { SpringConnService } from 'src/app/services/spring-conn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent{
  users: any;

  constructor(private connection: SpringConnService) { }

  ngOnInit(): void {
    this.connection.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Sei sicuro di voler eliminare questo utente?')) {
      this.connection.deleteUser(userId).subscribe();
    }
  }


}
