let saveEl = document.getElementById("save-el")
console.log(saveEl)
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
        console.log(count)
}
