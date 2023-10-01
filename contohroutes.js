const { Router } = require("express"); 
const { ambilmodel } = require("../controller/konselingcontroller")

const route = Router(); 

route.get("/", (req, res) => {
  ambilmodel(req, res);
});

module.exports = contohroutes;
