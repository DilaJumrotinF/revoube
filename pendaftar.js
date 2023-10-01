const {ReadFileSync} = require('fs');
const ambilmodelpendaftar = async() => {
    const data = await ReadFileSync("modul//pendaftar.json");
    return JSON.parse(data);
}

module.exports = {ambilmodelpendaftar};