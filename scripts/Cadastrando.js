


const usuarios = [];

btsalvarS.addEventListener("click", ()=> cadastro())


const cadastro = () =>{

    var inome = ipname.value;
    var itele = iptele.value;
    var icpf = ipcpf.value;
    var icasa = ipncasa.value;
 
    if(inome == "" || itele == "" || icpf == "" || icasa == ""){

        Swal.fire({
            icon: 'Preencha os inputs',
            title: 'É necessario preencher os inputs',
           
          })

    }

    if(inome + itele +  icpf + icasa){

        setTimeout(()=>{

            Swal.fire({
                icon: '',
                title: `${inome} ` + 'Foi cadastrado com, sucesso!',
              })

        },1000)

        localStorage.setItem("SAVEnome", inome);
        localStorage. setItem("SAVEtele",itele);
        localStorage.setItem("SAVEcpf",icpf);
        localStorage.setItem("SAVEcasaN",icasa);
    
        recename.innerHTML = `<p> ${inome} </p>`;
        recetele.innerHTML = `<p> ${itele} </p>`;
        rececpf.innerHTML = `<p> ${icpf} </p>`;
        receNC.innerHTML = `<p> ${icasa} </p>`;

    }
 
}

var save1 = localStorage.getItem("SAVEnome");
var save02 = localStorage.getItem("SAVEtele");
var save03 = localStorage.getItem("SAVEcpf");
var save04 = localStorage.getItem("SAVEcasaN")