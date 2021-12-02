const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const InventarioSchema = new Schema({
    ies: {type: String, required: true},
    patrimonio: {type: String, required: true},
    ad: {type: Boolean, required: true},
    dominio: {type: String, required: true},
    so: {type: String, required: true},
    office: {type: String, required: true},
    ram: {type: String, required: true},
    marca: {type: String, required: true},
    hd: {type: String, required: true},
    cpu: {type: String, required: true},
    tipo: {type: String, required: true},
    local: {type: String, required: true},
    usuario: {type: String, required: true},
    dataCompra: {type: Date, required: true},
    status: {type: String, required: true}

});

module.exports = mongoose.model('Inventario', InventarioSchema);