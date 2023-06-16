import express from "express"
import cors from "cors"
import db from "./database/db.js"
import blogRoutes from "./routes/routes.js"

const app = express()

app.use( cors()) 
app.use(express.json())
app.use('/blogs', blogRoutes)

try{
    await db.authenticate()
    console.log("Conexión exitosa a la bd.")

}catch(error){
    console.log(`El error de conexión es: ${error}`)
}

app.get('/', (req,res) =>{
    res.send("Probando")
})

app.listen(8000, ()=> {
    console.log("Servidor corriendo en puerto 8000.")
})
