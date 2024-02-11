var position = document.documentElement.scrollTop;
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
$(window).scroll(function () {
    const newScrolltop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollTopPosition = document.documentElement.scrollTop;
    var header = document.querySelector("#header");

    if (newScrolltop > lastScrollTop) {
        if($(".submenu-background-blur").hasClass('active-blur')){
            header.classList.add("sticky");
        }else{

            header.classList.add("remove_header");
            header.classList.remove("sticky");
        }
        

    }else if (newScrolltop < lastScrollTop) {

        header.classList.add("sticky");
        header.classList.remove("remove_header");
        if( position == scrollTopPosition){
            header.classList.remove("sticky");
        }
       
    }
    lastScrollTop = newScrolltop <= 0 ? 0 : newScrolltop;

});


$('.service-sub-menu').on("mouseover",function(){
    $(".submenu-background-blur").addClass('active-blur');
    $(".service-submenu").addClass('open-submenu');
});
$('.service-sub-menu').on("mouseout",function(){
    $(".submenu-background-blur").removeClass('active-blur');
    $(".service-submenu").removeClass('open-submenu');
});

$('.service-submenu').on("mouseover",function(){
    $(".submenu-background-blur").addClass('active-blur');
});
$('.service-submenu').on("mouseout",function(){
    $(".submenu-background-blur").removeClass('active-blur');
});

// function changeServiceImage(target_class){
//     $(".single-service-images").removeClass('active-image');
//     $("#"+target_class).addClass('active-image');
// }

// $('.single-service-menu span').on("mouseout",function(){
//     $("#ui-ux-image").addClass('active-image');
// });

$('.portfolio-categories span').click(function(event){
    $('.portfolio-categories span').removeClass('active-category');
    $(event.target).addClass('active-category');
});
