var express = require('express')
var app = express()

const url ='mongodb+srv://nguyenbaxuan:xuanhuyen@cluster0.n1nbw.mongodb.net/test'

const MongoClient = require('mongodb').MongoClient;

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}))

const host = 'localhost'

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}))

var allEmployees = []

app.get('/',(req,res)=>{
    res.render('home')//viet cai j do xong ket thuc luon
})//dang ki dia chi trang
app.get('/new',(req,res)=>{
    res.render('addEmployee')
})
app.post('/addEmployee',(req,res)=>{
    const name = req.body.txtName
    const gender = req.body.txtGender
    const images = req.body.txtImages
    const employee = {
        'name' : name,
        'gender': gender,
        'images': images
    }
    //kiem tra du lieu truoc khi add
    if(name.length <5){
        res.render('addEmployee',{nameError: 'Ten phai lon hon 4 ki tu!'})
        return
    }
    allEmployees.push(employee)
    console.log(allEmployees)
    res.render('insertSuccess', {'employee':employee,
        'allEmployee':allEmployees})
})


const PORT = 9000
app.listen(PORT,()=>{
    console.log('Server is running at http://' + host + ":" + PORT)
})