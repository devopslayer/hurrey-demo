import { Component } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent {
  name = "Tejaa";
  // avatar: boolean = false;
  // count: number = 0;

  onSelect() {
    console.log("Disabled");
  }

}
