import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  public param;
  public result;

  ngOnInit() {
    
    this.param = history.state;
    this.result = JSON.stringify(this.param)
    console.log(this.result);
    
  }

}
