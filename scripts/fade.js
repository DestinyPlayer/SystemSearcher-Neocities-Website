function fade(change) {
    const el = document.getElementById("iframe_a");
    const duration = 300;
    var step = 10 / duration,
      opacity = 0;
    function next() {
      if (opacity >= 1) { return; }
      el.style.opacity = ( opacity += step );
      setTimeout(next, 10);
    }
    next();
}