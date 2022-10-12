//Given an array write a function that returns the index of smallest element of the array?//

function smallestElement(array){
    let n = array.length;

    let s = array[0]

    for(let i=0;i<n;i++){
        if (array[i]<=s){
            s=array[i];
        }
    }
    for(let i=0;i<n;i++){
        if(s==array[i]){
            console.log(i)
        }
    }
}
smallestElement([1,5,8,-5,-7,-2,-1])