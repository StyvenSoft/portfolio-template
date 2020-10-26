import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [];

  constructor( private http: HttpClient ) {
    this.loadProjects();
   }

   private loadProjects() {
    this.http.get('https://portfolio-tem.firebaseio.com/projects_idx.json')
      .subscribe( (resp: Project[]) => {
        this.projects = resp;
      });
   }
}
