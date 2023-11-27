import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Personne } from 'test-crud-loopback/src/models';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public apiUrl = 'http://[::1]:3000/personnes/'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // getData(): Observable<Personne[]> {
  //   return this.http.get<Personne[]>(this.apiUrl);
  // }


  // ajouterPersonne(personnes: any): Observable<any> {
  //   const url = {thisapiUrl}; // Assurez-vous de remplacer "id" par la propriété d'identification correcte de votre modèle d'utilisateur
  //   return this.http.post(url, personnes);
  //   console.log(personnes);
    


 

    ajouterPersonne(personnes: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/personnes`, personnes);
      console.log(this.apiUrl);
      
      // Utilise la méthode POST pour ajouter de nouvelles données
    
  }


  // axios.get('http://localhost:3000/api/v1/personnes')
  // .then(response => {
  //   const donnees = response.data;
  //   // Faites quelque chose avec les données récupérées, comme les afficher dans votre application
  // })
  // .catch(error => {
  //   console.error('Erreur lors de la récupération des données:', error);
  // });
  modifierPersonne(personnes: any): Observable<any> {
    const url = `${this.apiUrl}/${personnes.id}`; // Assurez-vous de remplacer "id" par la propriété d'identification correcte de votre modèle d'utilisateur
    return this.http.put(url, personnes);
    console.log(personnes);
    
   }
  supprimerPersonne(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/personnes/${id}`);
    console.log(id)
    // Utilise la méthode DELETE pour supprimer les données avec l'ID spécifié

  // modifierUtilisateur(personne: Personne): Observable<any> {
  //   const url = `${this.apiUrl}/${personne.id}`;
  //   return this.http.put(url, personne);
  // }

}
}
