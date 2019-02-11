const $menu_mobile = document.querySelector('.botao-menu-mobile');
const $menu_nav = document.querySelector('.menu-nav');
const $conteudo = document.querySelector('.conteudo');
const $botao_fechar_menu = document.querySelector('.botao-fechar-menu');


$menu_mobile.addEventListener('click', event =>{

    if(window.innerWidth < 800){
        $menu_nav.style.display = 'flex';
    }
})

$botao_fechar_menu.addEventListener('click', event => {
    $menu_nav.style.display = 'none';
    
})

window.addEventListener('resize',event =>{

    if(window.innerWidth >= 800){
        $menu_nav.style.display = 'flex';
    }else{
        $menu_nav.style.display = 'none';
    }
})

$conteudo.addEventListener('click',event => {
    
    if(window.innerWidth < 800 && $menu_nav.style.display == 'flex'){
        $menu_nav.style.display = 'none';
        
    }
})


