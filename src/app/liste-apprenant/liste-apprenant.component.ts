import { Component,OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
// import { Personne } from 'test-crud-loopback/src/models';


@Component({
  selector: 'app-liste-apprenant',
  templateUrl: './liste-apprenant.component.html',
  styleUrls: ['./liste-apprenant.component.css']
})
export class ListeApprenantComponent {
// personnes: any;
objectPersonne: any;
personneModifier:any;
listepersonne: any;
firstname: any;
path: any;
job: any;
cin: any;
  name: any;
  age: any;
// modifierUtilisateur(personnes: any) {
// throw new Error('Method not implemented.');
// }

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


  chargerInfosPersonne(personnes:any){
    this.personneModifier = personnes;
    this.name = personnes.name;
    this.firstname = personnes.firstname;
    this.cin = personnes.cin;
    this.job = personnes.job;
    this.path = personnes.path;
    this.age= personnes.age;
  }
  

  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  viderChapmsPersonne(){
    this.name = "",
    this.firstname = "",
    this.cin = "",
    
    this.job = "",
    this.path = "",
    this.age = ""


  }

  ajouterPersonne(){
 
    // Premiere vérification avec sweetalert 
    if(this.name== "" || this.firstname== "" || this.cin == "" || this.job == "" || this.path == "" || this.age==""){
      this.verifierChamps("Erreur!", "Vueillez renseigner les champs", "error");
    }

   
    // else{
    //   // On vérifie si le tableau n'est pas vide 
    //   if(this.personnes.length){
    //     console.warn("taille du tab");
    //      this.id = this.personnes[this.personnes.length -1].idContact;
    //     console.log(this.idLastContact)
    //   }
    //   else {
    //     this.idLastContact = 0;
    //     console.warn("idLastUser = 0")
    //   }
      // Création de l'objet contact 
      let listepersonne= {
        // idContact: this.idLastContact + 1,
        name: this.name,
        firstname: this.firstname,
        emailContact: this.cin,
        telephoneContact: this.job,
        descriptionContact: this.path,
          
      }

      // On ajoute l'objet dans la liste des contacts
      // console.log(this.id);
      this.personnes.push(listepersonne);

      // Ferme le popup si on click sur Ok 
      Swal.fire({
        title: "Felicitation!",
        text: "Contact créé avec succes",
        icon: "success",
      });
      // On vide les champs 
      this.viderChapmsPersonne();
      // On met à jour le tableau qui est stocké dans le localStorage 
      localStorage.setItem("Users", JSON.stringify(this.personnes));

      console.log(this.personnes);
      // console.log(this.userConnect);
      // console.log(this.tabUsers);
    }
  


 modifierPersonne(){
    this.personneModifier.name = this.name;
    this.personneModifier.firstname = this.firstname;
    this.personneModifier.job = this.job;
    this.personneModifier.path = this.path;
    this.personneModifier.age = this.age;
    

 
    // this.currentContact.updateAt = new Date();
    // La personne qui a modifier le contact
    // this.currentContact.updateBy = this.userConnect.email; 
    
    // On met à jour le tableau qui est stocké dans le localStorage 
    localStorage.setItem("Personne", JSON.stringify(this.personnes));
    // this.verifierChamps("Mofication réussie!", "", "success"); 
    // this.viderChapmsContact();
  } 
}
// export class ListeApprenantComponent implements OnInit {
//   data?: Personne[];
//   objetAmodifier!: Personne;
//   !: Personne;
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


