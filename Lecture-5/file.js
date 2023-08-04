let arr = [2, 3, 4, 5, 6];
let n = 2;

function findAns(arr, n)
{
    let ans = [];
    for(let i = 0; i<arr.length; i+= n)
    {
        ans.push(arr.slice(i, i+n));
    }
    return ans;
}

console.log(findAns(arr, n));