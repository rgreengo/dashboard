import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { Comment } from '../comment.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detalhe',
  templateUrl: './post-detalhe.component.html',
  styleUrls: ['./post-detalhe.component.css']
})
export class PostDetalheComponent implements OnInit {

  id: number = 0;
  post: Post;
  comments: Comment[];
  inscricao : Subscription;
  titulo: string = 'Post Detalhe';

  constructor(private route: ActivatedRoute,
    private postsService: PostsService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params : any) => {
      this.id = params.id;
      if(this.id != undefined){
        this.postsService.getPost(this.id).subscribe(dados => {
          this.post = dados;
        });

        // this.postsService.getComments(this.id).subscribe(comments => {
        //   this.comments = comments;
        //   console.log(comments);
        // });
      }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
