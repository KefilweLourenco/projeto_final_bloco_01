import { Produto } from "./Produto";

export class Ebook extends Produto {

    private _tamanhoArquivo: number;

    constructor(id: number, tipo: number, titulo: string, autor: string, preco: number, tamanhoArquivo: number) {
        
        super(id, tipo, titulo, autor, preco);
        this._tamanhoArquivo = tamanhoArquivo;
    }

    public get tamanhoArquivo() {
        return this._tamanhoArquivo;
    }
    public set tamanhoArquivo(tamanhoArquivo: number) {
        this._tamanhoArquivo = tamanhoArquivo;
    }
    
    public visualizar(): void {
        super.visualizar();
        console.log("Tamanho do arquivo: " + this._tamanhoArquivo + " MB");
    }


}