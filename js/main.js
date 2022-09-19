// code start on line 77

//from json generator
const posts = [
    {
      "_id": "631d89e9ad294007e737018b",
      "index": 0,
      "picture": "https://picsum.photos/200",
      "name": "Sawyer Walker",
      "about": "Laboris in irue anim exercitation ad duis deserunt"
    },
    {
      "_id": "631d89e9cb55a00aeda6119b",
      "index": 1,
      "picture": "https://picsum.photos/201",
      "name": "Potter Bowen",
      "about": "Ex Lorem ullamco nostrud dolore Lorem in Lorem."
    },
    {
      "_id": "631d89e9ef5f7ec2c65cff04",
      "index": 2,
      "picture": "https://picsum.photos/202",
      "name": "Burris Price",
      "about": "Id consequat irure consectetur nulla sit consequat magna e."
    },
    {
      "_id": "631d89e9e8df621a9634e0dd",
      "index": 3,
      "picture": "https://picsum.photos/203",
      "name": "Kidd Morton",
      "about": "Id eu velit in sint. Fugiat adipisicing sint do labore sit eiusmod"
    },
    {
      "_id": "631d89e96ce6f044a5a33aed",
      "index": 4,
      "picture": "https://picsum.photos/204",
      "name": "Miranda Tate",
      "about": "Veniam et eiusmod ex sint commodo amet labore quis cupidatat. "
    },
    {
      "_id": "631d89e992d0bd0ec41dc387",
      "index": 5,
      "picture": "https://picsum.photos/205",
      "name": "Cathy Finley",
      "about": "Amet velit ea consequat reprehenderit elit aute incididunt."
    },
    {
      "_id": "631d89e98850222c21dad5bd",
      "index": 6,
      "picture": "https://picsum.photos/206",
      "name": "Pansy Benjamin",
      "about": "Elit est dolor incididunt adipisicing"
    },
    {
      "_id": "631d89e9a562c1a300cafd36",
      "index": 7,
      "picture": "https://picsum.photos/207",
      "name": "Deann Cash",
      "about": "Amet dolor sint anim incididunt eiusmod tempor."
    },
    {
      "_id": "631d89e9fb066c7390dbfd18",
      "index": 8,
      "picture": "https://picsum.photos/208",
      "name": "Liz Ramos",
      "about": "Aute ex voluptate pariatur sunt sunt officia veniam elit nisi. "
    },
    {
      "_id": "631d89e9ceb166e444b7e8a2",
      "index": 9,
      "picture": "https://picsum.photos/209",
      "name": "Cherry Gibbs",
      "about": "Qui cillum amet amet do consectetur mollit excepteur proident."
    }
  ]


const cssClass = {
    div: 'userPost',
    invisible: 'invisible'
}
let num = 0;


function addPost (post,className = ''){

    num++
    const date = new Date()
    const minutes = date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()
    
    const time = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} 
                    ${date.getHours()}:${minutes}`
    return`
    <div class="${cssClass['div']} ${className}">
        <img src="${post.picture}" alt="">
        <div>
            <h3>${post.name +' '+ num}</h3>
            <span>${time}</span>
            <p>${post.about}</p>
        </div>
    </div>
    `

}

function transition(post){
    setTimeout(()=>{
        const container = document.querySelector('.container')
        const arr = document.querySelectorAll('.userPost')
        arr[0].classList.add('down')
        
        setTimeout(()=>{
            container.removeChild(container.lastElementChild)
            arr[0].style.transition = "none"
            arr[0].classList.remove('down')
            container.insertAdjacentHTML('afterbegin', addPost(post,cssClass['invisible']))

            setTimeout(()=>{

                document.querySelectorAll('.userPost')[0].classList.remove('invisible')

            },200)

        },1200)
    },1000)
    
}




document.querySelector('.container').innerHTML = addPost(posts[0])
document.querySelector('.container').innerHTML += addPost(posts[1])
document.querySelector('.container').innerHTML += addPost(posts[2])


const i = setInterval(()=>{
    if(num >= 10) return clearInterval(i);
    
    transition(posts[num]);
},3500)

