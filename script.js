const reslutJoke=document.querySelector('#joke')
const key='yyu34QzObl9hHyD0d2IgPA==5hgQCx7jts48dZjw'
const btn=document.querySelector('#btn');
btn.addEventListener('click',getData);
async function getData(){
    reslutJoke.innerHTML=`
    <p>Please Wait....</p>
    `;
    let response=await fetch(`https://api.api-ninjas.com/v1/dadjokes?limit=1` ,
    {
method: 'GET',
headers: {
    'X-Api-Key': 'yyu34QzObl9hHyD0d2IgPA==5hgQCx7jts48dZjw',
    
},
});
    let data=await response.json();
    showData(data);
}


function showData(details){
    console.log(details[0].joke);
    reslutJoke.innerHTML=`
    <p>${details[0].joke}</p>
    `;
}