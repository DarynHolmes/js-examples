let axios = require("axios")

console.log ("Hello Javascript")

let name = "Reshma"
let code = 1234


console.log(code + " " + name)

function showBookName(response) {
  console.log(response.data.name)
}

axios.get("https://anapioficeandfire.com/api/books/1").then(showBookName)
