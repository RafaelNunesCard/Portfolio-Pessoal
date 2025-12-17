import express from 'express'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/usuarios',async (req, res) => {
     
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

     res.send('Ok aqui deu certo')
})


app.put('/usuarios/:id',async (req, res) => {
     
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

     res.send('Ok aqui deu certo')
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado com sucesso"})
})

app.get('/usuarios', async (req, res) => {
    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                age: req.query.age,
                email: req.query.email
            }
        })
    }else{
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

app.listen(3000)

/*
    Criar nossa API de Usuários

    - Cria um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário

    Username: Rafael_Nunes
    Senha: R@fa1001
*/