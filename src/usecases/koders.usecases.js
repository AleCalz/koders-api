/* eslint-disable */
//solo los casos de uso se pueden comunicar con las entidades(modelos)

//modelos siempre con la primera letra mayus
// const kodersModel = require('../models/koders.model')
const Koder = require('../models/koders.model')

async function create(koderData){ //se vuelve una promesa

    //le indicamos que espere que se resuelva la promesa
    //para ocupar el await siempreeeee debe contener el asyn sobre la funcion
    const newKoder = await Koder.create(koderData)
    return newKoder
}
//modelo sirve para crear o consultar info
async function getAll(){

    //find regresa un query que es una promesa de igual manera
    const allKoders = await Koder.find()

    return allKoders
}

async function getById(id){
    const koder = await Koder.findById(id);
    return koder
}

async function deleteById(id){
    const koderDeleted = await Koder.findByIdAndDelete(id)
    return koderDeleted
}

async function UpdateById(id, newKoderData){
    //hay que decirle que nos regrese el koder actualizado mediante un tercer parametro par configurar
    const updateKoder = await Koder.findByIdAndUpdate(id, newKoderData, {
        new: true,
    })

    return updateKoder
    // const updateKoder = await Koder.findByIdAndUpdate(id, newKoderData)
}

module.exports = {create, getAll, getById, deleteById, UpdateById}

