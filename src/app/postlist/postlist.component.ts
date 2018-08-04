import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: number;
  @Input() postDontLove: number;
  @Input() postLovelts: number;
  @Input() postCreated_date: number;
  constructor() { }
  ngOnInit() {
  }
  onLove() {
    this.postLove ++;
  }
  onDontLove() {
    this.postDontLove ++;
  }
  calculLovelts() {
    this.postLovelts = this.postLove - this.postDontLove;
  }
}
