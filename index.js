const express = require("express")
const app = express ()
const contohroutes = require("./route/contohroutes")

app.use("/route", contohroutes) ;

app.listen (3005,()=> {
    console.log("server ready")
}
)