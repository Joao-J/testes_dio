
const PromptSync = require('prompt-sync')({sigint: true});

var starting = true;
var db = [];

function Msg(msg){
  console.log(msg);  
};

function login(name,pass){
    console.clear
    for(usercount = 0; db.length > usercount; usercount++){
        var user = db[usercount]
        nameDb = user[0];
        passDb = user[1];
        score = user[2];
        
        if (name == nameDb && pass == passDb){
            menuLogado(usercount)
            Msg("Logado com Sucesso");
            break;
        }
        if ((usercount + 1) == db.length){
           Msg("Usuario ou Senha não encontrado"); 
        }
    }
}

function createUser(){
    console.clear
    Msg("Crie um novo personagem: ");
    var nome = PromptSync('Nome:');
    var senha = PromptSync('Senha: ');
    db.push([nome,senha,0]);
    console.clear
    Msg("Usuario Criado com Sucesso!!");
}

function menuLogado(userCount){
    Msg("===================\n 1 - JOGAR \n 2 - VER PONTOS \n\n 0 - EXIT \n===================\n Escolha entre as opções: ");
    var escolha = PromptSync();
    switch(escolha){
        case '1':
            Jogar(userCount)
        case '2':
        
        case '0':
        starting = false;
        break
    }
}

function Jogar(userCount){
    var ppt = ['pedra','papel','tesoura']
    var randomChoice = randomChoice(ppt)
    Msg("===================\n 1 - PEDRA \n 2 - VER PAPEL \n 3 - TESOURA \n\n 0 - EXIT \n===================\n Escolha entre as opções: ");
    var escolha = PromptSync();
    var pontosGanhados = 0;
    var rEscolha = randomChoice(ppt)
    switch(rEscolha){
        case 'pedra':
            if (escolha == '1'){
                Msg("Você e seu Openente Escolheram Pedra \n Você não ganha pontos")
            }else if(escolha == '2'){
                Msg("Você escolheu PEDRA e seu Openente Escolhou PAPEL \n Você PERDE pontos")
                pontosGanhados = -1
            }else if (escolha == '3'){
                Msg("Você escolheu PEDRA e seu Openente Escolhou TESOURA \n Você GANHA pontos")
                pontosGanhados = 1
            }
        case 'papel':
            if (escolha == '1'){
                Msg("Você escolheu PAPEL e seu Openente Escolhou PEDRA \n Você GANHA pontos")
                pontosGanhados = 1
            }else if(escolha == '2'){
                Msg("Você e seu Openente Escolheram PAPEL \n Você não ganha pontos")
            }else if (escolha == '3'){
                Msg("Você escolheu PAPEL e seu Openente Escolhou TESOURA \n Você PERDE pontos")
                pontosGanhados = -1
            }
        case 'tesoura':
            if (escolha == '1'){
                Msg("Você escolheu TESOURA e seu Openente Escolhou PEDRA \n Você PERDE pontos")
                pontosGanhados = -1
            }else if(escolha == '2'){
                Msg("Você escolheu TESOURA e seu Openente Escolhou PAPEL \n Você GANHA pontos")
                pontosGanhados = 2
            }else if (escolha == '3'){
                Msg("Você e seu Openente Escolheram TESOURA \n Você não ganha pontos")
            }
        default:
        starting = false;
        break;
    }
   db[pontosGanhados][2] += pontosGanhados;
}

function start(){
    while(starting == true){
        if(db.length > 0){
            Msg("===================\n 1 - LOGIN \n 2 - REGISTER \n\n 0 - EXIT \n===================\n Escolha entre as opções: ");
            var escolha = PromptSync();
            switch (escolha){
            case '1':
            login(PromptSync('Nome: ') , PromptSync('Senha: '));
            break;
            case '2':
            createUser();
            break;
            case '0':
                starting = false;
            };
        }else{
            createUser();
        };
    };
};

start();
