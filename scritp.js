
const PromptSync = require('prompt-sync')({sigint: true});

var entrada = PromptSync("alguem ai?");
var login = [];

var loginNome;
var LoginSenha;


function Msg(msg){
  console.log(msg);  
};

function start(){
    if(login.length > 0){
        Msg("===================\n 1 - LOGIN \n 2 - REGISTER \n\n===================\n Escolha entre as opções: ");
        var escolha = PromptSync();
        switch (esolha){
          case '1\n':
          Msg("1");
          break;
          case '2\n':
          Msg("2");
          break;
        };
    }else{
        Msg("Crie um novo personagem: ");
        var nome = PromptSync('Nome:');
        var senha = PromptSync('Senha');
        login += {nome,senha};
    };
};


console.log(entrada);
start();
