var animation = bodymovin.loadAnimation({

    container: document.getElementById('animated_message_button'),
    path: 'assets/animations/new_message_icon.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",

}); 
var animation2 = bodymovin.loadAnimation({

    container: document.getElementById('animated_message_button2'),
    path: 'assets/animations/messgae_icon.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",

}); 
var blobe_animation = bodymovin.loadAnimation({

    container: document.getElementById('globe_animation'),
    path: 'assets/animations/globe.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",

});