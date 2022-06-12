const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const botaoPerguntar = document.querySelector("#botaoPerguntar")

const resposta = [
  "Certamente você chegará a algum lugar se andar o suficiente",
  "A imaginação é a única arma na guerra contra a realidade.",
  "Eu não sou estranho, estranho, diferente ou louco, minha realidade é simplesmente diferente da sua.",
  "Se você não sabe para onde está indo, qualquer caminho pode levá-lo até lá.",
  "Apenas pessoas loucas igualam dor com sucesso.",
  "Vê, um cachorro rosna quando está com raiva e abana o rabo quando está feliz. Agora, eu rosno quando estou com raiva e abano o rabo quando estou com raiva. Portanto, eu estou com raiva.",
  "Isso depende muito de onde você quer ir.",
  "Só alguns encontram no caminho; outros não o reconhecem quando o encontram; e outros nem querem reconhecê-lo.",
  "Você não pode evitar. Somos todos loucos aqui. Eu estou louco. Você é doido […] Você deve estar ou não teria vindo aqui.",
  "Alguns seguem esse caminho. Alguns pegam esse outro. Mas, no que me diz respeito, eu pessoalmente prefiro o atalho. ",
  "Se estivesse procurando o coelho branco, perguntaria ao chapeleiro louco. Ou você pode perguntar à lebre de março nessa direção.",
]

//clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == ''){
    alert("Digite sua pergunta")
    return
  }

  botaoPerguntar.setAttribute('disabled', true)

  const pergunta = "<div>" + inputPergunta.value + "<div>"

  //gerar numero aleatorio
  const totalRespostas = resposta.length
  const numeroAleatorio = Math.floor(Math.random()*totalRespostas);

  elementoResposta.innerHTML = pergunta + resposta[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function(){
    elementoResposta.style.opacity = 0;
    botaoPerguntar.removeAttribute('disabled')
  }, 5000)
}

function limparPergunta(){
  inputPergunta.value = ''
  inputPergunta.focus()
}