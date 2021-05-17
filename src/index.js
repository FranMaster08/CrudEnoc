require('dotenv').config()
const app=require('./app')
app.listen(process.env.PORT,()=>{
    console.log(`this server running in the Port ${process.env.PORT}`);
})