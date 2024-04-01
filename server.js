const express = require('express');
var bodyParser=require('body-parser')
const knex=require('./db/knex.js')

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

const getUsers=((req,res)=>{

    knex('customer').orderBy('id').select('*').then((result)=>{
        res.send(result)
    })
})


const getUser = (req, res) => {
    const address = req.params.id;
    knex('customer').where('id', address).select('*').then((result) => {
        if (result.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.send(result);
        }
    });
}


const createUser=((req,res)=>{
    const process=req.body
    knex('customer').insert({'id':process.id,'name':process.name,'email':process.email,'phone_number':process.phone_number,'updated_at':knex.fn.now(),'created_at':knex.fn.now(),'is_active':process.status})
        .then(()=>{
            res.status(201).send("user added successfully")
        })
})

const updateUser=((req,res)=>{

    const reqId = req.params.id;
    const updatedData = req.body;
    knex('customer').orderBy('id')
        .where('id', reqId)
        .update({
            ...updatedData,
            'updated_at': knex.fn.now()
        })

        .then(() => {
            res.status(200).send('User updated successfully');
        })
        ;
})

const updateFullUser=(req, res) => {
    const reqId = req.params.id;
    const updatedData = req.body;

    knex('customer')
        .where('id', reqId)
        .update({
            name: updatedData.name,
            email: updatedData.email,
            phone_number: updatedData.phone_number,
            is_active: updatedData.is_active,
            updated_at: knex.fn.now()
        })
        .then(() => {
            res.status(200).send('User replaced successfully');
        })
        ;
}
const deleteUser = (req, res) => {
    const req_id = req.params.id;

    knex('customer')
        .where('id', req_id)
        .del()
        .then(() => {
            res.status(200).send('User deleted successfully');
        })
        ;
};


const reqResult=((req,res)=>{

    const page=req.query.pg-1;
    const limit1=req.query.lm;
    const change=page*limit1;
    knex('customer').select('*').offset(change).limit(limit1).then((data)=>{
        res.send(data);
    })
})

app.get('/all-users',getUsers)
app.get('/single-user/:id',getUser)
app.post('/create-user',createUser)
app.patch('/update-user/:id',updateUser)
app.put('/update-f-user/:id',updateFullUser)
app.delete('/delete-user/:id',deleteUser)
app.get('/batch-users-req',reqResult)


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`the app is listening on port number ${port} ....`);
})

module.exports = app;
