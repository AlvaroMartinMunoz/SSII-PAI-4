// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para loguear peticiones (útil para debugging)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Inicio</title></head>
      <body style="font-family:sans-serif; background:#f5f5f5; padding:2em;">
        <h1>🏠 Página Principal</h1>
        <p>Bienvenido al sitio web de prueba DevSecOps.</p>
        <ul>
          <li><a href="/usuarios">Gestión de usuarios</a></li>
          <li><a href="/stats">Estadísticas</a></li>
          <li><a href="/login">Acceso</a></li>
        </ul>
      </body>
    </html>
  `);
});

// Ruta /usuarios
app.get('/usuarios', (req, res) => {
  res.send(`
    <html>
      <head><title>Usuarios</title></head>
      <body style="font-family:sans-serif; background:#e0f7fa; padding:2em;">
        <h1>👤 Panel de Usuarios</h1>
        <ul>
          <li>Ana - admin</li>
          <li>Juan - editor</li>
          <li>Luis - viewer</li>
        </ul>
        <a href="/">← Volver al inicio</a>
      </body>
    </html>
  `);
});

// Ruta /stats
app.get('/stats', (req, res) => {
  res.send(`
    <html>
      <head><title>Estadísticas</title></head>
      <body style="font-family:sans-serif; background:#fff3e0; padding:2em;">
        <h1>📊 Estadísticas</h1>
        <p>Visitas diarias: 123</p>
        <p>Usuarios activos: 4</p>
        <a href="/">← Volver al inicio</a>
      </body>
    </html>
  `);
});

// Ruta /login (insegura, ideal para ZAP)
app.get('/login', (req, res) => {
  res.send(`
    <html>
      <head><title>Login</title></head>
      <body style="font-family:sans-serif; background:#fce4ec; padding:2em;">
        <h1>🔐 Login</h1>
        <form method="POST" action="/login">
          <label>Usuario:</label><br>
          <input name="user" type="text"><br><br>
          <label>Contraseña:</label><br>
          <input name="pass" type="password"><br><br>
          <button type="submit">Entrar</button>
        </form>
        <a href="/">← Volver al inicio</a>
      </body>
    </html>
  `);
});

// POST /login simula una validación insegura
app.post('/login', (req, res) => {
  res.send("Acceso denegado. Pero esta ruta puede usarse para test DAST.");
});

app.listen(port, () => {
  console.log(`Servidor en marcha: http://localhost:${port}`);
});
