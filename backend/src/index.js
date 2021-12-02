const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const InventarioRoutes = require('./routes/InventarioRoutes');
server.use('/inventario', InventarioRoutes);

server.listen(3333, () => {
    console.log('API ONLINE');
});