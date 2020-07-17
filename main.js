let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight+"%";
}


////////////CONFETTI EFFECT//////////
var mp = 150;
var particleColors = {
  colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
  colorIndex: 0,
  colorIncrementer: 0,
  colorThreshold: 10
}
window.onload = function() {
 document.querySelector(".hbd-container").click();
}


//////////FIREWORKS//////////
$('.hbd-container').fireworks();


//////////Text Reveal//////////

function delay() {
  $(function() {
    $('.delay').delayText({});
  });
}





gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  targets: delay()
})

var mboxOdd = $(".mbox:even");
var mboxEven = $(".mbox:odd");

gsap.fromTo(mboxOdd, {
  opacity:0, scale:0, x:'-100%'
}, {duration: 2, opacity:1, scale:1,
    x:'0', stagger: 1, 
    scrollTrigger: {
      targets: '.mbox',
      start: 'top -50%'
    }
})

gsap.fromTo(mboxEven, {
  opacity: 0, scale: 0, x: '100%'
}, {duration: 2, opacity: 1, scale: 1,
    x: '0', stagger: 1,
    scrollTrigger: {
    targets: '.mbox',
    start: 'top -50%'
    }
})
