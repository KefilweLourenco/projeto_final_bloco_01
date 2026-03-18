export abstract class Produto {

    private _id: number;
    private _tipo: number;
    private _titulo: string;
    private _autor: string;
    private _preco: number;

    constructor(id: number, tipo: number, titulo: string, autor: string, preco: number) {
        this._id = id;
        this._tipo = tipo;
        this._titulo = titulo; 
        this._autor = autor;
        this._preco = preco;
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get tipo() {
        return this._tipo;
    }
    public set tipo(tipo: number) {
        this._tipo
    }
    public get titulo() {
        return this._titulo;
    }
    public set titulo(titulo: string) {
        this._titulo = titulo;
    }
    public get autor() {
        return this._autor;
    }
    public set autor(autor: string) {
        this._autor = autor;
    }
    public get preco() {
        return this._preco;
    }
    public set preco(preco: number) {
        this._preco = preco;
    }

    public visualizar(): void {
        let tipo: string = "";
        switch(this._tipo) {
            case 1:
                tipo = "Livro Físico";
                break;
            case 2: 
                tipo = "Ebook";
                break;
        }

        console.log("\n\n*****************************************");
        console.log("Dados do Produto: ");
        console.log("*********************************************");
        console.log("ID do Produto: " + this._id);
        console.log("Tipo do Produto: " + tipo);
        console.log("Título: " + this._titulo);
        console.log("Autor: " + this._autor);
        console.log("Preço: R$ " + this._preco.toFixed(2));
    }

}