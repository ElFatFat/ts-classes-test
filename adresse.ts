export class Adresse {
    private rue: string;
    private cp: string;
    private ville: string;

    constructor(rue: string, cp: string, ville: string) {
        this.rue = rue;
        this.cp = cp;
        this.ville = ville;
    }

    public getRue(): string {
        return this.rue;
    }
    
    public setRue(rue: string): any {
        this.rue = rue;
    }

    public getCp(): string {
        return this.cp;
    }

    public setCp(cp: string): any {
        this.cp = cp;
    }

    public getVille(): string {
        return this.ville;
    }

    public setVille(ville: string): any {
        this.ville = ville;
    }

    public getFullAdress(): string {
        return this.rue + ", " + this.cp + ", " + this.ville;
    }
}