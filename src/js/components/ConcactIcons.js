import {gsap, Power2, Power4} from "gsap"
  
setTimeout(()=>{
    new GitHubIcon();
    new MailIcon();
    new TelephoneIcon();
}, 800)


class MainIcon{
    constructor(){
        this.timeline = gsap.timeline({ repeat:-1, yoyo:true})
    }
}

class GitHubIcon extends MainIcon{
    constructor(){
        super();
        this.element = document.querySelector(".contact-icon--github");
        this.path = this.element.querySelector("#github-icon__main-path");
        this.init();
    }
    init(){
        this.timeline
            .to(this.path, {duration: 0.5, ease: Power4.easeInOut, scale: 0.90,transformOrigin:"50% 50%",
                attr:{d:`M60.611 0C27.264 0 0.223 27.035 0.223 60.388C0.223 87.07 17.526 109.705 41.52 
                117.691C44.537 118.251 45.645 116.381 45.645 114.786C45.645 113.346 45.589 108.589 45.563 
                103.543C37.5 108.097 31 97.5 31 97.5C27 87.079 23 97.097 21 95.097C19 93.097 23.3304 
                88.565 28 88.597C32.8886 88.6305 34.221 100.105 39.5 99.509C41.9908 99.2278 42.078 98.191
                44.223 95.691C46.078 92.691 47.863 88.587 49.59 87.079C36.177 85.554 22.076 80.375 22.076
                57.236C22.076 50.643 24.436 45.256 28.299 41.026C27.671 39.506 24 33 27.5 22.5C31 12 33.953
                23.423 45.493 31.236C50.311 29.897 55.478 29.224 60.611 29.201C65.741 29.224 70.911 29.895 
                75.738 31.234C87.264 23.421 95 22.5 95 22.5C98.287 30.817 93.548 39.504 92.921 41.024C96.793 
                45.254 99.136 50.641 99.136 57.234C99.136 80.428 85.009 85.534 71.562 87.03C73.729 88.904 
                75.659 92.58 75.659 98.213C75.659 106.293 75.589 112.796 75.589 114.785C75.589 116.392 
                76.677 118.275 79.737 117.682C103.717 109.688 121 87.06 121 60.388C120.999 27.037 93.961 0 60.611 0Z`}})
    }
}
class MailIcon extends MainIcon{
    constructor(){
        super();
        this.element = document.querySelector(".contact-icon--mail");
        this.init();
    }
    init(){
        this.timeline
            .to(this.element, {scale: 0.9, duration: .3, rotate: -3, ease: Power2.easeInOut })
            .to(this.element, {duration: .3, rotate: 3, ease: Power2.easeInOut })
    }
}
class TelephoneIcon extends MainIcon{
    constructor(){
        super();
        this.element = document.querySelector(".contact-icon--telephone")
        this.path = this.element.querySelector("#telephone-icon__receiver-path")
        this.init();
    }
    init(){
        this.timeline
        .to(this.path, { x:-150, y:-130, rotate: -70, duration: .55, ease: Power4.easeInOut, transformOrigin:"50% 50%" },0)
        .to(this.element, {duration: .75, scale: 0.9, ease: Power4.easeInOut}, 0)  
    }
}



