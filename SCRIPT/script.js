const Esquerda1 = document.getElementById("setaE1");
const Esquerda2 = document.getElementById("setaE2");
const Esquerda3 = document.getElementById("setaE3");
const Esquerda4 = document.getElementById("setaE4");
const Direita1 = document.getElementById("setaD1");
const Direita2 = document.getElementById("setaD2");
const Direita3 = document.getElementById("setaD3");
const Direita4 = document.getElementById("setaD4");
const boneca = document.getElementById("boneca1");
const cabelo = document.getElementById("cabelo1");
const vestido = document.getElementById("vestido1");
const asa = document.getElementById("asa1");
const qtdboneca = 4;
const qtdcabelo = 4;
const qtdvestido = 4;
const qtdasa = 4;

let bonecaatual = 1;
let cabeloatual = 1;
let vestidoatual = 1;
let asaatual = 1;

function proximaboneca() {
    if (bonecaatual < qtdboneca) {
        bonecaatual = bonecaatual + 1;
    }
    else {bonecaatual = 1;
    }

    boneca.src="../Imagem/boneca" + bonecaatual + ".png"
}

function bonecaanterior() {
    if (bonecaatual === 1) {
        bonecaatual = qtdboneca
    }
    else {bonecaatual = bonecaatual - 1;
    }

    boneca.src = "../Imagem/boneca" + bonecaatual + ".png";
}

function proximocabelo() {
    if (cabeloatual < qtdcabelo) {
        cabeloatual = cabeloatual + 1;
    }
    else {cabeloatual = 1;
    }

    cabelo.src="../Imagem/cabelo" + cabeloatual + ".png"
}

function cabeloanterior() {
    if (cabeloatual === 1) {
        cabeloatual = qtdcabelo
    }
    else {cabeloatual = cabeloatual - 1;
    }

    cabelo.src = "../Imagem/cabelo" + cabeloatual + ".png";
}


function proximovestido() {
    if (vestidoatual < qtdvestido) {
        vestidoatual = vestidoatual + 1;
    }
    else {vestidoatual = 1;
    }

    vestido.src="../Imagem/vestido" + vestidoatual + ".png"
}

function vestidoanterior() {
    if (vestidoatual === 1) {
        vestidoatual = qtdvestido
    }
    else {vestidoatual = vestidoatual - 1;
    }

    vestido.src = "../Imagem/vestido" + vestidoatual + ".png";
}

function proximaasa() {
    if (asaatual < qtdasa) {
        asaatual = asaatual + 1;
    }
    else {asaatual = 1;
    }

    asa.src="../Imagem/asa" + asaatual + ".png"
}

function asaanterior() {
    if (asaatual === 1) {
        asaatual = qtdasa
    }
    else {asaatual = asaatual - 1;
    }

    asa.src = "../Imagem/asa" + asaatual + ".png";
}


Esquerda1.addEventListener("click", bonecaanterior);
Direita1.addEventListener("click", proximaboneca);
Esquerda2.addEventListener("click", cabeloanterior);
Direita2.addEventListener("click", proximocabelo);
Esquerda3.addEventListener("click", vestidoanterior);
Direita3.addEventListener("click", proximovestido);
Esquerda4.addEventListener("click", asaanterior);
Direita4.addEventListener("click", proximaasa);


// Salvar fada
document.getElementById("salvarfada").addEventListener("click", function() {
  const fada = document.getElementById("boneca");

  html2canvas(fada, {
    backgroundColor: "#d8c6e6ff",
    scale: 2,
    useCORS: true 
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "MinhaFada.png";
    link.href = canvas.toDataURL("image/png"); 
    link.click();
  });
}); 

