 const submit = document.getElementById("botton");
 const inputField = document.getElementById('namefield')

console.log(submit)

 submit.onclick = async () => {
    console.log(inputField.value)
    const name = inputField.value;

console.log(name) 

 const res = await fetch(`https://api.agify.io?name=${name}`,
 {method:'GET', redirect: 'follow'})
            .then(response => response.json())
            .then(result => {
                return result
            })
            .catch(error => console.log('error',error));

            console.log(res);

 const cardTitle = document.getElementsByClassName('card-title')
 
 cardTitle[0].innerHTML = name.toUpperCase();
 document.getElementsByClassName('card-text')[0].innerHTML = `The age of ${name} is ${res.age}`
 } 