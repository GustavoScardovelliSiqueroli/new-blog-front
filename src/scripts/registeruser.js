const url = 'http://127.0.0.1:5000'

async function registerUser(){

    const urlregister = url + '/user/register'
    let username = document.querySelector('#nameregister')
    let useremail = document.querySelector('#emailregister');
    let userpassword = document.querySelector('#passwordregister');
    let requser = {
        'name' : username.value,
        'email': useremail.value,
        'pwd': userpassword.value
    }
    await fetch(urlregister, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requser)
    })
        .then(response => response.json())
        .then(data => {
            if(data.message){
                window.alert(data.message);
            }
            else{
                localStorage.setItem('user', JSON.stringify(data))
                document.location.href = './user.html'
            }
        })
        .catch(err => console.error(err))
}