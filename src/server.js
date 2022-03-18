import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + "/src/views")

app.get('/', (req,res) => res.render("home"));

app.listen(3000);