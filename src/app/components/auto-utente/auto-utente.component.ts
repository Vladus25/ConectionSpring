import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpringConnService } from 'src/app/services/spring-conn.service';

@Component({
  selector: 'app-auto-utente',
  templateUrl: './auto-utente.component.html',
  styleUrls: ['./auto-utente.component.css']
})
export class AutoUtenteComponent {
  id!: any;
  cars!: any;

  constructor(private route: ActivatedRoute, private connection: SpringConnService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.connection.getAutoUser(this.id).subscribe(data => {
        this.cars = data;
        console.log(this.cars);
      });
    });
  }


}
