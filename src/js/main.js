function showPassword() {
  const passwordInput = document.querySelectorAll(".ui-input.password");
  const iconPass = document.querySelectorAll('.sprite.password')

  iconPass.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.closest('.ui-input-password')
      const inputPass = parent.querySelector('.ui-input.password')

      if (inputPass.type === "password") {
        inputPass.type = "text";
      } else {
        inputPass.type = "password";
      }
    })
  })
}

function showPopup() {
  $.magnificPopup.open({
    items: { src: './popup/accept.html' },
    type: 'ajax',
    overflowY: 'scroll',
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    ajax: {
      tError: 'Ошибка. <a href="%url%">Контент</a> не может быть загружен',
    },
    callbacks: {
      open: function () {
        setTimeout(function () {
          $('.mfp-wrap').addClass('not_delay');
          $('.white-popup').addClass('not_delay');
        }, 700);
      }
    }
  });
}

jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^([а-яё ]+|[a-z ]+)$/i.test(value);
}, "Поле может состоять из букв, пробелов, без цифр");

jQuery.validator.addMethod("phone", function (value, element) {
  if (value.startsWith('+375')) {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/i.test(value);
  } else if (value.startsWith('+7')) {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/i.test(value);
  } else {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/i.test(value);
  }
}, "Введите полный номер");

$.validator.messages.required = 'Пожалуйста, введите данные';

function phoneValidate() {
  if (document.getElementById('phone')) {
    let phone = document.getElementById('phone')

    let phoneMask = IMask(phone, {
      mask: [
        {
          mask: '+{375} 00 000-00-00',
          startsWith: '375',
          overwrite: true,
          lazy: false,
          placeholderChar: '_',
        },
        {
          mask: '+{7} 000 000-00-00',
          startsWith: '7',
          overwrite: true,
          lazy: false,
          placeholderChar: '_',
        },
        {
          mask: '0000000000000',
          startsWith: '',
          country: 'unknown'
        }
      ],

      dispatch: function (appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g, '');

        return dynamicMasked.compiledMasks.find(function (m) {
          return number.indexOf(m.startsWith) === 0;
        });
      }
    })
  }
}

(function($) {
  $(function() {

    $('select.ui-pgn-select').styler();


  });
})(jQuery);

$( document ).ready(function() {
  let search = document.querySelector('.ui-search')

  if(search) {
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
  }

  const btnTab = document.querySelectorAll('.btn-tab')

  if(btnTab.length) {
    btnTab.forEach(item => {
      item.addEventListener('click', () => {
        const selector = item.id
        const tabContent = document.querySelector(`.${selector}`)
        const activeTab = document.querySelector('.tab-content.active')
        const activeBtn = document.querySelector('.btn-tab.active')

        activeBtn.classList.add('underline')
        activeTab.classList.remove('active')
        activeBtn.classList.remove('active')

        tabContent.classList.add('active')
        item.classList.add('active')
        item.classList.remove('underline')
      })
    })
  }

  const locationLink = document.querySelector('.header-location-link')

  if(locationLink) {
    const locationSetting = document.querySelector('.header-location-setting')

    locationLink.addEventListener('click', () => {
      locationSetting.classList.add('active')
    })

    $(document).on('mouseup',function(e){
      if ($('.header-location-setting').has(e.target).length === 0) {
        locationSetting.classList.remove('active')
      }
    });
  }

  $(document).on("click", ".mfp-link", function () {
    var a = $(this);

    $.magnificPopup.open({
      items: { src: a.attr("data-href") },
      type: "ajax",
      overflowY: "scroll",
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      ajax: {
        tError: "Error. Not valid url",
      },
      callbacks: {
        open: function () {
          setTimeout(function(){
            $('.mfp-wrap').addClass('not_delay');
            $('.mfp-popup').addClass('not_delay');
          },700);
        }
      },

      callbacks: {
        open: function() {
          document.documentElement.style.overflow = 'hidden'
        },

        close: function() {
          document.documentElement.style.overflow = ''
        }
      }
    });
    return false;
  });
});