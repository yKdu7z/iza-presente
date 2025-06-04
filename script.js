// Data de início do relacionamento: 16 de fevereiro de 2025 às 00h00
const dataInicio = new Date("2025-02-16T00:00:00");

function atualizaContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const anos = Math.floor(dias / 365);

  const diasRestantes = dias % 365;
  const horasRestantes = horas % 24;
  const minutosRestantes = minutos % 60;
  const segundosRestantes = segundos % 60;

  document.getElementById("tempo").textContent =
    `${anos} anos, ${diasRestantes} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
}

//Carrosel
setInterval(atualizaContador, 1000);


const slide = document.getElementById("slide");
const imagens = slide.querySelectorAll("img");
const total = imagens.length;

let index = 0;

// Função para mover o slide
function mostrarSlide(novoIndex) {
  if (novoIndex < 0) {
    index = total - 1;
  } else if (novoIndex >= total) {
    index = 0;
  } else {
    index = novoIndex;
  }

  const largura = imagens[0].clientWidth;
  slide.style.transform = `translateX(-${index * largura}px)`;
}

// Botões
document.querySelector(".proximo").addEventListener("click", () => {
  mostrarSlide(index + 1);
});

document.querySelector(".anterior").addEventListener("click", () => {
  mostrarSlide(index - 1);
});

// Autoplay a cada 2 segundos
setInterval(() => {
  mostrarSlide(index + 1);
}, 7000);

// Atualiza slide ao redimensionar
window.addEventListener("resize", () => mostrarSlide(index));
