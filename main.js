cursos=document.querySelector('#cursos');
inicio=document.querySelector('#inicio');
documentacion=document.querySelector('#documentacion');

containercursos=document.querySelector('.containercursos');
containerinicio=document.querySelector('.containerinicio');
containerdocumentacion=document.querySelector('.containerdocumentacion');


cursos.addEventListener('click',()=>{
    containercursos.style.top='30px'
    containerinicio.style.top='-1000vh'
    containerdocumentacion.style.top='-1000vh'
});

inicio.addEventListener('click',()=>{
    containercursos.style.top='-1000vh'
    containerinicio.style.top='30px'
    containerdocumentacion.style.top='-1000vh'
});

documentacion.addEventListener('click',()=>{
    containercursos.style.top='-1000vh'
    containerinicio.style.top='-1000vh'
    containerdocumentacion.style.top='30px'
});













