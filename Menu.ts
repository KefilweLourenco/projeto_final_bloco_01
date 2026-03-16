import readlinesync = require("readline-sync");
import { LivroFisico } from "./src/model/LivroFisico";
import { Ebook } from "./src/model/Ebook";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {
 
let produtos: ProdutoController = new ProdutoController();

/*Linhas testes
const livrofisico: LivroFisico =  new LivroFisico(1, 1, "JavaScript O guia definitivo 7ed.", "David Flanagan", 204.40, 704);
livrofisico.visualizar();

const ebook: Ebook = new Ebook(2, 2, "Lógica de Programação e Algoritmos com JavaScript: uma introdução à Programação de Computadores com exemplos e Exercícios Para Iniciante", "Edécio Fernando Iepsen", 352, 4.60);
ebook.visualizar(); */

let opcao, id, tipo, paginas: number;
let tamanhoArquivo, preco: number;
let titulo, autor: string;
const tiposLivros = ['Livro Físico', 'Ebook'];

console.log("\nCriar Produtos\n");

    let lf1: LivroFisico = new LivroFisico(produtos.gerarId(), 1, "JavaScript O guia definitivo 7ed.", "David Flanagan", 204.40, 704);
    produtos.cadastrar(lf1);

    let lf2: LivroFisico = new LivroFisico(produtos.gerarId(), 1, "Entendendo Algoritmos", "Aditya Bhargava", 87.90, 264);
    produtos.cadastrar(lf2);

    let eb1: Ebook = new Ebook(produtos.gerarId(), 2, "Lógica de Programação e Algoritmos com JavaScript", "Edécio Fernando Iepsen", 352.00, 4.6);
    produtos.cadastrar(eb1);

    let eb2: Ebook = new Ebook(produtos.gerarId(), 2, "Pequeno Manual Antirracista", "Djamila Ribeiro", 29.90, 2.1);
    produtos.cadastrar(eb2);

    produtos.listarTodos();

    while (true) {

        console.log("***************************************");
        console.log("      LIVRARIA DIGITAL GENERATION      ");
        console.log("***************************************");

        console.log("1 - Cadastrar Livro"                    );
        console.log("2 - Listar Livros"                      );
        console.log("3 - Buscar Livro por ID"                );
        console.log("4 - Atualizar Livro"                    );
        console.log("5 - Deletar Livro"                      );
        console.log("6 - Sair"                               );
        console.log("                                       ");
        console.log("***************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nLivraria Digital Generation - leitura para todo mundo!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Livro\n");

                console.log("Digite o Título do Livro: ");
                titulo = readlinesync.question("");

                console.log("Digite o Autor do Livro: ");
                autor = readlinesync.question("");

                console.log("\nDigite o tipo do Livro: ");
                tipo = readlinesync.keyInSelect(tiposLivros, "", { cancel: false }) + 1;

                console.log("\nDigite o Preço do Livro (R$): ");
                preco = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Número de páginas: ");
                        paginas = readlinesync.questionInt("");
                        produtos.cadastrar(
                            new LivroFisico(produtos.gerarId(), tipo, titulo, autor, preco, paginas)
                        );
                        break;

                    case 2:
                        console.log("Digite o Tamanho do arquivo (MB): ");
                        tamanhoArquivo = readlinesync.questionFloat("");
                        produtos.cadastrar(
                            new Ebook(produtos.gerarId(), tipo, titulo, autor, preco, tamanhoArquivo)
                        );
                        break;
                }

                keyPress();
                break;

            case 2:
                console.log("\n\nListar todos os Livros\n");
                produtos.listarTodos();

                keyPress();
                break;

            case 3:
                console.log("\n\nBuscar Livro por ID\n");

                console.log("Digite o ID do Livro: ");
                id = readlinesync.questionInt("");
                produtos.procurarPorId(id);

                keyPress();
                break;

            case 4:
                console.log("\n\nAtualizar Dados do Livro\n");

                console.log("Digite o ID do Livro: ");
                id = readlinesync.questionInt("");

                let produto = produtos.buscarNoArray(id);

                if (produto != null) {

                    console.log("Digite o Título do Livro: ");
                    titulo = readlinesync.question("");

                    console.log("Digite o Autor do Livro: ");
                    autor = readlinesync.question("");

                    tipo = produto.tipo;

                    console.log("\nDigite o Preço do Livro (R$): ");
                    preco = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Número de páginas: ");
                            paginas = readlinesync.questionInt("");
                            produtos.atualizar(
                                new LivroFisico(id, tipo, titulo, autor, preco, paginas)
                            );
                            break;

                        case 2:
                            console.log("Digite o Tamanho do arquivo (MB): ");
                            tamanhoArquivo = readlinesync.questionFloat("");
                            produtos.atualizar(
                                new Ebook(id, tipo, titulo, autor, preco, tamanhoArquivo)
                            );
                            break;
                    }

                } else {
                    console.log("\nO Livro de ID: " + id + " não foi encontrado!");
                }

                keyPress();
                break;

            case 5:
                console.log("\n\nApagar Livro\n");

                console.log("Digite o ID do Livro: ");
                id = readlinesync.questionInt("");
                produtos.deletar(id);

                keyPress();
                break;

            default:
                console.log("\nOpção inválida! Tente novamente.\n");

                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Kefilwe Lourenço");
    console.log("Generation Brasil");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("\nPressione Enter para continuar...");
    readlinesync.prompt();
}

main();