import express from 'express';
import bodyParser from 'body-parser';

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.json({ body: "It's works" })
})

const PORT = process.env.PORT || 3000;
server.listen(PORT);