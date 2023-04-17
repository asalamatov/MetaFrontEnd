function letterFinder(word, match) {
    for (i = 0; i<word.length; i++ ) {
        var char = word[i];
        if (char == match) {
            console.log("Found the", match,"at",i);
        } else {
            console.log("---No match found at", i);
        }
    }
}

// letterFinder("test", "t")


var storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.socialSmarts = 50;
storeManager.socialSkills = 500;
// console.log(storeManager)

var clothes = [];
clothes.push("hat1");
clothes.push("hat2");
clothes.push("hat3");
clothes.push("hat4");
clothes.push("hat5");
clothes.pop();
clothes.push("hat6");
console.log(clothes[2])

var favCar = {};
favCar.color = 'white';
favCar.covertible = true;
favCar.turnKey = function() {
    console.log('engine running');
}
console.log(favCar)
favCar.turnKey();
