import { Component } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  name = "Tejaa";
  
  onCreate() {
    alert("Created");
  }
}
