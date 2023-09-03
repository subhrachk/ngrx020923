import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogList, BlogModel } from 'src/app/shared/store/blogs/blog.model';
import { Observable } from 'rxjs';
import { getblogs } from 'src/app/shared/store/blogs/blog.selector';
import { MatDialog } from '@angular/material/dialog';
import { NewblogComponent } from './newblog/newblog.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  bloglist$ !: Observable<BlogModel[]>;

  constructor(private store : Store<{Blogs : BlogList}>,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.bloglist$ = this.store.select(getblogs);
    this.store.select(getblogs).subscribe(data => console.log(data));
  }

  AddBlog() {
    this.dialog.open(NewblogComponent,{width: '40%'});
  }

}
