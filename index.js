loadPageIndex()
async function loadPageIndex() {
    let listPostCreated = await requestPosts();
    content = document.querySelector('#content');
    for (var i = 0; i < listPostCreated.length; i++){
        console.log('TEste')
        console.log(Object.values(listPostCreated[i]))
    }
}

async function requestPosts() {
    let url = 'http://127.0.0.1:5000/posts/'
    let resp = await fetch(url)
    let data = await resp.json();
    return createPost(data.posts)
}

function createPost(listpost) {
    let listformated = []
    for (var i = 0; i < listpost.length; i++){
        let postobj = {
            title: '<h2 class="title">' + listpost[i].title + '</h2>',
            posted: '<p class="meta"><small>Posted on '+listpost[i].createdat+'</small></p>',
            links: '<p class="links">&raquo; <a href="#" class="comments">3 Comments</a> &nbsp;&nbsp; &raquo; <a href="#" class="more">Read More</a></p>',
            text: '<div class="entry">'+listpost[i].text+'</div>'
        }
        listformated.push(postobj);

    }
    return listformated   
}