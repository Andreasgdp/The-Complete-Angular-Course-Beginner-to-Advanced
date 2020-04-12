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
        this.service.createPost(post).subscribe((response) => {
            post['id'] = response.json().id;
            this.posts.splice(0, 0, post);
            console.log(response.json());
        });
    }

    updatePost(post) {
        this.service.updatePost(post).subscribe((response) => {});
    }

    deletePost(post) {
        this.service.deletePost(post).subscribe((response) => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
        });
    }

    ngOnInit() {
        this.service.getPosts().subscribe((response) => {
            this.posts = response.json();
        });
    }
}
