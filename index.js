const exp = require('constants');
const express = require('express')
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public')

app.set('view engine','ejs')

// app.use(express.static(publicPath));
app.get('',(_,res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_,res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(_,res) => {
    res.sendFile(`${publicPath}/help.html`)
})

app.get('/profile',(_,res) => {
    const user = {
        name: 'Mainak Chaudhuri',
        email: 'mainak@gmail.com',
        city: 'Kolkata',
        skills: ['python', 'react', 'java', 'c++']
    }
    res.render('profile', {user});
})

app.get('/login',(_,res)=>{
    res.render('login')
})

app.get('*',(_,res) => {
    res.sendFile(`${publicPath}/404.html`)
})
app.listen(5000)