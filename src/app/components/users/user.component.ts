import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { NgFor } from '@angular/common';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    standalone: true,
    imports: [NgFor]
})
export class UserComponent implements OnInit {

    users: UserInterface [] = [];
    
    
    constructor(private userService: UserService) { }
    
    
    ngOnInit(): void {
    this.getUsers()
    };
    getUsers() {
        this.userService.getUsers().subscribe({
        next: (result) => {
            this.users = result
        },
        error: (error) => {
            console.log(error);
        }
        })
    }
}
