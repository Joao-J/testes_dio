const { stdout } = require('process');

var  nomeHeroi = "";
var pontosHeroi = "";
var senhaHeroi = "";

var bancoDados = [];

function jogar(){
    
}
//atualizar
function puxarPontos(){

}

const Console = require('readline').createInterface({
entrada:process.stdin,
saida:process.stdout
});

function login(){
    logado = false;
    console.log("LOGIN \n");
    let usuario = "";
    Console.question("USUARIO: ", usuario);
    console.log("foi feito " + usuario);
    for(dados in bancoDados){

    } 
    return logado;
}

login();