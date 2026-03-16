import { Produto } from "./Produto";

export class LivroFisico extends Produto {

    private _paginas: number;

    constructor(id: number, tipo: number, titulo: string, autor: string, preco: number, paginas: number) {
        
        super(id, tipo, titulo, autor, preco);
        this._paginas = paginas;
    }
    public get paginas(){
        return this._paginas;
    }
    public set paginas(paginas: number) {
        this._paginas = paginas;
    }
    public visualizar(): void {
        super.visualizar();
        console.log("Número de páginas: " + this._paginas);
    }

}