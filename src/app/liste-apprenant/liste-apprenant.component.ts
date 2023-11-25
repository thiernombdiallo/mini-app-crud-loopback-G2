import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-liste-apprenant',
  templateUrl: './liste-apprenant.component.html',
  styleUrls: ['./liste-apprenant.component.css']
})
export class ListeApprenantComponent {

  data: any [] = [];

  constructor(private dataService: AuthentificationService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((result) => {
      this.data = result;
      console.log()
      // Utilisez les données récupérées comme nécessaire
    });
  }
  modifierpersonne(){
    
  }
}

