const $menu_mobile = document.querySelector('.botao-menu-mobile');
const $menu_nav = document.querySelector('.menu-nav');
const $botao_fechar_menu = document.querySelector('.botao-fechar-menu');

$botao_fechar_menu.addEventListener('click', event => {
    if($menu_nav.style.display == 'flex'){
        // console.log($menu_nav.style.display)
        $menu_nav.style.display = 'none';
        
    }
})

window.addEventListener('resize',event =>{
    if(window.innerWidth >= 800){
        $menu_nav.style.display = 'flex';
    }
})

$menu_mobile.addEventListener('click',event => {
    $menu_nav.style.display = 'flex';
})

