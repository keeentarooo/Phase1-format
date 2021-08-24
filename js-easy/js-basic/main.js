const title = document.getElementById('title')
console.log('<h1>タグの中身のテキストは${title.textContent}です。')

const title = document.querySelector('list')
console.log("<ul>")

const newItem = document.createElement("li")
newItem.textContent = "もも"
list.appendChild(newItem)