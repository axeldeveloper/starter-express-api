const express = require('express')
const app = express()
// onst PORT = process.env.PORT || 3000;


var ambiente   = process.env.AMBIENTE;

app.use(express.json())




app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})


app.get(`/teste`, async (req, res) => {

    res.json({ 
        "name": "teste", 
        "env": ambiente  
    });
});



app.listen(process.env.PORT || 3000)