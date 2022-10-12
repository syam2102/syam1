//creat a function that returns the sum of all even elements in the array//

function evenOfSum(array){
    let sum=0;
    let even = array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]%2 ==0){
            even = array[i];
            sum = sum + even;
        }
    }
    console.log(sum)
}
evenOfSum([1,3,2,5,6,7,4,8,9,11,15,12])