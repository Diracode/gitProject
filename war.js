var moveZeros = function(arr) {
    // TODO: Program me
    let ans1 = [];
    let ans2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 ? ans2.push(arr[i]) : ans1.push(arr[i]);
    }
    return ans1.concat(ans2);
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// [1, 2, 0, 1, 0, 1, 0, 3, 0, 1]
// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]