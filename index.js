import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import dalleRoutes from './routes/dalle.route.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limit: "50mb"}))

app.get("/", async(req, res) => {
    res.status(200).json({message: "Hello from DALL.E"})
})

app.use('/api/v1/dalle', dalleRoutes)

app.listen(8080, () => {
    console.log("server is running on PORT 8080")
})