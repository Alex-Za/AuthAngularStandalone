import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../global/services/auth.service";
import {BehaviorSubject} from "rxjs";
import {Emitters} from "../global/emitters";
import {RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated$ = new BehaviorSubject<boolean>(false)

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe((auth: boolean) => {
      this.authenticated$.next(auth)
    })
  }

  logout(): void {
    this.authService.logout()
    Emitters.authEmitter.next(false)
  }

}
