import { clienteService } from '../service/cliente-service.js'
const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElemente('tr');

    const conteudo = `<td class="td" data-td>${nome}</td>
                      <td>${email}</td>
                        <td>
                            <ul class="tabela__botoes-controle">
                                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                            </ul>
                     </td>`;

    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id;
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]');
tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if (ehBotaoDeletar) {
        //Pega o data-id mais proximo da minha <td>
        const linhaCliente = evento.target.closest('data-id')
        let id = linhaCliente.dataset.id;

        await clienteService.deletarCliente(id)

        linhaCliente.remove()
    }
})

const render = async () => {
   try  {
       const clientes = await clienteService.listaClientes()
   
       clientes.forEach(elemento => {
           tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
       });

   }catch(erro){
    window.location.href = '../telas/erro.html'
   }
}

render();
