const express = require('express')
const router = express.Router()

module.exports = function(app){
    var contactController = require('../controller/contactController')

    app.route('/contact')
        .get(contactController.allContact)
        .post(contactController.createContact)

    app.route('/contact/:cid')
        .get(contactController.oneContact)
        .delete(contactController.deleteContact)
        .post(contactController.updateContact)
}