import readlinesync = require("readline-sync");
import { LivroFisico } from "./src/model/LivroFisico";
import { Ebook } from "./src/model/Ebook";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {
    let produtos: ProdutoController = new ProdutoController();

    let opcao: number;
    let id: number;
    let tipo: number;
    let paginas: number;
    let tamanhoArquivo: number;
    let preco: number;
    let titulo: string;
    let autor: string;

    const tiposLivros: Array<string> = ["Livro Fisico", "Ebook"];

    while (true) {
        console.clear();

        console.log("***************************************************");
        console.log("*      📚 LIVRARIA DIGITAL GENERATION 📚          *");
        console.log("***************************************************");
        console.log("* 1 - Cadastrar Livro                             *");
        console.log("* 2 - Listar Livros                               *");
        console.log("* 3 - Buscar Livro por ID                         *");
        console.log("* 4 - Atualizar Livro                             *");
        console.log("* 5 - Deletar Livro                               *");
        console.log("* 6 - Buscar Livro por Título                     *");
        console.log("* 7 - Sair                                        *");
        console.log("***************************************************");

        opcao = readlinesync.questionInt("\nEntre com a opcao desejada: ");

        switch (opcao) {
            case 1:
                console.log("\n📚 Cadastrar Livro\n");

                titulo = readlinesync.question("Digite o título do Livro: ");
                autor = readlinesync.question("Digite o autor do Livro: ");

                console.log("\nDigite o tipo do Livro: ");
                tipo = readlinesync.keyInSelect(tiposLivros, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("\nDigite o preço do Livro (R$): ");

                switch (tipo) {
                    case 1:
                        paginas = readlinesync.questionInt("Digite o número de páginas: ");
                        produtos.cadastrar(
                            new LivroFisico(produtos.gerarId(), tipo, titulo, autor, preco, paginas)
                        );
                        console.log("\nLivro físico cadastrado com sucesso!");
                        break;

                    case 2:
                        tamanhoArquivo = readlinesync.questionFloat("Digite o tamanho do arquivo (MB): ");
                        produtos.cadastrar(
                            new Ebook(produtos.gerarId(), tipo, titulo, autor, preco, tamanhoArquivo)
                        );
                        console.log("\nEbook cadastrado com sucesso!");
                        break;
                }

                pressioneEnter();
                break;

            case 2:
                console.log("\n📚 Listar todos os Livros\n");
                produtos.listarTodos();
                pressioneEnter();
                break;

            case 3:
                console.log("\n📚 Buscar Livro por ID\n");
                id = readlinesync.questionInt("Digite o ID do Livro: ");
                produtos.procurarPorId(id);
                pressioneEnter();
                break;

            case 4:
                console.log("\n📚 Atualizar Dados do Livro\n");
                id = readlinesync.questionInt("Digite o ID do Livro: ");

                const produto = produtos.buscarNoArray(id);

                if (produto !== null) {
                    titulo = readlinesync.question("Digite o título do Livro: ");
                    autor = readlinesync.question("Digite o autor do Livro: ");
                    preco = readlinesync.questionFloat("\nDigite o preço do Livro (R$): ");

                    tipo = produto.tipo;

                    switch (tipo) {
                        case 1:
                            paginas = readlinesync.questionInt("Digite o número de páginas: ");
                            produtos.atualizar(
                                new LivroFisico(id, tipo, titulo, autor, preco, paginas)
                            );
                            console.log("\nLivro físico atualizado com sucesso!");
                            break;

                        case 2:
                            tamanhoArquivo = readlinesync.questionFloat("Digite o tamanho do arquivo (MB): ");
                            produtos.atualizar(
                                new Ebook(id, tipo, titulo, autor, preco, tamanhoArquivo)
                            );
                            console.log("\nEbook atualizado com sucesso!");
                            break;
                    }
                } else {
                    console.log(`\nO Livro de ID ${id} não foi encontrado!`);
                }

                pressioneEnter();
                break;

            case 5:
                console.log("\n📚 Apagar Livro\n");
                id = readlinesync.questionInt("Digite o ID do Livro: ");
                produtos.deletar(id);
                pressioneEnter();
                break;

            case 6:
                console.log("\n📚 Buscar Livro por Título\n");
                const tituloBusca = readlinesync.question("Digite o título do livro: ");
                produtos.buscarPorTitulo(tituloBusca);
                pressioneEnter();
                break;

            case 7:
                console.log("\n📚 Livraria Digital Generation - leitura para todo mundo! 📚");
                sobre();
                process.exit(0);

            default:
                console.log("\nOpção inválida! Tente novamente.\n");
                pressioneEnter();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n***************************************************");
    console.log("*  Projeto Desenvolvido por: Kefilwe Lourenço     *");
    console.log("*  Generation Brasil                              *");
    console.log("***************************************************");
}

function pressioneEnter(): void {
    readlinesync.question("\nPressione Enter para continuar...");
}

main();