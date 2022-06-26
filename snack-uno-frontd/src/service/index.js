import axios from 'axios'
// products
export const getProducts = async () => {
    await axios.get(`http://52.91.200.181/products`)
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    });

}
export const getProductsID = async (id) => {
    await axios.get(`http://52.91.200.181/products?id_product=${id}`)
        .then((response) => {
            return response
        })
        .catch(error => {
            return error
        });
}
export const postProduto = async ({ nome, preco, descricao, imagem }) => {
    await axios.post(`http://52.91.200.181/products`, {
        nome: nome,
        preco: preco,
        descricao: descricao,
        imagem: imagem
    })

}
//restaurant

export const getRestaurant = async () => {
    await axios.get(`http://52.91.200.181/restaurants`)
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    });

}
export const getRestaurantID = async (id) => {
    await axios.get(`http://52.91.200.181/restaurants?id_restaurant=${id}`)
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    });

}
//cadastro
export const cadastroUser = async (name, cpf, data_birth, telephone, email, password) => {
    // console.log(name, cpf, data_birth, telephone, email, password)
    await axios.post(`http://52.91.200.181/users/signup`, {
        name:name ,
        cpf:cpf ,
        data_birth: data_birth,
        telephone: telephone,
        email: email,
        password:password
    })
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    });
}
//user
export const getUser = async (id) => {
    await axios.get(`http://52.91.200.181/requests`)
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    });

}

export const getUserID = async (id) => {
    await axios.get(`http://52.91.200.181/requests?id_usuario=${id}`)
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    });

}
export const getUserPedidoID = async (id) => {
    await axios.get(`http://52.91.200.181/requests?id_pedido=${id}`)
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    });

}



/*
export const getCardsID = async (id) => {
    await axios.get(`http://52.91.200.181/cards?id_usuario=${id}`)
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    });

}
*/



