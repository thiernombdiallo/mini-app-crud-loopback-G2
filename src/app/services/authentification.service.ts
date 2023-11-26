import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Personne } from 'test-crud-loopback/src/models';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private apiUrl = 'http://[::1]:3000/personnes/'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // getData(): Observable<Personne[]> {
  //   return this.http.get<Personne[]>(this.apiUrl);
  // }

  modifierUtilisateur(personnes: any): Observable<any> {
    const url = `${this.apiUrl}/${personnes.id}`; // Assurez-vous de remplacer "id" par la propriété d'identification correcte de votre modèle d'utilisateur
    return this.http.put(url, personnes);
  }

  // modifierUtilisateur(personne: Personne): Observable<any> {
  //   const url = `${this.apiUrl}/${personne.id}`;
  //   return this.http.put(url, personne);
  // }

}

