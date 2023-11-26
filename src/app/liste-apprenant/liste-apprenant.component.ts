import { Component,OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { HttpClient } from '@angular/common/http';
// import { Personne } from 'test-crud-loopback/src/models';


@Component({
  selector: 'app-liste-apprenant',
  templateUrl: './liste-apprenant.component.html',
  styleUrls: ['./liste-apprenant.component.css']
})
export class ListeApprenantComponent {
// personnes: any;
objectPersonne: any;
listepersonne: any;
modifierUtilisateur(personnes: any) {
throw new Error('Method not implemented.');
}

  personnes: any [] = [];


  constructor(private dataService: AuthentificationService,
     private httpclient : HttpClient ) {}

  ngOnInit() {
    this.dataService.getData().subscribe((result) => {
      this.personnes = result;
      console.log(this.personnes)
      // Utilisez les données récupérées comme nécessaire
    });
    
  }

}

// export class ListeApprenantComponent implements OnInit {
//   data?: Personne[];
//   objetAmodifier!: Personne;
//   personnes!: Personne;
// // personnes: Personne;

//   constructor(private authService: AuthentificationService) {}

//   ngOnInit(): void {
//     this.loadData();
//   }

//   loadData(): void {
//     this.authService.getData().subscribe(
//       (data: Personne[]) => {
//         this.data = data;
//       },
//       (error) => {
//         console.error('Une erreur s\'est produite lors du chargement des données :', error);
//       }
//     );
//   }

//   modifierUtilisateur(personne: Personne): void {
//     this.objetAmodifier = personne;
//     // Réinitialiser le formulaire ou effectuer d'autres actions si nécessaire
//   }

//   validerModification(): void {
//     if (this.objetAmodifier) {
//       this.authService.modifierUtilisateur(this.objetAmodifier).subscribe(
//         () => {
//           console.log('Utilisateur modifié avec succès.');
//           // Réinitialiser la variable objetAmodifier et effectuer d'autres actions si nécessaire
//         },
//         (error) => {
//           console.error('Une erreur s\'est produite lors de la modification de l\'utilisateur :', error);
//         }
//       );
//     }
//   }
// }

