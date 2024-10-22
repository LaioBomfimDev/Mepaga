import express from "express";
const app = express();
import cors from "cors";
import {getAllDividas, createDividass, updateDividas, deleteDividas } from "./Controller/Controller.mjs";

 
// const cors = require("cors");
 //const {getAllDividas, createDividas, updateDividas, deleteDividas} = require ("./Controller/Controller.js");


app.use(express.json());
app.use(cors());

app.get ('/mepaga', getAllDividas);
app.post('/mepaga', createDividass);
app.put('/mepaga/ :id', updateDividas);
app.delete('/mepaga/ :id', deleteDividas);

app.listen(3000, () => {
    console.log(`servidor rodando com sucesso na porta 3000`);
});