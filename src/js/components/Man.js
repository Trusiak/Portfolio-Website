import { gsap } from "gsap"

window.addEventListener('load', () => {
    setTimeout(()=>{
        new Man();
    }, 3000)
});

class Man {
    constructor(){
        this._getElements();
        this._generateAnimation();
    }
    _getElements(){
        this.leftHand = document.querySelectorAll("#zas-b-2-lefthand > *");
        this.leftArm = document.querySelector("#zas-b-2-leftarm");
        this.rightArm = document.querySelector("#zas-b-2-rightarm");
        this.rightHand = document.querySelector("#zas-b-2-righthand");
        this.eyes = document.querySelectorAll("#zas-b-2-path30, #zas-b-2-path29")
        this.hair = document.querySelector("#zas-b-2-path37");
        this.torso = document.querySelector("#zas-b-2-torso");
        this.eyebrows = document.querySelectorAll("#zas-b-2-path38, #zas-b-2-path39")
    }
    _generateAnimation(){
        const movingHandAnimation = gsap.timeline({repeat: -1, yoyo:true});
        const breathingAnimation = gsap.timeline({repeat: -1, yoyo:true});
        const blinkEyesAnimation = gsap.timeline({repeat: -1, yoyo:true});

        movingHandAnimation
            .set(this.leftArm, {transformOrigin:"50% 0%"})
            .to(this.leftHand, {delay:2, y: -12, x:-20, rotate:10,transformOrigin:"50% 50%", duration: 1}, 0)
            .to(this.leftArm, {delay:2 ,y: 1, scaleX: 1.2,rotate: 5,duration: 1, transformOrigin:"50% 0%"}, 0)
            .to({}, {duration: 3}, 1)

        breathingAnimation
            .to(this.torso, {y: -1, scaleX: 1.05, duration: 1, transformOrigin:"50% 0%"}, 0)
            .to(this.rightArm, {y: -3, scaleX: 0.9, duration:1, transformOrigin:"50% 0%"}, 0)
            .to(this.rightHand, {y: -4, scaleX: 0.9,duration: 1, transformOrigin:"50% 0%"}, 0)

        blinkEyesAnimation
            .to(this.eyes, {scaleX: 2, y:1,delay: 1.5, scaleY: 0.25, duration: .2}, 0)
            .to(this.eyebrows, {y:1,delay: 1.5, scaleY: 0.85, duration: .2}, 0)
            .to(this.hair, {rotate: 2, duration: 1, transformOrigin:"50% 50%"}, 0)
    }
}


