$('.owl-carousel').owlCarousel({
    loop:true, //consigo navegar nas imagens de maneira infinita, caso coloque false, quando terminar as imagens ele para para.
    margin:10,
    nav:false, //botões de navegações
    responsive:{ //quando a tela consegue se adaptar
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})