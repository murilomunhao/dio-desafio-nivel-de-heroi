document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.querySelector('.xp-range');
  const rangeFill = document.querySelector('.range-fill');
  const rangeThumb = document.querySelector('.range-thumb');
  const textInputXP = document.querySelector('.info-xp');
  const nameHero = document.querySelector('.info-name');
  const textNameHero = document.querySelector('.name-hero');
  const botao = document.querySelector('.btn');
  const elemento = document.querySelector('.card-img');
  const alert = document.querySelector('.alert');
  const bgSong = document.getElementById('bg-song');
  const cardSong = document.getElementById('card-song');
  const alertSong = document.getElementById('alert-song');
  
  bgSong.play();
  
  
  botao.addEventListener('click', () => {
    
    const name = textNameHero.value;
    if (name != "") {
      const xpValue = parseInt(rangeInput.value);
      if (!isNaN(xpValue)) {
        if (!elemento.classList.contains('flip-card')) {
          cardSong.play();
          elemento.classList.add('flip-card');
          setBackgroundImage(xpValue);
        } 
      } 
    }else{
      if (!alert.classList.contains('card-alert')) {
        alert.style.display = 'block';
        alert.classList.add('card-alert');
        alertSong.play();
      }
      
      setTimeout(() => {
        alert.style.display = 'none';
        alert.classList.remove('card-alert');
      }, 4000);
    }
    
    
  });
  
  elemento.addEventListener('animationend', () => {
    
    elemento.classList.remove('flip-card');
    
  });

  
  function setBackgroundImage(xpValue) {
    if (xpValue < 1000) {
      elemento.style.backgroundImage = "url('/src/assets/img/bg-ferro.webp')";
    } else if (xpValue >= 1001 && xpValue <= 2000) {
      elemento.style.backgroundImage = "url('/src/assets/img/bg-bronze.webp')";
    } else if (xpValue >= 2001 && xpValue <= 5000) {
      elemento.style.backgroundImage = "url('/src/assets/img/bg-prata.webp')";
    } else if (xpValue >= 5001 && xpValue <= 7000) {
      elemento.style.backgroundImage = "url('/src/assets/img/bg-ouro.webp')";
    } else if (xpValue >= 7001 && xpValue <= 8000) {
      elemento.style.backgroundImage = "url('/src/assets/img/bg-platina.webp')";
    } else if (xpValue >= 8001 && xpValue <= 9000) {
      elemento.style.backgroundImage = "url('/src/assets/img/bg-ascendente.webp')";
    } else if (xpValue >= 9001 && xpValue <= 10000) {
      elemento.style.backgroundImage = "url('/src/assets/img/bg-imortal.webp')";
    } else if (xpValue >= 10001) {
      elemento.style.backgroundImage = "url('/src/assets/img/bg-radiante.webp')";
    }
  }

  function updateRange() {
    const value = rangeInput.value;
    const valueName = textNameHero.value;

    if (valueName != "") {
      nameHero.textContent = valueName;
    } else {
      nameHero.textContent = "";
      elemento.style.backgroundImage = "url('/src/assets/img/bg-card.webp')";
    }

    if (value != 0) {
      textInputXP.textContent = value;
    } else {
      textInputXP.textContent = "";
    }
  }
// Atualiza campo de input XP e Nome do herói
  textNameHero.addEventListener('input', updateRange);
  nameHero.addEventListener('input', function () {
    textNameHero.value = this.valueName;
    updateRange();
  });

  rangeInput.addEventListener('input', updateRange);
  textInputXP.addEventListener('input', function () {
    rangeInput.value = this.value;
    updateRange();
  });

  updateRange();
});