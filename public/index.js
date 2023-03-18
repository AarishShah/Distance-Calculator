// document.querySelector('button').addEventListener('click',myFunction)

// function myFunction(e) {
//     e.preventDefault();

//     const food = document.querySelector('.food').value
//     const amount = document.querySelector('.amount').value
    
    
//     fetch(`http://localhost:3000/search?food=${food}&amount=${amount}`).then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//         document.querySelector('h1').innerHTML=`Food: ${data.name}<br>Amount: ${data.serving_size_g}g<br>Calories: ${data.calories}cal`
//     })
//     })
// }

