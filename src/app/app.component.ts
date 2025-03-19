import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this._router.navigateByUrl('/home');
  }

}
