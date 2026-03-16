import readlinesync = require("readline-sync");
import { LivroFisico } from "./src/model/LivroFisico";
import { Ebook } from "./src/model/Ebook";

export function main() {

let opcao: number; 

//Linhas testes
const livrofisico: LivroFisico =  new LivroFisico(1, 1, "JavaScript O guia definitivo 7ed.", "David Flanagan", 204.40, 704);
livrofisico.visualizar();

const ebook: Ebook = new Ebook(2, 2, "Lógica de Programação e Algoritmos com JavaScript: uma introdução à Programação de Computadores com exemplos e Exercícios Para Iniciante", "Edécio Fernando Iepsen", 352, 4.60);
ebook.visualizar();

while (true) {

    console.log("***************************************");
    console.log("      LIVRARIA DIGITAL GENERATION      ");
    console.log("***************************************");

    console.log("1 - Cadastrar Livro");
    console.log("2 - Listar Livros");
    console.log("3 - Buscar Livro por ID");
    console.log("4 - Atualizar Livro");
    console.log("5 - Deletar Livro");
    console.log("6 - Sair");
    console.log("                                       ");
    console.log("***************************************");

    console.log("\nDigite uma opção: ");
    opcao = readlinesync.questionInt("");

    switch (opcao) {
        case 1:
            console.log("\nCadastrar Livro\n")
        break;

        case 2:
            console.log("\nListar Livros\n");
        break;

        case 3:
            console.log("\nBuscar Livro por ID\n");
        break;

        case 4:
            console.log("\nAtualizar Livro\n");
        break;

        case 5: 
            console.log("\nDeletar Livro\n")
        break;

        case 6:
            console.log("\nSaindo da Livraria Digital Generation...\n");
            process.exit(0);

        default:
            console.log("\nOpção Inválida! Tente novamente...");
        break;

    }

}
}

main();