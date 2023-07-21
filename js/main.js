let bfList = document.getElementById("FizzBuzzList")

const emptyColTemplate = document.createElement("div")
emptyColTemplate.classList.add("col","centeringItem")

const numberTemplate = document.createElement("div")
numberTemplate.classList.add("numberItem")

const badgeTemplate = document.createElement("span")
badgeTemplate.classList.add("position-absolute","translate-middle", "badge", "rounded-pill","bg-danger")

numberTemplate.append(badgeTemplate)
emptyColTemplate.appendChild(numberTemplate)

console.log(emptyColTemplate)
const fizz = "Fizz", buzz = "Buzz", fizzBuzz = "FizzBuzz";


//main
for (i = 1; i <= 100; i++) {
    let column = emptyColTemplate.cloneNode(true)
    let numberDiv = column.lastChild
    let badge = numberDiv.lastChild
    badge.innerHTML = i
    
    if (i % 3 == 0 && i % 5 == 0) {
       console.log(fizzBuzz)
        numberDiv.innerHTML += fizzBuzz
        numberDiv.style.backgroundColor = "#BC455A";

    } else if (i % 3 == 0) {
        console.log(fizz)
        numberDiv.innerHTML += fizz
        numberDiv.style.backgroundColor = "#FDBA77";

    } else if (i % 5 == 0) {
        console.log(buzz)
        numberDiv.innerHTML += buzz
        numberDiv.style.backgroundColor = "#F9D6D3";

    } else {
        console.log(i)
        badge.classList.add("d-none")
        numberDiv.innerHTML += i
        console.log(badge)
    }

    bfList.append(column)

}
