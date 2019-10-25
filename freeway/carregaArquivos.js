//Variáveis para as imagens
let imgEstrada;
let imgVaca;
let imgCarro = [];
let larguraCarro = 50;
let alturaCarro = 30;

//Variaveis de movimento
let xVaca = 450;
let yVaca = 368;

let xVaca1 = 100;
let yVaca1 = 368;


//Carro 1
let xCarro = [615, 605, 605, - 60, -65, -70 ];
let yCarro = [45, 105, 158, 215, 270, 325];
let velocidadeCarro = [7, 5, 6, 2 , 8, 4];


//placar
let meuPlacar = 0;
let placarOponente = 0;

//colisão


function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgVaca1 = loadImage('imagens/ator-1.png');
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
   pontos = loadSound('sons/pontos.wav');
   batida = loadSound('sons/colidiu.mp3');
   trilha = loadSound('sons/trilha.mp3');
}

