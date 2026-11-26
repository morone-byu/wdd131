// Menu hambúrguer
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("aberto");
    menuBtn.textContent = nav.classList.contains("aberto") ? "✖" : "☰";
});

// Rodapé
document.querySelector("#anoatual").textContent = new Date().getFullYear();
document.querySelector("#ultimamodificacao").textContent = `Última modificação: ${document.lastModified}`;

// Array em português - igual a tarefa pede
const templos = [
  {
    nomeDoTemplo: "Aba Nigéria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // 3 templos a mais que a tarefa pede
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Recife Brasil",
    localizacao: "Recife, Brasil",
    consagracao: "2000, 15 de dezembro",
    area: 37200,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700211-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Campinas Brasil",
    localizacao: "Campinas, Brasil",
    consagracao: "2002, 17 de maio",
    area: 48141,
    urlDaImagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Campinas_Brazil_Temple_by_Andres_Segal.jpeg?width=400"
  }
];

const container = document.querySelector("#container-templos");
const titulo = document.querySelector("#titulo-filtro");

function pegarAno(templo) {
    return parseInt(templo.consagracao.split(",")[0]);
}

function mostrarTemplos(lista) {
    container.innerHTML = "";
    lista.forEach((templo) => {
        const card = document.createElement("section");
        card.classList.add("templo-card");

        const nome = document.createElement("h2");
        nome.textContent = templo.nomeDoTemplo;

        const local = document.createElement("p");
        local.innerHTML = `<strong>Local:</strong> ${templo.localizacao}`;

        const dedicado = document.createElement("p");
        dedicado.innerHTML = `<strong>Consagração:</strong> ${templo.consagracao}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Área:</strong> ${templo.area} pés²`;

        const img = document.createElement("img");
        img.src = templo.urlDaImagem;
        img.alt = templo.nomeDoTemplo;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;

        card.appendChild(nome);
        card.appendChild(local);
        card.appendChild(dedicado);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

function mudarAtivo(idClicado) {
    document.querySelectorAll(".navegacao a").forEach(a => a.classList.remove("ativo"));
    document.querySelector(idClicado).classList.add("ativo");
}

document.querySelector("#inicio").addEventListener("click", (e) => {
    e.preventDefault();
    mudarAtivo("#inicio");
    titulo.textContent = "Templos do Brasil";
    mostrarTemplos(templos);
});

document.querySelector("#antigos").addEventListener("click", (e) => {
    e.preventDefault();
    mudarAtivo("#antigos");
    titulo.textContent = "Templos Antigos - Antes de 1900";
    mostrarTemplos(templos.filter(t => pegarAno(t) < 1900));
});

document.querySelector("#novos").addEventListener("click", (e) => {
    e.preventDefault();
    mudarAtivo("#novos");
    titulo.textContent = "Templos Novos - Depois de 2000";
    mostrarTemplos(templos.filter(t => pegarAno(t) > 2000));
});

document.querySelector("#grandes").addEventListener("click", (e) => {
    e.preventDefault();
    mudarAtivo("#grandes");
    titulo.textContent = "Templos Grandes - Mais de 90.000 pés²";
    mostrarTemplos(templos.filter(t => t.area > 90000));
});

document.querySelector("#pequenos").addEventListener("click", (e) => {
    e.preventDefault();
    mudarAtivo("#pequenos");
    titulo.textContent = "Templos Pequenos - Menos de 10.000 pés²";
    mostrarTemplos(templos.filter(t => t.area < 10000));
});

mostrarTemplos(templos);
