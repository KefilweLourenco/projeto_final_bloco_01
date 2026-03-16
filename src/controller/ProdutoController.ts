import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    listarTodos(): void {
        for(let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto != null) {
            buscaProduto.visualizar();
        }else
            console.log("\nO produto de ID: " + id + "não foi encontrado!");
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO produto de ID: " + produto.id +
            " foi cadastrado com sucesso!");
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nO produto de ID: " + produto.id +
                " foi atualizado com sucesso!");
        }else
            console.log("\nO produto de ID: " + produto.id +
                " não foi encontrado!");
    }
    
    public deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nO produto de ID: " + id +
                " foi apagado com sucesso!");
        }else
            console.log("\nO produto de ID: " + id +
                " não foi encontrado!");
    }

    public gerarId(): number {
        return ++ this.id;
    }

    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if(produto.id === id)
                return produto;
        }

        return null;
    }
    public buscarPorTitulo(titulo: string): void {

   let encontrado = false;

   for (let produto of this.listaProdutos) {

      if (produto.titulo.toLowerCase().includes(titulo.toLowerCase())) {
         produto.visualizar();
         encontrado = true;
      }

   }

   if (!encontrado) {
      console.log("\nNenhum livro encontrado com esse título.");
   }

   }
}