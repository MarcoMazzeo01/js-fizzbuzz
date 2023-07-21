let bfList = document.getElementById("FizzBuzzList")

const fizz = "Fizz", buzz = "Buzz", fizzBuzz = "FizzBuzz";

for (i = 1; i <= 100; i++) {
    let emptyItem = document.createElement("li")
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(fizzBuzz)
        emptyItem.innerHTML = fizzBuzz

    } else if (i % 3 == 0) {
        console.log(fizz)
        emptyItem.innerHTML = fizz

    } else if (i % 5 == 0) {
        console.log(buzz)
        emptyItem.innerHTML = buzz

    } else {
        console.log(i)
        emptyItem.innerHTML = i
    }

    bfList.append(emptyItem)

}
