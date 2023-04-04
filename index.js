const express = require('express');
const bodyParser = require('body-parser');
require('./db/connection')
const textModel =require("./models/schemaapi")

const app = express();
const PORT = process.env.port ||5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const html = `
  <h1>{{title}}</h1>
  <p>{{description}}</p>
  <div>{{content}}</div>
  <h2>{{author}}</h2>
  <span>{{date}}</span>
`;

const replaceValues = (data) => {
  let modifiedHtml = html;
  for (const key in data) {
    modifiedHtml = modifiedHtml.replace(`{{${key}}}`, data[key]);
  }
  return modifiedHtml;
};



app.post('/replace_html', async (req, res) => {
   try{
    const data = req.body;
    const textModelcreate =new textModel(data)
    console.log(data)
   const insertStrin=  await  textModelcreate.save()
    const modifiedHtml = replaceValues(insertStrin);
    res.send(modifiedHtml);
   }catch(e){
    console.log(e)
   }
  
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});