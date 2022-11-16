const db = require('../db'); 
const Cliente = {}; 

Cliente.get = async () => { 
    return await db.query('select * from clientes'); 
}

Cliente.find = async (id) => {
    return await db.query('select * from clientes where id=?', (id));
}

Cliente.create = async (data) => {
    return await db.query('insert into clientes set ?', [data]);
}

module.exports = Cliente; 