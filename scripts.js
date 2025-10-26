import { certificates, profissionals } from "./data.js"


//----------------------------------------------------------------//

const home = document.querySelector('.home')

home.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


const nav = document.querySelector('nav')

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 0){
        nav.style.opacity = 0.1;
    } else {
        nav.style.opacity = 1;
    }
})

nav.addEventListener('mouseover', ()=> {
    nav.style.opacity = 1
    nav.style.backgorund = 'linear-gradient(to right, rgb(0, 26, 36), rgb(0, 0, 0))'
})

nav.addEventListener('click', ()=> {
    nav.style.opacity = 1
    nav.style.backgorund = 'linear-gradient(to right, rgb(0, 26, 36), rgb(0, 0, 0))'
})

//----------------------------------------------------------------//

const toogleItem = (item, display) => {
    item.style.display != display ? item.style.display = display : item.style.display = 'none' 
}

const navList = document.querySelector('.nav-items-list')
const btnList = document.querySelector('.menu-icon')
const listItems = document.querySelector('.nav-items-list')

btnList.addEventListener('click', ()=> {
    toogleItem(navList, 'flex')
})

listItems.addEventListener('click', ()=> {
    navList.style.display = 'none'
})

//----------------------------------------------------------------//

const listCertificados = document.querySelector(".certificates")

certificates.forEach((item) => {
    
    const certificate = document.createElement('div')
    certificate.classList.add('certificate-card')

    const divImg = document.createElement('div')
    divImg.classList.add('div-img')

    const img = document.createElement('img')
    img.src = item.img

    const divText = document.createElement('div')
    divText.classList.add('text-card-certificate') 
    const title = document.createElement('h1')
    title.innerHTML = item.title
    const desc = document.createElement('p')
    desc.innerHTML = item.desc

    listCertificados.appendChild(certificate)
    certificate.appendChild(divImg)
    divImg.appendChild(img)
    certificate.appendChild(divText)
    divText.appendChild(title)
    divText.appendChild(desc)

})

const listProfissional = document.querySelector('.profissionals')

profissionals.forEach((item) => {

    const profissional = document.createElement('div')
    profissional.classList.add('profissional-card')

    const divImg = document.createElement('div')
    divImg.classList.add('div-img-p')

    const img = document.createElement('img')
    img.src = item.img

    const divText = document.createElement('div')
    divText.classList.add('text-card-profissional') 
    const title = document.createElement('h1')
    title.innerHTML = item.title
    const desc = document.createElement('p')
    desc.innerHTML = item.desc

    const toolsLabels = document.createElement('div')
    toolsLabels.classList.add('tools')

    item.tools.forEach((tool)=> {
        const label = document.createElement('label')
        label.innerHTML = tool
        toolsLabels.appendChild(label)
    })

    const divOrg = document.createElement('div')
    divOrg.classList.add('div-org-text')

    listProfissional.appendChild(profissional)
    divImg.appendChild(img)
    profissional.appendChild(divOrg)
    divText.appendChild(title)
    divText.appendChild(desc)
    divOrg.appendChild(divImg)
    divOrg.appendChild(divText)
    profissional.appendChild(toolsLabels)

})

const goDiv = (div, block) => {
    div.scrollIntoView({
        behavior: "smooth",
        block: block
    })
}

const aboutme = document.querySelector('.apresentation')
const contacts = document.querySelector('.contacts')

const contactLink = document.getElementById('contact')
const projectLink = document.getElementById('project')
const certificateLink = document.getElementById('certificate')
const aboutLink = document.getElementById('about')
const contactLinkMobile = document.getElementById('contact-mobile')
const projectLinkMobile = document.getElementById('project-mobile')
const certificateLinkMobile = document.getElementById('certificate-mobile')
const aboutLinkMobile = document.getElementById('about-mobile')

const listLinks = [
  { link: contactLink, div: contacts, block: "center" },
  { link: projectLink, div: listProfissional, block: "start" },
  { link: certificateLink, div: listCertificados, block: "start" },
  { link: aboutLink, div: aboutme, block: "center" },
  { link: contactLinkMobile, div: contacts, block: "center" },
  { link: projectLinkMobile, div: listProfissional, block: "start" },
  { link: certificateLinkMobile, div: listCertificados, block: "start" },
  { link: aboutLinkMobile, div: aboutme, block: "center" }
];

listLinks.forEach((item) => {
    item.link.addEventListener('click', ()=> {
        goDiv(item.div, item.block)
    })
})



const getStarted = document.getElementById('btn-get-started')
const whatsapp = document.getElementById('btn-whatsapp')
const email = document.getElementById('btn-email')
const freelas = document.getElementById('btn-99freelas')

getStarted.addEventListener('click', ()=> {
    window.open("https://contate.me/david83developer", "_blank");
})


whatsapp.addEventListener('click', ()=> {
    window.open("https://contate.me/david83developer", "_blank");
})

email.addEventListener('click', ()=> {
    window.open("mailto:davidifscinfo20@gmail.com?subject=Olá%20David,%20vi%20seu%20portfólio!", "_blank")
})

freelas.addEventListener('click', ()=> {
    window.open("https://www.99freelas.com.br/user/david_bueno_developer", "_blank")
})