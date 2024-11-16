const randomNumber = 13;

document.querySelector('.form').addEventListener('submit',
function(e) {
    e.preventDefault();
    let value = document.getElementById('amount').value;
    value = parseInt(value);
    console.log('Input value type');
    console.log(value);
    console.log('Sum of two values');
    console.log(randomNumber + value);
    
})