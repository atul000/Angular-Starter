import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();

  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {}

  addPost(title, body) {
    if (!title || !body) {
      alert('Please, add post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe((post) => {
        this.newPost.emit(post);
        // linking to newPost in post.comp.html
      });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe((post) => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}
