import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

/**
 * Base service for all other services
 * Where
 * - W = Entity/Dto to Write (Default = any)
 * - R = Dto to Read (Default = W)
 * - L = Dto to List (Default = W)
 * - F = Dto to Filter (Default = W)
 */
@Injectable({
  providedIn: 'root',
})
export class BaseService<W = any, R = W, L = W, F = W> {
  protected baseUrl: string;
  protected controller: string = '';

  constructor(protected http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  protected setController(controller: string): void {
    this.controller = controller;
  }

  // Method get by filter F
  public getByFilter(filter: F): Observable<L[]> {
    return this.http.get<L[]>(this.getUrl(filter));
  }

  // Method get by id
  public getById(id: number): Observable<R> {
    return this.http.get<R>(this.getUrl(id));
  }


  private getQueryParams(params: any = {}): string {
    return (
      '?' + Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&')
    );
  }

  private getUrl(entity?: any, params?: any, suffixRoute?: string): string {
    let url = `${this.baseUrl}/${this.controller}/`;
    if (entity?.id) url += entity?.id || '';
    if (suffixRoute) url +='/' + suffixRoute;
    url += this.getQueryParams(params);
    return url;
  }
}
