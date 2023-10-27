/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./resources/assets/frontend/js/app.js ***!
  \*********************************************/
window.setCookie = function (name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
window.getCookie = function (name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
window.loadingFullPage = function () {
  var elementLoading = $('#loadingPage');
  var status = elementLoading.css('display');
  if (status == 'none') {
    elementLoading.css('display', 'flex');
    $('body').css('overflow', 'hidden');
  } else {
    elementLoading.css('display', 'none');
    $('body').css('overflow', 'unset');
  }
};
window.objConfigFont = [{
  name: 'roboto',
  value: "'Roboto Condensed', sans-serif"
}, {
  name: 'mooli',
  value: "'Mooli', sans-serif"
}, {
  name: 'patrick_hand',
  value: "'Patrick Hand', cursive"
}];
function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
var prevScrollPos = window.pageYOffset;
var scrollThreshold = 500;
window.enableScroll = function () {
  window.onscroll = function () {
    if (window.innerWidth < 992) {
      var currentScrollPos = window.pageYOffset;
      var headerMobile = document.querySelector('.header-mobile');
      if (prevScrollPos > currentScrollPos) {
        headerMobile.classList.add('show-scroll');
        headerMobile.classList.remove('hide-scroll');
      } else {
        if (currentScrollPos > scrollThreshold) {
          headerMobile.classList.add('hide-scroll');
          headerMobile.classList.remove('show-scroll');
        }
      }
      prevScrollPos = currentScrollPos;
    }
  };
};
window.enableScroll();
function showFullTabContent() {
  var productDetailInfo = document.querySelector('.story-detail__top--desc');
  if (productDetailInfo) {
    productDetailInfo.classList.add('show-full');
    var productDetailInfoMore = document.querySelector('.info-more');
    if (productDetailInfoMore) {
      var more = productDetailInfoMore.querySelector('.info-more--more');
      more && more.classList.remove('active');
      var collapse = productDetailInfoMore.querySelector('.info-more--collapse');
      collapse && collapse.classList.add('active');
    }
  }
}
function collapseDescription() {
  var productDetailInfoTabContent = document.querySelector('.story-detail__top--desc');
  if (productDetailInfoTabContent) {
    productDetailInfoTabContent.classList.remove('show-full');
    var productDetailInfoMore = document.querySelector('.info-more');
    if (productDetailInfoMore) {
      var more = productDetailInfoMore.querySelector('.info-more--more');
      more && more.classList.add('active');
      var collapse = productDetailInfoMore.querySelector('.info-more--collapse');
      collapse && collapse.classList.remove('active');
    }
  }
}
var storyDetailTopImage = document.querySelector('.story-detail__top--image');
if (storyDetailTopImage) {
  var img = storyDetailTopImage.querySelector('img');
  if (img) {
    var storyDesc = document.querySelector('.story-detail__top--desc');
    if (storyDesc) {
      storyDesc.style.maxHeight = img.clientHeight + 'px';
    }
  }
}
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('info-more--more') || e.target.closest('.info-more--more')) {
    showFullTabContent();
  }
  if (e.target.classList.contains('info-more--collapse') || e.target.closest('.info-more--collapse')) {
    collapseDescription();
  }
});
var settingBackground = $('.setting-background');
settingBackground.on('change', function (e) {
  window.setCookie('bg_color', $(this).val(), 1);
  window.location.reload();
});
$(document).ready(function () {
  var selectStoriesHot = $(".select-stories-hot");
  var wrapperSkeletonStoriesHot = $(".wrapper-skeleton");
  if (selectStoriesHot) {
    var handleChangeListHot = function handleChangeListHot(category_id) {
      fetch(route('get.list.story.hot'), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': window.SuuTruyen.csrfToken
        },
        body: JSON.stringify({
          category_id: category_id
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data.success) {
          var html = $(data.html);
          var list = $('.section-stories-hot__list:not(.wrapper-skeleton)', html);
          $('.section-stories-hot__list:not(.wrapper-skeleton)').replaceWith(list);
          wrapperSkeletonStoriesHot.addClass('d-none');
        }
      })["catch"](function (error) {
        console.log(error);
        if (error.status !== 500) {
          var errorMessages = error.responseJSON.errors;
        } else {
          errorContent = error.responseJSON.message;
        }
      });
    };
    selectStoriesHot.on('change', function (e) {
      var categoryId = $(this).val();
      $('.section-stories-hot__list').addClass('d-none');
      wrapperSkeletonStoriesHot.removeClass('d-none');
      handleChangeListHot(categoryId);
    });
    var themeMode = $(".theme_mode");
    if (themeMode) {
      themeMode.on('change', function (e) {
        var valueThemeMode = $(this).is(":checked") ? 'dark' : 'light';
        window.setCookie('bg_color', valueThemeMode, 1);
        if ($(this).is(":checked")) {
          $("body").addClass('dark-theme');
        } else {
          $("body").removeClass('dark-theme');
        }
        // window.location.reload()
      });
    }

    var x = setInterval(function () {
      var selectStoriesHot = document.querySelector('.select-stories-hot');
      if (!selectStoriesHot) {
        clearInterval(x);
      } else {
        var options = selectStoriesHot.querySelectorAll('option');
        var valueSelected = null;
        options.forEach(function (option, index) {
          if (option.hasAttribute('selected')) {
            valueSelected = option.getAttribute('value');
          }
          option.removeAttribute('selected');
        });
        // console.log(valueSelected);

        // $('.select-stories-hot option:selected').next().attr('selected', 'selected');
        if (valueSelected == null) {
          $('.select-stories-hot option:first').next().attr('selected', 'selected');
        } else {
          $(".select-stories-hot option[value=\"".concat(valueSelected, "\"]")).next().attr('selected', 'selected');
        }
        if ($(".select-stories-hot").val() != 'Tất cả') {
          handleChangeListHot($(".select-stories-hot").val());
        } else {
          $('.select-stories-hot option:selected').next().attr('selected', 'selected');
        }
      }
    }, 50000);
  }
});
/******/ })()
;