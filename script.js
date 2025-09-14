document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('click', function(){
    const nav = document.querySelector('.main-nav');
    if(nav.style.display==='flex'){nav.style.display='none';} else{nav.style.display='flex';}
  });
});