
//função com logica da calculadora
function calculadora(tipo, valor){
    //sobrepondo 'ifs' para poder coletar o valor selecionado pelo usuario
    if (tipo ==='acao'){
  
      if(valor ==='c'){
        document.getElementById('visor').value = ''
      }
      
      //selecionando o operador que será realizado o calculo
      if(valor ==='+' || valor ==='-' || valor ==='*' || valor ==='/' || valor ==='.'  ){
        document.getElementById('visor').value += valor
      }
  
      //aplicando o resultado para o usuario
      if(valor === '='){
        var resultado = eval(document.getElementById('visor').value)
        document.getElementById('visor').value = resultado 
  
      }
  
  
    }
    else if(tipo==='num'){
      document.getElementById('visor').value += valor
    }
  }
  