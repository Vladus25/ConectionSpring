import { Component } from '@angular/core';
import { SpringConnService } from 'src/app/services/spring-conn.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {
  cars: any;

  constructor(private connection: SpringConnService) { }

  ngOnInit(): void {
    this.connection.getAllCars().subscribe(data => {
      this.cars = data;
    });
  }
}
