import { SmokeCloud } from "./SmokeCloud"
import { gsap, Elastic, Bounce, Power0, Power4 } from "gsap"

window.addEventListener('load', () => {
    setTimeout(()=>{
        new Factory()
    }, 400)
});

class Factory{
    constructor(){
        this._getElements();
        this._firstAnimation();
    }
    _getElements(){
        this.factory = document.querySelector(".factory__svg");
        this.factoryText = document.querySelectorAll(".factory__text");
        this.wheel = this.factory.querySelectorAll("#Group, #Group_2");
        this.basis = this.factory.querySelector("#Podkladka")
        this.youtubeIcon = this.factory.querySelector("#Youtube");
        this.youtubeIconTrianglePath = this.factory.querySelector("#youtube-triangle");
        this.chimney = this.factory.querySelector("#Komin");
    }
    _firstAnimation(){
        const firstAnimationTimeLine = gsap.timeline({repeat: 0, onComplete: ()=>{
            this._showText(); 
            this._loopAnimation()
        }}); 
        firstAnimationTimeLine
          .set(this.factory, {alpha: 1})
          .set(this.basis, {y: -500})
          .set(this.youtubeIcon, {alpha: 0,y: -100})
          .set([this.chimney, this.wheel], {y: 100, alpha: 0})
          .to(this.basis, 1, {ease: Bounce.easeOut, y: 0})
          .to(this.youtubeIcon, .5, {alpha: 1,ease: Bounce.easeOut, y: 0})
          .to([this.chimney, this.wheel], .5,{alpha: 1, y: 0}); 
      }
    _loopAnimation(){
        const loopAnimationTimeLine = gsap.timeline({repeat: -1});
        loopAnimationTimeLine
          .to(this.wheel, 2,{rotate: 360, ease:  Power0.easeNone, transformOrigin:"50% 50%"}, 0)
          .to(this.chimney, 2,{y: 20,scaleY: 0.85,ease: Power4.easeOut, transformOrigin:"50% 50%"}, 0)
          .to(this.youtubeIconTrianglePath, 1,{scale: 0.75, transformOrigin:"50% 50%"}, 0)
          .to(this.chimney, 1,{y: 0,scaleY: 1,ease: Elastic.easeOut, transformOrigin:"50% 50%"}, 1)
          .to(this.youtubeIconTrianglePath, .5,{scale: 1, ease: Elastic.easeOut,transformOrigin:"50% 50%"}, 1)
          .add(()=> this.createSmokeCloud());
    }
    _showText(){
        const showTextTimeLine = gsap.timeline({repeat: 0});
        showTextTimeLine
            .to(this.factoryText, .5,{alpha: 1, y: 0}); 
    }
    createSmokeCloud(){
        new SmokeCloud();
    }
  }

  
