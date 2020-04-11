import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: any[];
    private url = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: Http) {
        http.get(this.url).subscribe((response) => {
            this.posts = response.json();
        });
    }

    createPost(titleInput: HTMLInputElement) {
        let post = {
            title: titleInput.value
        };
        titleInput.value = '';
        this.http.post(this.url, JSON.stringify(post)).subscribe((response) => {
            post['id'] = response.json().id;
            this.posts.splice(0, 0, post);
            console.log(response.json());
        });
    }

    updatePost(post) {
        this.http
            .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
            .subscribe((response) => {});
    }

    ngOnInit() {}
}
