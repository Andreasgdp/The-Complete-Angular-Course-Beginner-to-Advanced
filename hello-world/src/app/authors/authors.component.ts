import { AuthorsService } from "./../authors.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-authors",
  templateUrl: "./authors.component.html",
  styleUrls: ["./authors.component.scss"]
})
export class AuthorsComponent implements OnInit {
  title: string = 'This is the authors yo!';
  authors: Array<string>;
  numAuthors: number;

  constructor(service: AuthorsService) {
    let authorList = service.getAuthors();
    this.numAuthors = authorList.length;
    this.authors = authorList;
  }

  ngOnInit() {}
}
