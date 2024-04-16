const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <!DOCTYPE html>
            <html>

            <head>
            <title>Bienvenue</title>
            <link rel="icon" href="/ALE_favicon.ico" type="image/x-icon">
            <meta charset="UTF-8">
            <style>
            body {
            text-align: center;
            }
            .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 25%;
            height: 25%;
            }
            </style>
            </head>

            <body>
            <img src="/Logo_ALE.jpeg" alt="Logo" class="center">

            <h1>Bonjour les stagiaires</h1>

            <p> Voici un serveur HTTP en Node.js</p>
            <p> <a href="/Logo_ALE.jpeg">Logo ALE</a></p>

            <!-- Exemple Simple de fonctions en HTML --> 

            <p> Cliquez sur le bouton pour afficher "Hello World" dans un élément p (paragraphe) avec l'id="demo".</p>
            <p> <strong>Exemple:</strong></p>
            <button onclick="myFunction()">Cliquez ici</button>
            <br>
            <p id="demo"></p>

            <script>
            function myFunction() {
            document.getElementById("demo").innerHTML = "Hello World";
            }
            </script>

            </body>
            </html>
        `);
    } else if (req.url === '/Logo_ALE.jpeg') {
        const imgPath = path.join(__dirname, 'Logo_ALE.jpeg');
        const imgStream = fs.createReadStream(imgPath);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');
        imgStream.pipe(res);
    } else if (req.url === '/ALE_favicon.ico') {
        const faviconPath = path.join(__dirname, 'ALE_favicon.ico');
        const faviconStream = fs.createReadStream(faviconPath);
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/x-icon');
        faviconStream.pipe(res);
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});