//Mostrar placar

 function mostrarPlacar(){
   textSize(30);
   
   fill("Black");
   text(meuPlacar, 450, 30)
   
   fill("Black");
   text(placarOponente, 100, 30)
 
 }

 function placar(){
 
   if(yVaca <= 15){
   
     pontos.play();
    meuPlacar += 1
    yVaca = 368
   }
   
   if(yVaca1 <= 15){
   
     pontos.play();
    placarOponente += 1
    yVaca1 = 368
   }
 }