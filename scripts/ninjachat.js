function replacething () {
    
    var html = document.querySelector('html');
    var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      node.nodeValue = node.nodeValue.replace(/Chat/, 'File downloads');
      node.nodeValue = node.nodeValue.replace(/Do you trust them\?/, '');
        }
      }
  
  
  //setInterval(replacething, 50);
  
  //var x = document.getElementById("myLI").parentElement.nodeName;