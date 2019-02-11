const $menu_mobile = document.querySelector('.botao-menu-mobile');
const $menu_nav = document.querySelector('.menu-nav');
const $conteudo = document.querySelector('.conteudo');
const $botao_fechar_menu = document.querySelector('.botao-fechar-menu');


$menu_mobile.addEventListener('click', event =>{

    if(window.innerWidth < 800){

        $menu_nav.style.left = '0';
    }
})

$botao_fechar_menu.addEventListener('click', event => {
    $menu_nav.style.left = '-221px';
   
})

window.addEventListener('resize',event =>{

    if(window.innerWidth >= 800){

        $menu_nav.style.left = '0';

    }else{

        $menu_nav.style.left = '-221px';

    }
})

$conteudo.addEventListener('click',event => {
    const navPosition = getComputedStyle($menu_nav).left
    if(window.innerWidth < 800 && navPosition == '0px'){

        $menu_nav.style.left = '-221px';
        

        
    }
})


