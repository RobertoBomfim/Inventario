const InventarioModel = require('../model/InventarioModel');

const InventarioValidation = async(req, res, next) => {
const {isPast, isFuture} = require('date-fns');

    const {ies, patrimonio, ad, dominio, so, office, ram, marca, hd, cpu, tipo, local, usuario, dataCompra, status} = req.body;

    if(!ies)
    return res.status(400).json({ error: 'ies é obrigatório'});
    else if(!patrimonio)
    return res.status(400).json({ error: 'patrimônio é obrigatório'});
    else if(!ad)
    return res.status(400).json({ error: 'ad é obrigatório'});
    else if(!dominio)
    return res.status(400).json({ error: 'domínio é obrigatório'});
    else if(!so)
    return res.status(400).json({ error: 'versão SO é obrigatório'});
    else if(!office)
    return res.status(400).json({ error: 'versão Office é obrigatório'});
    else if(!ram)
    return res.status(400).json({ error: 'ram é obrigatório'});
    else if(!marca)
    return res.status(400).json({ error: 'marca é obrigatório'});
    else if(!hd)
    return res.status(400).json({ error: 'hd é obrigatório'});
    else if(!cpu)
    return res.status(400).json({ error: 'cpu é obrigatório'});
    else if(!tipo)
    return res.status(400).json({ error: 'tipo é obrigatório'});
    else if(!local)
    return res.status(400).json({ error: 'local é obrigatório'});
    else if(!usuario)
    return res.status(400).json({ error: 'usuario é obrigatório'});
    else if(!dataCompra)
    return res.status(400).json({ error: 'dataCompra é obrigatório'});
    else if(!status)
    return res.status(400).json({ error: 'status é obrigatório'});
    else{
        let exists;
        let existente;

        exists = await InventarioModel.findOne({'patrimonio': {'$in': patrimonio}});

        if(exists){
            return res.status(400).json({error: 'este patrimônio já foi cadastrado'});
        }

        existente = await InventarioModel.findOne({'usuario': {'$in': usuario}});

        if(existente){
            return res.status(400).json({error: 'este usuário já possui um patrimônio'})
        }

        next();
    }
}

module.exports = InventarioValidation;