import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  constructor(
    protected override http: HttpClient
  ) {
    super(http);
    this.setController('posts');
  }

}
