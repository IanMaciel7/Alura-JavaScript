var titulo  = document.querySelector(".titulo");

var listaPacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < listaPacientes.length; i++) {

  paciente = listaPacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  //verificando peso
  if(!pesoEhValido){
    console.log("Peso invalido");
    tdImc.textContent = "Peso invalido!"
    pesoEhValido = false;
    //manipulando estilo do elemento
    paciente.classList.add("paciente-invalido")
  }

  //verificando altura
  if(!alturaEhValida){
    console.log("Altura invalido");
    tdImc.textContent = "Altura invalido!"
    alturaEhValido = false;
    //manipulando estilo do elemento
    paciente.classList.add("paciente-invalido")
  }

  //verificando se os dados para imc são validos
  if(pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }

}

function calculaImc(peso,altura){
  var imc = peso /(altura*altura);
  // definindo limete de casas decimais
  return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <=3){
      return true;
  }else{
    return false;
  }
}
