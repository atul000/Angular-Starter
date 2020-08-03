import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enabledAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;
  currentClasses = {};
  currentStyle = {};

  constructor(private dataService: UserService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
    });

    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });

    this.setCurrentClasses();

    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enabledAdd,
      'big-text': this.showExtended,
    };
  }

  setCurrentStyles() {
    this.currentStyle = {
      'padding-top': this.showExtended ? '0' : '70px',
      'font-size': this.showExtended ? '' : '50px',
    };
  }

  // events
  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('form is invalid');
    } else {
      console.log(value);
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.dataService.addUser(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.target.value);
  }
}
