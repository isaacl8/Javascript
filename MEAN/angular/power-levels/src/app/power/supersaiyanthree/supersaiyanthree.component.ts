import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit {


  @Input() p_level;

  constructor() { }

  ngOnInit() {
  }

}
