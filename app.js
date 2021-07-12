// pegar um input do usuario 


// Se for SIM, mostrar as categorias disponiveis, pergunta qual categoria escolher

// Se for NÃO, mostramos todos livros em ordem crescente pelo nº do ID.

const livros = require('./dataBase')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N - ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponiveis: ')
    console.log('O Silmarillion', '/ Os filhos de Húrin', '/ Beren e Lúthien', '/ A queda de Gondolin', '/ Contos inacabados', '/ O Hobbit', '/ O Senhor dos Anéis: A Sociedade do Anel', '/ O Senhor dos Anéis: As Duas Torres', '/ O Senhor dos Anéis: O Retorno do Rei')

    const entradaCategoria = readline.question('Qual livro voce escolhe? ')

    //const retornoSequencia = livros.filter(livro => livro.sequencia === entradaCategoria)
    //const retornoFilme = livros.filter(livro => livro.filme === entradaCategoria)
    //const retornoPaginas = livros.filter(livro => livro.paginas === entradaCategoria)
    const retornoNome = livros.filter(livro => livro.nome === entradaCategoria) 

    console.table(retornoNome)
}else {
    const livrosOrdenados = livros.sort((a, b) => a.id - b.id)
    console.log('Esses são todos do Autor: J.R.R. TOLKIEN')
    console.table(livrosOrdenados)
}