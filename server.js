'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const hostname = require('os').hostname();
  res.send(`
    <html>
      <body style="font-family: sans-serif; padding: 2rem;">
        <h1>Hello FS2026 DevOps Course! : )</h1>
        <p>Container ID: <strong>${hostname}</strong></p>
      </body>
    </html>
  `);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
