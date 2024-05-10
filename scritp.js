
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

function menuLogado(){
    Msg("===================\n 1 - JOGAR \n 2 - VER PONTOS \n\n 0 - EXIT \n===================\n Escolha entre as opções: ");
    var escolha = PromptSync();
    switch(escolha){
        case '1':
        
        case '2':
        
        case '0':
        starting = false;
        break
    }
}

function Jogar(){
    var ppt = ['pedra','papel','tesoura']
    var randomChoice = random(ppt)
     Msg("===================\n 1 - PEDRA \n 2 - VER PAPEL \n 3 - TESOURA \n\n 0 - EXIT \n===================\n Escolha entre as opções: ");
    var escolha = PromptSync();
    switch(escolha){
        case '1':
        
        case '2':
        
        case '0':
        starting = false;
        break
    }
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
