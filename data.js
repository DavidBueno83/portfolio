import Certificate from "./classes/certficate.js";
import Profissional from "./classes/profissionals.js";

export const certificates = [
    new Certificate(
        "Técnico em Informática", 
        "Curso técnico que fiz integrado ao ensino médio. Aprendi sobre manutenção de computadores, configuração de redes e principalmente sobre lógica de programação e modelagem de software.", 
        "images/diplomaimg.png"
    ),
    new Certificate(
        "Certificado de Conclusão de Curso", 
        "Curso de Fundamentos de banco de dados e modelagem de sistemas.", 
        "images/oracle.png"
    )
]


export const profissionals = [
  new Profissional(
    "LandPage de Poker",
    "Uma LandPage que desenvolvi para um profissional do poker.",
    "images/poker.png",
    ["Javascript", "JQuery", "HTML", "CSS", "React", "TailwindCSS"]
  ),
  new Profissional(
    "Sistema de Quiz",
    "Desenvolvi um servidor em Node.js para armazenar informações de usuários e suas respectivas pontuações em um aplicativo de quiz. Para garantir a segurança dos dados e do servidor, implementei criptografia de senhas, autenticação de usuário para acesso de rotas seguras e APIs de proteção de cabeçalhos para as aplicações que fazem requisições ao servidor.",
    "images/node.jpg",
    ["Javascript", "Node", "MongoDB", "Mongoose"]
  ),
  new Profissional(
    "Biblioteca de Estilização",
    "Desenvolvi um framework de componentes pré-montados para um sistema de educação, baseado em um design de elementos construídos no Figma.",
    "images/frame.png",
    ["Javascript", "Node", "HTML", "CSS"]
  ),
  new Profissional(
    "Servidor com Socket.io",
    "Desenvolvi um servidor que processa dados em tempo real de chamadas telefônicas recebidas via Socket.io. As informações são organizadas e armazenadas em um banco de dados, para serem posteriormente enviadas a painéis de monitoramento e dashboards.",
    "images/node.jpg",
    ["TypeScript", "Node", "MySQL", "Prisma", "WebSocket", "Docker"]
  ),
  new Profissional(
    "Serviço de Otimização",
    "Otimizei o desempenho do site aplicando técnicas de otimização, incluindo melhorias em SEO, que resultaram em tempos de carregamento mais rápidos. Além disso, atuei no desenvolvimento de uma nova seção no site para complementar o conteúdo.",
    "images/advogado.png",
    ["Javascript", "CSS", "HTML", "Bootstrap", "SEO"]
  ),
  new Profissional(
    "Gerador de Relatórios",
    "Desenvolvi um gerador de relatórios integrado com banco de dados no Lazarus utilizando a linguagem Pascal.",
    "images/report.PNG",
    ["Pascal", "MySQL", "LazReport"]
  )
];