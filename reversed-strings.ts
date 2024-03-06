const solution = (str) => {

    let newStr = ''

    for (let i = str.length - 1; 0 <= i; i--) {
        newStr += str[i]
    }

    return newStr
}

console.log(solution('abc'))