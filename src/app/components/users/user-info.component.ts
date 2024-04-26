import { Component, OnInit } from '@angular/core';
import { NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css'],
    standalone: true,
    imports: [NgFor, FormsModule] 
})
export class UserInfoComponent implements OnInit {

    userId: number = 0;
    user: any;
    
    constructor(private route: ActivatedRoute, private userService: UserService){}
    
    ngOnInit(): void {
        this.route.params.subscribe(params => {
        this.userId = +params['id']; 
        this.getUserData(); // 
        });
    }
    
    getUserData(): void {
        console.log(this.userId);
        this.userService.getUserById(this.userId)
        .subscribe(data => {
            this.user = data; 
        });
    }

}