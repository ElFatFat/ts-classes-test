import { Adresse } from "./adresse";
import { Personne } from "./personne";
import { Enseignant } from "./enseignant";

let adresse1: Adresse = new Adresse("rue de Paris", "75000", "Paris");
let adresse2: Adresse = new Adresse("rue de Rome", "13000", "Marseille");
let adresse3: Adresse = new Adresse("rue de Londres", "59000", "Lille");
let adresse4: Adresse = new Adresse("rue de Madrid", "31000", "Toulouse");
let personne1: Personne = new Personne("Dupont", "Jean", adresse1);
let personne2: Personne = new Personne("Durand", "Paul", adresse2);

let liste: Array<Personne> = new Array<Personne>();
liste.push(personne1, personne2);

for (let personne of liste) {
    console.log(personne.getFullInfos());
}

let enseignant1: Enseignant = new Enseignant("Martin", "Luc", adresse3, "Maths", "Professeur");
let enseignant2: Enseignant = new Enseignant("Dubois", "Marc", adresse4, "Physique", "Professeur");

let liste2: Array<Enseignant> = new Array<Enseignant>();
liste2.push(enseignant1, enseignant2);

for (let enseignant of liste2) {
    console.log(enseignant.getFullInfos());
}