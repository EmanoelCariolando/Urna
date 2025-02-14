
 let number = document.querySelector('.number')
 let numbers = document.querySelector('.numbers')
 let votoPara = document.querySelector('.voto--para')
 let votoPessoa= document.querySelector('.voto--persona')
 let aviso = document.querySelector('.divisao--two')
 let imgOne = document.querySelector('.img--one')
 let imgTwo = document.querySelector('.img--two')
 let infoName = document.querySelector('.info--voto')




 let etapa = 0;
 let numero = '';
 let votoBranco = false


 function newStep() {
  let step = etapas[etapa];
  let numberHtml = '';
  votoBranco = false
 

  for(let i = 0; i < step.numeros; i++){
    if(i === 0){
      numberHtml += `<div class="numbers pisca"></div>`
    } else {
      numberHtml += `<div class="numbers"></div>`}
  };
  numero = ''
  votoPessoa.innerHTML = step.titulo;
  aviso.style.display = "none";
  imgOne.style.display = "none";
  imgTwo.style.display = "none";
  infoName.innerHTML = ''
  number.innerHTML = numberHtml;
  number.style.display = 'flex'
 }

  function uptade() {
   let step = etapas[etapa]

   let candidato = step.candidatos.filter((item) => {
   if (item.numero === numero){ 
    return true;
   } else {
      return false;
   }

   });
   if(candidato.length > 0) {
     candidato = candidato[0]

     votoPessoa.innerHTML = `${etapas[etapa].titulo}`
     votoPara.style.display = 'flex'
     infoName.innerHTML = `Nome: ${candidato.nome}<br/>Partido:${candidato.partido}<br/> `
     aviso.style.display = "block"
     imgOne.style.display = "block"


     let photosHtml = ''

     for(let i in candidato.fotos){
      photosHtml +=  `<div class="img--one"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda} </div>`
      
     }

     imgOne.innerHTML = photosHtml;
     console.log(photosHtml)

    } else {
        votoPara.style.display = 'none'
        votoPessoa.innerHTML = ``;
        aviso.style.display = "block"
        infoName.innerHTML =  `<div class="voto--nulo pisca">VOTO NULO</div>`
         
    }

  }

 newStep()

  


    function clicou(n){
    let Elnumero = document.querySelector('.numbers.pisca');
    if(Elnumero !== null){
      Elnumero.innerHTML = n;
      numero = `${numero}${n}`


      if(Elnumero.nextElementSibling !== null){
      Elnumero.classList.remove('pisca')
      Elnumero.nextElementSibling.classList.add('pisca')
    } else {
      Elnumero.classList.remove('pisca')
       uptade()
    }
    } 

  }



   function branco(){
    votoBranco = true;
    numero = ''
    number.style.display = 'none'
    infoName.innerHTML =  `<div class="voto--nulo pisca">VOTO BRANCO</div>`
    votoPessoa.innerHTML = ''
    imgOne.style.display = 'none'
    imgTwo.style.display = 'none'
    }

    function corrige(){
      votoBranco = false
      newStep()
    }

    function confirma() {
      let step = etapas[etapa];
      let votoConfirm = false;
      let tela = document.querySelector('.tela')
  
      if (votoBranco === true) {
          votoConfirm = true;
          console.log('Voto em branco confirmado.');
      } else if (numero.length === step.numeros) {
          votoConfirm = true;
          console.log("Confirmado número " + numero);
      }
  
      if (votoConfirm) {
          etapa++;
          if (etapas[etapa] !== undefined) {
              newStep();
          } else {
              console.log("Fim da votação!");
              tela.innerHTML = `<div class="voto--fim pisca">FIM</div>`;
              tela.classList.add('screen')


              let somFim = document.getElementById('somFim');
            somFim.play(); // Reproduz o som
        
          }
      } else {
          console.log(`Voto não confirmado.`);
      }
  }
  



     // Second Part 
     let nextB = document.querySelector('.next')
     let nextDesc = document.querySelector('.santo--desc')
     let nextName = document.querySelector('.santo--nome')
     let nextNumber = document.querySelector('.santo--number')
     let nextImg = document.querySelector('.santo--img')
     let nextEsc = document.querySelector('.escolha')

     function nextEl() {
     let step = etapas[etapa];
     let candidato = step.candidatos
     candidato = candidato[0]

     nextDesc.innerHTML = step.titulo
     nextName.innerHTML = candidato.nome
     nextNumber.innerHTML = candidato.numero

      }

     function next(){     
      
      let step = etapas[etapa];
      let candidato = step.candidatos
      nextEsc.innerHTML = ''
      nextB.style.marginBottom = '20px'

      candidato = candidato[0]

      
      if(etapa === 0){
        etapa++
        candidato[0]
      } else  {
        etapa = 0;
      }

     nextDesc.innerHTML = step.titulo
     nextName.innerHTML = candidato.nome
     nextNumber.innerHTML = candidato.numero

     let nextImgHtml = ''
     for(let i in candidato.fotos){
       if(!candidato.fotos[i].small) {
        nextImgHtml += `<div class="santo--img"><img src="images/${candidato.fotos[i].url}"</div>`
       }
    
     }
     nextImg.innerHTML = nextImgHtml;

     }


     function nextBi() {
      let step = etapas[etapa];
      let candidato = step.candidatos
      nextEsc.innerHTML = ''

      candidato = candidato[1]

      
      if(etapa === 0){
        etapa++
        candidato[0]
      } else  {
        etapa = 0;
      }

     nextDesc.innerHTML = step.titulo
     nextName.innerHTML = candidato.nome
     nextNumber.innerHTML = candidato.numero

     let nextImgHtml = ''
     for(let i in candidato.fotos){
       if(!candidato.fotos[i].small) {
        nextImgHtml += `<div class="santo--img"><img src="images/${candidato.fotos[i].url}"</div>`
       }
    
     }
     nextImg.innerHTML = nextImgHtml;

     }