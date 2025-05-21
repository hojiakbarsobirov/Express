import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import router from './routes/movies.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//express methods

app.use('/api/movies', router)

// File ni static qilib olish

app.use('/data', express.static(path.join(__dirname, 'db')))

const PORT = 1100

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
