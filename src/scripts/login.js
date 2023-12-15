
const url = 'http://127.0.0.1:5000'

async function login() {

    const urllogin = url + '/user/login'
    useremail = document.querySelector('#emaillogin');
    userpassword = document.querySelector('#passwordlogin');
    requser = {
        'email': useremail.value,
        'pwd': userpassword.value
    }
    await fetch(urllogin, {
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
                document.location.href = './index.html'
            }
        })
        .catch(err => console.error(err))
}