import { UsersService } from './../../servicos/users.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public users: IUser[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(dados => {
      console.log(dados);
      this.users = dados['data'];
    });
  }

}
