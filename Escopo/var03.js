// HOISTING -> elevar a variável para um nível superior

/* 
    console.log(name)
*/
// ERRO

/* 
    var nome
    console.log(nome)
*/
// UNDEFINED

/*                         HOISTING          var nome
    console.log(nome)        --->            console.log(name)
    var nome = 'Filipe'                      nome = 'Filipe'
*/
// UNDEFINED

// SEMPRE DECLARE VARIÁVEIS NO TOPO DO CÓDIGO