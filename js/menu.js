const $menu_mobile = document.querySelector('.botao-menu-mobile');
const $menu_nav = document.querySelector('.menu-nav');
const $conteudo = document.querySelector('.conteudo');
const $botao_fechar_menu = document.querySelector('.botao-fechar-menu');


$botao_fechar_menu.addEventListener('click', event => {
    $menu_nav.style.display = 'none';
    
})

// window.addEventListener('resize',event =>{
//     const $elemento = getComputedStyle($botao_fechar_menu);
//     // console.log($elemento);
//     if(window.innerWidth >= 799 && $elemento.display == 'flex'){
//         $menu_nav.style.display = 'flex';
//     }
// })


// $conteudo.addEventListener('click', item => {
//         // let prevScrollpos = window.pageYOffset;
//     console.log('a')
//     console.log($conteudo.);

//     // menuScroll();
    
// })


const prevScrollpos = window.pageYOffset;


window.onscroll = function () {

    const currentScrollpos = window.pageYOffset;

    
    if( (prevScrollpos + 10) > currentScrollpos ){

        document.getElementById('menu-mobile').style.top = '0';
        

    }else{
        document.getElementById('menu-mobile').style.top = '-50px';

    }
}
// console.log(window.pageYOffset);

function menuScroll(prevScrollpos){
    let currentScrollpos = window.pageYOffset;

    if(prevScrollpos > currentScrollpos){
        document.getElementById('menu-mobile').style.top = '0px';

    }else{
        document.getElementById('menu-mobile').style.top = '-50px';
        

    }
}





$menu_mobile.addEventListener('click',event => {

    $menu_nav.style.display = 'flex';
})




$conteudo.addEventListener('click', event => {
    if ($menu_nav.style.display == 'flex'){
        $menu_nav.style.display = 'none'
    }
})