import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {Project} from "../../class/project";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: string = "";
  projects = new Array(Project);

  constructor(private authService: AuthService,private router: Router) {

  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(){
    this.token = localStorage.getItem("token");
    this.authService.getProjects(this.token).subscribe((response) => {
      this.projects = response;
      console.log(this.projects);
    });
  }

}
