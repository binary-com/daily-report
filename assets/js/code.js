var images = document.querySelectorAll("img"),
  options = { root: null, rootMargin: "0px", threshold: 0.1 },
  fetchImage = function(a) {
    return (
      console.log(a),
      new Promise(function(b, c) {
        var d = new Image();
        (d.src = a), (d.onload = b), (d.onerror = c);
      })
    );
  },
  loadImage = function(a) {
    var b = a.dataset.src;
    fetchImage(b).then(function() {
      a.src = b;
    });
  },
  handleIntersection = function(a) {
    a.forEach(function(c) {
      0 < c.intersectionRatio &&
        (console.log(c.intersectionRatio), loadImage(c.target));
    });
  },
  observer = new IntersectionObserver(handleIntersection, options);
if (
  (images.forEach(function(a) {
    observer.observe(a);
  }),
  "IntersectionObserver" in window)
)
  var _observer = new IntersectionObserver(handleIntersection, options);
else
  Array.from(images).forEach(function(a) {
    return loadImage(a);
  });