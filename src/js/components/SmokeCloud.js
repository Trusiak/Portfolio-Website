import { gsap } from "gsap"
import { getPharse } from "./../helpers/pharses"
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(MotionPathPlugin);

export class SmokeCloud{
    constructor(){
      this.cloud = this._createCloud();
      this.parentElement = this._getParentElement();
      this.parentElement.append(this.cloud) 
      this._createCloudAnimation();
      this._createIcon();
    }
    _createCloud(){
      const cloud = document.createElement("div");
      cloud.classList.add("smoke-cloud", this._generateType());
      cloud.style.filter = `brightness(${this._generateColor()})`;
      return cloud;
    }
    _getParentElement(){
      return document.querySelector(".welcome__content-wrapper")
    }
    _generateType(){
      const types = ["smoke-cloud--one", "smoke-cloud--two", "smoke-cloud--three"];
      const randomTypes = Math.floor(Math.random() * 3); 
      return types[randomTypes];
    }
    _generateColor(){
      return ((Math.random() * 3)+ 0.5).toFixed(2)
    }
    _generateSize(){
      return Math.random() * (6 - 8) + 6;
    }
    _createCloudAnimation(){
      const creatingCloudAnimation = gsap.timeline({repeat: 0,  onComplete: ()=>this._movingCloudAnimation()}); 
      creatingCloudAnimation
        .set(this.cloud, { alpha: 0, y: 30})
        .to(this.cloud, {duration: 1, scale: this._generateSize(), alpha: 1, y: -20});
    }
    _movingCloudAnimation(){
      const creatingCloudAnimation = gsap.timeline({repeat: 0, onComplete: ()=>this.destroyCloud()}); 
      creatingCloudAnimation.to(this.cloud, {
            motionPath: {
                path: this._getMotionPath(),
                alignOrigin: [0.5, 0.5],
                autoRotate: false
            },
            transformOrigin: "50% 50%",
            alpha: 0,
            scale: 0.75,
            duration: 20,
            ease: "power2.easeIn"
        });
    }
    _getMotionPath(){
        const paths = [
            [{x:-20, y:-80}, {x:-400, y:-100}, {x:-550, y:-90}, {x:-700, y:-80}, {x:-1000, y:-83}],
            [{x:-50, y:-80}, {x:-300, y:-35}, {x:-500, y:-100}, {x:-700, y:-70}, {x:-1000, y:-130}]
        ]
        return paths[Math.floor(Math.random() * paths.length)];
    }
    _createIcon(){
      const icon = document.createElement("span");
      icon.innerText = getPharse();
      icon.classList.add("smoke-cloud__inner-text");
      this.cloud.append(icon); 
    }
    destroyCloud(){
      this.parentElement.removeChild(this.cloud) 
      delete this;
    }
  
  }