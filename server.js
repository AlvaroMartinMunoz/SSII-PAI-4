const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();

// Necesario si usas cookies para CSRF
app.use(cookieParser());

// Inicializa el middleware CSRF
const csrfProtection = csrf({ cookie: true });

// Ejemplo de ruta protegida
app.get('/form', csrfProtection, (req, res) => {
  res.send(`<form method="POST" action="/process"><input type="hidden" name="_csrf" value="${req.csrfToken()}"><button type="submit">Enviar</button></form>`);
});

app.post('/process', csrfProtection, (req, res) => {
  res.send('CSRF validado con éxito.');
});
