const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel();
// });

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: true
//         },
//         600: {
//             items: 3,
//             nav: false
//         },
//         1000: {
//             items: 5,
//             nav: true,
//             loop: false
//         }
//     }
// })