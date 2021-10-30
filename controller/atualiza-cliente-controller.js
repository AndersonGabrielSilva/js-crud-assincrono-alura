import { clienteService } from "../service/cliente-service.js";

//Pega a Url da Pagina
const pegaUrl = new URL(window.location);

//Pega o valor da query string
const id = pegaUrl.searchParams.get('id');
console.log(pegaUrl);

const inputName = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id)
.then(dados => {
    //Insere o valor dentro do input
    inputName.value = dados.nome;
    inputEmail.value = dados.email;
})

const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit',(evento) => {
    evento.preventDefault();

    clienteService.atualizaCliente(id, inputNome.value,inputEmail.value);
})
