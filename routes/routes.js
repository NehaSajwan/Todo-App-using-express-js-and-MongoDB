//import modules
const express = require ("express")
const { index, store, destroy, edit, update } = require("../controllers/todo.controller")

//create router instance
const router= express.Router()

//home page
router.get('/', index)

//store page
router.post("/store", store)

//update page
router.post("/update/:id", update)

//edit page
router.get("/edit/:id", edit)

//delete page
router.post("/destroy/:id", destroy)

module.exports= router