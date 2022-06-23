// let a = 5;
// let b = "Привет";
// let c = true;
// let d = 5;
// a = 456;
// a = prompt("Напишите");
// if (a == 8) {
//     alert("aaaaaa");
// }else {
//     alert("sssssss");
// }
// for (let i = 0; i < 5; i++) {
//     alert(i);
// }
// let obj = {
//     "key": "value",
//     'key': "value",
//     'key': "value",
//     'key': "value"
// }
// function doMagic (a,b) {
//     alert(a + b);
// }
// doMagic(5,5);
let btn = document.getElementById('btn');
btn.onclick = function (e) {
    e.preventDefault();
    let text = document.querySelector(".intro");
    text.classList.add('red');
    let img = document.querySelector(".desktop");
    img.style.display = 'none';
    document.querySelector('.skill-change').style.marginLeft = '50px';
}
$(window).scroll(function() {
    $('.skill').each(function(){
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass('animate__fadeInLeft');
        }
    });
});
$(window).scroll(function() {
    $('.skill-free').each(function(){
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass('animate__fadeInUp');
        }
    });
});
$(window).scroll(function() {
    $('.skill-change').each(function(){
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass('animate__fadeInRight');
        }
    });
});
