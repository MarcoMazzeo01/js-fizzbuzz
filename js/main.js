let bfList = document.getElementById("FizzBuzzList")

const emptyColTemplate = document.createElement("div")
emptyColTemplate.classList.add("col")

const numberTemplate = document.createElement("div")
numberTemplate.classList.add("numberItem")

emptyColTemplate.append(numberTemplate)


const fizz = "Fizz", buzz = "Buzz", fizzBuzz = "FizzBuzz";


//main
for (i = 1; i <= 100; i++) {
    let column = emptyColTemplate.cloneNode(true)
    let numberDiv = column.lastChild
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(fizzBuzz)
        numberDiv.innerHTML = fizzBuzz

    } else if (i % 3 == 0) {
        console.log(fizz)
        numberDiv.innerHTML = fizz

    } else if (i % 5 == 0) {
        console.log(buzz)
        numberDiv.innerHTML = buzz

    } else {
        console.log(i)
        numberDiv.innerHTML = i
    }

    bfList.appendChild(column)

}
