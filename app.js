const express = require("express")

const app = express() 

app.set('view engine', 'ejs')

// app.set('views', path.join(__dirname, "src/views"))
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=> {
    res.render('index')
})

app.listen(3000, (req, res)=>{
    console.log('hola mundo');
    
})
