/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./resources/assets/frontend/js/story.js ***!
  \***********************************************/
$(document).ready(function () {
  if (route().current('story')) {
    var renderListChapter = function renderListChapter(pageValue, data) {
      var parser = new DOMParser();
      var html = parser.parseFromString(data, 'text/html');
      var chaptersList = html.querySelector('.story-detail__list-chapter--list');
      var chapterListOld = document.querySelector('.story-detail__list-chapter--list');
      if (chaptersList && chapterListOld) {
        chapterListOld.replaceWith(chaptersList);
      }
      var pagination = html.querySelector('.pagination');
      var paginationOld = document.querySelector('.pagination');
      if (pagination && paginationOld) {
        var inputPaginateNew = pagination.querySelector('.input-paginate');
        if (inputPaginateNew) {
          inputPaginateNew.setAttribute('value', pageValue);
        }
        paginationOld.replaceWith(pagination);
      }
      var newUrl = route('story', storySlug) + "?page=".concat(pageValue);
      var newState = {
        page: "new-page"
      };
      history.pushState(newState, null, newUrl);
    };
    var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
      }
      return false;
    };
    var page = getUrlParameter('page');

    // if (page) {
    //     $('html, body').animate({
    //         scrollTop: $('.story-detail__list-chapter').offset().top
    //     }, 500);
    // }

    var storySlug = $("#story_slug").val();
    var inputNumberPaginate = $('.choose-paginate .input-paginate');
    inputNumberPaginate.val(page ? page : 1);
    document.addEventListener('change', function (e) {
      if (e.target.classList.contains('input-paginate')) {
        e.target.setAttribute('value', e.target.value);
      }
    });
    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('btn-go-paginate')) {
        var inputPaginate = $(".input-paginate");
        window.loadingFullPage();
        fetch(route('story', storySlug) + "?page=".concat(inputPaginate.val())).then(function (res) {
          return res.text();
        }).then(function (data) {
          renderListChapter(inputPaginate.val(), data);
          window.loadingFullPage();
        })["catch"](function (error) {
          console.log(error);
          if (error.status !== 500) {
            var errorMessages = error.responseJSON.errors;
          } else {}
        });
      }
      if (e.target.classList.contains('story-ajax-paginate')) {
        var dataUrl = e.target.getAttribute('data-url');
        var urlParams = new URLSearchParams(dataUrl.split('?')[1]);
        var pageValue = urlParams.get("page");
        window.loadingFullPage();
        fetch(route('story', storySlug) + "?page=".concat(pageValue)).then(function (res) {
          return res.text();
        }).then(function (data) {
          renderListChapter(pageValue, data);
          window.loadingFullPage();
        })["catch"](function (error) {
          console.log(error);
          if (error.status !== 500) {
            var errorMessages = error.responseJSON.errors;
          } else {}
        });
      }
    });

    // const choosePaginate = $('.choose-paginate')

    // if (choosePaginate) {
    //     const storySlug = $("#story_slug").val()
    //     const inputNumberPaginate = $('.choose-paginate .input-paginate')

    //     inputNumberPaginate.val(page ? page : 1)

    //     const btnGoPaginate = $('.choose-paginate .btn-go-paginate')
    //     btnGoPaginate.on('click', function (e) {
    //         fetch(route('story', storySlug) + `?page=${inputNumberPaginate.val()}`)
    //             .then(res => res.text())
    //             .then(data => {
    //                 const parser = new DOMParser();
    //                 const html = parser.parseFromString(data, 'text/html');
    //                 const chaptersList = html.querySelector('.story-detail__list-chapter--list');
    //                 console.log(chaptersList);

    //                 const chapterListOld = document.querySelector('.story-detail__list-chapter--list')
    //                 if (chaptersList && chapterListOld) {
    //                     chapterListOld.replaceWith(chaptersList)
    //                 }

    //                 const pagination = html.querySelector('.pagination')
    //                 const paginationOld = document.querySelector('.pagination')
    //                 if (pagination && paginationOld) {
    //                     const inputPaginate = pagination.querySelector('.input-paginate')
    //                     if (inputPaginate) {
    //                         inputPaginate.setAttribute('value', inputNumberPaginate.val());
    //                     }
    //                     paginationOld.replaceWith(pagination)
    //                 }
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //                 if (error.status !== 500) {
    //                     let errorMessages = error.responseJSON.errors;
    //                 } else {

    //                 }
    //             })
    //         // window.location.href = route('story', storySlug) + `?page=${inputNumberPaginate.val()}`
    //     })
    // }
  }
});
/******/ })()
;