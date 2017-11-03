let axios = require("axios")

console.log ("Hello Javascript")

let name = "Reshma"
let code = 1234


console.log(code + " " + name)

function showBookName(response) {
  console.log(response.data.name)
}

function showBookList(response) {
  let list = response.data

  for(let i = 0; i < list.length; i++) {
    console.log(list[i].name + " - " + list[i].released)
  }
}


axios.get("https://anapioficeandfire.com/api/books").then(showBookList)
