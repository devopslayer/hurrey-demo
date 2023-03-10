import { Component } from '@angular/core';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent {
  name = "Tejaa";

  onJoin() {
    alert("Joined");
  }
}
