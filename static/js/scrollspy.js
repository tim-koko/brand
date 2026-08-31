(function () {
  var headings = document.querySelectorAll(".page-body h2[id]");
  var links = document.querySelectorAll(".sub-nav a[href^=\"#\"]");
  if (!headings.length || !links.length) return;

  var linkByHash = {};
  links.forEach(function (link) {
    linkByHash[decodeURIComponent(link.getAttribute("href"))] = link;
  });

  var setActive = function (id) {
    links.forEach(function (link) {
      link.classList.remove("active");
    });
    var active = linkByHash["#" + id];
    if (active) active.classList.add("active");
  };

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: "0px 0px -70% 0px", threshold: 0 }
  );

  headings.forEach(function (h) {
    observer.observe(h);
  });
})();
