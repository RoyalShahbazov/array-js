
// let inp = document.getElementById ("inp")
// let btn = document.getElementById ("btn")
// let clubs = ["real_madrid", "united", "arsenal", ]

// function add () {
//     clubs.push (inp.value)
//     console.log(clubs);
// }


let clubs = ["RealMadrid", "United"]
const inp = document.getElementById("inp")
const btn = document.getElementById("btn")
const ul = document.getElementById("ul")

btn.addEventListener("click", () => {
  clubs.push(inp.value)
  Data(inp.value)
  console.log(clubs)
})

function Data(value) {
  ul.innerHTML += "<li>" + value + "</li>"
}

function Render() {
  for (let i = 0; i < clubs.length; i++) {
    Data(clubs[i])
  }
}
Render()
