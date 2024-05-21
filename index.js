const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./Routes/userRoutes')

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Server Working");
})

app.use('/api/users', userRoutes);

app.listen(PORT, ()=>{
    console.log("server running on "+PORT)
})

