
//GET
const listaClientes = () => {

    //Por padrão a Fecth API já realiza um get e devolve uma promise
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Não foi possivel listar os clintes')
        });
};

//POST
const criarCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.body
        })
        .finally(() => {
            console.log('Adicionado')
        });
}

//GET
const detalhaCliente = (id) => {

    //Seleciona Cliente
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            return resposta.json()
        }).finally(() => {
            console.log('selecionado')
        });
};

//DELETE
const deletarCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
        .then(resposta => {
            
            if (!resposta.ok) {
                return resposta.body
            }
        })
        .finally(() => {
            console.log('Deletado')
        });
}


//PUT
const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.body
        })
        .finally(() => {
            console.log('Editado')
        });
}

export const clienteService = {
    listaClientes,
    criarCliente,
    deletarCliente,
    atualizaCliente,
    detalhaCliente
}
