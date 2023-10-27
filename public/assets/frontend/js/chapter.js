/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************************!*\
  !*** ./resources/assets/frontend/js/chapter.js ***!
  \*************************************************/
$(document).ready(function () {
  // Customize read story
  var chapterContent = $('.chapter-content');
  var settingFont = $('.setting-font');
  settingFont.on('change', function (e) {
    var _this = this;
    window.setCookie('font_chapter', $(this).val(), 1);
    var targetFontConfig = window.objConfigFont.find(function (item) {
      return item.name == $(_this).val();
    });
    chapterContent.css('font-family', targetFontConfig.value);
    // window.location.reload()
  });

  var settingFontSize = $('.setting-font-size');
  settingFontSize.on('change', function (e) {
    window.setCookie('font_size_chapter', $(this).val(), 1);
    chapterContent.css('font-size', $(this).val() + 'px');
    // window.location.reload()
  });

  var settingLineHeight = $('.setting-line-height');
  settingLineHeight.on('change', function (e) {
    window.setCookie('line_height_chapter', $(this).val(), 1);
    chapterContent.css('line-height', $(this).val() + '%');
  });
  var chapterJump = $('.chapter_jump');
  chapterJump.on('click', function () {
    var _this2 = this;
    var chapterActions = $(this).closest('.chapter-actions');
    if (chapterActions) {
      var selectChapter = chapterActions.children('.select-chapter');
      if (selectChapter) {
        var slugChapter = $(this).attr('data-slug-chapter');
        var slugStory = $(this).attr('data-slug-story');
        fetch(route('get.chapters'), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': window.SuuTruyen.csrfToken
          },
          body: JSON.stringify({
            story_id: $(this).attr('data-story-id')
          })
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          console.log(data);
          if (data.success) {
            var html = '';
            data.chapters.forEach(function (chapter) {
              var classActive = '';
              if (slugChapter == chapter.slug) {
                classActive = 'bg-info text-light';
              }
              html += "\n                                <li>\n                                    <a class=\"dropdown-item ".concat(classActive, "\" data-chapter-position=\"").concat(chapter.slug, "\"\n                                        href=\"").concat(route('chapter', {
                slugStory: slugStory,
                'slugChapter': chapter.slug
              }), "\">Ch\u01B0\u01A1ng\n                                        ").concat(chapter.chapter, "</a>\n                                </li>\n                                ");
            });
            var selectChapterList = $(".select-chapter__list");
            selectChapterList.html(html);
            $(_this2).addClass('d-none');
            selectChapter.removeClass('d-none');
          }
        })["catch"](function (error) {
          console.log(error);
          if (error.status !== 500) {
            var errorMessages = error.responseJSON.errors;
          } else {}
        });
      }
    }
  });
  $(document).keydown(function (e) {
    switch (e.which) {
      case 87:
        // W key
        window.scrollBy(0, -70);
        break;
      case 83:
        // S key
        window.scrollBy(0, 70);
        break;
      case 65:
        // A key
        var chapterPrev = document.querySelector('.chapter-prev');
        chapterPrev && chapterPrev.click();
        break;
      case 68:
        // D key
        var chapterNext = document.querySelector('.chapter-next');
        chapterNext && chapterNext.click();
        break;
    }

    // Handle save cookie chapters
  });

  document.addEventListener('scroll', function () {
    if (window.innerWidth < 992) {
      var chapterActionsOrigin = document.querySelector('.chapter-actions-origin');
      var chapterActionsMobile = document.querySelector('.chapter-actions-mobile');
      if (chapterActionsOrigin && chapterActionsMobile) {
        var position = chapterActionsOrigin.getBoundingClientRect();

        // checking whether fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          chapterActionsMobile.classList.remove('show');
        } else {
          chapterActionsMobile.classList.add('show');
        }
      }
    }
  });

  // Handle history chapter reading 
});
/******/ })()
;