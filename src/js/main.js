(function($) {
  $(function() {

    $('select.ui-pgn-select').styler();

  });
  })(jQuery);

let search = document.querySelector('.ui-search')
let searchInput = document.querySelector('.ui-input-search')
let title = document.querySelector(".ui-heading-txt")

search.addEventListener('click', () => {

  searchInput.classList.add('active')
  title.classList.add('hidden')
  search.classList.add('hidden')
})

$(document).on('mouseup',function(e){
  if ($('.ui-input-search').has(e.target).length === 0) {
    searchInput.classList.remove('active')
    title.classList.remove('hidden')
    search.classList.remove('hidden')
  }
});