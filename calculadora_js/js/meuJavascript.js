
    function minhaFunção() {
        //O uso mais comum para saida de dados
     document.getElementById("demo")
     .innerHTML = "Paragrafo mudado.";

     //window.alert("Este e um alerta!");
     //Uso mais comum para  depuração de codigo
     console.log("Sóapareço com o f12")
    }

    function minhaFunção2() {
        if (document.getElementById("demo1").innerText.length === 0){
        document.getElementById("demo1").innerHTML = "Masteri e de reterdado!";
        document.getElementById("demo2").innerHTML = "Akali e de tiutados!";
        document.querySelector("#central").style.border="None";
    }else{
        document.getElementById("demo1").innerHTML ="";
        document.getElementById("demo2").innerHTML ="";
        document.querySelector("#central").style.border="None";
    }
      }
   