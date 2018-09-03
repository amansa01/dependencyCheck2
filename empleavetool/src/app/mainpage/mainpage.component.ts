import {Component,  OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {DetailsService} from '../details.service';

@Component({
  selector: 'main-page',
  templateUrl: './mainpage.html',
  styleUrls: ['./mainpage.css'],
  inputs: ['fName', 'lName', 'email:', 'contactNo', 'Gender']
})

export class MainPageComponent implements OnInit {

  public userDetails: any;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private loginService: LoginService, private loginservice: LoginService,
              private detailsService: DetailsService) {
  }

  ngOnInit() {
    this.detailsService.getDetails().then((details) => {
      this.userDetails = details;
    }).catch((error) => {
      console.log(error);
    });
  }

  public onClickLogout() {
    this.loginService.sessionClear();
    console.log('Session Clear Called');
    this.router.navigate(['']);
    window.sessionStorage.clear();
  };

  public onClickApplyLeave() {
    this.router.navigate(['/leaveapply']);
  };

  public onClickHistory() {
    this.router.navigate(['/history']);
  };

  public onClickCancel() {
    this.router.navigate(['/cancel']);
  };
}
