const tabela = document.querySelector('[data-tabela]');

const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElemente('tr');

    const conteudo = `<td class="td" data-td>${nome}</td>
                      <td>${email}</td>
                        <td>
                            <ul class="tabela__botoes-controle">
                                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                            </ul>
                     </td>`;

    linhaNovoCliente.innerHTML = conteudo;

    return linhaNovoCliente;
}

const listaClientes = () => {

    /*Promise :  Um Promise (de "promessa") representa um valor que pode estar disponível agora, 
    no futuro ou nunca. ... */
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();

        http.open('GET', 'http://localhost:3000/profile');

        //execulta quando o html é carregado
        http.onload = () => {
            if (http.status >= 400) {

                //Se der erro passo pelo reject
                reject(JSON.parse(http.response));

            }
            else {

                // se der certo passo pelo resolve
                resolve(JSON.parse(http.response));

            }

            http.send();
        }
    })

    console.log(promise);
    return promise;
};

listaClientes()
.then(data => {
    //A cada retorno da promise execulta esta funcao
    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
    });})//resolve
.catch(error => {
    
})//reject
