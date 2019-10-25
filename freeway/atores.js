function mostraVaca(){
  image(imgVaca,xVaca, yVaca, 28, 28);
  image(imgVaca,xVaca1, yVaca1, 28, 28);
}


function movimentaVaca(){
  if (keyIsDown(UP_ARROW)){
      if(yVaca > 3)
        yVaca -= 5;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if(yVaca < 366)
      yVaca += 5;
  }
  
   if (keyIsDown(87)){
      if(yVaca1 > 3)
        yVaca1 -= 5;
  }
  
  if (keyIsDown(83)){
    if(yVaca1 < 366)
      yVaca1 += 5;
  }

}


function colisão(){
  if(collideRectRect(xCarro[i], yCarro[i], larguraCarro, alturaCarro, xVaca, yVaca, 28, 28 )){
    yVaca= 368;
    batida.play();
    if(meuPlacar >0){ meuPlacar -= 1;}
  
  }
  
  if(collideRectRect(xCarro[i], yCarro[i], larguraCarro, alturaCarro, xVaca1, yVaca1, 28, 28 )){
    yVaca1= 368;
   batida.play();
    if(placarOponente >0){ placarOponente -= 1;}
  }
  
  




}//