import { Adresse } from "./adresse";
import { Personne } from "./personne";

export class Enseignant extends Personne{
    private specialite: string;
    private statut: string;
    constructor(nom: string, prenom: string, adresse: Adresse, specialite: string, statut: string){
        super(nom, prenom, adresse);
        this.specialite = specialite;
        this.statut = statut;
    }
    public getSpecialite(): string {
        return this.specialite;
    }
    public getStatut(): string {
        return this.statut;
    }
    public setSpec(spec: string): any {
        this.specialite = spec;
    }

    public setStatut(statut: string): any {
        this.statut = statut;
    }
    
    public getFullInfos(): string {
        return super.getFullInfos() + ", " + this.specialite + ", " + this.statut;
    }
}