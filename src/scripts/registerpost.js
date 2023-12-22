const url = 'http://127.0.0.1:5000'

async function registerPost(){
    
    const urlregister = url + '/posts/register'
    let titleblog = document.querySelector('#titleblog')
    let textblog = document.querySelector('#textblog');
    let textblogcontent = document.querySelector('#textblogcontent');
    let imageblogcontent = document.querySelector('#imageblogcontent');
    
    let contents = [{'text': textblogcontent.value},
                    {'imagepath': imageblogcontent.value}]

    let reqpost = {
        'iduser' : JSON.parse(localStorage.getItem('user')).id,
        'title': titleblog.value,
        'text': textblog.value,
        'contents': contents
    }
    await fetch(urlregister, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqpost)
    })
        .then(response => response.json())
        .then(data => {
            window.alert(data.message);
            // if(data.message){
            // }
            // else{
            //     localStorage.setItem('user', JSON.stringify(data))
            //     document.location.href = './user.html'
            // }
        })
        .catch(err => console.error(err))
}