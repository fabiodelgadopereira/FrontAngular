import { Component, OnInit } from '@angular/core';
import { HttpRequest, HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
  };

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  baseUrl = environment.apiUrl;
  public progress: number;
  public message: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  upload(files) {
    if (files.length === 0) {
      return;
    }
    const formData = new FormData();

    for (let file of files) {
      formData.append(file.name, file );
    }

    const uploadReq = new HttpRequest('POST', this.baseUrl + 'FileUpload', formData, httpOptions );

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      }
      else if (event.type === HttpEventType.Response) {
        this.message = event.body.toString();
 }
    });
  }
}
