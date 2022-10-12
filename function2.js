/*Given a number n return the sum of all the consiqutive numbers till n*/
function consiqutivesum(n){
    let sum=0;
    for(i=0;i<n;i++){
        sum += i;
    }
    console.log("sum of n numbers",sum)
}
consiqutivesum(100)
