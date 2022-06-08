import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  public MY_PREC: number = 0;
  concluido: boolean = false;
  titulo: string = 'Lista Posts';

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.list().subscribe((dados) => {
      this.posts = dados;
      // if (dados.type == HttpEventType.Response) {
      //   //console.log(dados.body);
      //   this.concluido = true;
      // } else if (dados.type == HttpEventType.DownloadProgress) {
      //   this.MY_PREC = Math.round(100 * dados.loaded / dados.total);
      // }
    });
  }

}
