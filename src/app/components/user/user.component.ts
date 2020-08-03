import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // properties
  user: User;

  //   methods
  constructor() {}
  ngOnInit() {
    this.user = {
      firstName: 'atul',
      lastName: 'beniwal',
    };
  }
}

//   template: `<h2>Atul beniwal</h2>`,
//   styles: [
//     `
//       h1 {
//         color: blue;
//       }
//     `,
//   ],
