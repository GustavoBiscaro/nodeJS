const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','mzLA18@#*', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Sobre Nós",
    conteudo: "Uma empresa que está a anos no mercado!"
})


const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Gustavo",
    sobrenome: "Miguel",
    idade: 25,
    email: "gustavo.biscaro@hotmail.com"
})

//Usuario.sync({force: true})