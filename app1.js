const http = require('http');
const fs = require('fs');
let token = 'Access_Pass'

let server = http.createServer(async (req, res) => {

    if (req.headers?.token) {

        /* Endpoint to accept a file and save it in a folder */
        if (req.method.toLocaleLowerCase() == 'post' && req.url == '/upload' && req.headers.token == token) {

            req.on("data", (data) => {
                let writeFile = fs.createWriteStream('./upload/upload.json', { encoding: 'utf-8' });
                writeFile.write(data.toString());
            });

            req.on('end', () => {
                res.write('Success');
                res.end('Passed');
            });
        }

        /* Enpoint to send the file to the front end */
        if (req.method.toLocaleLowerCase() == 'get' && req.url == '/request/file' && req.headers.token == token) {
            let readFile = fs.createReadStream('./data.txt', { encoding: 'utf-8' });
            readFile.pipe(res);
            res.on("finish", () => {
                res.end();
            });
        }


    } else {
        res.write('Authentication token required');
        res.end();
    }

}).listen(3000, () => { console.log('Listening.....') })