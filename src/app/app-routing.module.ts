import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorFoundComponent } from './error-found/error-found.component';
import { CreateRoomComponent } from './room/room details/create-room/create-room.component';
import { JoinRoomComponent } from './room/room details/join-room/join-room.component';
import { RoomComponent } from './room/room.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: 'users', component: UserComponent},
  { path: 'user-avatar', component: UserAvatarComponent},
  { path: 'room', component: RoomComponent},
  { path: 'join-room', component: JoinRoomComponent},
  { path: 'create-room', component: CreateRoomComponent},
  { path: '**', component: ErrorFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserComponent, RoomComponent, UserAvatarComponent, JoinRoomComponent, CreateRoomComponent, ErrorFoundComponent];