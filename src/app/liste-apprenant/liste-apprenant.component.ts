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
export class ListeApprenantComponent implements OnInit {
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
  tabPersonne:any; 

  // dataIdToDelete: string = '1'; // ID de l'élément à supprimer, à adapter selon ton cas
 



  constructor(private dataService: AuthentificationService,
     private httpclient : HttpClient ) {}

  ngOnInit() {
    this.dataService.getData().subscribe((result) => {
      this.personnes = result;
      console.log(this.personnes)
      // Utilisez les données récupérées comme nécessaire
    });
    
      // On récupère le tableau d'objets dans le localstorage
      localStorage.setItem("Personnes", JSON.stringify(this.listepersonne));
      this.tabPersonne = JSON.parse(localStorage.getItem("Personnes") || "[]");
      if (!localStorage.getItem("Personnes")) {
        
      }
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
        // idContact: this.listepersonne + 1,
        name: this.name,
        firstname: this.firstname,
        cin: this.cin,
        job: this.job,
        path: this.path,
        age : this.age,
         etatPersonne: 1,
          
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
      localStorage.setItem("Personnes", JSON.stringify(this.listepersonne));
    //  return this.http.post<any>(`${this.apiUrl}/personnes`, personnes);
    //   console.log(this.apiUrl);
      

      console.log(this.personnes);
      // console.log(this.userConnect);
      // console.log(this.tabUsers);
    }

    // supprimerPersonne(personnes:any){
    //   Swal.fire({
    //     title: "Etes-vous sur???",
    //     text: "Vous allez supprimer le contact",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Oui, je supprime!"
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       personnes.etatPersonne = 0;
    //       // On met à jour le tableau qui est stocké dans le localStorage 
    //       // localStorage.setItem("Users", JSON.stringify(this.tabUsers));
    //       this.verifierChamps("personnes supprimer!", "", "success");     
          
    //     }
    //   });
    //   // alert(paramContact.etatContact);
      
    // }
  
    // supprimerPersonne(): void {
    //   this.dataService.supprimerPersonne(this.dataIdToDelete).subscribe(deleted => {
    //     console.log('Donnée supprimée avec succès');
    //     // Réalise des actions nécessaires après la suppression
    //   });
    // }
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


  

  // Methode supprimer utlisateur 
  supprimerPersonne(personnes:any){
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez supprimer le contact",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, je supprime!"
    }).then((result) => {
      if (result.isConfirmed) {
        personnes.etatpersonne = 0;
        // // On met à jour le tableau qui est stocké dans le localStorage 
        // localStorage.setItem("Users", JSON.stringify(this.tabUsers));
        // this.verifierChamps("Contact supprimer!", "", "success");     
        
      }
    });
    // alert(paramContact.etatContact);
    
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


  }
}