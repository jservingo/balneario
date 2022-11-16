const Cliente = require('../models/cliente');
const ClienteController = {};

ClienteController.index = async (req, res) => {
    const clientes = await Cliente.get(); 
    res.json(clientes); 
} 

ClienteController.show = async (req, res) => {
    const data = await Cliente.find(req.params.id);
    const cliente = data[0];
    res.json(cliente);
}
    
ClienteController.store = async (req, res) => {
    const data = req.body;
    await Cliente.create(data);
    res.json({msg: 'Cliente agregado'});
}    

module.exports = ClienteController; 