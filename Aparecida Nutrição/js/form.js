var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",mostraMensagem);

function mostraMensagem(){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  // extraindo informacoes do paciente do form
  var paciente = obtemInformacoesDoForm(form);
  console.log(paciente);

  var erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMensagemDeErros(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var mensagemDeErros = document.querySelector("#mensagens-erro");
  mensagemDeErros.innerHTML = "";

  }

  function exibeMensagemDeErros(erros){
    var ul = document.querySelector("#mensagens-erro");
    // apagar li antigos
    ul.innerHTML ="";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
  }

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemInformacoesDoForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  // adicionando classe no pacienteTr
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

  return pacienteTr;
}

function montaTd(dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente){
  //declarando arrays
  var erros = [];

  //mesmo funcionamento se fosse feito com chaves
  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }
  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }
  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco")
  }
  if (paciente.peso.length == 0) {
    erros.push("A peso não pode ser em branco")
  }
  if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
  if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");

  return erros;
}
