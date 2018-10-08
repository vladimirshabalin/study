'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuItem =
/*#__PURE__*/
function () {
  function MenuItem(href, title, className) {
    _classCallCheck(this, MenuItem);

    this.href = href;
    this.title = title;
    this.className = className;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      return "<li class=\"".concat(this.className, "\"><a href=\"").concat(this.href, "\">").concat(this.title, "</a></li>");
    }
  }]);

  return MenuItem;
}();

window.storage = {
  menuItem: MenuItem.className
};