import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-title",
  templateUrl: "./movie-title.component.html",
  styleUrls: ["./movie-title.component.scss"]
})
export class MovieTitleComponent implements OnInit {
  movieTitle: string;
  title: string;

  constructor() {}

  ngOnInit() {}

  convert() {
    this.movieTitle = this.title;
  }
}
