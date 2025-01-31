
window.addEventListener("click", function (event) {
    const vidtag = document.querySelector("video");

    vidtag.setAttribute("playsinline", "");
    vidtag.setAttribute("webkit-playsinline", "");
    vidtag.setAttribute("nofullscreen", "");
    vidtag.setAttribute("disablepictureinpicture", "");
    
  //  document.exitFullscreen();
  }
});

/*

const observer = new MutationObserver((mutations, obs) => {
  const videotag = document.getElementsByClassName("video");
  if (videotag) {
    const vidtag = document.querySelector("video");

    vidtag.setAttribute("playsinline", "");
    vidtag.setAttribute("webkit-playsinline", "");
    vidtag.setAttribute("nofullscreen", "");
    vidtag.setAttribute("disablepictureinpicture", "");

    obs.disconnect();
    return;
  }
});
  
observer.observe(document, {
  childList: true,
  subtree: true
});


older attempts
document.getElementById("chatbutton").onclick = function() {replacething()};
setInterval(replacething, 500);

var x = document.getElementById("myLI").parentElement.nodeName;

document.body.addEventListener("click", function (evt) {
  var html = document.querySelector('html');
  var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
  var node;
  while (node = walker.nextNode()) {
    node.nodeValue = node.nodeValue.replace(/Not Visible/, 'Connected');
    node.nodeValue = node.nodeValue.replace(/Do you trust them\?/, '');
     }
    //console.dir(this);
    //note evt.target can be a nested element, not the body element, resulting in misfires
    //console.log(evt.target);
    //alert("body clicked");
});

setTimeout(
  function() {
    var html = document.querySelector('html');
    var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      //node.nodeValue = node.nodeValue.replace(/Not Visible/, 'Connected');
      //node.nodeValue = node.nodeValue.replace(/playsinline/, 'playsinline webkit-playsinline');
      //node.nodeValue = node.nodeValue.replace(/Do you trust them\?/, '');
    }

    const vidtag = document.querySelector("video");
    vidtag.setAttribute("playsinline", "");
    vidtag.setAttribute("webkit-playsinline", "");
    

  }, 500);

window.addEventListener("click", function (event) {
  if (event.target.id == "gowebcam") {
    const vidtag = document.querySelector("video");

    vidtag.setAttribute("playsinline", "");
    vidtag.setAttribute("webkit-playsinline", "");
    vidtag.setAttribute("nofullscreen", "");
    vidtag.setAttribute("disablepictureinpicture", "");
    
  //  document.exitFullscreen();
  }
});

*/
