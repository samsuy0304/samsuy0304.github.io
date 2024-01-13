// java_about.js

// $('.navbar a').on('click',function(e)){
//     if(this.hash !=''){
//         e.preventDefault();
//         const has = this.hash;
//         $('html,body').animate({scrollTop: $(hash).offset().scrollTop})
//         800
//     }
// }

const scroll = new SmoothScroll('.navbar a[href*="#"]', {speed:200});