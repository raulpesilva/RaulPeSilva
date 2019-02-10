const $menu_mobile = document.querySelector('.botao-menu-mobile');
const $menu_nav = document.querySelector('.menu-nav');
const $conteudo = document.querySelector('.conteudo');
const $botao_fechar_menu = document.querySelector('.botao-fechar-menu');


$botao_fechar_menu.addEventListener('click', event => {
    $menu_nav.style.display = 'none';
    
})

window.addEventListener('resize',event =>{
    // console.log($elemento);
    
    console.log(window.innerWidth);
    if(window.innerWidth >= 800){
        $menu_nav.style.display = 'flex';
        $conteudo.addEventListener('click', event => {
            if ($menu_nav.style.display == 'none'){
                $menu_nav.style.display = 'flex'
            }
        })
    }else{
        $menu_nav.style.display = 'none';
        $conteudo.addEventListener('click', event => {
            if ($menu_nav.style.display == 'flex'){
                $menu_nav.style.display = 'none'
            }
        })

    }
})

$menu_mobile.addEventListener('click',event => {

    $menu_nav.style.display = 'flex';
})

