

var tabela = document.querySelector("#tabela-pacientes");

// event pega a raiz do gerado do evento ou seja a tabela
tabela.addEventListener("dblclick",function(event){
  //dps pega o elemento filho que foi alvo
  var alvoDoEvendo = event.target; // pega td
  var paiDoAlvo = alvoDoEvendo.parentNode; // pega o tr do td
  paiDoAlvo.classList.add("fadeOut");

  setTimeout(function() {
    event.target.parentNode.remove();
  },500);

  console.log(event);
  console.log(alvoDoEvendo);
  console.log(paiDoAlvo);

  //event.target.parentNode.classList.add("fadeOut"); resumido
})


//o novos pacientes não tem o evento de duplo click
//var pacintes = document.querySelectorAll(".paciente");
//console.log(pacintes);
//pacintes.forEach(function(paciente) {
//duplo click
//  paciente.addEventListener("dblclick",function () {
//    console.log("duplo click");
//    this.remove();
//  })
//})
