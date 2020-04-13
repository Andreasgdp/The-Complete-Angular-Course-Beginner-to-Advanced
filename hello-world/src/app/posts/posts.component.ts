import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: any[];

    constructor(private service: PostService) {}

    createPost(titleInput: HTMLInputElement) {
        let post = {
            title: titleInput.value
        };
        titleInput.value = '';
        this.service.createPost(post).subscribe(
            (response) => {
                post['id'] = response.json().id;
                this.posts.splice(0, 0, post);
                console.log(response.json());
            },
            (error: Response) => {
                if (error.status === 400) {
                    alert('Title already exists');
                } else {
                    alert('An unexpected error occurred');
                    console.log(error);
                }
            }
        );
    }

    updatePost(post) {
        this.service.updatePost(post).subscribe(
            (response) => {},
            (error) => {
                alert('An unexpected error occurred');
                console.log(error);
            }
        );
    }

    deletePost(post) {
        this.service.deletePost(post.id).subscribe(
            (response) => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
            },
            (error: Response) => {
                if (error.status === 404) {
                    alert('This post has already been deleted.');
                } else {
                    alert('An unexpected error occurred');
                    console.log(error);
                }
            }
        );
    }

    ngOnInit() {
        this.service.getPosts().subscribe(
            (response) => {
                this.posts = response.json();
            },
            (error) => {
                alert('An unexpected error occurred');
                console.log(error);
            }
        );
    }
}
