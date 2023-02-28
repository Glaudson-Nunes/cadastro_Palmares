

// TELA INICIAL E SEUS INPUTS box1
const TelaInicial = document.querySelector('.box1');

const btCriarConta = document.querySelector('.bts1');
const btAcessarConta = document.querySelector('#bts2');

btCriarConta.addEventListener("click", ()=> ChamandoTelaCriarConta());
btAcessarConta.addEventListener("click", ()=> ChamandoTelaAcesso());


// TELA CRIAR CONTA E SEUS INPUTS box2
const TelaCriaConta = document.querySelector('.box2');

const inputname = document.querySelector('#inputNameUsu');
const inputemail = document.querySelector('#inputemail');
const inputsenha = document.querySelector('#inputsenha');
const inputconfir = document.querySelector('#inputconfirmarsenha');
const btSalvar = document.querySelector('#btsalvar');



//TELA DE SUPORTE E SEUS INPUTS box3
const TelaSuporte = document.querySelector('.box3');

const setaVoltar = document.querySelector('#setavoltar');
const btsuporte = document.querySelector('.btSuporte');

btsuporte.addEventListener("click", ()=> telaSuporte());
setaVoltar.addEventListener("click", ()=> fecharTelaSuporte());


// TELA LOGIN E SEUS INPUTS box4
const TelaLogin = document.querySelector('.box4');

const cabecalho1 = document.querySelector('.cabecalho');
const cabecalho2 = document.querySelector('.cabecalho2');
const btSair = document.querySelector('.btsair');
const btCadastrar = document.querySelector('.btvc1');
const btVisualizar = document.querySelector('.btvc');

btCadastrar.addEventListener("click", ()=> ChamandoVisualizacaoInputs());
btVisualizar.addEventListener("click", ()=> ChamarTelaVisualizarCadas())

const emailacesso = document.querySelector('#EmailAcesso');
const senhaacesso = document.querySelector('#SenhaAcesso');
const btacessoLogin = document.querySelector('#btAcessarConta');

//TELA DE CADSTRAR USERS E SEUS INPUTS box5
const TelaCadastr_users = document.querySelector('.TelaCadastros');
const TelaInputs = document.querySelector('.inputsCadastro');

const ipname = document.querySelector('#ipName');
const iptele = document.querySelector('#ipTele');
const ipcpf = document.querySelector('#ipCpf');
const ipncasa = document.querySelector('#ipNcasa');
const ipdate = document.querySelector('#ipDataN');
const btsalvarS = document.querySelector('#btSalvarS');
const receberName2 = document.querySelector('.receberIni');

//TELA VISUALIZAR CADASTRADOS E SEUS INPUTS
const Tela_ver_cadastrados = document.querySelector('.visualizarCadastros');

const receid = document.querySelector('.receberId');
const recename = document.querySelector('.receberNome');
const recesname = document.querySelector('.recebersobreNome');
const recetele = document.querySelector('.receberTelefone');
const rececpf = document.querySelector('.recebercpf');
const receNC = document.querySelector('.receberNumerocasa');

const btFechar = document.querySelector(".fechar");

btFechar.addEventListener("click", ()=> fechandoTelaVisuCads());



// CHAMANDO TELA CRIAR CONTA

const ChamandoTelaCriarConta = () =>{

    TelaInicial.style.display = 'none';
    TelaCriaConta.style.display = 'flex'

}


// CHAMANDO TELA DE ACESSO

const ChamandoTelaAcesso = () =>{

    TelaInicial.style.display = 'none';
    TelaLogin.style.display = 'flex';

}


// TELA DE INPUTS DEPOIS QUE O USUARIO EFETUAR O LOGIN


const ChamandoVisualizacaoInputs = () =>{

    TelaInputs.style.display = "flex";

}


// TELA DO USUARIO VISUALIZAR OS ARQUIVOS CADASTRADOS

const ChamarTelaVisualizarCadas = () =>{

    TelaCadastr_users.style.display = "none";
    TelaInputs.style.display = "none";
    Tela_ver_cadastrados.style.display = "flex";

}

const fechandoTelaVisuCads = () =>{

    TelaCadastr_users.style.display = "block";
    Tela_ver_cadastrados.style.display = "none";

}









































































//ABRINDO TELA DE SUPORTE


const telaSuporte = () =>{

    TelaSuporte.style.display = "flex";
    TelaInicial.style.display = 'none';
    TelaLogin.style.display = 'none';
    TelaCriaConta.style.display = 'none';
}

const fecharTelaSuporte = () =>{

    TelaSuporte.style.display = "none";
    TelaInicial.style.display = 'flex';
}






















































const t2=0;
const t4=0;
const t5=0;
const t7=0;
const t8=0;
const t9=0;
const t0=0;
const t87=0;
const t56=0;
const t543=0;
const t435=0;