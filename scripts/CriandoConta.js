



btSalvar.addEventListener("click", ()=> CriandoContaF());

const CriandoContaF = () =>{

    

    var txtName = inputname.value;
    var txtEmail = inputemail.value;
    var txtsenha = inputsenha.value;
    var txtconfirsenha = inputconfir.value;

    if(txtName == "" || txtEmail == "" || txtconfirsenha == "" || txtsenha == ""){

        Swal.fire({
            icon: 'Alerta',
            title: 'Preencha todos os inputs',
           
          })
        return
    }
    
    if(txtsenha === txtconfirsenha){

        Swal.fire({
            title: 'Criando Acesso aguarde..',
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)

              Swal.fire({
                icon: '',
                title: 'Acesso Criado ',
               
              })

              setTimeout(()=>{

                location.reload();
               
              }, 2000)

             

            }
          });

        localStorage.setItem("NomeUsu", txtName);
        localStorage.setItem("Email", txtEmail);
        localStorage.setItem("Senha1", txtsenha);
        localStorage.setItem("Senha2", txtconfirsenha);

      

    }else{

        Swal.fire({
            icon: 'Alerta',
            title: 'As senhas nâo correspondem',
           
          })
    }

}


var senha_cadastrada = localStorage.getItem("Senha2");
var email_cadastrado = localStorage.getItem("Email");
var nome_cadastrado = localStorage.getItem("NomeUsu");