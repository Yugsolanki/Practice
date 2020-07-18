//////////ColorFull Progress Bar//////////

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




//////////Memories Box Reveal//////////

gsap.registerPlugin(ScrollTrigger);

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




//////////TBH Book//////////
$(window).ready(function() {
  $('#magazine').turn({
    display: 'double',
    acceleration: true,
    gradients: !$.isTouch,
    elevation: 50,
    when: {
      turned: function(e, page) {
      }
    }
  });
});


$(window).bind('keydown', function(e) {

  if (e.keyCode == 37)
    $('#magazine').turn('previous');
  else if (e.keyCode == 39)
    $('#magazine').turn('next');
});