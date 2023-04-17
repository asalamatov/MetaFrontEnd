function addTwoNums(a, b) {
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError("the first argument is not a number");
        }
        else if (typeof(b) != 'number'){
            throw new ReferenceError("the second arg is not a number")
        }
        console.log(a+b)


    }
    catch (err) {
        console.log(err)
    }
}



addTwoNums(5, "5")
console.log("it still works");