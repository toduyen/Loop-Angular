import { Component, OnInit } from '@angular/core';
import {DataUser} from "../Data/DataUser";

@Component({
  selector: 'loop-ngfor-comp-render',
  templateUrl: './comp-render.component.html',
  styleUrls: ['./comp-render.component.scss']
})
export class CompRenderComponent implements OnInit {

  Data = DataUser;

  constructor() { }
  ngOnInit(): void {
  }
}
