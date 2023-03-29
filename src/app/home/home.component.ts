import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestService} from "../global/services/test.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  test(): void {
    this.testService.getTest().pipe(tap(console.log)).subscribe()
  }

}
