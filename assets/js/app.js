//var
const menu = document.getElementById('menu')
const clickMenu = document.getElementById('menuClick')
const x = document.querySelector('header i')
const header = document.querySelector('header')
const warningB = document.getElementById('warningB')
const title = document.querySelector('input#title')
const des = document.querySelector('textarea#des')
const boxes = document.querySelector('#boxes #box-container')
const buttonDel = `<button class=" mt-3 cursor-pointer bg-red-500 text-white p-2 rounded-2xl hover:bg-red-600 transition" onclick = 'delB(this)'>پاک کردن</button>`
const body = document.getElementById('body')
const modal = document.querySelector('#modal')
const closeM = document.querySelector('#modal i')
const valueT = document.querySelector('input#title').value
const valueD = document.querySelector('textarea#des').value
const commentN = document.querySelector('#comments #commentI input')
const commentD = document.querySelector('#comments #commentI textarea')
const ulCom = document.querySelector('#comments .commentBx')
let isLike = false
let count = 0
//event
menu.addEventListener('click', addMenu);
//function
function addMenu() {
    clickMenu.classList.toggle('sm:translate-y-[0rem]')
    clickMenu.classList.toggle('sm:translate-y-[-30rem]')
    if (x.classList.contains('ri-menu-2-fill')) {
        x.classList.replace('ri-menu-2-fill', 'ri-close-fill')
    }
    else {
        x.classList.replace('ri-close-fill', 'ri-menu-2-fill')
    }
}
const add = (e) => {
    count++
    if (count !== 0) {
        warningB.innerHTML = ''
    } else {
        warningB.innerHTML = 'بلاگی وجود ندارد لطفا یکی ایجاد کنید...'
    }
    let valT = title.value
    let valD = des.value
    const boxM = document.createElement('div')
    const boxT = document.createElement('div')
    const Tle = document.createElement('h2')
    const Dsc = document.createElement('p')
    const Dt = document.createElement('p')
    Dt.innerHTML += `Id: ${Date.now()}`
    Tle.innerText += valT
    Dsc.innerText += valD
    boxM.className = 'box p-3 border-[#28A745] border-t-10 max-h-[20rem] w-[35rem] h-[16rem] max-w-[35rem] text-center mr-[1rem] rounded-t-xl shadow-[4px_4px_4px_#bababa] mt-[5rem] hover:shadow-[6px_5px_10px_#272727] transition'
    Dsc.className = 'text-gray-500 text-wrap line-clamp-4'
    Tle.className = 'text-[1.75rem] line-clamp-1'
    boxT.appendChild(Tle)
    boxT.appendChild(Dt)
    boxT.appendChild(Dsc)
    boxM.appendChild(boxT)
    boxM.innerHTML += buttonDel
    boxes.appendChild(boxM)
    console.log(boxes);
    title.value = ''
    des.value = ''
    body.style.overflowX = 'visible'
    body.style.overflowY = 'visible'
    modal.classList.add('hidden')
    modal.classList.remove('flex')
}
function delB(e) {
    e.parentElement.remove()
    count--
    console.log(count);
    if (count !== 0) {
        warningB.textContent += ''
    } else {
        warningB.textContent += 'بلاگی وجود ندارد لطفا یکی ایجاد کنید...'
    }
}
const modalOpen = () => {
    body.style.overflowX = 'hidden'
    body.style.overflowY = 'hidden'
    modal.classList.add('flex')
    modal.classList.remove('hidden')
}
const modalClose = () => {
    body.style.overflowX = 'visible'
    body.style.overflowY = 'visible'
    modal.classList.add('hidden')
    modal.classList.remove('flex')
}
const addComment = () => {
    if (commentN.value.length < 3 || commentD.value.length <= 5) {
        alert('لطفا بیشتر از 6 کلمه استفاده کنید:)')
    }
    else {
        const user = document.createElement('i')
        const Fname = document.createElement('span')
        const Icommnet = document.createElement('p')
        const boxCom = document.createElement('div')
        const boxTC = document.createElement('div')
        const like = document.createElement('li')
        const likeC = document.createElement('span')
        const likeBx = document.createElement('div')
        let countL = Math.floor(Math.random() * 100)
        const liked = () => {
            like.classList.toggle('ri-heart-fill')
            like.classList.toggle('ri-heart-line')
            if (!isLike) {
                countL++
                likeC.textContent = countL
                isLike = !isLike
            }
            else {
                countL--
                likeC.textContent = countL
                isLike = !isLike
            }
        }
        boxCom.appendChild(user)
        boxTC.appendChild(Fname)
        boxTC.appendChild(Icommnet)
        boxTC.appendChild(like)
        boxTC.appendChild(likeC)
        boxTC.appendChild(likeBx)
        likeBx.appendChild(like)
        likeBx.appendChild(likeC)
        boxCom.appendChild(boxTC)
        ulCom.appendChild(boxCom)
        Fname.innerHTML += commentN.value
        user.className = 'ri-user-4-line text-[#000] text-[2.5rem] ml-3'
        boxCom.className = 'flex items-center shadow-[10px_10px_10px_#bababa] mt-[15px] hover:shadow-[10px_10px_10px_#272727]'
        Icommnet.className = 'break-all text-gray-500'
        Fname.className = 'text-[1.5rem]'
        like.className = 'ri-heart-line text-left text-[1.5rem] mr-[12rem]'
        likeBx.className = 'flex items-center'
        likeC.innerHTML += countL
        Icommnet.innerHTML += commentD.value
        commentD.value = ''
        commentN.value = ''
        console.log(boxCom);
        like.addEventListener('click', liked)
    }
}