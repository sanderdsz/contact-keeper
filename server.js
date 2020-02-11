const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Conectar DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
	res.json({ msg: 'Bem vindo à API do ContactKeeper' })
);

// Definir as rotas do app
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// Server static assets producao
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

// Objeto procura PORTA do ambiente
const PORT = process.env.PORT || 5000;

// npm run server => Para iniciar o servidor
app.listen(PORT, () => console.log(`Servidor iniciou na porta ${PORT}`));
