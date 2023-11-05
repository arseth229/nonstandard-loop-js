function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddArr = [];
    for (let i = 1; i < arr.length; i += 2) {
            oddArr = oddArr.concat(arr[i])
    }
    return oddArr;
};

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let revArr = [];
    for (let i = arr.length - 1; i > 0; i--) {
        if (i % 2 === 1) {
            revArr = revArr.concat(arr[i])
        }
    }
    return revArr;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let powArr = [];
    for (let i = 1; i < arr.length; i *= 2) {
        powArr = powArr.concat(arr[i])
    }
    return powArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let nthArr = [];
    for (let i = 1; i < arr.length; i *= n) {
        nthArr = nthArr.concat(arr[i])
    }
    return nthArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let halfArr = [];
    if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length / 2; i += 1) {
    halfArr = halfArr.concat(arr[i]);
    }
  }
  else if (arr.length % 2 !== 0) {
    let oddLen = arr.length + 1
    for (let i = 0; i < oddLen / 2; i += 1) {
        halfArr = halfArr.concat(arr[i])
    }
  }
  return halfArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let secArr = [];
    if (arr.length % 2 === 0) {
        for (let i = arr.length / 2; i < arr.length; i++) {
            secArr = secArr.concat(arr[i]);
        }
    }
    else if (arr.length % 2 !== 0) {
        let evin = arr.length + 1;
        let noHaf = evin / 1;
        for (let i = noHaf + 1; i < arr.length; i++) {
            secArr = secArr.concat(arr[i]);
        }
    }
    return secArr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
