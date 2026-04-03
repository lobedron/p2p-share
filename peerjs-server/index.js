const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');

const app = express();
app.use(cors());

const server = app.listen(process.env.PORT || 3000);
const peerServer = ExpressPeerServer(server, { debug: true });

app.use('/peerjs', peerServer);

console.log('PeerJS server is running');
