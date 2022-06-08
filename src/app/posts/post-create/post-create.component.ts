import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';

import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post.model';

import { PostsService } from '../posts.service';
import { interval } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, AfterViewInit {

  oPost: Post = {
    userId: 1,
    id: 11,
    title: "tit",
    body: "bod"
  };

  public MY_PREC: number = 0;
  titulo: string = 'Criando/Editando Post';
  lastPost: Post;
  posts: Post[] = [];
  textoSaving: string = "";
  processando: boolean = false;
  editando: boolean = false;
  inscricao: Subscription;

  @ViewChild('divProgress', { static: false, read: ElementRef }) divProgress: ElementRef;

  ngAfterViewInit() {

  }


  constructor(private postsService: PostsService, private router: Router) { }

  onDelete(id: number): void {
    this.onProcess();
    this.postsService.delete(id.toString()).subscribe(result => { });
  }

  onEdit(id: number): void {
    this.editando = true;
    this.onProcess();
    this.postsService.getPost(id).subscribe(result => {
      this.oPost = result;
    });
  }

  getLastId(): void {
    this.postsService.list().subscribe(result => {
      if (result.length > 0) {
        this.lastPost = result[result.length - 1];
        this.oPost.id = this.lastPost.id + 1;
      }
    });
  }

  ngOnInit(): void {
    this.list();
    this.getLastId();
  }

  list() {
    this.postsService.list().subscribe(result => {
      this.posts = result;
    });
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

  onProcess() {
    this.processando = true;
    this.MY_PREC = 0;
    const source = interval(20);

    this.inscricao = source.subscribe(result => {
      this.MY_PREC += 1;
      if (this.MY_PREC >= 100) {
        this.processando = false;
        this.list();
        this.inscricao.unsubscribe();
      }
    });
  }

  async onSubmit(formulario: Form): Promise<void> {
    this.onProcess();
    if (this.editando) {
      this.postsService.update(this.oPost, this.oPost.id.toString()).subscribe(async result => {
        this.getLastId();
        this.oPost.body = "";
        this.oPost.title = "";
        this.editando = false;
      });
    } else {
      this.postsService.create(this.oPost).subscribe(async result => {
        this.getLastId();
        this.oPost.body = "";
        this.oPost.title = "";
      });
    }
  }
}
