import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user: User;

  constructor( private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(parameters =>{
      console.log(parameters.id)
      if(parameters.id){
        this.userService.getSingleUser(parameters.id).subscribe(response=>{
          this.user = response.data;
        }, err =>{
          alert(err.error.error)
        });
      }
    });
   }

  ngOnInit() {
  }

}
