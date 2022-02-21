const res = await fetch("http://anonym.ink:8000/demo/who-is-god")
const data = await res.text()
console.log(data)