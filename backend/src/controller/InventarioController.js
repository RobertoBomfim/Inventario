const { addMilliseconds } = require('date-fns');
const InventarioModel = require('../model/InventarioModel');
const current = new Date();

class InventarioController {
    async create(req, res){
        const inventario = new InventarioModel(req.body);
        await inventario
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async update(req, res){
        await InventarioModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async delete(req, res){
        await InventarioModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async all(req, res){
        await InventarioModel.find({})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async show(req, res){
        await InventarioModel.find({ patrimonio: {'$in': req.params.patrimonio}})
        .sort('patrimonio')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

}

module.exports = new InventarioController();