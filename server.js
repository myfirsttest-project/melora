import fs from 'fs'
import https from 'https'
import express from 'express'
import next from 'next'
import {parse} from 'url'
import path from 'path'
import config from "./config.js";


const {httpPort, httpsSecurePort} = config;
const httpsPort = process.env.SECURE_PORT || httpsSecurePort;
const PORT = process.env.PORT || httpPort;

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const httpsOptions = {
    key: fs.readFileSync(path.join(process.cwd(), 'cert/key.pem')),
    cert: fs.readFileSync(path.join(process.cwd(), 'cert/cert.pem')),
}

app.prepare().then(() => {
    const server = express()

    server.use(express.static(path.join(process.cwd(), "public")))



    server.all(/.*/, (req, res) => {
        const parsedUrl = parse(req.url, true)
        console.log("in all:");
        return handle(req, res, parsedUrl)
    })

    server.use((req, res) => {
        console.log("server.use route:", req.method, req.url);
        res.status(404).json({error: "Route not found"});
    });
    server.listen(PORT, () => {
        console.log(`Express server running on:: ${PORT}`);
    });

    https.createServer(httpsOptions, server).listen(httpsPort, () => {
        console.log('🚀 Next.js running at https://localhost:' + httpsPort)
    })
})
