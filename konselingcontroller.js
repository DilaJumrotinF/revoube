const {ambilmodelpendaftar} = require("../model/pendaftar");
const ambilmodel = async(req,res) => {
    const data = await ambilmodelpendaftar ();
    res.json({pendaftarkonseling: {data}});
};

module.export = {ambilmodel};
