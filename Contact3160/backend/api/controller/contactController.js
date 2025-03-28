const mongoose = require('mongoose')
const db = require('../model/contactmodel')

const contactCollection = db.collection('Contacts')

const createContact = async(req , res) =>{
    try{
        const {cid ,firstName , lastName , mobileNo , ...rest} = req.body

        if(!cid || cid === '') return res.send({massage : 'contactId cannot emty'});
        if(typeof cid != 'string') return res.send({massage : 'contactId must string'});

        if(!firstName || firstName === '') return res.send({massage : 'firstname cannot emty'});
        if(typeof firstName != 'string') return res.send({massage : 'firstname must string'});
        
        if(!lastName || lastName === '') return res.send({massage : 'lastname cannot emty'});
        if(typeof lastName != 'string') return res.send({massage : 'lastname must string'});
        
        if(!mobileNo || mobileNo === '') return res.send({massage : 'mobileNo cannot emty'});
        if(typeof mobileNo != 'string') return res.send({massage : 'mobileNo must string'});

        const result = await contactCollection.insertOne({
            cid,
            firstName,
            lastName,
            mobileNo,
            ...rest
        })

        if(result.acknowledged) res.send(req.body)

    }catch(error){

        console.log(error)
        res.status(500).send('Sever Error')

    }
}

const allContact = async(req , res) =>{

}

const oneContact = async(req , res) =>{

}

const updateContact = async(req , res) =>{

}

const deleteContact = async(req , res) =>{

}

module.exports = {
    createContact,
    allContact,
    oneContact,
    updateContact,
    deleteContact
}

