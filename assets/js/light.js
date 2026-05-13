var lightboxDescription = GLightbox({
  selector: 'glightbox',
  touchNavigation: true,
  keyboardNavigation: true,
  closeButton: true,
  closeOnOutsideClick: true,
  loop: true
});

function refreshLightbox() {
  if (lightboxDescription && typeof lightboxDescription.reload === "function") {
    lightboxDescription.reload();
  }
}

function call(id) {
  var items = Array.from(document.getElementsByClassName("filter"));

  items.forEach(function (item) {
    if (id === "all") {
      item.classList.remove('d-none');
      item.classList.add('fadeIn', 'glightbox');
      setTimeout(clean, 500);
      return;
    }

    if (item.classList.contains(id)) {
      item.classList.remove('d-none');
      item.classList.add('fadeIn', 'glightbox');
    } else {
      item.classList.add('d-none');
      item.classList.remove('fadeIn', 'glightbox');
    }
  });

  refreshLightbox();
}

function clean() {
  var items = Array.from(document.getElementsByClassName("filter"));

  items.forEach(function (item) {
    item.classList.remove('fadeIn');
  });

  refreshLightbox();
}
