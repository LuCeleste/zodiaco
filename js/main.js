const btn = document.getElementById("btn")

btn.onclick = function () {
let dia =parseInt(document.form.dia.value);
let mes = parseInt(document.form.mes.value);
let form = document.getElementById('form');
let carta = document.getElementById('carta');
let titulo = document.getElementById('titulo');
if((dia>=21 && mes==3) || (dia<=20 && mes==4)){
    carta.innerHTML= `
    <img  class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/aries.jpg"> 
    `;
    form.innerHTML=`
    <h2 id="titulo">Aries</h2>
    <div class="caracteristicas">
    <p>Elemento: Fuego</p>
    <p> Simbolo: Carnero</p>
    <p>Planeta: Marte</p>
    <p>Pasionales - Valientes - Optimistas</p> 
    
</div>
      <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
      <audio controls autoplay>

  <source src="./media/sonido.mp3" type="audio/mpeg">

</audio>

      `
}
if((dia>=24 && mes==9) || (dia<=23 && mes==10)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/libra.jpg"> 
    `;
    form.innerHTML=`
    <h2 id="titulo">Libra</h2>
    <div class="caracteristicas">
    <p>Elemento: Aire</p>
    <p> Simbolo: Balanza</p>
    <p>Planeta: Venus</p>
    <p>Balanceados - Encantadores - Optimistas</p> 
</div>
      <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
      <audio controls autoplay>

      <source src="./media/sonido.mp3" type="audio/mpeg">

</audio>
      `
}
if((dia>=21 && mes==4) || (dia<=21 && mes==5)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/tauro.jpg"> 
    `;
    form.innerHTML=`
    <h2 id="titulo">Tauro</h2>
    <div class="caracteristicas">
    <p>Elemento: Tierra</p>
    <p> Simbolo: Toro</p>
    <p>Planeta: Venus</p>
    <p>Dedicados - Agraciados - Compasivos</p> 
</div>
      <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
      <audio controls autoplay>
      <source src="./media/sonido.mp3" type="audio/mpeg">
</audio>
      `
}
if((dia>=24 && mes==10) || (dia<=22 && mes==11)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/scorpio.jpg"> 
    `;
    form.innerHTML=`
    <h2 id="titulo">Escorpio</h2>
    <div class="caracteristicas">
    <p>Elemento: Agua</p>
    <p> Simbolo: Escorpion</p>
    <p>Planeta: Marte</p>
    <p>Pasionales - Valientes - Leales</p> 
</div>
      <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
      <audio controls autoplay>
      <source src="./media/sonido.mp3" type="audio/mpeg">

</audio>
      `
}
if((dia>=22 && mes==5) || (dia<=21 && mes==6)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/geminis.jpg"> 
    `;
        form.innerHTML=`
        <h2 id="titulo">Geminis</h2>
        <div class="caracteristicas">
        <p>Elemento: Aire</p>
        <p> Simbolo: Gemelos</p>
        <p>Planeta: Mercurio</p>
        <p>Divertidos - Curiosos - Ambiciosos</p> 
    </div>
          <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
          <audio controls autoplay>

          <source src="./media/sonido.mp3" type="audio/mpeg">

</audio>
          `
}
if((dia>=23 && mes==11) || (dia<=21 && mes==12)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/sagi.jpg"> 
    `;
        form.innerHTML=`
        <h2 id="titulo">Sagitario</h2>
        <div class="caracteristicas">
        <p>Elemento: Fuego</p>
        <p> Simbolo: Arquero</p>
        <p>Planeta: Jupiter</p>
        <p>Honestos - Visionarios - Aventureros</p> 
    </div>
          <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
          <audio controls autoplay>

          <source src="./media/sonido.mp3" type="audio/mpeg">

</audio>
          `
}
if((dia>=21 && mes==6) || (dia<=23 && mes==7)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/cancer.jpg"> 
    `;
        form.innerHTML=`
        <h2 id="titulo">Cancer</h2>
        <div class="caracteristicas">
        <p>Elemento: Agua</p>
        <p> Simbolo: Cangrejo</p>
        <p>Regido por: Luna</p>
        <p>Pasionales - Creativos - Resilientes</p> 
    </div>
          <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
          <audio controls autoplay>

          <source src="./media/sonido.mp3" type="audio/mpeg">

</audio>
          `
}
if((dia>=22 && mes==12) || (dia<=20 && mes==1)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/capri.jpg"> 
    `;
        form.innerHTML=`
        <h2 id="titulo">Capricornio</h2>
        <div class="caracteristicas">
        <p>Elemento: Tierra</p>
        <p> Simbolo: Cabra</p>
        <p>Planeta: Saturno</p>
        <p>Determinados - Leales - Almas puras</p> 
    </div>
          <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
          <audio controls autoplay>

          <source src="./media/sonido.mp3" type="audio/mpeg">
</audio>
          `
}
if((dia>=24 && mes==7) || (dia<=23 && mes==8)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/leo.jpg"> 
    `;
        form.innerHTML=`
        <h2 id="titulo">Leo</h2>
        <div class="caracteristicas">
        <p>Elemento: Fuego</p>
        <p> Simbolo: Leon</p>
        <p>Planeta: Sol</p>
        <p>Lideres - Extrovertidos - Feroces</p> 
    </div>
          <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
          <audio controls autoplay>
          <source src="./media/sonido.mp3" type="audio/mpeg">
</audio>
          `
}
if((dia>=21 && mes==1) || (dia<=19 && mes==2)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/acua.jpg"> 
    `;
        form.innerHTML=`
        <h2 id="titulo">Acuario</h2>
        <div class="caracteristicas">
        <p>Elemento: Aire</p>
        <p> Simbolo: El aguador</p>
        <p>Planeta: Urano</p>
        <p>Independiente - Open mind - Unicos</p> 
    </div>
          <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
          <audio controls autoplay>
          <source src="./media/sonido.mp3" type="audio/mpeg">
</audio>
          `
}
if((dia>=24 && mes==8) || (dia<=23 && mes==9)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/virgo.jpg"> 
    `;
        form.innerHTML=`
        <h2 id="titulo">Virgo</h2>
        <div class="caracteristicas">
        <p>Elemento: Tierra</p>
        <p> Simbolo: Virgen</p>
        <p>Planeta: Mercurio</p>
        <p>Perfeccionistas - Bondadosos - Optimistas</p> 
    </div>
          <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
          <audio controls autoplay>
          <source src="./media/sonido.mp3" type="audio/mpeg">
</audio>
          `
}
if((dia>=20 && mes==2) || (dia<=20 && mes==3)){
    carta.innerHTML= `
    <img class="wow animate__animated animate__flipInY" data-wow-duration="3s" src= "./media/piscis.jpg"> 
    `;
        form.innerHTML=`
        <h2 id="titulo">Piscis</h2>
        <div class="caracteristicas">
        <p>Elemento: Agua</p>
        <p> Simbolo: Pez</p>
        <p>Planeta: Neptuno</p>
        <p>Agraciados - Intuitivos - Compasivos</p> 
    </div>
          <button class="volver" onclick = "location.reload()">Cambiar fecha</button>
          <audio controls autoplay>
          <source src="./media/sonido.mp3" type="audio/mpeg">
</audio>
          `
}
  };


