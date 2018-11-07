import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  categories = ['Adam', 'Eve'];
  activeCategory = this.categories[0];

  eves: any;
  adams: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersByCategory('eve').subscribe(
      (data) => {
        console.log(data);
        this.eves = data.body;
      }
    );
    this.userService.getUsersByCategory('adam').subscribe(
      (data) => this.adams = data.body
    );
  }

}
