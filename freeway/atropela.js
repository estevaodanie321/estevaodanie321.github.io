let atropelaVaca = false;
let atropelaGalinha = false;

function atropelamento(){

  for(let i=0; i<imgCarro.length; i++){
    
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i],larguraCarro, alturaCarro)
    
      if(atropelaVaca){
        //Vaca Atropelada
        batida.play();
        yVaca = 366;
        if(meuPlacar >0){meuPlacar -= 1;}
        
          
      
      }      
    
    atropelaVaca1 = collideRectRect(xVaca1, yVaca1, 28, 28, xCarro[i], yCarro[i],larguraCarro, alturaCarro)
    
     if(atropelaVaca1){
        //Galinha Atropelada
        batida.play();
          yVaca1 = 366;
       if(placarOponente >0){placarOponente -= 1;}
      
      }      
  
  }//for
  
  

}//function