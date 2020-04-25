import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { throwError } from 'rxjs';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: any[];

    constructor(private service: PostService) {}

    ngOnInit() {
        this.service.getAll().subscribe((posts) => (this.posts = posts));
    }

    createPost(titleInput: HTMLInputElement) {
        let post = {
            title: titleInput.value
        };
        this.posts.splice(0, 0, post);

        titleInput.value = '';

        this.service.create(post).subscribe(
            (newPost) => {
                post['id'] = newPost.id;
                console.log(newPost);
            },
            (error: AppError) => {
                this.posts.splice(0, 1);

                if (error instanceof BadInput) {
                    alert('Title already exists');
                } else {
                    throwError(error);
                }
            }
        );
    }

    updatePost(post) {
        this.service.update(post).subscribe((updatedPost) => {
            console.log(updatedPost);
        });
    }

    deletePost(post) {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(post.id).subscribe(null, (error: AppError) => {
            this.posts.splice(index, 0, post);
            if (error instanceof NotFoundError) {
                alert('This post has already been deleted.');
            } else {
                throwError(error);
            }
        });
    }
}
