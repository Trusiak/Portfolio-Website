import { gsap } from "gsap"

class Slider{
    constructor(interval = 6){
        this.slides = [...document.querySelectorAll(".slider__text")];
        this.pointerContainer = document.querySelector(".slider__pointer-container");
        this.interval = interval;
        this._generatePointers();
        this._start();
    }
    _start(){
        const sliderAnimation = gsap.timeline({repeat: -1});
        this.slides.forEach((slide, id) => { 
            slide.animation = sliderAnimation
                .addLabel(`slide${id}`)
                .add(()=> slide.classList.add("slider__text--active"))
                .add(()=> slide.pointer.classList.add("slider__pointer--active"))
                .from(slide, {duration: .5, opacity: 0})    
                .to(slide, {duration: .5, opacity: 0}, `+=${this.interval}`)
                .add(()=> slide.classList.remove("slider__text--active"))
                .add(()=> slide.pointer.classList.remove("slider__pointer--active"))
        });
    }
    _generatePointers(){
        this.slides.forEach((el,id)=>{
            el.pointer = this._createPointer();
           this._handlePointerClick(el.pointer, id)
        })
    }
    _createPointer(){
        const pointer = document.createElement("div");
        pointer.classList.add("slider__pointer");
        this.pointerContainer.append(pointer)
        return pointer;
    }
    _handlePointerClick(pointer, id){
        pointer.addEventListener("click", ()=>{
            this.slides.forEach(el=>{
                el.classList.remove("slider__text--active")
                el.pointer.classList.remove("slider__pointer--active")
            })
            this.slides[id].animation.seek(`slide${id}`);
        })
    }
}

new Slider();