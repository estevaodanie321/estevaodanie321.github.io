window.onload =function(){
    alert("Alo HA");
    console.log("Se quiser me ver, tem que precionar F12! Console...")
    console.log("a ="+a + " b="+b);
    console.log("a + b =" +parseInt(a+b) );
};

var a = 10;
var b = 20;

    var entradas = document.querySelectorAll('input');
    var resposta = document.querySelectorAll('.resposta');
    var botão = document.querySelectorAll('#btnSomar');
   

pegaNúmero1 = function(){
    return entradas[0].value;
}
pegaNúmero2 = function(){
    return entradas[1].value;
}

testarEntradasVazias = function(){
    if(testarEntradasVazias()){
        resposta.textContent = "Erro: os dois campos númericos";
        return false;
        atualizaResposta();
    }
}

somar = function(){
    if(testarEntradasVazias()){
    resposta.textContent = "Erro: Preencha os dois campos Numéricos";
    resposta.classList.remove('correta');
    resposta.classList.add('errada');
    return false;
    }
    else{
    atualizarResposta();
    resposta.classList.remove('errada');
    resposta.classList.add('cerreta');
    }
    }
    
    atualizarResposta = function(){
    let num1 = pegaNúmero1();
    let num2 = pegaNúmero2();
    var soma = num1 + num2;
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
    }