import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.scss"]
})
export class LikeComponent implements OnInit {
  @Input("likesCount") likeCount: number;
  @Input("isActive") isActive: boolean;
  @Output("change") change = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    if (!this.isActive) {
      this.likeCount++
    } else {
      this.likeCount--
    }
    this.isActive = !this.isActive;
    this.change.emit();
  }
}
