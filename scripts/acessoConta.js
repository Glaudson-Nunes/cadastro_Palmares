
setTimeout(()=>{

  Swal.fire({
    icon: 'Atençâo',
    title: 'Sistema ainda em desenvolvimento, pode haver bugs no sistema esta é uma versao beta 1.0',
  })

}, 2000)

//ACESSO A CONTA DO USUARIO 

btacessoLogin.addEventListener("click", ()=> LoginUser());


const LoginUser = () =>{

    if(emailacesso.value === email_cadastrado && senhaacesso.value === senha_cadastrada){

        Swal.fire({
            title: 'Acessando Sistema',
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          });

        setTimeout(()=>{

            TelaLogin.style.display = "none";
            TelaCadastr_users.style.display = "block";
            cabecalho1.style.display = "none";
            cabecalho2.style.display = "flex";
            receberName2.innerHTML = `<p> ${nome_cadastrado} </p>`;

        }, 1000)

    }else{

        Swal.fire({
            icon: 'Login ou senha erradas',
            title: 'Informaçôes de login incorretas',
           
          })
    }
    
    }



