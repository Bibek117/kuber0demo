import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
         message: "Hello World! from container",
         servive : "Kuber0demo",
         pod : process.env.POD_NAME || "Unknown",
         node : process.env.NODE_NAME || "Unknown",
         time : new Date().toISOString()
         });
});

app.get('/readyz',(req,res)=>res.status(200).send("ready"));
app.get('/healthz',(req,res)=>res.status(200).send("OK"));  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
