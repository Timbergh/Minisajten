/* Skrev inte den här koden själv  */

var obj = document.getElementById("logo");
var logoParticles = document.getElementsByClassName('logo-particle');

class Particle {
    constructor(parent) {
    this.div = document.createElement("div");
    this.div.classList.add("logo-particle");
    this.div.classList.add("flame");
    this.div.id = "particle-" + Date.now();
    parent.appendChild(this.div);
    
    setTimeout(() => { // remove particle
        if(this.driftIntervalId) clearInterval(this.driftIntervalId);
            this.div.remove();
    }, 400);
}

drift(speed = 1) {
    var rad = Math.PI * Math.random();
    
    this.driftIntervalId = setInterval(() => {
        var left = +this.div.style.left.replace("px",'');
    var top = +this.div.style.top.replace("px",'');

    left += Math.sin(rad) * speed;
    top += Math.cos(rad) * speed;

    this.div.style.left = left + "px";
    this.div.style.top = top + "px";
    }, 10);
}
}

var particleFactory = function(meteor) {
    var rect = meteor.getBoundingClientRect();
var particle = new Particle(meteor.parentElement);
particle.div.style.left = rect.left + "px";
particle.div.style.top = rect.top + "px";
particle.drift(0.4);
setTimeout(() => {
    particleFactory(meteor);
}, 100);
};
particleFactory(obj);

document.getElementById('logo').addEventListener("click", function(){
    document.getElementById('logo').classList.toggle('logo-active');
}
);
