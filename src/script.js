
const data = {
  nome: "Manoel H. Caetano",
  titulo: "Dev Front-end",
  localidade: {
    cidade: "Bauru",
    estado: "São Paulo",
    pais: "Brasil"
  },
  telefone: "(14) 99821-9283",
  email: "manoel256@gmail.com",
  skills: {
    hardSkills: [
      { nome: "HTML", logo: "TODO" },
      { nome: "CSS", logo: "TODO" },
      { nome: "JavaScript", logo: "TODO" }
    ],
    softSkills: ["Organização", "Empatia", "Comunicação"]
  },
  idiomas: [
    { nome: "Português", nivel: "Nativo" },
    { nome: "Inglês", nivel: "Básico" },
    { nome: "Espanhol", nivel: "Básico" }
  ],
  portfolio: [
    {
      nome: "Crone da página do Discord",
      gitHub: " https://github.com/manolucca/Clone-Discord.git "
    },
    {
      nome: " Jogo de cartas Yu-Gi-Oh",
      gitHub: " https://github.com/manolucca/Jogo-de-cartas.git ",
     
    }
  ],
  experiencias: [
    {
      nome: "Suporte técnico",
      descricao: "",
      instituicao: "Tele Net LTDA",
      periodo: {
        inicio: "09/2024",
        fim: "Atualmente"
      }
    }
  ]
};

function fillProfile() {
  document.getElementById('nome').textContent = data.nome;
  document.getElementById('titulo').textContent = data.titulo;
  document.getElementById('localidade').textContent =
    `${data.localidade.cidade} - ${data.localidade.estado}, ${data.localidade.pais}`;


  const telefoneLink = document.getElementById('telefone');
  telefoneLink.textContent = data.telefone;
  telefoneLink.href = `tel:${data.telefone.replace(/[^\d]+/g, '')}`;


  const emailLink = document.getElementById('email');
  emailLink.textContent = data.email;
  emailLink.href = `mailto:${data.email}`;


  const hardSkillsList = document.getElementById('hardSkillsList');
  data.skills.hardSkills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.nome;
    hardSkillsList.appendChild(li);
  });

  const softSkillsList = document.getElementById('softSkillsList');
  data.skills.softSkills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    softSkillsList.appendChild(li);
  });


  const idiomasList = document.getElementById('idiomasList');
  data.idiomas.forEach(idioma => {
    const li = document.createElement('li');
    li.textContent = `${idioma.nome} (${idioma.nivel})`;
    idiomasList.appendChild(li);
  });


  const portfolioList = document.getElementById('portfolioList');
  data.portfolio.forEach(item => {
    const li = document.createElement('li');

    const title = document.createElement('h3');
    title.className = 'title';
    title.textContent = item.nome;
    li.appendChild(title);

    const gitHubLink = document.createElement('a');
    gitHubLink.href = item.gitHub;
    gitHubLink.target = '_blank';
    gitHubLink.textContent = 'GitHub';
    li.appendChild(gitHubLink);

    portfolioList.appendChild(li);
  });

  const experienceList = document.getElementById('experienceList');
  data.experiencias.forEach(exp => {
    const li = document.createElement('li');

    const title = document.createElement('h3');
    title.className = 'title';
    title.textContent = `${exp.nome} / ${exp.instituicao}`;
    li.appendChild(title);

    const period = document.createElement('p');
    period.className = 'period';
    period.textContent = `${exp.periodo.inicio} - ${exp.periodo.fim}`;
    li.appendChild(period);

    if (exp.descricao) {
      const desc = document.createElement('p');
      desc.textContent = exp.descricao;
      li.appendChild(desc);
    }

    experienceList.appendChild(li);
  });
}

function setupAcordeon() {
  const triggers = document.querySelectorAll('.acordeon .trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      trigger.parentElement.classList.toggle('open');
    });
  });
}


fillProfile();
setupAcordeon();
