export class Users {
    idUser: number = 0;
    etat: number = 0;
    nom: string = "";
    prenom : string = "";
    email : string = "";
    telephone : string = "";
    photo : string = "";
    contacts : any;
}

// personne.model.ts
export class Personne {
    id: number;
    name: string;
    firstname: string;
    cin: number;
    job: string;
    path: string;
    age: number;
  
    constructor(id: number, name: string, firstname: string, cin: number, job: string, path: string, age: number) {
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.cin = cin;
      this.job = job;
      this.path = path;
      this.age = age;
    }
  }