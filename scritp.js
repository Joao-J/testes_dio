
const PromptSync = require('prompt-sync')({sigint: true}); //Aqui temos a constante para pegar o input do terminal

var starting = true; //Variavel que deixa define se o programa está rodando
var db = []; //Array que usarei como Banco de dados guardando [nome,senha,pontos] sendo [string,string,integer]

function Msg(msg){ //Função para deixar menor o comando console.log()
  console.log(msg);  
}; 

function login(name,pass){/*Função login que server para analisar
     se na lista temos algum usuario com o nome e a senha caso tenha mande para o nebuLogado */
    console.clear
    for(usercount = 0; db.length > usercount; usercount++){
        var user = db[usercount]
        nameDb = user[0];
        passDb = user[1];
        
        if (name == nameDb && pass == passDb){
            Msg("Logado com Sucesso!");
            menu(usercount)
            break;
        }
        if ((usercount + 1) == db.length){
           Msg("Usuario ou Senha não encontrado!"); 
        }
    }
}

function createUser(){ /*Função createUser já está meu alto explicativo 
ela server para criar um novo usuario*/
    console.clear
    Msg("Crie um novo personagem: ");
    var nome = PromptSync('Nome: ');
    var senha = PromptSync('Senha: ');
    db.push([nome,senha,1000]);
    console.clear
    Msg("Usuario Criado com Sucesso!!");
}

function score(userCount){ /* Função score é a função que mostra o resultado do jogador*/
    var nivel = "";
    var nome = db[userCount][0]
    x = db[userCount][2];
   
    if(x <= 1000){
            nivel = "Ferro";
    }else if (x >= 1001 && x  <= 2000){
            nivel = "Bronze";
    }else if (x >= 2001 && x  <= 5000){
            nivel = "Prata";
    }else if (x >= 5001 && x  <= 7000){
        nivel = "Ouro";
    }else if (x >= 7001 && x  <= 8000){
        nivel = "Platina";
    }else if (x >= 8001 && x  <= 9000){
        nivel = "Ascendente";
    }else if (x >= 9001 && x  <= 10000){
        nivel = "Imortal";
    }else if (x >= 10001){
        nivel = "Radiante";
    }
    
Msg("O Herói de nome ** " + nome + " ** está no nível de ** " + nivel + " **")
}

function menu(userCount){/* menu, é o menu para quando estiver logado */
    while(starting){
        Msg("===================\n 1 - JOGAR \n 2 - VER PONTOS \n\n 0 - EXIT \n===================\n Escolha entre as opções: ");
        var escolha = PromptSync();
        switch(escolha){
            case '1':
                play(userCount)
                break
            case '2':
                score(userCount)
                break
            case '0':
                starting = false;
                break
        }
    }
}

function play(userCount){/* play é função com jogo PEDRA, PAPEL, TESOURA... 
Ganhando ou perdendo pontos*/
    var ppt = ['pedra','papel','tesoura']

    Msg("===================\n 1 - PEDRA \n 2 - PAPEL \n 3 - TESOURA \n\n 0 - EXIT \n===================\n Escolha entre as opções: ");
    var escolha = PromptSync();
    if(escolha == '0'){
        close
    }
    var pontosGanhados = 0;
    var rEscolha = ppt[(Math.floor(Math.random() * ((ppt.length - 1)  - 0 + 1)) + 0)]
    switch(rEscolha){
        case 'pedra':
            if (escolha == '1'){
                Msg("Você e seu Openente Escolheram Pedra \n Você não ganha pontos")
            }else if(escolha == '2'){
                Msg("Você escolheu PEDRA e seu Openente Escolhou PEDRA \n Você GANHA pontos")
                pontosGanhados = 1000
            }else if (escolha == '3'){
                Msg("Você escolheu TESOURA e seu Openente Escolhou PEDRA \n Você PERDE pontos")
                pontosGanhados = -1000
            }
            break
        case 'papel':
            if (escolha == '1'){
                Msg("Você escolheu PEDRA e seu Openente Escolhou PAPEL \n Você PERDE pontos")
                pontosGanhados = -1000
            }else if(escolha == '2'){
                Msg("Você e seu Openente Escolheram PAPEL \n Você não ganha pontos")
            }else if (escolha == '3'){
                Msg("Você escolheu TESOURA e seu Openente Escolhou PAPEL \n Você GANHA pontos")
                pontosGanhados = 1000
            }
            break
        case 'tesoura':
            if (escolha == '1'){
                Msg("Você escolheu PEDRA e seu Openente Escolhou TESOURA \n Você GANHA pontos")
                pontosGanhados = 1000
            }else if(escolha == '2'){
                Msg("Você escolheu PAPEL e seu Openente Escolhou TESOURA \n Você PERDE pontos")
                pontosGanhados = -1000
            }else if (escolha == '3'){
                Msg("Você e seu Openente Escolheram TESOURA \n Você não ganha pontos")
            }
            break
        default:
        Msg("Escolha não é válida!")
        starting = false;
        break;
    }
   db[userCount][2] += pontosGanhados;
}

function start(){/* Start é a função inicial que caso não tenha nenhum usuario na nossa array/banco de dados
ela passa direto para função createUser*/
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

start();//Puxa a função start
