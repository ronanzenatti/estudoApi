import { UsersService } from './../../servicos/users.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  public user: IUser;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.usersService.getUser(id).subscribe(dados => {
      this.user = dados['data'];
    });
  }

}
