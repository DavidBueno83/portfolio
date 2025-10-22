const certificates = [
    ifsc = {
        title: "Técnico em Informática",
        desc: "Curso técnico que fiz integrado ao ensino médio. Aprendi sobre manutenção de computadores, configuração de redes e principalmente sobre lógica de programação e modelagem de software.",
        img: "images/diplomaimg.png"
    },
    oracle = {
        title: "Certificado de Conclusão de Curso",
        desc: "Curso de Fundamentos de banco de dados e modelagem de sistemas.",
        img: "images/oracle.png"
    }
]

const profissionals = [
    landpagePoker = {
        title: "LandPage de Poker",
        desc: "Uma LandPage que desenvolvi para um profissional do poker.",
        img: "images/poker.png",
        tools: [
            'Javascript', 'JQuery', 'HTML', 'CSS', 'React', 'TailwindCSS'
        ]
    },
    quizsistem = {
        title: "Sistema de Quiz",
        desc: "Desenvolvi um servidor em Node.js para armazenar informações de usuários e suas respectivas pontuações em um aplicativo de quiz Para garantir a segurança dos dados e do servidor, implementei criptografia de senhas, autenticação de usuário para acesso de rotas seguras e APIs de proteção de cabeçalhos para as aplicações que fazem requisições ao servidor.",
        img: "images/node.jpg",
        tools: [
            'Javascript', 'Node', 'MongoDB', 'Mongoose'
        ]
    },
    styleLibrary = {
        title: "Biblioteca de estilização",
        desc: "Desenvolvi um framework de componentes pré-montados para um sistema de educação, baseado em um design de elementos construídos no Figma.",
        img: "images/frame.png",
        tools: [
            'Javascript', 'Node', 'HTML', 'CSS'
        ]
    },
    serverSocket = {
        title: "Servidor com Socket.io",
        desc: "Desenvolvi um servidor que processa dados em tempo real de chamadas telefônicas recebidas via Socket.io. As informações são organizadas e armazenadas em um banco de dados, para serem posteriormente enviadas a painéis de monitoramento e dashboards.",
        img: "images/node.jpg",
        tools: [
            'TypeScript', 'Node', 'MySQL', 'Prisma', 'WebSocket', 'Docker'
        ]
    },
    pageSeo = {
        title: "Serviço de Otimização",
        desc: "Otimizei o desempenho do site aplicando técnicas de otimização, incluindo melhorias em SEO, que resultaram em tempos de carregamento mais rápidos. Além disso, atuei no desenvolvolvimento uma nova seção no site para complementar com o conteúdo.",
        img: "images/advogado.png",
        tools: [
            'Javascript', 'CSS', 'HTML', 'Bootstrap', 'SEO'
        ]
    },
    relatorioOS = {
        title: "Gerador de Relatórios",
        desc: "Desenvolvi um gerador de realatórios integrado com banco de dados no Lazarus utilizando a linguagem Pascal.",
        img: "images/report.PNG",
        tools: [
            'Pascal', 'MySQL', 'LazReport'
        ]
    }
]

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

btnList.addEventListener('click', ()=> {
    toogleItem(navList, 'flex')
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