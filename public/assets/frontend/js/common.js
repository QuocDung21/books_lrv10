/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./resources/assets/frontend/js/common.js ***!
  \************************************************/
$(document).ready(function () {
  var searchStory = $('.search-story');
  if (searchStory) {
    searchStory.on('keyup', function (e) {
      // console.log($(this).val());
      var searchResult = $('.search-result');
      var list = searchResult.find('.list-group');
      if ($(this).val().length == 0) {
        if (searchResult) {
          searchResult.addClass('d-none');
          searchResult.addClass('no-result');
          list.addClass('d-none');
        }
      } else {
        // if ($(this).val().length > 2) {
        fetch(route('search.story'), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': window.SuuTruyen.csrfToken
          },
          body: JSON.stringify({
            key_word: $(this).val()
          })
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          // console.log(data);
          if (data.success) {
            var html = '';
            if (searchResult) {
              searchResult.removeClass('d-none');
              list.empty();
              searchResult.removeClass('no-result');
              list.removeClass('d-none');
              if (data.stories.length > 0 && list) {
                data.stories.forEach(function (story) {
                  html += "\n                                                <li class=\"list-group-item\">\n                                                    <a href=\"".concat(route('story', story.slug), "\" class=\"text-dark hover-title\">").concat(story.name, "</a>\n                                                </li>\n                                            ");
                });
              } else {
                html += "\n                                    <li class=\"list-group-item border-0\">\n                                    Kh\xF4ng t\xECm th\u1EA5y truy\u1EC7n n\xE0o \n                                    </li>\n                                    ";
              }
              list.html(html);
            }
          }
        })["catch"](function (error) {
          console.log(error);
          if (error.status !== 500) {
            var errorMessages = error.responseJSON.errors;
          } else {
            errorContent = error.responseJSON.message;
          }
        });
        // }
      }
    });
  }
});
/******/ })()
;