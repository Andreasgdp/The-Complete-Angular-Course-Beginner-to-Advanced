import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { MovieTitleComponent } from './movie-title/movie-title.component';
import { MovieTitlePipe } from './movie-title.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [AppComponent, FavoriteComponent, MovieTitleComponent, MovieTitlePipe, LikeComponent, ZippyComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
