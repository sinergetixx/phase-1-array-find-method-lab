// code your solution here

function superbowlWin(array){
    let winYear = array.find(isWin)
    return winYear ? winYear.year : undefined
}

function isWin(element) {
    return element.result === 'W'
}