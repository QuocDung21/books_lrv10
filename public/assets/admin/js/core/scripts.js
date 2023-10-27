/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./resources/assets/admin/assets/js/scripts.js ***!
  \*****************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
window.tmp_theme = {};
tmp_theme.ajax_setup = function () {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
};
tmp_theme.nav_click = function () {
  $(document).on('click', '.menu-toggle, .modern-nav-toggle', function (e) {
    e.preventDefault();
    var d = new Date(),
      collapsed = $('body').hasClass('menu-collapsed');
    d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = "menu_status=" + (collapsed ? 'collapsed' : 'expanded') + ";expires=" + d.toUTCString() + ";path = /";
  });
};
tmp_theme.pickdate_submit = function () {
  $('.component-search-form .daterangepicker_v2').on('change', function () {
    $(this).parents('form').submit();
  });
};
tmp_theme.jquery_validator = function () {
  /*
   * Translated default messages for the jQuery validation plugin.
   * Locale: VI (Vietnamese; Tiếng Việt)
   */
  if (typeof $.validator != 'undefined') {
    $.extend($.validator.messages, {
      required: "Vui lòng nhập thông tin.",
      remote: "Hãy sửa cho đúng.",
      email: "Hãy nhập email.",
      url: "Hãy nhập URL.",
      date: "Hãy nhập ngày.",
      dateISO: "Hãy nhập ngày (ISO).",
      number: "Hãy nhập số.",
      digits: "Hãy nhập chữ số.",
      creditcard: "Hãy nhập số thẻ tín dụng.",
      equalTo: "Hãy nhập thêm lần nữa.",
      extension: "Phần mở rộng không đúng.",
      maxlength: $.validator.format("Hãy nhập từ {0} kí tự trở xuống."),
      minlength: $.validator.format("Hãy nhập từ {0} kí tự trở lên."),
      rangelength: $.validator.format("Hãy nhập từ {0} đến {1} kí tự."),
      range: $.validator.format("Hãy nhập từ {0} đến {1}."),
      max: $.validator.format("Hãy nhập từ {0} trở xuống."),
      min: $.validator.format("Hãy nhập từ {0} trở lên.")
    });
  }
};
tmp_theme.provinces = function () {
  var $ = jQuery,
    forms = $('form.has-provinces:not(.js-province)');
  $.each(forms, function (i, ele) {
    var form_ele = $(ele),
      province_ele = form_ele.find('.form-province_id'),
      district_ele = form_ele.find('.form-district_id'),
      ward_ele = form_ele.find('.form-ward_id'),
      default_option_html = window['province']['default_option_html'] || '';
    form_ele.addClass('js-province');
    var reset_select = function reset_select(ele) {
      ele.find('option').remove();
      ele.append(default_option_html);
    };
    province_ele.on('change', function () {
      reset_select(district_ele);
      reset_select(ward_ele);
      var _id = $(this).val();
      if (_id !== '') {
        ajax(window['province']['route_get_districts'], 'get', {
          'province_id': _id
        }).done(function (districts) {
          $.each(districts, function (i, district) {
            var disabled = window['province']['disabled']['districts'].indexOf(district.id) !== -1 ? 'disabled' : '';
            var selected = window['province']['default']['districts'].indexOf(district.id) !== -1 ? 'selected' : '';
            district_ele.append("<option value=\"".concat(district.id, "\" data-name=\"").concat(district['district_name'], "\" ").concat(disabled, " ").concat(selected, ">").concat(district['district_name'], "</option>"));
          });
        });
      }
    });
    district_ele.on('change', function () {
      reset_select(ward_ele);
      var _id = $(this).val();
      if (_id !== '') {
        ajax(window['province']['route_get_wards'], 'get', {
          'district_id': _id
        }).done(function (wards) {
          $.each(wards, function (i, ward) {
            var disabled = window['province']['disabled']['wards'].indexOf(ward.id) !== -1 ? 'disabled' : '';
            var selected = window['province']['default']['wards'].indexOf(ward.id) !== -1 ? 'selected' : '';
            ward_ele.append("<option value=\"".concat(ward.id, "\" data-name=\"").concat(ward['ward_name'], "\" ").concat(disabled, " ").concat(selected, ">").concat(ward['ward_name'], "</option>"));
          });
        });
      }
    });
  });
};
tmp_theme.link_modal = function () {
  var $ = jQuery,
    links = $('a.has-link_modal:not(.js-link_modal)');
  $.each(links, function (i, ele) {
    var link = $(ele),
      _href = link.attr('href');
    if (_href === '#') {
      _href = link.data('href');
    }
    link.addClass('js-link_modal');
    link.on('click', function (e) {
      e.preventDefault();
      if (_href === '#') {
        return false;
      }
      var _modal_id = link.attr('data-modal_id'),
        _ele_modal = $("#".concat(_modal_id));
      if (_modal_id && _ele_modal.length > 0) {
        _ele_modal.modal('show');
      } else {
        $.blockUI({
          message: '<div class="spinner-border text-white" role="status"></div>',
          css: {
            backgroundColor: 'transparent',
            border: '0'
          },
          overlayCSS: {
            opacity: 0.5
          }
        });
        $.get(_href, function (response) {
          $('body').append(response['modal']);
          var _ele_modal = $("#".concat(response['modal_id']));
          link.attr('data-modal_id', response['modal_id']);
          _ele_modal.remove();
          $.unblockUI();
          _ele_modal.modal('show');
        }).fail(function (response) {
          if ('responseJSON' in response) {
            tmp_theme.toastr('error', response.responseJSON.message);
          }
          $.unblockUI();
        });
      }
    });
  });
};
tmp_theme.modal_shown = function () {
  $(document).on('shown.bs.modal', 'div.modal', function (event) {
    tmp_theme.provinces();
    tmp_theme.form_validate();
    tmp_theme.feather();
    if (typeof $().select2 === 'function') {
      var _id = $(this).attr('id');
      $('.has-select2:not(.js-select2)').each(function () {
        var _this = $(this);
        _this.addClass('js-select2');
        _this.select2({
          dropdownParent: $("#".concat(_id))
        });
      });
    }
    tmp_theme.popover();
  });
};
tmp_theme.deleteResource = function () {
  $(".btn-delete-row-table").on('click', function () {
    var route = $(this).attr('data-action');
    var title = $(this).attr('data-title');
    Swal.fire({
      title: title,
      showDenyButton: true,
      denyButtonText: 'Không',
      confirmButtonText: 'Xóa'
    }).then(function (result) {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        ajax(route, 'DELETE', null).done( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Swal.fire({
                    position: 'center',
                    icon: response.icon,
                    title: response.message,
                    showConfirmButton: false,
                    showCloseButton: false,
                    timer: 1500
                  }).then(function () {
                    console.log(1);
                    window.location.reload();
                  });
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).fail(function (error) {
          console.log(error);
          alert('Server has an error. Please try again!');
        });
      }
    });
  });
};
tmp_theme.form_repeater = function () {
  $('.wrap-repeater:not(.js-repeater)').each(function (i, w) {
    $(w).addClass('js-repeater');
    $(w).repeater({
      show: function show() {
        $('.flatpickr-basic').flatpickr();
        $(this).slideDown();
        $('.select2-container').remove();
        $('.has-select2').removeClass('js-select2');
        // $('.wrap-repeater').removeClass('js-repeater');
        tmp_theme.select2();
        // tmp_theme.form_repeater();
        tmp_theme.feather();
      },
      hide: function hide(deleteElement) {
        $(this).slideUp(deleteElement);
      },
      repeaters: [{
        selector: '.inner-repeater'
      }]
    });
  });
};
tmp_theme.form_validate = function () {
  var $ = jQuery,
    options = {};
  if (typeof $.fn.validate != 'undefined') {
    $('.form-validate').validate(options);
  }
};
tmp_theme.form_block = function (_form) {
  _form.block({
    message: '<div class="spinner-border text-white" role="status"></div>',
    css: {
      backgroundColor: 'transparent',
      color: '#fff',
      border: '0'
    },
    overlayCSS: {
      opacity: 0.5
    }
  });
};
tmp_theme.form_unblock = function (_form) {
  _form.unblock();
};
tmp_theme.form_ajax_success_callback = function (_form, response) {
  tmp_theme.form_unblock(_form);
  if ('redirect' in response) {
    location.href = response.redirect;
  } else if ('reload' in response) {
    location.reload();
  } else if ('message' in response) {
    tmp_theme.toastr('success', response['message']);
  }
};
tmp_theme.form_ajax_error_callback = function (_form, response) {
  tmp_theme.form_unblock(_form);
  if ('responseJSON' in response && 'errors' in response['responseJSON']) {
    var error_html = tmp_theme.alert_render(response['responseJSON']['errors']);
    _form.find('.modal-alert').html('').append(error_html);
  }
  if ('message' in response) {
    tmp_theme.toastr('error', response['message']);
  }
};
tmp_theme.form_ajax_submit = function (_form, success_callback, error_callback) {
  tmp_theme.form_block(_form);
  var form_data = new FormData(_form[0]),
    _method = _form.attr('method'),
    _action = _form.attr('action');
  if (typeof success_callback === 'undefined') {
    success_callback = function success_callback(response) {
      tmp_theme.form_ajax_success_callback(_form, response);
    };
  }
  if (typeof error_callback === 'undefined') {
    error_callback = function error_callback(response) {
      tmp_theme.form_ajax_error_callback(_form, response);
    };
  }
  $.ajax({
    method: _method,
    url: _action,
    data: form_data,
    contentType: false,
    processData: false,
    success: success_callback,
    error: error_callback
  });
};
tmp_theme.alert_render = function (errors) {
  var li = '';
  $.each(errors, function (key, values) {
    $.each(values, function (i, e) {
      li += "<li>".concat(e, "</li>");
    });
  });
  return "<div class=\"alert alert-danger\" role=\"alert\">\n    <div class=\"alert-body\">\n        <div class=\"fw-bold\">\u0110\xE3 c\xF3 l\u1ED7i x\u1EA3y ra</div>\n        <ul class=\"mb-0\">".concat(li, "</ul>\n    </div>\n</div>");
};
tmp_theme.toastr = function (type, message) {
  if ((typeof toastr === "undefined" ? "undefined" : _typeof(toastr)) === 'object') {
    toastr[type](message, '', {
      closeButton: true,
      tapToDismiss: true
    });
  }
};
tmp_theme.get_token = function () {
  return document.querySelector('meta[name="csrf-token"]').content;
};
tmp_theme.select2 = function () {
  if (typeof $().select2 === 'function') {
    $('.has-select2:not(.js-select2)').each(function () {
      var _this = $(this),
        _options = {},
        _dropdown_parent = _this.data('dropdown_parent'),
        _placeholder = _this.attr('placeholder');
      _this.addClass('js-select2');
      if (_dropdown_parent) {
        _options['dropdownParent'] = $(_dropdown_parent);
      }
      if (_placeholder) {
        _options['placeholder'] = {
          id: '-1',
          // the value of the option
          text: _placeholder
        };
      }
      _options['templateResult'] = tmp_theme.select2_level;
      _this.select2(_options);
    });
  }
};
tmp_theme.select2_level = function (state) {
  if ($(state.element).css('display') === 'none') {
    return null;
  }
  if (!state.id) {
    return state.text;
  }
  var _text = state.text,
    _level = state.element.getAttribute('data-level'),
    _mobile = window.innerWidth < 768,
    _prefix = _mobile ? '|-- ' : '| - - ';
  return (_level ? _prefix.repeat(_level) : '') + _text;
};
tmp_theme.select2_open = function () {
  $(document).on('select2:open', function () {
    var allFound = document.querySelectorAll('.select2-container--open .select2-search__field');
    allFound[allFound.length - 1].focus();
  });
};
tmp_theme.popover = function () {
  if (typeof $().popover === 'function') {
    $('.tooltipcustom').each(function () {
      var _this = $(this);
      var txt = _this.data('content');
      _this.popover({
        container: 'body',
        trigger: 'hover',
        html: true,
        content: txt
      });
    });
  }
};
tmp_theme.pagination = function () {
  $(document).on('click', '.pagination:not(.pagination-no--js) .page-link', function (event) {
    var _this = $(this),
      _modal = _this.closest('.modal'),
      _href = _this.attr('href');
    if (!_href) {
      return false;
    }
    if (_modal.length > 0) {
      event.preventDefault();
      var _modal_body = $('.modal-body', _modal);
      _modal_body.block({
        message: '<div class="spinner-border text-white" role="status"></div>',
        css: {
          backgroundColor: 'transparent',
          border: '0'
        },
        overlayCSS: {
          opacity: 0.5
        }
      });
      $.ajax({
        method: 'get',
        url: _href,
        data: {
          'is_modal': true
        },
        success: function success(response) {
          if ('modal_body' in response) {
            _modal_body.html(response['modal_body']);
          }
          _modal_body.unblock();
          tmp_theme.popover();
        },
        error: function error(response) {
          tmp_theme.toastr('error', 'Tải dữ liệu không thành công.');
          _modal_body.unblock();
        }
      });
    }
  });
};
tmp_theme.setting_per_page = function (ele) {
  var _val = $(ele).val(),
    _url = $(ele).data('url'),
    _name = $(ele).data('name');
  $.ajax({
    url: _url,
    type: "POST",
    dataType: 'html',
    data: {
      _token: tmp_theme.get_token(),
      name: _name,
      number: _val
    },
    success: function success(response) {
      location.reload();
    }
  });
};
tmp_theme.user_validate = function (obj) {
  var ele = $(obj),
    _form = ele.closest('form');
  _form.validate();
};
tmp_theme.user_submit = function () {
  $(document).on('submit', '.form-update-user', function () {
    var _form = $(this),
      _valid = _form.valid();
    if (!_valid) {
      return false;
    }
    tmp_theme.form_ajax_submit(_form);
    return false;
  });
};
tmp_theme.custom_modal_livewire = function () {
  $('.js-show-modal').on('click', function (e) {
    livewire.emit('setCurrentCustomerLSTD', $(this).data('id'));
    $('#customer_history_tich_diem').modal('show');
  });
};
tmp_theme.input_numeral_mask = function () {
  $('.numeral-mask:not(.js-numeral-mask)').each(function (i, e) {
    $(e).addClass('js-numeral-mask');
    new Cleave(e, {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      swapHiddenInput: true
    });
  });
};
tmp_theme.change_paginate_table = function () {
  $(document).on('change', '.change-paginate-table', function () {
    var paginate = $(this).val();
    var url = $.query.set("options[perPage]", paginate).toString();
    document.location = url;
  });
};
tmp_theme.feather = function () {
  if (feather) {
    feather.replace({
      width: 14,
      height: 14
    });
  }
};
tmp_theme.table_check_all = function (_table) {
  var _check_all_ele = _table.find('#checkAll'),
    _total_checkbox = _table.find('.row-check').length;
  _check_all_ele.on('click', function () {
    _table.find('.row-check').prop('checked', $(this).is(':checked'));
  });
  _table.find('.row-check').on('click', function () {
    var total_checked = _table.find('.row-check:is(:checked)').length;
    console.log(total_checked, _total_checkbox);
    _check_all_ele.prop('checked', total_checked === _total_checkbox);
  });
};
tmp_theme.change_order_by_table = function () {
  $(document).on('click', '.table-column-sorting', function () {
    var key = $(this).attr('data-sort-key');
    var type = $(this).attr('data-sort-type');
    var orderBy = $.query.get("options[orderBy]");
    var typeOrder = '';
    switch (type) {
      case "ASC":
        typeOrder = "DESC";
        $(this).removeClass('column-order-asc');
        $(this).addClass('column-order-desc');
        break;
      case "DESC":
        typeOrder = "";
        $(this).removeClass('column-order-desc');
        $(this).removeClass('column-order-asc');
        break;
      default:
        typeOrder = "ASC";
        $(this).removeClass('column-order-desc');
        $(this).addClass('column-order-asc');
        break;
    }
    if (orderBy.length > 0) {
      var isUpdateQuery = false;
      orderBy.map(function (condition) {
        if (condition.column === key) {
          condition.type = typeOrder;
          isUpdateQuery = true;
        }
        return condition;
      });
      orderBy = orderBy.filter(function (condition) {
        return condition.type === 'ASC' || condition.type === 'DESC';
      });
      if (!isUpdateQuery) {
        orderBy.push({
          column: key,
          type: typeOrder
        });
      }
    } else {
      orderBy = [{
        column: key,
        type: typeOrder
      }];
    }
    var query = '';
    if (orderBy.length === 0) {
      query = $.query.REMOVE("options[orderBy]").toString();
    } else {
      query = $.query.set("options[orderBy]", orderBy).toString();
    }
    if (query === '') {
      query = window.location.href.replace(window.location.search, '');
    }
    document.location = query;
  });
};
tmp_theme.component_search_form_mobile = function () {
  var component_search_form = $('.component-search-form:not(.open_form_mobile)');
  var urlParams = new URLSearchParams(window.location.search);
  var searchParam = new Array();
  urlParams.forEach(function (value, key) {
    searchParam.push(key);
  });
  if (component_search_form.length) {
    if (window.innerWidth < 768 && searchParam.length === 0) {
      component_search_form.addClass('mobile');
    }
    component_search_form.submit(function () {
      if ($(this).hasClass('mobile')) {
        $(this).removeClass('mobile');
        return false;
      }
    });
  }
};
tmp_theme.component_view_image = function () {
  var modal = document.getElementById('zoomImageModal');
  var modalImg = document.getElementById("img01");
  $('.thumb').on('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
  $('#zoomImageModal .close').on('click', function () {
    modal.style.display = "none";
  });
};
tmp_theme.alert_success = function (message) {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: message,
    showConfirmButton: true,
    timer: 5000
  });
};
tmp_theme.alert_warning = function (message) {
  var confiOkrmButtonName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: message,
    showConfirmButton: true,
    confirmButtonText: confiOkrmButtonName,
    timer: 5000
  });
};
tmp_theme.alert_error = function (message) {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: message,
    showConfirmButton: true,
    timer: 5000
  });
};
tmp_theme.init = function () {
  tmp_theme.ajax_setup();
  tmp_theme.nav_click();
  tmp_theme.jquery_validator();
  tmp_theme.provinces();
  tmp_theme.link_modal();
  tmp_theme.modal_shown();
  tmp_theme.form_validate();
  tmp_theme.select2();
  tmp_theme.popover();
  tmp_theme.select2_open();
  tmp_theme.pagination();
  tmp_theme.user_submit();
  tmp_theme.custom_modal_livewire();
  tmp_theme.form_repeater();
  tmp_theme.input_numeral_mask();
  tmp_theme.change_paginate_table();
  tmp_theme.change_order_by_table();
  tmp_theme.component_search_form_mobile();
  tmp_theme.deleteResource();
  tmp_theme.component_view_image();
  tmp_theme.pickdate_submit();
};
$(document).ready(function () {
  tmp_theme.init();
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
  window.ajax = function (url, method, data) {
    return $.ajax({
      url: url,
      type: method,
      data: data
    });
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
});
/******/ })()
;