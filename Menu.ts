import readlinesync = require("readline-sync");

let opcao: number; 

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
