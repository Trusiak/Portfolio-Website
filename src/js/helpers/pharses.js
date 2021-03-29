let pharsesCounter = 0;
const pharses = ["</VaniliaJS>", "Scss","BEM","webpack_","npm","gulp","GIT","Photoshop",
"Figma","WebGL","Design Patterns","MVC","gsap","three.js","VSC","UX",]

export function getPharse(){
    return pharses[pharsesCounter++ % pharses.length];
}
