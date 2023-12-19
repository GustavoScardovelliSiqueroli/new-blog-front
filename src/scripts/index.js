const user = JSON.parse(localStorage.getItem('user'));
console.log(user)
loadPageIndex();

async function loadPageIndex() {
    if (user){
        let menuright = document.querySelector('#menuright');
        menuright.innerHTML = '<a href="javascript:logout()"> logout</a>';
        if (user.isadm == 1) {
            menu.innerHTML = '<a href="./bloggar.html">bloggar</a>';
        }
    }

    let listPostCreated = await requestPosts();
    content = document.querySelector('#content');
    menu = document.querySelector('#menu');
    let htmlcontent = '';
    console.log(listPostCreated)
    for (var i = 0; i < listPostCreated.length; i++) {
        htmlcontent = htmlcontent + (Object.values(listPostCreated[i]).toString().replace(/,/g, ' '));
    }

    content.innerHTML = htmlcontent;
}

async function requestPosts() {
    let url = 'http://127.0.0.1:5000/posts/'
    let resp = await fetch(url)
    let data = await resp.json();
    try{
        return createPost(data.posts)
    }
    catch{
        return ['Ops.. ','Vazio']
    }
}

function createPost(listpost) {
    let listformated = []
    for (var i = 0; i < listpost.length; i++) {
        let postobj = {
            post: '<div class="post">',
            title: '<h2 class="title">' + listpost[i].title + '</h2>',
            posted: '<p class="meta"><small>Postado em ' + listpost[i].createdat + '</small></p>',
            links: '<p class="links">&raquo; <a href="#" class="comments">3 Comments</a> &nbsp;&nbsp; &raquo; <a href="#" class="more">Read More</a></p>',
            text: '<div class="entry">' + listpost[i].text + '</div>',
            endpost: '</div>'
        }
        listformated.push(postobj);

    }
    return listformated
}

function registerBlog() {
    titleblog = document.querySelector('#titleblog');
    textblog = document.querySelector('#textblog');

}

function logout(){
    localStorage.clear();
    window.location.reload(true);
}