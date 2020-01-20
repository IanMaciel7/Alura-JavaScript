var botaoAdicionar = document.querySelector("#buscar-pacientes");
var xhr = new XMLHttpRequest();  // objeto que fornece funcionalidade ao cliente requsita dados de um servidor
xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

botaoAdicionar.addEventListener("click",function(){
  xhr.addEventListener("load",function(){
    //conferir se status da requisição esta correta
    var erroAjax=document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });

    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");

    }
  });
  xhr.send(); // envia a requisição
});
