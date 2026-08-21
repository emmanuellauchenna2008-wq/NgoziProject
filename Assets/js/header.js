let togglebtn = document.getElementById('togglebtn');
let nav = document.getElementById('nav');
let Icon = togglebtn.querySelector('i');
togglebtn.addEventListener('click',function(){
     nav.classList.toggle ('active');
let iconOpen = nav.classList.contains('active');
if(iconOpen){
    Icon.classList.remove('fa-bars');
    Icon.classList.add('fa-times');
} else{
    Icon.classList.add('fa-bars');
    Icon.classList.remove('fa-times')
}
});