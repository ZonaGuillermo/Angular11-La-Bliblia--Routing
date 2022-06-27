import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  countDown: number = 3;
  interval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.countDown > 1) {
        this.countDown--;
      } else {
        clearInterval(this.interval);
        this.router.navigate(['home']);
      }
    }, 1000);

  }

}
