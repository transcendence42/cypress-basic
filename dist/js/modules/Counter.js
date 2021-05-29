"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Counter(_a) {
    var $app = _a.$app;
    var render = function () {
        if (!$app) {
            return;
        }
        $app.innerHTML = "\n       <div class=\"container\">\n          <h1>ui counter</h1>\n          <div class=\"counter\">\n            <a href=\"#\" class=\"minus-button\"><span>-</span></a>\n            <input name=\"count\" type=\"text\" class=\"count-display\" value=\"10\">\n            <a href=\"#\" class=\"plus-button\"><span>+</span></a>\n          </div>\n        </div>";
    };
    var init = function () {
        render();
    };
    init();
}
exports.default = Counter;
