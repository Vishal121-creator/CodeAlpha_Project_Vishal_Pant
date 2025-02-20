const images=document.querySelectorAll('.container .box img');
const modal=document.getElementById('modal');
const modalImg=document.getElementById('modal-img');
const closeBtn=document.querySelector('.close');
const downloadBtn=document.getElementById('download');


downloadBtn.style.display='none';
images.forEach(image=>{
   

    image.addEventListener('mouseover',()=>{
        image.style.transform='scale(1.1)';
        image.style.transition='transform 0.3s ease';
    });

    image.addEventListener('mouseout',()=>{
        image.style.transform='scale(1)';
    });


    image.addEventListener('click',()=>{
        modal.style.display='flex'; 
        modalImg.src=image.src;     
        downloadBtn.href=image.src;
        downloadBtn.style.display='block'; 
    });

});



closeBtn.addEventListener('click',()=>{
    modal.style.display='none'; 
    downloadBtn.style.display='none'; 
});



modal.addEventListener('click',(e)=>{
    if (e.target === modal){
        modal.style.display='none'; 
        downloadBtn.style.display='none'; 
    }
});
