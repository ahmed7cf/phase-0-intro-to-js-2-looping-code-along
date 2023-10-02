// Code your solutions in this file

let newlist = []
function writeCards(arr, gift) {
    for(let i = 0; i < arr.length; i++){
        newlist.push("Thank you, " + arr[i] + ", for the wonderful " +  gift + " gift!");
        console.log(newlist[i]);
    }
    return newlist;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--;
    }
}