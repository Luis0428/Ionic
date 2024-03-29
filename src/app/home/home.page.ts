import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUsers().subscribe(response =>{
      this.users = response.data
    });
  }

  goToUser(id:number){
    this.router.navigate(['user',id])
  }
}
