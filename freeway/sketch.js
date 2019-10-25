//Função de Criação de Tela

function setup() {
  createCanvas(600, 400);
}


// Função draw "Sempre"
function draw() {
 
  
  if(frameCount > 400) { // +/- 8s

    if(meuPlacar < 5 && placarOponente < 5)
    
    jogar();
    
    
  else{ verificarVencedor();}
    }else{
      
      //tela inicial
      
      telaInicial();
         
      
       
}
}

function jogar(){ 

  
   background(imgEstrada);
  movimentaVaca();
  movimentaCarros();
  mostraCarros();
  mostrarPlacar();
  placar();
  mostraVaca();
  atropelamento();


}

function telaInicial(){
      
      
        background("purple");
        textStyle(BOLD);
        textAlign(CENTER);
        textSize(48);
        fill("white")
      
        text(" Avenida 1° de Maio ",300,190);
          textSize(24);
        text(" Desenvolvido Por Estevão Daniel Torresani ",300,230);
  
  
      
      }



 function verificarVencedor(){
 
     if(meuPlacar >= 5){
       vacaVencedora();
     }
   else{    vaca2Vencedora(); }
 
 }





function vacaVencedora(){
      
      
        background("purple");
        textStyle(BOLD);
        textAlign(CENTER);
        textSize(48);
        fill("white")
      
        text(" Vaca Da Direita Venceu!",300,90);
          
        
          image(imgVaca, 200, 100 ,200, 200);
  
      
      }


function vaca2Vencedora(){
      
      
        background("purple");
        textStyle(BOLD);
        textAlign(CENTER);
        textSize(48);
        fill("white")
      
        text(" Vaca da Esquerda Venceu!",300,90);
          
        
          image(imgVaca, 200, 100 ,200, 200);
  
      
      }