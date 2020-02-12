import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MovieTitleComponent } from './movie-title/movie-title.component';
import { MovieTitlePipe } from './movie-title.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
    declarations: [
        AppComponent,
        SignupFormComponent,
        FavoriteComponent,
        MovieTitleComponent,
        MovieTitlePipe,
        LikeComponent,
        ZippyComponent,
        NewCourseFormComponent
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
