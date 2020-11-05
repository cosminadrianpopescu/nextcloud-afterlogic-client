function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/attachments.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/attachments.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlAttachmentsHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [hidden]=\"attachments.length == 0\">\n  <p-table [value]=\"attachments\" [loading]=\"view._attDownloading\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th style=\"width: 3em\"></th>\n        <th style=\"text-align: left\">\n          Attachment\n        </th>\n        <th style=\"width: 3em\"></th>\n        <th style=\"width: 3em\" *ngIf=\"view._isCloud && message\"></th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-row>\n      <tr>\n        <td><i class=\"fa fa-{{row | fileIcon}}\"></i></td>\n        <td (click)=\"view._viewAttachment(row)\">\n          <div>{{row.FileName}}</div>\n          <div>{{(row.EstimatedSize || row.Size) | humanFileSize}}</div>\n        </td>\n        <td>\n          <i *ngIf=\"message\" (click)=\"view._downloadAttachment(row)\" class=\"fa fa-download\"></i>\n          <i *ngIf=\"!message\" (click)=\"view._removeAttachment(row)\" class=\"fa fa-trash\"></i>\n        </td>\n        <td *ngIf=\"view._isCloud && message\">\n          <i (click)=\"view._uploadToCloud(row)\" class=\"fa fa-cloud-download\"></i>\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/avatar.html":
  /*!********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/avatar.html ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlAvatarHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [style.background-color]=\"contact | avatarColor\" class=\"color-circle\">\n  <span class=\"text\">{{contact | avatarText}}</span>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/compose.html":
  /*!*********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/compose.html ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlComposeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\" *ngIf=\"view._model\">\n  <div class=\"p-grid ui-fluid\">\n    <div class=\"p-col-6\"></div>\n    <div class=\"p-col-6 options\">\n      <button\n        [disabled]=\"view._saving\"\n        (click)=\"view._save(false)\"\n        style=\"width: 73px\"\n        pButton\n        icon=\"{{view._saving ? 'fa fa-spinner fa-spin' : 'fa fa-floppy-o'}}\"\n        label=\"Save\"></button>\n      <button [disabled]=\"view._saving\" (click)=\"view._send()\" style=\"width: 73px; margin-left: 10px;\" pButton icon=\"{{view._saving ? 'fa fa-spinner fa-spin' : 'fa fa-paper-plane'}}\" label=\"Send\"></button>\n      <button (click)=\"view._attach()\" style=\"width: 87px; margin-left: 10px\" pButton icon=\"{{view._attaching ? 'fa fa-spinner fa-spin' : 'fa fa-paperclip'}}\" label=\"Attach\"></button>\n      <button *ngIf=\"view._incloud\" (click)=\"view._cloudAttach()\" style=\"width: 87px; margin-left: 10px\" pButton icon=\"{{view._cloudAttaching ? 'fa fa-spinner fa-spin' : 'fa fa-cloud'}}\" label=\"Attach\"></button>\n      <input #file type=\"file\" multiple=\"true\" style=\"display: none\"/>\n    </div>\n    <div class=\"p-col-12\" *ngIf=\"view._combinedView\">\n      <span class=\"ui-inputgroup ui-float-label\">\n        <p-dropdown id=\"from-dropdown\"\n          [options]=\"view._accounts$ | async\"\n          [(ngModel)]=\"view._account\"\n          [disabled]=\"view._model?.Attachments.length > 0\"\n          optionLabel=\"Email\"></p-dropdown>\n        <label for=\"from-dropdown\">From</label>\n      </span>\n    </div>\n    <ng-container [ngTemplateOutlet]=\"field\" [ngTemplateOutletContext]=\"{$implicit: {field: 'To'}}\"></ng-container>\n    <ng-container [ngTemplateOutlet]=\"field\" [ngTemplateOutletContext]=\"{$implicit: {field: 'Cc'}}\"></ng-container>\n    <ng-container [ngTemplateOutlet]=\"field\" [ngTemplateOutletContext]=\"{$implicit: {field: 'Bcc'}}\"></ng-container>\n    <div class=\"p-col-12\">\n      <span class=\"ui-inputgroup ui-float-label\">\n        <input type=\"text\" pInputText id=\"subject-id\" [(ngModel)]=\"view._model.Subject\"/>\n        <label for=\"subject-id\">Subject</label>\n      </span>\n    </div>\n    <div class=\"p-col-12\">\n      <al-editor [(model)]=\"view._model.Body\" #editor *ngIf=\"view._type == 'HTML'\"></al-editor>\n      <textarea pInputTextarea [(ngModel)]=\"view._model.Body\" *ngIf=\"view._type != 'HTML'\"></textarea>\n    </div>\n    <div class=\"p-col-12\">\n      <al-attachments [account]=\"view._account\" [attachments]=\"view._model.Attachments\" autoResize=\"autoResize\"></al-attachments>\n    </div>\n  </div>\n\n  <ng-template #field let-context>\n    <div class=\"p-col-12\" [hidden]=\"!view._showCc && context.field != 'To'\">\n      <span class=\"ui-inputgroup ui-float-label\">\n        <p-autoComplete\n          #autocomplete\n          type=\"email\"\n          [(ngModel)]=\"view._model[context.field]\"\n          [suggestions]=\"view._contacts\"\n          [autoHighlight]=\"true\"\n          (onBlur)=\"view._blur(autocomplete)\"\n          (onFocus)=\"view._focus(autocomplete)\"\n          delay=\"0\"\n          [id]=\"context.field\"\n          [multiple]=\"true\"\n          field=\"display\"\n          (completeMethod)=\"view._filterContact($event)\"\n          >\n          <ng-template pTemplate=\"item\" let-item>\n            <span *ngIf=\"item.DisplayName\">{{item.DisplayName}} ({{item.Email}})</span>\n            <span *ngIf=\"!item.DisplayName\">{{item.Email}}</span>\n          </ng-template>\n        </p-autoComplete>\n        <button (click)=\"view._showCc = true\" pButton icon=\"fa fa-angle-down\" *ngIf=\"!view._showCc && context.field == 'To'\"></button>\n        <label [for]=\"context.field\">{{context.field}}</label>\n      </span>\n    </div>\n  </ng-template>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/editor.html":
  /*!********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/editor.html ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlEditorHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"editor\" #editor contenteditable=\"true\" [innerHTML]=\"view._html | asHtml\" (keyup)=\"view._keyup()\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/folders-list.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/folders-list.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlFoldersListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"position: relative\">\n  <p-blockUI [target]=\"folders\" [blocked]=\"view._loading\"></p-blockUI>\n  <div #folders>\n    <p-tree selectionMode=\"single\" (onNodeSelect)=\"view._select($event.node?.data)\" [value]=\"view._account?.Folders$ | async | foldersTree\">\n      <ng-template let-node pTemplate=\"default\">\n        <span [ngClass]=\"{selected: view._selected == node.data}\">{{node.data | folderLabel | async}}</span>\n      </ng-template>\n    </p-tree>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/home.html":
  /*!******************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/home.html ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlHomeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container [ngTemplateOutlet]=\"view._isMobile ? mobile : desktop\"></ng-container>\n\n<ng-template #desktop>\n  <p-table [value]=\"view._row\" [resizableColumns]=\"true\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th class=\"folders-col\">\n          <button (click)=\"view._newMessage('new')\" pButton icon=\"fa fa-envelope-o\" label=\"New message\"></button>\n        </th>\n        <th class=\"mails-col\">\n          <div>\n            <div class=\"left\">\n              <ng-container [ngTemplateOutlet]=\"toolbarButtons\" [ngTemplateOutletContext]=\"{$implicit: actionButton}\"></ng-container>\n            </div>\n            <div class=\"right\">\n              <button (click)=\"view._refresh()\" pButton icon=\"{{view._refreshing ? 'fa fa-spinner fa-spin' : 'fa fa-refresh'}}\"></button>\n            </div>\n          </div>\n        </th>\n        <th class=\"mail-col\">\n          <div class=\"right\">\n            {{view._account | currentEmail}}\n            <p-menu #menu [popup]=\"true\" [model]=\"view._userMenu\" styleClass=\"menuWidth\"></p-menu>\n            <button type=\"button\" pButton icon=\"fa fa-user\" (click)=\"menu.toggle($event)\"></button>\n          </div>\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\">\n      <tr class=\"top\">\n        <td>\n          <div class=\"wrapper\">\n            <al-folders-list [account]=\"view._account\"></al-folders-list>\n          </div>\n        </td>\n        <td>\n          <div class=\"messages-wrapper\">\n            <al-messages-list\n              #messagesList\n              (selectionChanged)=\"view._selectionChanged($event)\"\n              (notify)=\"view._messageNotify($event)\"\n              [account]=\"view._account\"\n              [folder]=\"view._folder\"></al-messages-list>\n          </div>\n        </td>\n        <td>\n          <div class=\"wrapper padding-right-10\">\n            <al-message [ngClass]=\"view._themeClass\" (notify)=\"view._msgBodyNotify($event)\" [message]=\"view._message\"></al-message>\n          </div>\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <p-dialog\n    (onHide)=\"view._hideCompose(null)\"\n    [autoZIndex]=\"false\"\n    [header]=\"view._composeTitle\" [(visible)]=\"view._compose\"\n    [closeOnEscape]=\"true\" [style]=\"{width: '600px'}\">\n    <al-compose\n      (notify)=\"view._hideCompose($event)\"\n      *ngIf=\"view._composer\"\n      [composeType]=\"view._composeType\"\n      [message]=\"view._composeMessage\"\n      [to]=\"view._composeTo\"></al-compose>\n  </p-dialog>\n  <p-dialog header=\"Settings\" [resizable]=\"true\" [closeOnEscape]=\"true\" [style]=\"{width: '600px'}\" [(visible)]=\"view._showSettings\">\n    <al-settings></al-settings>\n  </p-dialog>\n</ng-template>\n<ng-template #mobile>\n  <p-sidebar [style]=\"{width: '80%'}\" [(visible)]=\"view._toolbarVisible\" [baseZIndex]=\"10000\">\n    <div class=\"p-grid ui-fluid\">\n      <div class=\"flex p-col-12\" *ngFor=\"let account of (view._accounts$ | async)\">\n        <div class=\"avatar\">\n          <al-avatar [contact]=\"account | accountToContact\"></al-avatar>\n        </div>\n        <div class=\"account\" [ngClass]=\"{selected: account.Email == view._account?.Email}\" (click)=\"view._changeAccount(account.Email)\">\n          <h3 class=\"name\" *ngIf=\"account.FriendlyName\">{{account.FriendlyName}}</h3>\n          <h4 class=\"email\" *ngIf=\"!(account | isCombinedAccount)\">{{account.Email}}</h4>\n          <h4 class=\"email\" *ngIf=\"account | isCombinedAccount\">{{(view._accounts$ | async | count) - 1}} accounts</h4>\n        </div>\n      </div>\n      <div class=\"p-col-12\">\n        <al-folders-list [account]=\"view._account\"></al-folders-list>\n      </div>\n      <div class=\"p-col-12\" (click)=\"view._settingsClick()\">\n        <i class=\"fa fa-cog\"></i> Settings\n      </div>\n    </div>\n  </p-sidebar>\n\n  <p-toolbar [ngClass]=\"view._themeClass\">\n    <div class=\"ui-toolbar-group-left\">\n      <i (click)=\"view._toolbarVisible = true\"\n        [hidden]=\"view._mobileViewType != 'list'\"\n        class=\"fa fa-bars\"\n        style=\"vertical-align: middle\"></i>\n      <i (click)=\"view._toolbarBack()\" \n        [hidden]=\"view._mobileViewType == 'list'\"\n        class=\"fa fa-arrow-left\"\n        style=\"vertical-align: middle\"></i>\n      <i (click)=\"view._newMessage('new')\" \n        [hidden]=\"view._mobileViewType != 'list'\"\n        class=\"fa fa-plus\"\n        style=\"vertical-align: middle\"></i>\n      <ng-container [ngTemplateOutlet]=\"toolbarButtons\" [ngTemplateOutletContext]=\"{$implicit: actionIcon}\"></ng-container>\n      <i (click)=\"view._refresh()\" \n        [hidden]=\"view._mobileViewType != 'list'\"\n        class=\"{{view._refreshing ? 'fa fa-spinner fa-spin' : 'fa fa-refresh'}}\"\n        style=\"vertical-align: middle\"></i>\n    </div>\n  </p-toolbar>\n\n  <div class=\"p-grid ui-fluid mobile-messages-list\">\n    <al-messages-list\n      class=\"mobile\"\n      [hidden]=\"view._mobileViewType != 'list'\"\n      #messagesList\n      (selectionChanged)=\"view._selectionChanged($event)\"\n      (notify)=\"view._messageNotify($event)\"\n      [account]=\"view._account\"\n      [folder]=\"view._folder\"></al-messages-list>\n    <div class=\"wrapper w100 ui-fluid p-grid\" [hidden]=\"view._mobileViewType != 'message'\">\n      <al-message [ngClass]=\"view._themeClass\" (notify)=\"view._msgBodyNotify($event)\" [message]=\"view._message\"></al-message>\n    </div>\n\n    <div class=\"wrapper w100 padding-10\" *ngIf=\"view._mobileViewType == 'settings'\">\n      <al-settings></al-settings>\n    </div>\n\n    <div class=\"w100 padding-10\" [hidden]=\"view._mobileViewType != 'compose'\">\n      <al-compose\n        (notify)=\"view._hideCompose($event)\"\n        *ngIf=\"view._composer\"\n        [composeType]=\"view._composeType\"\n        [message]=\"view._composeMessage\"\n        [to]=\"view._composeTo\"></al-compose>\n    </div>\n  </div>\n</ng-template>\n<ng-template #toolbarButtons let-tpl>\n  <ng-container [ngTemplateOutlet]=\"tpl\" [ngTemplateOutletContext]=\"{$implicit: {icon: 'envelope-open-o', action: 'mark-read'}}\"></ng-container>\n  <ng-container [ngTemplateOutlet]=\"tpl\" [ngTemplateOutletContext]=\"{$implicit: {icon: 'envelope-o', action: 'mark-unread'}}\"></ng-container>\n  <ng-container [ngTemplateOutlet]=\"tpl\" [ngTemplateOutletContext]=\"{$implicit: {icon: 'trash-o', action: 'delete'}}\"></ng-container>\n  <ng-container *ngIf=\"view._account | hasArchive:view._folder\"\n    [ngTemplateOutlet]=\"tpl\"\n    [ngTemplateOutletContext]=\"{$implicit: {icon: 'file-archive-o', action: 'archive'}}\"></ng-container>\n</ng-template>\n<ng-template #actionIcon let-context>\n  <i (click)=\"view._actionIcon(context.action)\" \n    [hidden]=\"(view._mobileViewType != 'list' && view._mobileViewType != 'message') || (context.action == 'mark-read' && view._mobileViewType == 'message')\"\n    class=\"fa fa-{{context.icon}}\"\n    [ngClass]=\"{disabled: view._selection?.length == 0 && !view._message}\"\n    style=\"vertical-align: middle\"></i>\n</ng-template>\n<ng-template #actionButton let-context>\n  <button (click)=\"view._action(context.action)\" pButton [disabled]=\"view._selection?.length == 0 && !view._message\" icon=\"fa fa-{{context.icon}}\"></button>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/loading.html":
  /*!*********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/loading.html ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlLoadingHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-blockUI [blocked]=\"true\" #blockedUI [target]=\"target\">\n    <i class=\"fa fa-spinner fa-spin fa-3w\" style=\"position:absolute;top:calc(50% - 30px);left:calc(50% - 30px);font-size: 60px;font-weight: bold\"></i>\n</p-blockUI>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/main.html":
  /*!******************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/main.html ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlMainHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span [hidden]=\"!view._ready\">\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</span>\n<p-toast key=\"abc\" position=\"top-center\"></p-toast>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/message.html":
  /*!*********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/message.html ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlMessageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center p-grid ui-fluid\" *ngIf=\"!view._message\">\n  <div class=\"p-col-12\"><h2>No message selected</h2></div>\n  <div class=\"p-col-12\">Select a message from the list in order to view it!</div>\n</div>\n<div style=\"position: relative\" *ngIf=\"view._message\" class=\"main-container\">\n  <div class=\"ui-fluid p-grid\">\n    <div class=\"p-col-11\">\n      <h2>{{view._message?.Subject}}</h2>\n    </div>\n    <div class=\"p-col-1\">\n      <i (click)=\"view._star()\" class=\"fa fa-star{{!view._message?.IsFlagged ? '-o' : ''}}\"></i>\n    </div>\n    <div class=\"p-col avatar\">\n      <al-avatar [contact]=\"view._message | messageFrom\"></al-avatar>\n    </div>\n    <div class=\"p-col details\">\n      <div>{{view._message | messageFrom | messageFromTxt}}</div>\n      <div>{{view._message | messageDate}}\n        <span (click)=\"view._detailsHidden = !view._detailsHidden\" class=\"extra\">{{view._detailsHidden ? 'Show' : 'Hide'}} details</span>\n      </div>\n      <div [hidden]=\"view._detailsHidden\" class=\"extra-details\">\n        <ng-container [ngTemplateOutlet]=\"detailsTpl\" [ngTemplateOutletContext]=\"{$implicit: 'From'}\"></ng-container>\n        <ng-container [ngTemplateOutlet]=\"detailsTpl\" [ngTemplateOutletContext]=\"{$implicit: 'To'}\"></ng-container>\n        <ng-container [ngTemplateOutlet]=\"detailsTpl\" [ngTemplateOutletContext]=\"{$implicit: 'Cc'}\"></ng-container>\n        <ng-template #detailsTpl let-field>\n          <div>{{field}}: \n            <span\n              (click)=\"view._emailClick(contact)\"\n              class=\"contact-detail\"\n              *ngFor=\"let contact of (view._message[field] | contactsArray)\"\n              [innerHTML]=\"contact | messageFromTxtFull | asHtml\"></span>\n          </div>\n        </ng-template>\n      </div>\n      <div [hidden]=\"!view._hasImages\" (click)=\"view._showImages()\">\n        <i class=\"fa fa-picture-o\"></i>&nbsp;Show images\n      </div>\n    </div>\n    <div class=\"p-col actions\">\n      <p-splitButton *ngIf=\"!view._isDraft\" label=\"Reply&nbsp;&nbsp;\" icon=\"fa fa-reply\" (onClick)=\"view._action('reply')\" [model]=\"view._actions\"></p-splitButton>\n      <i *ngIf=\"view._isDraft\" (click)=\"view._action('from-draft')\" class=\"fa fa-pencil draft\"></i>\n    </div>\n  </div>\n  <pinch-zoom disableZoomControl=\"disable\">\n    <div class=\"message-body\" style=\"{{view._maxWidth}}\" [ngClass]=\"{'hide-quote': view._quotedText}\" #messageBody [innerHTML]=\"view._html | asHtml\"></div>\n  </pinch-zoom>\n  <div [hidden]=\"!view._quotedText\">\n    <div (click)=\"view._showHiddenContent()\" class=\"extra\">Show quoted text</div>\n  </div>\n  <div class=\"attachments\" [hidden]=\"!view._message || (view._message | attachmentsList).length == 0\">\n    <al-attachments [attachments]=\"view._message | attachmentsList\" [message]=\"view._message\" [account]=\"view._account\"></al-attachments>\n  </div>\n</div>\n<p-overlayPanel #menu styleClass=\"max-width\">\n  <ng-template pTemplate>\n    <div class=\"p-grid ui-fluid menu-options\">\n      <div class=\"p-col-12\" (click)=\"view._action('reply-all'); menu.hide()\"><i class=\"fa fa-reply-all\"></i>Reply all</div>\n      <div class=\"p-col-12\" (click)=\"view._action('forward'); menu.hide()\"><i class=\"fa fa-share\"></i>Forward</div>\n      <div class=\"p-col-12\" (click)=\"view._download(); menu.hide()\"><i class=\"fa fa-download\"></i>Download</div>\n    </div>\n  </ng-template>\n</p-overlayPanel>\n<ng-template #body>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/messages-list.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/messages-list.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlMessagesListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-table #table [value]=\"view._messages\" [lazy]=\"true\" selectionMode=\"single\" (onLazyLoad)=\"view._loadMessages($event)\" [paginator]=\"true\"\n  [loading]=\"view._loading\" [rows]=\"view._pageSize\" [totalRecords]=\"view._totalRecords\" (onRowSelect)=\"view._selectionChanged()\"\n  (onRowUnselect)=\"view._selectionChanged()\" (onHeaderCheckboxToggle)=\"view._selectionChanged()\" [pageLinks]=\"view._combinedView ? 1 : 5\"\n  [ngClass]=\"{'combined-view': view._combinedView}\" [(selection)]=\"view._table.selection\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th style=\"width: 3em\">\n        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n      </th>\n      <th>\n        <div class=\"header p-grid ui-fluid\">\n          <div class=\"p-col-12\">\n            <div class=\"ui-inputgroup\">\n              <input (keyup)=\"view._keyup($event)\" [(ngModel)]=\"view._search.simple\" type=\"text\" pInputText placeholder=\"Search\">\n              <i (click)=\"view._clearSearch()\" class=\"fa fa-times\" *ngIf=\"view._search.simple\"></i>\n              <button (click)=\"view._clickAdvSearch()\" pButton icon=\"fa fa-angle-down\"></button>\n            </div>\n          </div>\n        </div>\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-row>\n    <tr [ngClass]=\"{'ui-state-highlight': view._selected?.Uid == row.Uid}\">\n      <td>\n        <p-tableCheckbox [value]=\"row\"></p-tableCheckbox>\n      </td>\n      <td [ngClass]=\"{unread: !row.IsSeen}\" (click)=\"view._select(row)\" [ngStyle]=\"row | borderRight | async\">\n        <div class=\"p-grid ui-fluid\">\n          <div class=\"avatar\" *ngIf=\"row.From.Collection?.length > 0\">\n            <al-avatar [contact]=\"row.From.Collection[0]\"></al-avatar>\n          </div>\n          <div class=\"message\">\n            <div class=\"flex ui-fluid\">\n              <div class=\"from\">{{row | messageFrom | messageFromTxt}}</div>\n              <div class=\"flags\">\n                <i *ngIf=\"row.IsForwarded\" class=\"fa fa-share\"></i>\n                <i *ngIf=\"row.IsAnswered\" class=\"fa fa-reply\"></i>\n                <i *ngIf=\"row.HasAttachments\" class=\"fa fa-paperclip\"></i>\n              </div>\n              <div class=\"date\">{{row | messageDate}}</div>\n            </div>\n            <div class=\"flex ui-fluid margin-top\">\n              <div class=\"subject\">\n                <i *ngIf=\"row.IsFlagged\" class=\"fa fa-star\"></i>{{row.Subject}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </ng-template>\n</p-table>\n\n<p-dialog header=\"Advanced search\" [(visible)]=\"view._showSearch\" [modal]=\"true\">\n  <div class=\"p-grid ui-fluid adv-search\">\n    <div class=\"p-col-12\"><input #all type=\"text\" (keyup)=\"view._keyup2($event)\" [(ngModel)]=\"view._search.all\" pInputText placeholder=\"All\"/></div>\n    <div class=\"p-col-6\"><input type=\"text\" [(ngModel)]=\"view._search.from\" pInputText placeholder=\"From\"/></div>\n    <div class=\"p-col-6\"><input type=\"text\" [(ngModel)]=\"view._search.to\" pInputText placeholder=\"To\"/></div>\n    <div class=\"p-col-6\"><input type=\"text\" [(ngModel)]=\"view._search.subject\" pInputText placeholder=\"Subject\"/></div>\n    <div class=\"p-col-6\"><input type=\"text\" [(ngModel)]=\"view._search.text\" pInputText placeholder=\"Text\"/></div>\n    <div class=\"p-col-6\">\n      <p-calendar appendTo=\"body\" [touchUI]=\"true\" [readonlyInput]=\"true\" [(ngModel)]=\"view._search.since\" placeholder=\"Since\" [showIcon]=\"true\"></p-calendar>\n    </div>\n    <div class=\"p-col-6\">\n      <p-calendar appendTo=\"body\" [touchUI]=\"true\" [readonlyInput]=\"true\" [(ngModel)]=\"view._search.till\" placeholder=\"Till\" [showIcon]=\"true\"></p-calendar>\n    </div>\n    <div class=\"p-col-12\">\n      <p-dropdown *ngIf=\"view._account$\" [options]=\"view._account$ | async | foldersFlatList | async\"\n                  appendTo=\"body\"\n                  [(ngModel)]=\"view._search.folder\"></p-dropdown>\n    </div>\n    <div class=\"p-col-6\"><p-checkbox [binary]=\"true\" label=\"Has Attachments\" [(ngModel)]=\"view._search.attachments\"></p-checkbox></div>\n    <div class=\"p-col-6 right\"><button (click)=\"view._advSearch()\" pButton label=\"Search\"></button></div>\n  </div>\n</p-dialog>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/playground.html":
  /*!************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/playground.html ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlPlaygroundHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <nc-filepick type=\"file\" (choose)=\"view._choose($event)\"></nc-filepick>\n</div>\n<!--div>\n  <al-compose composeType=\"new\"></al-compose>\n</div-->\n  <!--div>\n    <al-folders-list [account]=\"view._account\" (notify)=\"view._folderNotify($event)\"></al-folders-list>\n  </div>\n  <div>\n    <al-messages-list (notify)=\"view._messageNotify($event)\" [account]=\"view._account\" [folder]=\"view._folder\"></al-messages-list>\n  </div>\n  <div>\n    <al-message (notify)=\"view._msgBodyNotify($event)\" [message]=\"view._message\"></al-message>\n  </div-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/html/settings.html":
  /*!**********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/html/settings.html ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcHtmlSettingsHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section\" *ngIf=\"view._model\">\n  <p-panel header=\"Server\">\n    <div class=\"panel-container p-fluid forms-grid ui-fluid\" style=\"margin: 1em 0;\">\n      <div class=\"flex\">\n        <span class=\"ui-float-label\">\n          <input type=\"text\" id=\"server-url\" pInputText [ngModel]=\"view._model?.server.url\" (ngModelChange)=\"view._model.server.url = $event\" />\n          <label for=\"server-url\">Server url</label>\n        </span>\n        <p-message [hidden]=\"view._model.server && view._model.server.url\" severity=\"error\" text=\"Url is required\"></p-message>\n      </div>\n    </div>\n  </p-panel>\n</div>\n\n<div class=\"content-section\" *ngIf=\"view._model\">\n  <p-panel>\n    <p-header>\n      <div class=\"ui-helper-clearfix\">\n        <span class=\"ui-panel-title\">Accounts</span>\n        <button (click)=\"view._add()\" pButton style=\"float: right\" icon=\"fa fa-user-plus\"></button>\n      </div>\n    </p-header>\n    <div class=\"panel-container p-fluid forms-grid ui-fluid\" style=\"margin: 1em 0;\">\n      <div [ngClass]=\"{invalid: view._validate && !user.token}\" class=\"flex users\" *ngFor=\"let user of view._model?.server.users || []\">\n        <span class=\"ui-float-label\">\n          <input type=\"text\" [id]=\"user.email\" pInputText [(ngModel)]=\"user.email\" />\n          <label [for]=\"user.email\">Email</label>\n        </span>\n        <span class=\"ui-float-label right\">\n          <input type=\"password\" id=\"{{user.email}}-pass\" pInputText [(ngModel)]=\"user.pass\" />\n          <label for=\"{{user.email}}-pass\">Password</label>\n        </span>\n        <button pButton icon=\"fa fa-user-times\" (click)=\"view._remove(user)\"></button>\n      </div>\n    </div>\n  </p-panel>\n</div>\n\n<div class=\"content-section\" *ngIf=\"view._model\">\n  <p-panel header=\"App settings\">\n    <div class=\"panel-container p-fluid forms-grid ui-fluid\" style=\"margin: 1em 0;\">\n      <ng-container [ngTemplateOutlet]=\"settingTpl\" [ngTemplateOutletContext]=\"{$implicit: {field: 'checkEmailInterval', label: 'Interval to check new emails (minutes)'}}\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"settingTpl\" [ngTemplateOutletContext]=\"{$implicit: {field: 'pageSize', label: 'Number of messages displayed on a page'}}\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"settingTpl\" [ngTemplateOutletContext]=\"{$implicit: {field: 'composeType', label: 'Type of messages to compose'}}\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"settingTpl\" [ngTemplateOutletContext]=\"{$implicit: {field: 'theme', label: 'Application theme'}}\"></ng-container>\n      <div class=\"p-field-checkbox\">\n        <p-checkbox [(ngModel)]=\"view._model.previewInCloud\" [binary]=\"true\" inputId=\"checkbox-preview-in-cloud\"></p-checkbox>\n        <label for=\"checkbox-preview-in-cloud\">Preview attachments in the cloud</label>\n      </div>\n    </div>\n  </p-panel>\n</div>\n\n<div class=\"content-section\" *ngIf=\"view._model\">\n  <p-panel header=\"Nextcloud integration\">\n    <div class=\"panel-container p-fluid forms-grid ui-fluid\" style=\"margin: 1em 0;\">\n      <div class=\"flex users\">\n        <span class=\"ui-float-label\">\n          <input type=\"text\" id=\"nextcloud-url\" pInputText [ngModel]=\"view._model?.nextcloudUrl\" (ngModelChange)=\"view._model.nextcloudUrl = $event\" />\n          <label for=\"nextcloud-url\">Nextcloud server base url</label>\n        </span>\n        <button class=\"login\" [disabled]=\"!view._model?.nextcloudUrl\" (click)=\"view._nextcloudLogin()\" pButton label=\"Perform login\"></button>\n      </div>\n    </div>\n  </p-panel>\n</div>\n\n<ng-template #settingTpl let-context>\n  <div class=\"flex\">\n    <span class=\"ui-float-label\">\n      <p-dropdown id=\"setting-{{context.field}}\"\n                  [options]=\"view._model[context.field].options\"\n                  [(ngModel)]=\"view._model[context.field].model\"\n                  optionLabel=\"label\"></p-dropdown>\n      <label for=\"setting-{{context.field}}\">{{context.label}}</label>\n    </span>\n  </div>\n</ng-template>\n\n<div class=\"content-section\" *ngIf=\"view._model\">\n  <button [disabled]=\"!view._model?.server.url\" pButton label=\"Save\" (click)=\"view._save()\"></button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/ts/nextcloud/filepick.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/ts/nextcloud/filepick.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcTsNextcloudFilepickHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"\">\n  <!--div (click)=\"view._select(i, $event)\" [ngClass]=\"{selected: i.partialSelected}\" class=\"p-col-12 flex file\" *ngFor=\"let i of view._files\">\n    <ng-container [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: i}\"></ng-container>\n  </div-->\n  <div class=\"p-col-12 flex\">\n    <p-tree #tree [selectionMode]=\"type == 'file' ? 'checkbox' : 'single'\" [value]=\"view._files\" [(selection)]=\"view._selection\" (onNodeExpand)=\"view._load($event?.node)\" [loading]=\"view._loading\"></p-tree>\n  </div>\n  <div class=\"p-col-12\">\n    <button pButton label=\"Choose\" (click)=\"view._choose()\"></button>\n  </div>\n</div>\n\n<ng-template #item let-item>\n  <div class=\"p-col-9\">\n    <i class=\"fa-3w {{item.collapsedIcon}}\"></i>\n    {{item.label}}\n  </div>\n  <div class=\"p-col-3 size\">\n    {{item.data.size | humanFileSize}}\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./src/assets/scss/attachments.scss":
  /*!******************************************!*\
    !*** ./src/assets/scss/attachments.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssAttachmentsScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "i {\n  font-size: 30px;\n  margin-left: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL2F0dGFjaG1lbnRzLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvYXR0YWNobWVudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hc3NldHMvc2Nzcy9hdHRhY2htZW50cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG4iLCJpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/assets/scss/avatar.scss":
  /*!*************************************!*\
    !*** ./src/assets/scss/avatar.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssAvatarScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".color-circle {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.text {\n  color: white;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  vertical-align: middle;\n  position: relative;\n  top: 4px;\n  font-family: \"Open Sans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL2F2YXRhci5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2F2YXRhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXNzZXRzL3Njc3MvYXZhdGFyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItY2lyY2xlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuXG4iLCIuY29sb3ItY2lyY2xlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/assets/scss/compose.scss":
  /*!**************************************!*\
    !*** ./src/assets/scss/compose.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssComposeScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".options {\n  justify-content: flex-end;\n  display: flex;\n}\n\nbutton {\n  width: inherit;\n}\n\n.ui-float-label {\n  display: flex;\n}\n\n.form {\n  margin: 0.5em;\n  height: calc(100vh - 40px);\n  overflow-y: auto;\n}\n\n.ui-inputgroup .ui-inputtext:not(:last-child) {\n  border-right-width: thin;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvc2Uuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb21wb3NlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hc3NldHMvc2Nzcy9jb21wb3NlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5vcHRpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi51aS1mbG9hdC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi51aS1pbnB1dGdyb3VwIC51aS1pbnB1dHRleHQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodC13aWR0aDogdGhpbjtcbn1cblxuIiwiLm9wdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLnVpLWZsb2F0LWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW46IDAuNWVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnVpLWlucHV0Z3JvdXAgLnVpLWlucHV0dGV4dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiB0aGluO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/assets/scss/editor.scss":
  /*!*************************************!*\
    !*** ./src/assets/scss/editor.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssEditorScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".editor {\n  padding: 10px;\n  border: 1px solid gray;\n  width: 100% !important;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL2VkaXRvci5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2VkaXRvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hc3NldHMvc2Nzcy9lZGl0b3Iuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuIiwiLmVkaXRvciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/assets/scss/folders-list.scss":
  /*!*******************************************!*\
    !*** ./src/assets/scss/folders-list.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssFoldersListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "al-folders-list .ui-tree {\n  width: 100%;\n  border: none;\n}\nal-folders-list .ui-treenode-content:focus {\n  box-shadow: none !important;\n}\nal-folders-list .ui-tree-wrapper {\n  border: none;\n}\nal-folders-list .selected {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL2ZvbGRlcnMtbGlzdC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2ZvbGRlcnMtbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0UsMkJBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtBQ0ZKO0FES0U7RUFDRSxpQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hc3NldHMvc2Nzcy9mb2xkZXJzLWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFsLWZvbGRlcnMtbGlzdCB7XG4gIC51aS10cmVlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAudWktdHJlZW5vZGUtY29udGVudDpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLXRyZWUtd3JhcHBlciB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuIiwiYWwtZm9sZGVycy1saXN0IC51aS10cmVlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmFsLWZvbGRlcnMtbGlzdCAudWktdHJlZW5vZGUtY29udGVudDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbmFsLWZvbGRlcnMtbGlzdCAudWktdHJlZS13cmFwcGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuYWwtZm9sZGVycy1saXN0IC5zZWxlY3RlZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/assets/scss/home.scss":
  /*!***********************************!*\
    !*** ./src/assets/scss/home.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssHomeScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  overflow: hidden;\n}\n\napp-home .overflow {\n  overflow-x: hidden;\n}\n\napp-home #container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\napp-home #container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\napp-home #container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\napp-home #container a {\n  text-decoration: none;\n}\n\napp-home .folders-col {\n  width: 200px;\n  max-width: 300px;\n}\n\napp-home .mails-col {\n  width: 400px;\n}\n\napp-home .mails-col button {\n  margin-left: 10px;\n}\n\napp-home .mails-col .left {\n  float: left;\n}\n\napp-home .right {\n  float: right;\n}\n\napp-home .menuWidth {\n  min-width: 300px;\n  text-align: left;\n}\n\napp-home .mail-col {\n  width: calc(100% - 600px);\n}\n\napp-home .top td {\n  vertical-align: top;\n  overflow-y: auto;\n}\n\napp-home .messages-wrapper {\n  overflow-y: hidden;\n}\n\napp-home .wrapper {\n  height: calc(100vh - 48px);\n  overflow-y: auto;\n}\n\napp-home al-messages-list .ui-table-wrapper {\n  height: calc(100vh - 97px);\n  overflow-y: auto;\n}\n\napp-home al-messages-list.mobile .ui-table-wrapper {\n  width: calc(100% - 8px);\n  padding-left: 9px;\n  overflow-x: hidden;\n  height: calc(100vh - 81px);\n}\n\napp-home .mobile-messages-list {\n  position: relative;\n  top: 8px;\n}\n\napp-home .w100 {\n  width: 100%;\n}\n\napp-home .mobile-messages-list al-message {\n  margin-left: 9px;\n  margin-right: 9px;\n}\n\napp-home .padding-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\napp-home .padding-right-10 {\n  padding-right: 10px;\n}\n\napp-home .ui-toolbar-group-left {\n  display: flex;\n  font-size: 30px;\n  width: 100%;\n  justify-content: space-between;\n}\n\napp-home .ui-toolbar-group-left i {\n  flex: 0 1 auto;\n}\n\napp-home .ui-toolbar-group-left i:last-child {\n  position: relative;\n  text-align: right;\n}\n\napp-home [hidden] {\n  display: none !important;\n}\n\napp-home .ui-sidebar {\n  height: 100vh;\n  overflow-y: auto;\n}\n\napp-home .disabled {\n  opacity: 0.2;\n}\n\napp-home .dark i {\n  color: #a32049 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL2hvbWUuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9ob21lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0xKOztBRFFFO0VBQ0UscUJBQUE7QUNOSjs7QURTRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFVFO0VBQ0UsWUFBQTtBQ1JKOztBRFVJO0VBQ0UsaUJBQUE7QUNSTjs7QURXSTtFQUNFLFdBQUE7QUNUTjs7QURjRTtFQUNFLFlBQUE7QUNaSjs7QURlRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNiSjs7QURnQkU7RUFDRSx5QkFBQTtBQ2RKOztBRGlCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNmSjs7QURrQkU7RUFDRSxrQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FDakJKOztBRG9CRTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNuQko7O0FEc0JFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDcEJKOztBRHVCRTtFQUNFLFdBQUE7QUNyQko7O0FEd0JFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ3RCSjs7QUR5QkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDdkJKOztBRDBCRTtFQUNFLG1CQUFBO0FDeEJKOztBRDJCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDekJKOztBRDRCRTtFQUNFLGNBQUE7QUMxQko7O0FENkJFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQzNCSjs7QUQ4QkU7RUFDRSx3QkFBQTtBQzVCSjs7QUQrQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUM3Qko7O0FEZ0NFO0VBQ0UsWUFBQTtBQzlCSjs7QURpQ0U7RUFDRSx5QkFBQTtBQy9CSiIsImZpbGUiOiJzcmMvYXNzZXRzL3Njc3MvaG9tZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5hcHAtaG9tZSB7XG4gIC5vdmVyZmxvdyB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG5cbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgICBjb2xvcjogIzhjOGM4YztcblxuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmZvbGRlcnMtY29sIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5tYWlscy1jb2wge1xuICAgIHdpZHRoOiA0MDBweDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAubGVmdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG5cbiAgfVxuXG4gIC5yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLm1lbnVXaWR0aCB7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLm1haWwtY29sIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjAwcHgpO1xuICB9XG5cbiAgLnRvcCB0ZCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgLm1lc3NhZ2VzLXdyYXBwZXIge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgYWwtbWVzc2FnZXMtbGlzdCAudWktdGFibGUtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTdweCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gIGFsLW1lc3NhZ2VzLWxpc3QubW9iaWxlIC51aS10YWJsZS13cmFwcGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODFweCk7XG4gIH1cblxuICAubW9iaWxlLW1lc3NhZ2VzLWxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDhweDtcbiAgfVxuXG4gIC53MTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tb2JpbGUtbWVzc2FnZXMtbGlzdCBhbC1tZXNzYWdlIHtcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgIG1hcmdpbi1yaWdodDogOXB4O1xuICB9XG5cbiAgLnBhZGRpbmctMTAge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLnBhZGRpbmctcmlnaHQtMTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAudWktdG9vbGJhci1ncm91cC1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgfVxuICAudWktdG9vbGJhci1ncm91cC1sZWZ0IGkge1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICB9XG5cbiAgLnVpLXRvb2xiYXItZ3JvdXAtbGVmdCBpOmxhc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudWktc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gIH1cblxuICAuZGFyayBpIHtcbiAgICBjb2xvcjogI2EzMjA0OSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYXBwLWhvbWUgLm92ZXJmbG93IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuYXBwLWhvbWUgI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmFwcC1ob21lICNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbmFwcC1ob21lICNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5hcHAtaG9tZSAjY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hcHAtaG9tZSAuZm9sZGVycy1jb2wge1xuICB3aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5hcHAtaG9tZSAubWFpbHMtY29sIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuYXBwLWhvbWUgLm1haWxzLWNvbCBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmFwcC1ob21lIC5tYWlscy1jb2wgLmxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cbmFwcC1ob21lIC5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbmFwcC1ob21lIC5tZW51V2lkdGgge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuYXBwLWhvbWUgLm1haWwtY29sIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwMHB4KTtcbn1cbmFwcC1ob21lIC50b3AgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuYXBwLWhvbWUgLm1lc3NhZ2VzLXdyYXBwZXIge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5hcHAtaG9tZSAud3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuYXBwLWhvbWUgYWwtbWVzc2FnZXMtbGlzdCAudWktdGFibGUtd3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk3cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuYXBwLWhvbWUgYWwtbWVzc2FnZXMtbGlzdC5tb2JpbGUgLnVpLXRhYmxlLXdyYXBwZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODFweCk7XG59XG5hcHAtaG9tZSAubW9iaWxlLW1lc3NhZ2VzLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xufVxuYXBwLWhvbWUgLncxMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbmFwcC1ob21lIC5tb2JpbGUtbWVzc2FnZXMtbGlzdCBhbC1tZXNzYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG59XG5hcHAtaG9tZSAucGFkZGluZy0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbmFwcC1ob21lIC5wYWRkaW5nLXJpZ2h0LTEwIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbmFwcC1ob21lIC51aS10b29sYmFyLWdyb3VwLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5hcHAtaG9tZSAudWktdG9vbGJhci1ncm91cC1sZWZ0IGkge1xuICBmbGV4OiAwIDEgYXV0bztcbn1cbmFwcC1ob21lIC51aS10b29sYmFyLWdyb3VwLWxlZnQgaTpsYXN0LWNoaWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmFwcC1ob21lIFtoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuYXBwLWhvbWUgLnVpLXNpZGViYXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuYXBwLWhvbWUgLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuYXBwLWhvbWUgLmRhcmsgaSB7XG4gIGNvbG9yOiAjYTMyMDQ5ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/assets/scss/main.scss":
  /*!***********************************!*\
    !*** ./src/assets/scss/main.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssMainScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  height: calc(100vh - 53px);\n}\n\nbody {\n  margin: 0px;\n}\n\n.avatar {\n  width: 40px;\n  height: 40px;\n  margin-right: 8px;\n  margin-top: 8px;\n}\n\n.account {\n  width: calc(100% - 48px);\n}\n\n.name {\n  margin-top: 10px;\n  margin-bottom: 0px;\n  font-weight: normal;\n}\n\n.email {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-weight: normal;\n}\n\n.selected .email, .selected .name {\n  font-weight: bold !important;\n}\n\n.flex {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL21haW4uc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hc3NldHMvc2Nzcy9tYWluLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTNweCk7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5hY2NvdW50IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xufVxuXG4ubmFtZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmVtYWlsIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5zZWxlY3RlZCAuZW1haWwsIC5zZWxlY3RlZCAubmFtZXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUzcHgpO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYWNjb3VudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTtcbn1cblxuLm5hbWUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5lbWFpbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uc2VsZWN0ZWQgLmVtYWlsLCAuc2VsZWN0ZWQgLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/assets/scss/message.scss":
  /*!**************************************!*\
    !*** ./src/assets/scss/message.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssMessageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "al-message.dark {\n  color: #dedede;\n}\n\nal-message {\n  /*.ui-overlaypanel {\n    top: 150px !important;\n    left: 370px !important;\n  }*/\n}\n\nal-message .center {\n  text-align: center;\n}\n\nal-message .from {\n  display: flex;\n  align-items: center;\n}\n\nal-message .margin {\n  margin-left: 10px;\n}\n\nal-message .buttons {\n  text-align: right;\n}\n\nal-message .buttons button {\n  margin-left: 4px;\n}\n\nal-message .avatar {\n  max-width: 56px;\n  margin: 8px;\n}\n\nal-message .details {\n  flex: 1;\n  margin-top: 11px;\n}\n\nal-message .actions {\n  max-width: 117px;\n  margin-top: 11px;\n}\n\nal-message .actions .fa.draft {\n  font-size: 30px;\n  margin-left: 20px;\n}\n\nal-message .p-col-1 {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n}\n\nal-message .extra {\n  color: blue;\n}\n\nal-message .extra-details {\n  font-size: 0.8em;\n}\n\nal-message .contact-detail {\n  margin-right: 5px;\n}\n\nal-message .menu-options i {\n  margin-right: 10px;\n}\n\nal-message .max-width {\n  max-width: 150px;\n}\n\nal-message .message-body {\n  overflow-x: overlay;\n}\n\nal-message .hide-quote blockquote {\n  display: none;\n}\n\nal-message .main-container {\n  padding-left: 15px;\n}\n\nal-message pinch-zoom {\n  background-color: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL21lc3NhZ2Uuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tZXNzYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FEQ0E7RUEwRUU7OztJQUFBO0FDcEVGOztBRExFO0VBQ0Usa0JBQUE7QUNPSjs7QURKRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ01KOztBREhFO0VBQ0UsaUJBQUE7QUNLSjs7QURGRTtFQUlFLGlCQUFBO0FDQ0o7O0FESkk7RUFDRSxnQkFBQTtBQ01OOztBRERFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNHSjs7QURBRTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREFJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRU47O0FERUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtBQ0RKOztBRElFO0VBQ0UsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLGlCQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtBQ0pKOztBRE9FO0VBQ0UsZ0JBQUE7QUNMSjs7QURRRTtFQUNFLG1CQUFBO0FDTko7O0FEU0U7RUFDRSxhQUFBO0FDUEo7O0FEZUU7RUFDRSxrQkFBQTtBQ2JKOztBRGdCRTtFQUNFLG9DQUFBO0FDZEoiLCJmaWxlIjoic3JjL2Fzc2V0cy9zY3NzL21lc3NhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFsLW1lc3NhZ2UuZGFyayB7XG4gIGNvbG9yOiAjZGVkZWRlO1xufVxuYWwtbWVzc2FnZSB7XG4gIC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mcm9tIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubWFyZ2luIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICAuYXZhdGFyIHtcbiAgICBtYXgtd2lkdGg6IDU2cHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cblxuICAuZGV0YWlscyB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICB9XG5cbiAgLmFjdGlvbnMge1xuICAgIG1heC13aWR0aDogMTE3cHg7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICAuZmEuZHJhZnQge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLnAtY29sLTEge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgLmV4dHJhIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxuXG4gIC5leHRyYS1kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG5cbiAgLmNvbnRhY3QtZGV0YWlsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICBcbiAgLm1lbnUtb3B0aW9ucyBpe1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5tYXgtd2lkdGgge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cblxuICAubWVzc2FnZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBvdmVybGF5O1xuICB9XG5cbiAgLmhpZGUtcXVvdGUgYmxvY2txdW90ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qLnVpLW92ZXJsYXlwYW5lbCB7XG4gICAgdG9wOiAxNTBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDM3MHB4ICFpbXBvcnRhbnQ7XG4gIH0qL1xuXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgcGluY2gtem9vbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJhbC1tZXNzYWdlLmRhcmsge1xuICBjb2xvcjogI2RlZGVkZTtcbn1cblxuYWwtbWVzc2FnZSB7XG4gIC8qLnVpLW92ZXJsYXlwYW5lbCB7XG4gICAgdG9wOiAxNTBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDM3MHB4ICFpbXBvcnRhbnQ7XG4gIH0qL1xufVxuYWwtbWVzc2FnZSAuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYWwtbWVzc2FnZSAuZnJvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5hbC1tZXNzYWdlIC5tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmFsLW1lc3NhZ2UgLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmFsLW1lc3NhZ2UgLmJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbmFsLW1lc3NhZ2UgLmF2YXRhciB7XG4gIG1heC13aWR0aDogNTZweDtcbiAgbWFyZ2luOiA4cHg7XG59XG5hbC1tZXNzYWdlIC5kZXRhaWxzIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cbmFsLW1lc3NhZ2UgLmFjdGlvbnMge1xuICBtYXgtd2lkdGg6IDExN3B4O1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuYWwtbWVzc2FnZSAuYWN0aW9ucyAuZmEuZHJhZnQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuYWwtbWVzc2FnZSAucC1jb2wtMSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5hbC1tZXNzYWdlIC5leHRyYSB7XG4gIGNvbG9yOiBibHVlO1xufVxuYWwtbWVzc2FnZSAuZXh0cmEtZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5hbC1tZXNzYWdlIC5jb250YWN0LWRldGFpbCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuYWwtbWVzc2FnZSAubWVudS1vcHRpb25zIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5hbC1tZXNzYWdlIC5tYXgtd2lkdGgge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuYWwtbWVzc2FnZSAubWVzc2FnZS1ib2R5IHtcbiAgb3ZlcmZsb3cteDogb3ZlcmxheTtcbn1cbmFsLW1lc3NhZ2UgLmhpZGUtcXVvdGUgYmxvY2txdW90ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5hbC1tZXNzYWdlIC5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbmFsLW1lc3NhZ2UgcGluY2gtem9vbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/assets/scss/messages-list.scss":
  /*!********************************************!*\
    !*** ./src/assets/scss/messages-list.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssMessagesListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "al-messages-list .header {\n  margin-top: 0px;\n}\nal-messages-list .from, al-messages-list .subject {\n  flex-grow: 1;\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n}\nal-messages-list .subject {\n  font-size: 13px;\n}\nal-messages-list .margin-top {\n  margin-top: 0px;\n}\nal-messages-list .date {\n  justify-content: right;\n}\nal-messages-list .flags {\n  justify-content: right;\n  margin-right: 4px;\n}\nal-messages-list .fa-star {\n  font-size: 0.9em;\n  padding-right: 5px;\n}\nal-messages-list .unread {\n  font-weight: bold;\n}\nal-messages-list .ui-inputgroup {\n  position: relative;\n}\nal-messages-list .ui-inputgroup .fa-times {\n  position: absolute;\n  right: 38px;\n  top: 9px;\n}\nal-messages-list .right {\n  text-align: right;\n}\nal-messages-list .avatar {\n  width: 40px;\n  height: 40px;\n  margin-right: 8px;\n  margin-top: 8px;\n}\nal-messages-list .message {\n  width: calc(100% - 48px);\n  margin-top: 8px;\n}\nal-messages-list .flex {\n  display: flex;\n}\nal-messages-list td {\n  overflow: hidden;\n}\nal-messages-list .ui-overlaypanel {\n  max-width: 400px;\n}\nal-messages-list .fix-search-form .ui-overlaypanel {\n  top: 50px !important;\n  left: 107px !important;\n}\nal-messages-list .ui-datepicker {\n  min-width: 300px !important;\n}\nal-messages-list .combined-view .ui-paginator-first, al-messages-list .combined-view .ui-paginator-last {\n  display: none;\n}\nal-messages-list td.highlight {\n  border-right: 5px solid !important;\n}\nal-messages-list .adv-search {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL21lc3NhZ2VzLWxpc3Quc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tZXNzYWdlcy1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0FDRko7QURLRTtFQUNFLGVBQUE7QUNISjtBRE1FO0VBQ0Usc0JBQUE7QUNKSjtBRE9FO0VBQ0Usc0JBQUE7RUFFQSxpQkFBQTtBQ05KO0FEU0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDUEo7QURVRTtFQUNFLGlCQUFBO0FDUko7QURXRTtFQUNFLGtCQUFBO0FDVEo7QURVSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNSTjtBRFlFO0VBQ0UsaUJBQUE7QUNWSjtBRGFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNYSjtBRGNFO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0FDWko7QURlRTtFQUNFLGFBQUE7QUNiSjtBRGdCRTtFQUNFLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxnQkFBQTtBQ2ZKO0FEa0JFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLDJCQUFBO0FDakJKO0FEcUJJO0VBQ0UsYUFBQTtBQ25CTjtBRHVCRTtFQUNFLGtDQUFBO0FDckJKO0FEd0JFO0VBQ0UsZ0JBQUE7QUN0QkoiLCJmaWxlIjoic3JjL2Fzc2V0cy9zY3NzL21lc3NhZ2VzLWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFsLW1lc3NhZ2VzLWxpc3Qge1xuICAuaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAuZnJvbSwgLnN1YmplY3Qge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLnN1YmplY3Qge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5tYXJnaW4tdG9wIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAuZGF0ZSB7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgfVxuXG4gIC5mbGFncyB7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICAvLyBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cblxuICAuZmEtc3RhciB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAudW5yZWFkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC51aS1pbnB1dGdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmZhLXRpbWVzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAzOHB4O1xuICAgICAgdG9wOiA5cHg7XG4gICAgfVxuICB9XG5cbiAgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cblxuICAubWVzc2FnZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuXG4gIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgdGQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudWktb3ZlcmxheXBhbmVsIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG5cbiAgLmZpeC1zZWFyY2gtZm9ybSAudWktb3ZlcmxheXBhbmVsIHtcbiAgICB0b3A6IDUwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAxMDdweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLWRhdGVwaWNrZXIge1xuICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb21iaW5lZC12aWV3IHtcbiAgICAudWktcGFnaW5hdG9yLWZpcnN0LCAudWktcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICB0ZC5oaWdobGlnaHQge1xuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWR2LXNlYXJjaCB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxufVxuIiwiYWwtbWVzc2FnZXMtbGlzdCAuaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuYWwtbWVzc2FnZXMtbGlzdCAuZnJvbSwgYWwtbWVzc2FnZXMtbGlzdCAuc3ViamVjdCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuYWwtbWVzc2FnZXMtbGlzdCAuc3ViamVjdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmFsLW1lc3NhZ2VzLWxpc3QgLm1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5hbC1tZXNzYWdlcy1saXN0IC5kYXRlIHtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cbmFsLW1lc3NhZ2VzLWxpc3QgLmZsYWdzIHtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5hbC1tZXNzYWdlcy1saXN0IC5mYS1zdGFyIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuYWwtbWVzc2FnZXMtbGlzdCAudW5yZWFkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5hbC1tZXNzYWdlcy1saXN0IC51aS1pbnB1dGdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuYWwtbWVzc2FnZXMtbGlzdCAudWktaW5wdXRncm91cCAuZmEtdGltZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzOHB4O1xuICB0b3A6IDlweDtcbn1cbmFsLW1lc3NhZ2VzLWxpc3QgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5hbC1tZXNzYWdlcy1saXN0IC5hdmF0YXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuYWwtbWVzc2FnZXMtbGlzdCAubWVzc2FnZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuYWwtbWVzc2FnZXMtbGlzdCAuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5hbC1tZXNzYWdlcy1saXN0IHRkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmFsLW1lc3NhZ2VzLWxpc3QgLnVpLW92ZXJsYXlwYW5lbCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5hbC1tZXNzYWdlcy1saXN0IC5maXgtc2VhcmNoLWZvcm0gLnVpLW92ZXJsYXlwYW5lbCB7XG4gIHRvcDogNTBweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMDdweCAhaW1wb3J0YW50O1xufVxuYWwtbWVzc2FnZXMtbGlzdCAudWktZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbn1cbmFsLW1lc3NhZ2VzLWxpc3QgLmNvbWJpbmVkLXZpZXcgLnVpLXBhZ2luYXRvci1maXJzdCwgYWwtbWVzc2FnZXMtbGlzdCAuY29tYmluZWQtdmlldyAudWktcGFnaW5hdG9yLWxhc3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuYWwtbWVzc2FnZXMtbGlzdCB0ZC5oaWdobGlnaHQge1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAhaW1wb3J0YW50O1xufVxuYWwtbWVzc2FnZXMtbGlzdCAuYWR2LXNlYXJjaCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/assets/scss/settings.scss":
  /*!***************************************!*\
    !*** ./src/assets/scss/settings.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsScssSettingsScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "al-settings .flex {\n  display: flex;\n  align-items: center;\n}\nal-settings .flex button {\n  margin-left: 5px;\n}\nal-settings .flex:not(:last-child) {\n  margin-bottom: 20px;\n}\nal-settings .ui-float-label {\n  width: 100%;\n}\nal-settings .ui-panel {\n  margin-bottom: 15px;\n}\nal-settings .right {\n  margin-left: 5px;\n}\nal-settings p-message {\n  width: 153px;\n}\nal-settings .invalid {\n  border: 1px solid red;\n}\nal-settings .login {\n  flex: 0 0;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL3NldHRpbmdzLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3Mvc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUk7RUFDRSxnQkFBQTtBQ0FOO0FER0U7RUFDRSxtQkFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0FDRko7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0FDSko7QURPRTtFQUNFLFlBQUE7QUNMSjtBRFFFO0VBQ0UscUJBQUE7QUNOSjtBRFNFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FDUEoiLCJmaWxlIjoic3JjL2Fzc2V0cy9zY3NzL3NldHRpbmdzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhbC1zZXR0aW5ncyB7XG4gIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cbiAgLmZsZXg6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC51aS1mbG9hdC1sYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudWktcGFuZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuXG4gIHAtbWVzc2FnZSB7XG4gICAgd2lkdGg6IDE1M3B4O1xuICB9XG5cbiAgLmludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuXG4gIC5sb2dpbiB7XG4gICAgZmxleDogMCAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cbiIsImFsLXNldHRpbmdzIC5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmFsLXNldHRpbmdzIC5mbGV4IGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5hbC1zZXR0aW5ncyAuZmxleDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmFsLXNldHRpbmdzIC51aS1mbG9hdC1sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYWwtc2V0dGluZ3MgLnVpLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmFsLXNldHRpbmdzIC5yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5hbC1zZXR0aW5ncyBwLW1lc3NhZ2Uge1xuICB3aWR0aDogMTUzcHg7XG59XG5hbC1zZXR0aW5ncyAuaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbmFsLXNldHRpbmdzIC5sb2dpbiB7XG4gIGZsZXg6IDAgMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var _ts_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../ts/models */
    "./src/ts/models.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      logLevel: _ts_models__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].DEBUG,
      logStack: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ts_modules_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ts/modules/main */
    "./src/ts/modules/main.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_ts_modules_main__WEBPACK_IMPORTED_MODULE_3__["Main"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/ts/base.ts":
  /*!************************!*\
    !*** ./src/ts/base.ts ***!
    \************************/

  /*! exports provided: Statics, BaseClass, BaseComponent, BaseTestUnit */

  /***/
  function srcTsBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Statics", function () {
      return Statics;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseClass", function () {
      return BaseClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
      return BaseComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseTestUnit", function () {
      return BaseTestUnit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core/testing */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/testing.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _services_logging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/logging */
    "./src/ts/services/logging.ts");
    /* harmony import */


    var _components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/loading */
    "./src/ts/components/loading.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_blockui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/blockui */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-blockui.js");

    var BlockableComponent = /*#__PURE__*/function () {
      function BlockableComponent() {
        _classCallCheck(this, BlockableComponent);
      }

      _createClass(BlockableComponent, [{
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el;
        }
      }]);

      return BlockableComponent;
    }();

    primeng_blockui__WEBPACK_IMPORTED_MODULE_8__["BlockUI"].prototype.block = function () {
      if (this.target) {
        var el = this.target.getBlockableElement ? this.target.getBlockableElement() : this.target;
        el.appendChild(this.mask.nativeElement);
        var style = this.target.style || {};
        style.position = 'relative';
        this.target.style = style;
      } else {
        document.body.appendChild(this.mask.nativeElement);
      }

      if (this.autoZIndex) {
        this.mask.nativeElement.style.zIndex = String(this.baseZIndex + 10000);
      }
    };

    var Statics = function Statics() {
      _classCallCheck(this, Statics);
    };

    var BaseClassWithDecorations = /*#__PURE__*/function () {
      function BaseClassWithDecorations() {
        _classCallCheck(this, BaseClassWithDecorations);
      }

      _createClass(BaseClassWithDecorations, [{
        key: "__resolveDecorations__",
        value: function __resolveDecorations__(protoName, component, callback) {
          if (component.name == '') {
            return;
          }

          var values = _decorators__WEBPACK_IMPORTED_MODULE_4__["METADATA"].get(component) || new Map();

          if (Array.isArray(values.get(protoName))) {
            values.get(protoName).forEach(callback.bind(this));
          }

          this.__resolveDecorations__(protoName, component.__proto__, callback);
        }
      }, {
        key: "__resolveInjectors__",
        value: function __resolveInjectors__() {
          var _this = this;

          this.__resolveDecorations__('__injectors__', this.constructor, function (obj) {
            return _this[obj['prop']] = Statics.injector.get(obj['arg']);
          });
        }
      }], [{
        key: "UUID",
        value: function UUID() {
          return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }]);

      return BaseClassWithDecorations;
    }();

    var BaseClass = /*#__PURE__*/function (_BaseClassWithDecorat) {
      _inherits(BaseClass, _BaseClassWithDecorat);

      var _super = _createSuper(BaseClass);

      function BaseClass() {
        var _this2;

        _classCallCheck(this, BaseClass);

        _this2 = _super.call(this);
        _this2._logger = _services_logging__WEBPACK_IMPORTED_MODULE_5__["LoggingInstance"].logger;

        _this2.__resolveInjectors__();

        return _this2;
      }

      return BaseClass;
    }(BaseClassWithDecorations);

    var BaseComponent = /*#__PURE__*/function (_BaseClass) {
      _inherits(BaseComponent, _BaseClass);

      var _super2 = _createSuper(BaseComponent);

      function BaseComponent() {
        var _this3;

        _classCallCheck(this, BaseComponent);

        _this3 = _super2.call(this);
        _this3.__cycles__ = new Map();
        _this3.__subscriptions__ = [];
        _this3.__loadingComponent__ = null;
        _this3._isValid = true;

        _this3.__resolveDecorations__('__cycles__', _this3.constructor, function (obj) {
          if (!_this3.__cycles__.get(obj['arg'])) {
            _this3.__cycles__.set(obj['arg'], []);
          }

          _this3.__cycles__.get(obj['arg']).push(obj['prop']);
        });

        return _this3;
      }

      _createClass(BaseComponent, [{
        key: "_runCycle",
        value: function _runCycle(cycle, args) {
          var _this4 = this;

          var cycles = [].concat(this.__cycles__.get(cycle) || []);
          cycles.reverse().forEach(function (method) {
            return _this4[method](args);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._runCycle('destroy');

          this.__subscriptions__.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._runCycle('afterViewInit');
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._runCycle('change', changes);
        }
      }, {
        key: "_handleError",
        value: function _handleError(err) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.hideLoading();
                    console.error(err);
                    this.alert(err.message || err['error'] || err.name || err.constructor.name, '');

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this._runCycle('init');

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "softRefresh",
        value: function softRefresh() {
          this.ngOnDestroy();
          this.ngOnInit();
        }
      }, {
        key: "connect",
        value: function connect(obs, callback) {
          this.__subscriptions__.push(obs.subscribe(callback));
        }
      }, {
        key: "navigate",
        value: function navigate(url) {
          return this._router.navigateByUrl(url);
        }
      }, {
        key: "showLoading",
        value: function showLoading(el) {
          this.__loadingComponent__ = this.__factoryResolver__.resolveComponentFactory(_components_loading__WEBPACK_IMPORTED_MODULE_6__["Loading"]).create(Statics.injector);

          if (!el && document.querySelectorAll('al-loading').length > 0) {
            return;
          }

          if (el) {
            var component = new BlockableComponent();
            component.el = el.nativeElement;
            this.__loadingComponent__.instance.target = component;
          }

          this.__loadingComponent__.instance.uuid = BaseComponent.UUID();

          this.__loadingComponent__.instance.initMe();

          this.__appRef__.attachView(this.__loadingComponent__.hostView);

          var node = this.__loadingComponent__.hostView.rootNodes[0];
          document.body.appendChild(node);
        }
      }, {
        key: "hideLoading",
        value: function hideLoading() {
          if (!this.__loadingComponent__) {
            return;
          }

          this.__appRef__.detachView(this.__loadingComponent__.hostView);

          var el = document.querySelectorAll('al-loading');
          el.forEach(function (e) {
            return document.body.removeChild(e);
          });
          this.__loadingComponent__ = null;
        }
      }, {
        key: "alert",
        value: function alert(title, message) {
          var severity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';
          var sticky = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          this._toast.add({
            severity: severity,
            summary: title,
            detail: message,
            key: 'abc',
            sticky: sticky
          });
        }
      }, {
        key: "view",
        get: function get() {
          return this;
        }
      }, {
        key: "isJobPage",
        get: function get() {
          return this._router.url.match(/job$/) ? true : false;
        }
      }]);

      return BaseComponent;
    }(BaseClass);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["NgInject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])], BaseComponent.prototype, "_router", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["NgInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])], BaseComponent.prototype, "__factoryResolver__", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["NgInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"])], BaseComponent.prototype, "__appRef__", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["NgInject"])(primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"])], BaseComponent.prototype, "_toast", void 0);

    var BaseTestUnit = /*#__PURE__*/function (_BaseClassWithDecorat2) {
      _inherits(BaseTestUnit, _BaseClassWithDecorat2);

      var _super3 = _createSuper(BaseTestUnit);

      function BaseTestUnit(_providers) {
        var _this5;

        _classCallCheck(this, BaseTestUnit);

        _this5 = _super3.call(this);
        _this5._providers = _providers;
        _this5.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this5;
      }

      _createClass(BaseTestUnit, [{
        key: "__init__",
        value: function __init__() {
          _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__["TestBed"].resetTestingModule();

          _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__["TestBed"].configureTestingModule({
            providers: this._providers
          });

          Statics.injector = _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__["TestBed"];

          this.__resolveInjectors__();

          this.initialized.emit();
        }
      }]);

      return BaseTestUnit;
    }(BaseClassWithDecorations);
    /***/

  },

  /***/
  "./src/ts/components/attachments.ts":
  /*!******************************************!*\
    !*** ./src/ts/components/attachments.ts ***!
    \******************************************/

  /*! exports provided: Attachments */

  /***/
  function srcTsComponentsAttachmentsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Attachments", function () {
      return Attachments;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/web-intent/ngx */
    "./node_modules/@ionic-native/web-intent/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/mails */
    "./src/ts/services/mails.ts");
    /* harmony import */


    var _services_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/settings */
    "./src/ts/services/settings.ts");
    /* harmony import */


    var _nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../nextcloud/nextcloud */
    "./src/ts/nextcloud/nextcloud.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Attachments = /*#__PURE__*/function (_base__WEBPACK_IMPORT) {
      _inherits(Attachments, _base__WEBPACK_IMPORT);

      var _super4 = _createSuper(Attachments);

      function Attachments() {
        var _this6;

        _classCallCheck(this, Attachments);

        _this6 = _super4.apply(this, arguments);
        _this6.attachments = [];
        _this6.message = null;
        _this6._attDownloading = false;
        _this6._isCloud = false;
        return _this6;
      }

      _createClass(Attachments, [{
        key: "_initMe",
        value: function _initMe() {
          this._isCloud = this._nc.isNextcloud;
        }
      }, {
        key: "_doDownload",
        value: function _doDownload(a, where) {
          var preview = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var fileName, result;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this._attDownloading = true;
                    fileName = this.message ? "".concat(this.message.Uid, "-").concat(a.FileName) : a.FileName;
                    _context3.next = 4;
                    return this._api.downloadAttachment(this.account, a, fileName, where, this.message, preview);

                  case 4:
                    result = _context3.sent;
                    this._attDownloading = false;
                    return _context3.abrupt("return", result);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "_downloadAttachment",
        value: function _downloadAttachment(att) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var result;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this._doDownload(att, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Documents);

                  case 2:
                    result = _context4.sent;

                    if (!(result == null)) {
                      _context4.next = 5;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 5:
                    this.alert('Attachment downloaded', result.uri);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "_viewAttachment",
        value: function _viewAttachment(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var result;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this._doDownload(a, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Documents, true);

                  case 2:
                    result = _context5.sent;

                    if (!(result == null)) {
                      _context5.next = 5;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 5:
                    this._intent.startActivity({
                      action: this._intent.ACTION_VIEW,
                      url: decodeURIComponent(result.uri),
                      type: a.MimeType
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "_removeAttachment",
        value: function _removeAttachment(a) {
          var idx = this.attachments.findIndex(function (_a) {
            return _a.Actions.view == a.Actions.view;
          });

          if (idx != -1) {
            this.attachments.splice(idx, 1);
          }
        }
      }, {
        key: "_uploadToCloud",
        value: function _uploadToCloud(att) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var server, folder, a, content, path, uPath;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (this.message) {
                      _context6.next = 2;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 2:
                    if (att.Actions.download) {
                      _context6.next = 4;
                      break;
                    }

                    throw 'NO_DOWNLOAD_ACTION';

                  case 4:
                    _context6.next = 6;
                    return this._settings.getServer();

                  case 6:
                    server = _context6.sent;
                    _context6.next = 9;
                    return this._nc.pickFolder(this._platform.is('android'));

                  case 9:
                    folder = _context6.sent;

                    if (folder) {
                      _context6.next = 12;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 12:
                    a = this._mails.accountById(this.message.AccountID);
                    _context6.next = 15;
                    return this._api.getAttachmentContent(a, "".concat(server.url, "/").concat(att.Actions.download));

                  case 15:
                    content = _context6.sent;
                    path = "".concat(folder, "/").concat(att.FileName);
                    _context6.next = 19;
                    return this._nc.upload(path, content);

                  case 19:
                    uPath = _context6.sent;
                    this.alert('File uploaded to the cloud', uPath);

                  case 21:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return Attachments;
    }(_base__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Attachments.prototype, "attachments", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Attachments.prototype, "message", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Attachments.prototype, "account", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_6__["Api"])], Attachments.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_3__["WebIntent"])], Attachments.prototype, "_intent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_9__["Nextcloud"])], Attachments.prototype, "_nc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_mails__WEBPACK_IMPORTED_MODULE_7__["Mails"])], Attachments.prototype, "_mails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_settings__WEBPACK_IMPORTED_MODULE_8__["Settings"])], Attachments.prototype, "_settings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"])], Attachments.prototype, "_platform", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgCycle"])('init')], Attachments.prototype, "_initMe", null);
    Attachments = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'al-attachments',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/attachments.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/attachments.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/attachments.scss */
      "./src/assets/scss/attachments.scss"))["default"]]
    })], Attachments);
    /***/
  },

  /***/
  "./src/ts/components/avatar.ts":
  /*!*************************************!*\
    !*** ./src/ts/components/avatar.ts ***!
    \*************************************/

  /*! exports provided: Avatar */

  /***/
  function srcTsComponentsAvatarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Avatar", function () {
      return Avatar;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Avatar = /*#__PURE__*/function (_base__WEBPACK_IMPORT2) {
      _inherits(Avatar, _base__WEBPACK_IMPORT2);

      var _super5 = _createSuper(Avatar);

      function Avatar() {
        _classCallCheck(this, Avatar);

        return _super5.apply(this, arguments);
      }

      return Avatar;
    }(_base__WEBPACK_IMPORTED_MODULE_1__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], Avatar.prototype, "contact", void 0);
    Avatar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'al-avatar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/avatar.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/avatar.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/avatar.scss */
      "./src/assets/scss/avatar.scss"))["default"]]
    })], Avatar);
    /***/
  },

  /***/
  "./src/ts/components/compose.ts":
  /*!**************************************!*\
    !*** ./src/ts/components/compose.ts ***!
    \**************************************/

  /*! exports provided: Compose */

  /***/
  function srcTsComponentsComposeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Compose", function () {
      return Compose;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _services_contacts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/contacts */
    "./src/ts/services/contacts.ts");
    /* harmony import */


    var _services_file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/file */
    "./src/ts/services/file.ts");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/mails */
    "./src/ts/services/mails.ts");
    /* harmony import */


    var _services_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/settings */
    "./src/ts/services/settings.ts");
    /* harmony import */


    var _services_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../services/utils */
    "./src/ts/services/utils.ts");
    /* harmony import */


    var _nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../nextcloud/nextcloud */
    "./src/ts/nextcloud/nextcloud.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Compose = /*#__PURE__*/function (_base__WEBPACK_IMPORT3) {
      _inherits(Compose, _base__WEBPACK_IMPORT3);

      var _super6 = _createSuper(Compose);

      function Compose() {
        var _this7;

        _classCallCheck(this, Compose);

        _this7 = _super6.apply(this, arguments);
        _this7.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this7._showCc = false;
        _this7._contacts = [];
        _this7._convertor = new _models__WEBPACK_IMPORTED_MODULE_6__["ContactConvertor"]();
        _this7._combinedView = false;
        _this7._attaching = false;
        _this7._saving = false;
        _this7._cloudAttaching = false;
        _this7._incloud = false;
        return _this7;
      }

      _createClass(Compose, [{
        key: "_initMe",
        value: function _initMe() {
          var _this8 = this;

          this._accounts$ = this._mails.accounts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (accounts) {
            return !_this8._account && setTimeout(function () {
              return _this8._account = accounts[0];
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (accounts) {
            return accounts.filter(function (a) {
              return a.AccountID != _models__WEBPACK_IMPORTED_MODULE_6__["COMBINED_ACCOUNT_ID"];
            });
          }));
          this.connect(this._mails.currentAccount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), function (account) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this._account = this.message ? this._mails.accountById(this.message.AccountID) : account;

                      if (this._account.AccountID == _models__WEBPACK_IMPORTED_MODULE_6__["COMBINED_ACCOUNT_ID"]) {
                        this._combinedView = true;
                        this._account = undefined;
                      }

                      _context7.next = 4;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve);
                      });

                    case 4:
                      this._setModel();

                      this._start();

                      this._waitEditorReady();

                      _context7.next = 9;
                      return this._settings.getMessageType();

                    case 9:
                      this._type = _context7.sent;

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
          this._incloud = this._nc.isNextcloud;
        }
      }, {
        key: "_setModel",
        value: function _setModel() {
          var conv = new _models__WEBPACK_IMPORTED_MODULE_6__["MessageComposeConvertor"]();
          conv.composeType = this.composeType;
          conv.currentEmail = this._account ? this._account.Email : '';
          this._model = conv.convert(this.message);

          if (this._model.Cc && ['reply', 'forward'].indexOf(this.composeType) != -1) {
            this._model.Bcc = [];
            this._model.Cc = [];
          }

          if (Array.isArray(this.to) && this.to.length > 0) {
            var _conv = new _models__WEBPACK_IMPORTED_MODULE_6__["ContactConvertor"]();

            this._model.To = this.to.map(function (c) {
              return _conv.convert(c);
            });
          }
        }
      }, {
        key: "_start",
        value: function _start() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this9 = this;

            var orig;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (this._account) {
                      _context8.next = 2;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 2:
                    this._setModel();

                    if (this._model.Cc.length > 0) {
                      this._showCc = true;
                    }

                    if (!_services_utils__WEBPACK_IMPORTED_MODULE_12__["Utils"].isDraftReply(this._model)) {
                      _context8.next = 9;
                      break;
                    }

                    _context8.next = 7;
                    return this._api.getOriginalDraftReply(this._account, this._model);

                  case 7:
                    orig = _context8.sent;
                    this._model.InReplyTo = orig.MessageId;

                  case 9:
                    _context8.next = 11;
                    return this._api.reloadAttachments(this._account, this._model.Attachments);

                  case 11:
                    this._contacts = this._contactsService.contacts.map(function (c) {
                      return _this9._convertor.convert(c);
                    });

                  case 12:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "_waitEditorReady",
        value: function _waitEditorReady() {
          var _this10 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(100).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () {
            return !_this10._editor;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            if (['reply', 'reply-all'].indexOf(_this10.composeType) != -1) {
              _this10._editor.focus();
            }

            _this10._viewInit();
          })).toPromise();
        }
      }, {
        key: "_viewInit",
        value: function _viewInit() {
          var _this11 = this;

          this._saveSubscription = this._editor.modelChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2000)).subscribe(function () {
            return _this11._save();
          });
        }
      }, {
        key: "_destroy",
        value: function _destroy() {
          if (this._saveSubscription) {
            this._saveSubscription.unsubscribe();
          }
        }
      }, {
        key: "_filterContact",
        value: function _filterContact(ev) {
          var _this12 = this;

          this._contacts = this._contactsService.contacts.filter(function (c) {
            return c.Email.toLowerCase().indexOf(ev.query.toLowerCase()) != -1;
          }).map(function (c) {
            return _this12._convertor.convert(c);
          });

          this._contacts.push(_models__WEBPACK_IMPORTED_MODULE_6__["ModelFactory"].instance({
            Email: ev.query,
            display: ev.query
          }, _models__WEBPACK_IMPORTED_MODULE_6__["DisplayContact"]));
        }
      }, {
        key: "_send",
        value: function _send() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var conv, model, result;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (!(this._model.To.length == 0)) {
                      _context9.next = 3;
                      break;
                    }

                    this.alert('No recepient', 'Please add a recipient to receive the e-mail');
                    return _context9.abrupt("return");

                  case 3:
                    if (this._mails.validate(this._model.To.concat(this._model.Cc).concat(this._model.Bcc))) {
                      _context9.next = 6;
                      break;
                    }

                    this.alert('Invalid address', 'Please check your addressed');
                    return _context9.abrupt("return");

                  case 6:
                    this._destroy();

                    this.showLoading();
                    conv = new _models__WEBPACK_IMPORTED_MODULE_6__["MessageSaveConvertor"]();
                    model = conv.convert(this._model); // const [err, result] = await to(this._api.sendMessage(this._account, model));

                    result = this._api.sendMessage(this._account, model);
                    this.hideLoading();

                    if (result) {
                      _context9.next = 16;
                      break;
                    }

                    this._save();

                    this.alert('Error sending e-mail', '', 'error');
                    return _context9.abrupt("return");

                  case 16:
                    this.notify.emit('sent');

                  case 17:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "_save",
        value: function _save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var conv, model, result;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this._saving = true;

                    this._destroy();

                    conv = new _models__WEBPACK_IMPORTED_MODULE_6__["MessageSaveConvertor"]();
                    model = conv.convert(this._model);
                    _context10.next = 6;
                    return this._api.saveMessage(this._account, model);

                  case 6:
                    result = _context10.sent;
                    this._model.DraftUid = result.NewUid;

                    this._viewInit();

                    this._saving = false;

                  case 10:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "_doAttach",
        value: function _doAttach(promises) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var attachments;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return Promise.all(promises);

                  case 2:
                    attachments = _context11.sent;

                    this._model.Attachments.push.apply(this._model.Attachments, attachments.map(function (a) {
                      return a.Attachment;
                    }));

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "_attach",
        value: function _attach() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var files, p, i;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this._fileService.get(this._file.nativeElement);

                  case 2:
                    files = _context12.sent;
                    this._attaching = true;
                    p = [];

                    for (i = 0; i < files.length; i++) {
                      p.push(this._api.uploadAttachment(this._account, files[i]));
                    }

                    _context12.next = 8;
                    return this._doAttach(p);

                  case 8:
                    this._attaching = false;

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "_cloudAttach",
        value: function _cloudAttach() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this13 = this;

            var files, p, contents;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this._nc.pickFile(this._platform.is('android'));

                  case 2:
                    files = _context13.sent;
                    this._cloudAttaching = true;
                    p = [];
                    files.forEach(function (file) {
                      p.push(_this13._nc.download(file));
                    });
                    _context13.next = 8;
                    return Promise.all(p);

                  case 8:
                    contents = _context13.sent;
                    p = [];
                    files.forEach(function (file, idx) {
                      var f = new _models__WEBPACK_IMPORTED_MODULE_6__["FileResult"]();
                      var F = window['OriginalFileApi'] ? window['OriginalFileApi'] : File;
                      f.content = new F([contents[idx]], file.replace(/^.*\/([^\/]+)$/, '$1'));
                      console.log('content is', f);
                      p.push(_this13._api.uploadData(_this13._account, f));
                    });
                    _context13.next = 13;
                    return this._doAttach(p);

                  case 13:
                    this._cloudAttaching = false;

                  case 14:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "_blur",
        value: function _blur(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    if (!(Array.isArray(a.suggestions) && a.suggestions.length > 0)) {
                      _context14.next = 4;
                      break;
                    }

                    _context14.next = 3;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve);
                    });

                  case 3:
                    if (!a.focus) {
                      a.selectItem(a.suggestions[0], false);
                    }

                  case 4:
                    a.suggestions = [];

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));
        }
      }, {
        key: "_focus",
        value: function _focus(a) {
          a.suggestions = [];
        }
      }]);

      return Compose;
    }(_base__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Compose.prototype, "message", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Compose.prototype, "to", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Compose.prototype, "composeType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Compose.prototype, "notify", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_contacts__WEBPACK_IMPORTED_MODULE_8__["Contacts"])], Compose.prototype, "_contactsService", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_settings__WEBPACK_IMPORTED_MODULE_11__["Settings"])], Compose.prototype, "_settings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_7__["Api"])], Compose.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_mails__WEBPACK_IMPORTED_MODULE_10__["Mails"])], Compose.prototype, "_mails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_file__WEBPACK_IMPORTED_MODULE_9__["FileService"])], Compose.prototype, "_fileService", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_13__["Nextcloud"])], Compose.prototype, "_nc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"])], Compose.prototype, "_platform", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file', {
      "static": false
    })], Compose.prototype, "_file", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editor', {
      "static": false
    })], Compose.prototype, "_editor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgCycle"])('init')], Compose.prototype, "_initMe", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgCycle"])('destroy')], Compose.prototype, "_destroy", null);
    Compose = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'al-compose',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/compose.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/compose.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/compose.scss */
      "./src/assets/scss/compose.scss"))["default"]]
    })], Compose);
    /***/
  },

  /***/
  "./src/ts/components/editor.ts":
  /*!*************************************!*\
    !*** ./src/ts/components/editor.ts ***!
    \*************************************/

  /*! exports provided: Editor */

  /***/
  function srcTsComponentsEditorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Editor", function () {
      return Editor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");

    var Editor = /*#__PURE__*/function (_base__WEBPACK_IMPORT4) {
      _inherits(Editor, _base__WEBPACK_IMPORT4);

      var _super7 = _createSuper(Editor);

      function Editor() {
        var _this14;

        _classCallCheck(this, Editor);

        _this14 = _super7.apply(this, arguments);
        _this14.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        return _this14;
      }

      _createClass(Editor, [{
        key: "_initMe",
        value: function _initMe() {
          this._html = this.model;
        }
      }, {
        key: "_keyup",
        value: function _keyup() {
          this.model = this._editor.nativeElement.innerHTML;
          this.modelChange.emit(this.model);
        }
      }, {
        key: "focus",
        value: function focus() {
          this._editor.nativeElement.focus();
        }
      }]);

      return Editor;
    }(_base__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], Editor.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], Editor.prototype, "modelChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('editor')], Editor.prototype, "_editor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgCycle"])('init')], Editor.prototype, "_initMe", null);
    Editor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'al-editor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/editor.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/editor.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/editor.scss */
      "./src/assets/scss/editor.scss"))["default"]]
    })], Editor);
    /***/
  },

  /***/
  "./src/ts/components/folders-list.ts":
  /*!*******************************************!*\
    !*** ./src/ts/components/folders-list.ts ***!
    \*******************************************/

  /*! exports provided: FoldersList */

  /***/
  function srcTsComponentsFoldersListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoldersList", function () {
      return FoldersList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/mails */
    "./src/ts/services/mails.ts");

    var FoldersList = /*#__PURE__*/function (_base__WEBPACK_IMPORT5) {
      _inherits(FoldersList, _base__WEBPACK_IMPORT5);

      var _super8 = _createSuper(FoldersList);

      function FoldersList() {
        var _this15;

        _classCallCheck(this, FoldersList);

        _this15 = _super8.apply(this, arguments);
        _this15._loading = true;
        _this15._selected = null;
        return _this15;
      }

      _createClass(FoldersList, [{
        key: "_init",
        value: function _init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var inbox;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this._api.folderByType(_models__WEBPACK_IMPORTED_MODULE_5__["FolderType"].Inbox, this._account);

                  case 2:
                    inbox = _context15.sent;

                    this._mails.folderChanged$.emit(inbox);

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "_select",
        value: function _select(folder) {
          if (!folder) {
            return;
          }

          this._selected = folder;
          console.log('folder is', folder);

          this._mails.folderChanged$.emit(folder);
        }
      }, {
        key: "account",
        set: function set(a) {
          var _this16 = this;

          this._loading = true;

          if (!a) {
            return;
          }

          this._account = a;

          this._account.Folders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
            return _this16._loading = false;
          });

          this._init();
        }
      }]);

      return FoldersList;
    }(_base__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["NgInject"])(_services_mails__WEBPACK_IMPORTED_MODULE_7__["Mails"])], FoldersList.prototype, "_mails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_6__["Api"])], FoldersList.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FoldersList.prototype, "account", null);
    FoldersList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'al-folders-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/folders-list.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/folders-list.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/folders-list.scss */
      "./src/assets/scss/folders-list.scss"))["default"]]
    })], FoldersList);
    /***/
  },

  /***/
  "./src/ts/components/loading.ts":
  /*!**************************************!*\
    !*** ./src/ts/components/loading.ts ***!
    \**************************************/

  /*! exports provided: Loading */

  /***/
  function srcTsComponentsLoadingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Loading", function () {
      return Loading;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");

    var Loading = /*#__PURE__*/function () {
      function Loading(_cd) {
        _classCallCheck(this, Loading);

        this._cd = _cd;
      }

      _createClass(Loading, [{
        key: "initMe",
        value: function initMe() {
          var _this17 = this;

          if (!this.target) {
            this.target = document.body;
          }

          setTimeout(function () {
            return _this17._cd.detectChanges();
          });
        }
      }]);

      return Loading;
    }();

    Loading.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Loading.prototype, "target", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["NgCycle"])('init')], Loading.prototype, "initMe", null);
    Loading = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'al-loading',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/loading.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/loading.html"))["default"]
    })], Loading);
    /***/
  },

  /***/
  "./src/ts/components/message.ts":
  /*!**************************************!*\
    !*** ./src/ts/components/message.ts ***!
    \**************************************/

  /*! exports provided: Message */

  /***/
  function srcTsComponentsMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/mails */
    "./src/ts/services/mails.ts");
    /* harmony import */


    var _services_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/settings */
    "./src/ts/services/settings.ts");
    /* harmony import */


    var _services_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/utils */
    "./src/ts/services/utils.ts");

    var Message = /*#__PURE__*/function (_base__WEBPACK_IMPORT6) {
      _inherits(Message, _base__WEBPACK_IMPORT6);

      var _super9 = _createSuper(Message);

      function Message() {
        var _this18;

        _classCallCheck(this, Message);

        _this18 = _super9.apply(this, arguments);
        _this18.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this18._quotedText = false;
        _this18._isDraft = false;
        _this18._detailsHidden = true;
        _this18._hasImages = false;
        _this18._maxWidth = null;
        _this18._actions = [{
          label: 'Reply all',
          icon: 'fa fa-reply-all',
          command: function command() {
            return _this18._action('reply-all');
          }
        }, {
          label: 'Forward',
          icon: 'fa fa-share',
          command: function command() {
            return _this18._action('forward');
          }
        }, {
          label: 'Download',
          icon: 'fa fa-download',
          command: function command() {
            return _this18._download();
          }
        }];
        _this18._loading = true;
        return _this18;
      }

      _createClass(Message, [{
        key: "_setMaxWidth",
        value: function _setMaxWidth() {
          this._width = window.innerWidth - 22;
          this._maxWidth = "max-width: ".concat(this._width, "px");
        }
      }, {
        key: "_transform",
        value: function _transform() {
          var _this19 = this;

          if (!this._body) {
            return;
          }

          var div = this._body.nativeElement.querySelector('*');

          div.setAttribute('style', '');
          setTimeout(function () {
            return div.setAttribute('style', _services_utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].transformMessageBody(_this19._width, div));
          });
        }
      }, {
        key: "_initMe",
        value: function _initMe() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this20 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    console.log('init message');
                    _context16.next = 3;
                    return this._settings.getServer();

                  case 3:
                    this._server = _context16.sent;
                    console.log('server is', this._server);

                    this._setMaxWidth();

                    window.onresize = function () {
                      return _this20._zone.run(function () {
                        _this20._setMaxWidth();

                        _this20._transform();
                      });
                    };

                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "_appendBody",
        value: function _appendBody() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _this21 = this;

            var el;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    el = this._body.nativeElement;
                    this._html = this._message.Html || this._message.Plain;
                    setTimeout(function () {
                      _this21._quotedText = el.querySelector('blockquote') != null;
                      _this21._hasImages = el.querySelectorAll("*[data-x-src]").length > 0;
                      _this21._loading = false;
                      Array.from(el.querySelectorAll('a')).filter(function (el) {
                        return el.href.match("^mailto:");
                      }).forEach(function (a) {
                        var email = a.href.replace(/^mailto:(.*)$/g, '$1');
                        a.href = "javascript: ";
                        a.target = '_self';

                        a.onclick = function () {
                          return _this21._emailClick(_models__WEBPACK_IMPORTED_MODULE_7__["ModelFactory"].instance({
                            Email: email
                          }, _models__WEBPACK_IMPORTED_MODULE_7__["Contact"]));
                        };
                      });

                      _this21._transform();

                      var att = _this21._message.Attachments;

                      if (!att || !Array.isArray(att.Collection)) {
                        return;
                      }

                      var a = _this21._mails.accountById(_this21._accountId);

                      var user = _services_utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].userByEmail(_this21._server.users, a.Email);

                      att.Collection.filter(function (a) {
                        return a.CID;
                      }).map(function (a) {
                        return {
                          a: a,
                          img: el.querySelector("*[data-x-src-cid=\"".concat(a.CID, "\"]"))
                        };
                      }).filter(function (obj) {
                        return !!obj.a && !!obj.img;
                      }).forEach(function (obj) {
                        obj.img.src = "".concat(_this21._server.url, "/").concat(obj.a.Actions.view);

                        obj.img.onerror = function () {
                          fetch("".concat(_this21._server.url, "/").concat(obj.a.Actions.view), {
                            headers: {
                              Authorization: "Bearer ".concat(user.token)
                            }
                          }).then(function (img) {
                            return img.blob();
                          }).then(function (d) {
                            return obj.img.src = window.URL.createObjectURL(d);
                          });
                        };
                      });

                      _this21.hideLoading();
                    });

                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "_showHiddenContent",
        value: function _showHiddenContent() {
          this._quotedText = false;
        }
      }, {
        key: "_emailClick",
        value: function _emailClick(c) {
          var ev = _models__WEBPACK_IMPORTED_MODULE_7__["ModelFactory"].instance({
            contact: c,
            type: 'new'
          }, _models__WEBPACK_IMPORTED_MODULE_7__["MessageNotify"]);

          this.notify.emit(ev);
        }
      }, {
        key: "_action",
        value: function _action(type) {
          var ev = _models__WEBPACK_IMPORTED_MODULE_7__["ModelFactory"].instance({
            message: this._message,
            type: type
          }, _models__WEBPACK_IMPORTED_MODULE_7__["MessageNotify"]);

          this.notify.emit(ev);
        }
      }, {
        key: "_download",
        value: function _download() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var result;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    if (this._message) {
                      _context18.next = 2;
                      break;
                    }

                    return _context18.abrupt("return");

                  case 2:
                    _context18.next = 4;
                    return this._api.downloadUrl(this._account, "".concat(this._server.url, "/").concat(this._message.DownloadAsEmlUrl), "".concat(this._message.Uid, ".eml"), _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Documents, this._message);

                  case 4:
                    result = _context18.sent;

                    if (!(result == null)) {
                      _context18.next = 7;
                      break;
                    }

                    return _context18.abrupt("return");

                  case 7:
                    this.alert('Message downloaded', result.uri);

                  case 8:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "_star",
        value: function _star() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    if (!(!this._message || !this._account)) {
                      _context19.next = 2;
                      break;
                    }

                    return _context19.abrupt("return");

                  case 2:
                    this._message.IsFlagged = !this._message.IsFlagged;
                    _context19.next = 5;
                    return this._api.flag(this._account, this._message.Folder, [this._message], this._message.IsFlagged);

                  case 5:
                    this._originalMessage.IsFlagged = this._message.IsFlagged;

                  case 6:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "_showImages",
        value: function _showImages() {
          this._body.nativeElement.querySelectorAll("*[data-x-src]").forEach(function (n) {
            return n.setAttribute('src', n.getAttribute('data-x-src'));
          });

          this._transform();

          this._hasImages = false;
        }
      }, {
        key: "message",
        set: function set(m) {
          var _this22 = this;

          this._message = m;
          this._originalMessage = m;
          this._html = '';

          if (!m) {
            return;
          }

          if (this._body) {
            this._body.nativeElement.innerHTML = '';
          }

          this._loading = true;
          this._detailsHidden = true;
          this._quotedText = false;
          this._hasImages = false; // Keep the real account id (in case of combined view)

          this._accountId = m.AccountID;
          this.connect(this._mails.folderChanged$, function (f) {
            return _this22._isDraft = f.Type == _models__WEBPACK_IMPORTED_MODULE_7__["FolderType"].Drafts;
          });

          this._mails.currentAccount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (account) {
            return _this22._account = account;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this22._api.getMessageBody(_this22._account, m));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (body) {
            _this22._message = body;

            _this22._appendBody();

            if (!m.IsSeen) {
              _this22._api.markRead(_this22._account, m.Folder, [m], true);
            }
          });
        }
      }]);

      return Message;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_8__["Api"])], Message.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_services_mails__WEBPACK_IMPORTED_MODULE_9__["Mails"])], Message.prototype, "_mails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_services_settings__WEBPACK_IMPORTED_MODULE_10__["Settings"])], Message.prototype, "_settings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])], Message.prototype, "_zone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageBody', {
      "static": false
    })], Message.prototype, "_body", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Message.prototype, "message", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Message.prototype, "notify", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgCycle"])('init')], Message.prototype, "_initMe", null);
    Message = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'al-message',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/message.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/message.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/message.scss */
      "./src/assets/scss/message.scss"))["default"]]
    })], Message);
    /***/
  },

  /***/
  "./src/ts/components/messages-list.ts":
  /*!********************************************!*\
    !*** ./src/ts/components/messages-list.ts ***!
    \********************************************/

  /*! exports provided: MessagesList */

  /***/
  function srcTsComponentsMessagesListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesList", function () {
      return MessagesList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _services_background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/background */
    "./src/ts/services/background.ts");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/mails */
    "./src/ts/services/mails.ts");
    /* harmony import */


    var _services_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/settings */
    "./src/ts/services/settings.ts");
    /* harmony import */


    var _services_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/utils */
    "./src/ts/services/utils.ts");
    /* harmony import */


    var _services_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../services/store */
    "./src/ts/services/store.ts");

    var DEFAULT = 'Inbox';

    var MessagesList = /*#__PURE__*/function (_base__WEBPACK_IMPORT7) {
      _inherits(MessagesList, _base__WEBPACK_IMPORT7);

      var _super10 = _createSuper(MessagesList);

      function MessagesList() {
        var _this23;

        _classCallCheck(this, MessagesList);

        _this23 = _super10.call(this);
        _this23.fixSearchForm = false;
        _this23.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this23.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this23._loading = true;
        _this23._pageSize = 0;
        _this23._totalRecords = 0;
        _this23._search = new _models__WEBPACK_IMPORTED_MODULE_6__["SearchModel"]();
        _this23._messages = [];
        _this23._combinedMessages = [];
        _this23._showSearch = false;
        _this23._combinedView = false;
        _this23._style = null;
        _this23._oldestMessage = null;
        _this23._subscriptions = false;
        return _this23;
      }

      _createClass(MessagesList, [{
        key: "_initMe",
        value: function _initMe(folder) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this24 = this;

            var d;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.connect(this._api.ready$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1)), function () {
                      _this24._subscriptions = false;

                      _this24.softRefresh();
                    });
                    _context20.next = 3;
                    return this._settings.getPageSize();

                  case 3:
                    this._pageSize = _context20.sent;

                    if (this.account) {
                      _context20.next = 6;
                      break;
                    }

                    return _context20.abrupt("return");

                  case 6:
                    this._combinedView = this.account.AccountID == _models__WEBPACK_IMPORTED_MODULE_6__["COMBINED_ACCOUNT_ID"];
                    d = this.account.AccountID == _models__WEBPACK_IMPORTED_MODULE_6__["COMBINED_ACCOUNT_ID"] ? _models__WEBPACK_IMPORTED_MODULE_6__["FolderType"].Inbox : DEFAULT;
                    _context20.next = 10;
                    return this._mails.folderById$(this.account, folder || d.toString()).toPromise();

                  case 10:
                    this._folder = _context20.sent;
                    this._messages = [];

                    this._reset();

                    this._initSubscriptions();

                  case 14:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "_change",
        value: function _change(changes) {
          if (!this.account) {
            this._messages = [];
            return;
          }

          if (changes['folder'] && changes['folder'].previousValue && _services_utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].foldersDiff(changes['folder'].previousValue, changes['folder'].currentValue)) {
            this._initMe(this.folder);

            return;
          }

          if (changes['account']) {
            this._initMe();
          }
        }
      }, {
        key: "_messagesRemoved",
        value: function _messagesRemoved(messages) {
          if (!messages || !Array.isArray(messages)) {
            return;
          }

          var map = messages.map(function (m) {
            return m.Uid;
          });
          this._combinedMessages = this._combinedMessages.filter(function (m) {
            return map.indexOf(m.Uid) == -1;
          });
          this._table.selection = this._table.selection.filter(function (m) {
            return map.indexOf(m.Uid) == -1;
          });
          this.selectionChanged.emit(this._table.selection);
        }
      }, {
        key: "_initSubscriptions",
        value: function _initSubscriptions() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var _this25 = this;

            var f, msgChanged;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    if (!this._subscriptions) {
                      _context21.next = 2;
                      break;
                    }

                    return _context21.abrupt("return");

                  case 2:
                    this._subscriptions = true;
                    _context21.next = 5;
                    return this._store.getFolderSearch();

                  case 5:
                    f = _context21.sent;
                    this._account$ = this._mails.currentAccount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (account) {
                      var result = _services_utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].folderById(account.FoldersOrder, f);

                      _this25._search.folder = result ? result.Id : null;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (account) {
                      return !!account;
                    }));
                    msgChanged = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this._api.messagesDeleted$, this._api.messagesMoved$, this._mails.refresh$);
                    this.connect(msgChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (messages) {
                      return _this25._messagesRemoved(messages);
                    })), function () {
                      return _this25._loadMessages({
                        first: _this25._table.first
                      });
                    });

                    this._background.configure(this._checkMailsAuto.bind(this));

                    _context21.next = 12;
                    return this._store.getFolderSearch();

                  case 12:
                    this._search.folder = _context21.sent;
                    console.log('search is', this._search);

                  case 14:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "_waitNewMails",
        value: function _waitNewMails() {
          return this._oldestMessage && this._folder && this._folder.Type == _models__WEBPACK_IMPORTED_MODULE_6__["FolderType"].Inbox && _services_utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].emptySearch(this._search);
        }
      }, {
        key: "_checkMailsAuto",
        value: function _checkMailsAuto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _this26 = this;

            var _yield$Object, _yield$Object2, err, msgs;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    console.log('checking mails automatically', new Date());

                    if (this._waitNewMails()) {
                      _context22.next = 4;
                      break;
                    }

                    console.log('not waiting for new messages');
                    return _context22.abrupt("return");

                  case 4:
                    _context22.next = 6;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_6__["to"])(this._api.getMessages(this.account, this._folder.Id, 0, 1));

                  case 6:
                    _yield$Object = _context22.sent;
                    _yield$Object2 = _slicedToArray(_yield$Object, 2);
                    err = _yield$Object2[0];
                    msgs = _yield$Object2[1];

                    if (!err) {
                      _context22.next = 12;
                      break;
                    }

                    throw err;

                  case 12:
                    console.log('fetched', msgs.length, new Date());

                    if (!(!this._waitNewMails() || msgs.length == 0)) {
                      _context22.next = 15;
                      break;
                    }

                    return _context22.abrupt("return");

                  case 15:
                    if (msgs.filter(function (m) {
                      return m.TimeStampInUTC > _this26._oldestMessage.TimeStampInUTC;
                    }).length > 0) {
                      this._fetchMailsAuto();
                    }

                  case 16:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "_fetchMailsAuto",
        value: function _fetchMailsAuto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var initialType, selection;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    if (this._folder) {
                      _context23.next = 2;
                      break;
                    }

                    return _context23.abrupt("return");

                  case 2:
                    console.log('fetching mails automatically', new Date());
                    initialType = this._folder.Type;
                    _context23.next = 6;
                    return this._fetch(this._table.first, true);

                  case 6:
                    this._messages = _context23.sent;
                    console.log('messages fetched', this._messages.length);
                    selection = (this._table.selection || []).map(function (s) {
                      return s.Uid;
                    });

                    if (this._folder.Type == _models__WEBPACK_IMPORTED_MODULE_6__["FolderType"].Inbox && initialType == _models__WEBPACK_IMPORTED_MODULE_6__["FolderType"].Inbox) {
                      this._mails.showNotifications(this._oldestMessage, this._messages);
                    }

                    this._setOldestMessage();

                    this._table.selection = this._messages.filter(function (m) {
                      return selection.indexOf(m.Uid) != -1;
                    });
                    this.selectionChanged.emit(this._table.selection);

                  case 13:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "_setOldestMessage",
        value: function _setOldestMessage() {
          if (this._table.first != 0 || !this._folder && this._folder.Type != _models__WEBPACK_IMPORTED_MODULE_6__["FolderType"].Inbox || !Array.isArray(this._messages) || this._messages.length == 0) {
            return;
          }

          this._oldestMessage = this._messages[0];
        }
      }, {
        key: "_fetch",
        value: function _fetch(first) {
          var auto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var _services_utils__WEBP, _services_utils__WEBP2, txt, searchFolder, id, _yield$Object3, _yield$Object4, err, result, uids;

            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _services_utils__WEBP = _services_utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].searchFolder(this._search.simple), _services_utils__WEBP2 = _slicedToArray(_services_utils__WEBP, 2), txt = _services_utils__WEBP2[0], searchFolder = _services_utils__WEBP2[1];
                    id = searchFolder || this._folder.Id;
                    _context24.next = 4;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_6__["to"])(this._api.getMessages(this.account, id, first, this._pageSize, txt, '', auto));

                  case 4:
                    _yield$Object3 = _context24.sent;
                    _yield$Object4 = _slicedToArray(_yield$Object3, 2);
                    err = _yield$Object4[0];
                    result = _yield$Object4[1];

                    if (!err) {
                      _context24.next = 11;
                      break;
                    }

                    this.alert('There was an error fetching the messages', err.message, 'error');
                    return _context24.abrupt("return", []);

                  case 11:
                    if (typeof this._search.folder != 'undefined' && this._search.folder != null) {
                      this._store.setFolderSearch(this._search.folder);
                    }

                    if (!(this._folder.Id != id && !searchFolder)) {
                      _context24.next = 14;
                      break;
                    }

                    return _context24.abrupt("return", this._messages.length > 0 && this._mails.messageInComposedFolder(this._messages[0], this._folder) ? this._messages : []);

                  case 14:
                    if (!(this.account.AccountID != _models__WEBPACK_IMPORTED_MODULE_6__["COMBINED_ACCOUNT_ID"])) {
                      _context24.next = 16;
                      break;
                    }

                    return _context24.abrupt("return", result);

                  case 16:
                    if (first == 0) {
                      this._combinedMessages = [];
                    }

                    uids = result.map(function (x) {
                      return x.Uid;
                    });
                    this._combinedMessages = this._combinedMessages.filter(function (m) {
                      return uids.indexOf(m.Uid) == -1;
                    }).concat(result);

                    this._combinedMessages.sort(function (a, b) {
                      return b.TimeStampInUTC - a.TimeStampInUTC;
                    });

                    return _context24.abrupt("return", this._combinedMessages.slice(first, first + this._pageSize));

                  case 21:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "_reset",
        value: function _reset() {
          this._combinedMessages = [];

          this._table.reset();

          this.selectionChanged.emit([]);
          this._table.selection = [];
        }
      }, {
        key: "_loadMessages",
        value: function _loadMessages(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    this._loading = true;

                    if (!(this.account == null || this._folder == null)) {
                      _context25.next = 3;
                      break;
                    }

                    return _context25.abrupt("return");

                  case 3:
                    _context25.next = 5;
                    return this._fetch(ev.first);

                  case 5:
                    this._messages = _context25.sent;

                    this._setOldestMessage();

                    this._totalRecords = this._api.lastSearchResults;
                    this._loading = false;

                    this._mails.refreshed$.emit();

                  case 10:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "_keyup",
        value: function _keyup(ev) {
          if (ev.keyCode != 13) {
            return;
          }

          this._reset();
        }
      }, {
        key: "_advSearch",
        value: function _advSearch() {
          this._showSearch = false;
          var conv = new _models__WEBPACK_IMPORTED_MODULE_6__["SearchConvertor"]();
          this._search.simple = conv.convert(this._search);

          this._reset();
        }
      }, {
        key: "_clearSearch",
        value: function _clearSearch() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    this._search = new _models__WEBPACK_IMPORTED_MODULE_6__["SearchModel"]();

                    this._reset();

                    _context26.next = 4;
                    return this._store.getFolderSearch();

                  case 4:
                    this._search.folder = _context26.sent;

                  case 5:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "_select",
        value: function _select(row) {
          this.notify.emit(row);
          this._selected = row;
        }
      }, {
        key: "_selectionChanged",
        value: function _selectionChanged() {
          this.selectionChanged.emit(this._table.selection);
        }
      }, {
        key: "unselect",
        value: function unselect() {
          this._table.selection = [];

          this._table.clearState();

          this._selected = null;

          this._selectionChanged();
        }
      }, {
        key: "_clickAdvSearch",
        value: function _clickAdvSearch() {
          var _this27 = this;

          this._showSearch = true;
          setTimeout(function () {
            return _this27._all.nativeElement.focus();
          }, 151);
        }
      }, {
        key: "_keyup2",
        value: function _keyup2(ev) {
          if (ev.keyCode != 13) {
            return;
          }

          this._advSearch();
        }
      }, {
        key: "rows",
        get: function get() {
          return this._messages;
        }
      }]);

      return MessagesList;
    }(_base__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessagesList.prototype, "account", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessagesList.prototype, "folder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessagesList.prototype, "fixSearchForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MessagesList.prototype, "notify", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MessagesList.prototype, "selectionChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_settings__WEBPACK_IMPORTED_MODULE_10__["Settings"])], MessagesList.prototype, "_settings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_store__WEBPACK_IMPORTED_MODULE_12__["Store"])], MessagesList.prototype, "_store", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_mails__WEBPACK_IMPORTED_MODULE_9__["Mails"])], MessagesList.prototype, "_mails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_7__["Api"])], MessagesList.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_background__WEBPACK_IMPORTED_MODULE_8__["Background"])], MessagesList.prototype, "_background", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', {
      "static": true
    })], MessagesList.prototype, "_table", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('all', {
      "static": false
    })], MessagesList.prototype, "_all", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgCycle"])('init')], MessagesList.prototype, "_initMe", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgCycle"])('change')], MessagesList.prototype, "_change", null);
    MessagesList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'al-messages-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/messages-list.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/messages-list.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/messages-list.scss */
      "./src/assets/scss/messages-list.scss"))["default"]]
    })], MessagesList);
    /***/
  },

  /***/
  "./src/ts/decorators.ts":
  /*!******************************!*\
    !*** ./src/ts/decorators.ts ***!
    \******************************/

  /*! exports provided: TEST_CASES, TEST_CASES_ONLY, METADATA, NgInject, NgCycle, deserialize, deserializers, NgTest */

  /***/
  function srcTsDecoratorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEST_CASES", function () {
      return TEST_CASES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEST_CASES_ONLY", function () {
      return TEST_CASES_ONLY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "METADATA", function () {
      return METADATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgInject", function () {
      return NgInject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgCycle", function () {
      return NgCycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deserialize", function () {
      return deserialize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deserializers", function () {
      return deserializers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTest", function () {
      return NgTest;
    });

    var TEST_CASES = new Map();
    var TEST_CASES_ONLY = new Map();
    var METADATA = new Map();

    function __decorate(protoName, arg) {
      return function (ctor, property) {
        if (!METADATA.get(ctor.constructor)) {
          METADATA.set(ctor.constructor, new Map());
        }

        var m = METADATA.get(ctor.constructor);

        if (typeof m.get(protoName) == 'undefined') {
          m.set(protoName, []);
        }

        m.get(protoName).push({
          prop: property,
          arg: arg
        });
      };
    }

    function NgInject(type) {
      return __decorate('__injectors__', type);
    }

    function NgCycle(cycle) {
      return __decorate('__cycles__', cycle);
    }

    function deserialize(type) {
      return __decorate('__deserializers__', type);
    }

    function deserializers(ctor) {
      if (!METADATA.get(ctor)) {
        return [];
      }

      return METADATA.get(ctor).get('__deserializers__');
    }

    function add_to_testcases(which, ctor, property, name) {
      if (typeof which.get(ctor.constructor) == 'undefined') {
        which.set(ctor.constructor, []);
      }

      which.get(ctor.constructor).push({
        name: name,
        method: property
      });
    }

    function NgTest(name) {
      var only = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return function (ctor, property) {
        add_to_testcases(only ? TEST_CASES_ONLY : TEST_CASES, ctor, property, name);
      };
    }
    /***/

  },

  /***/
  "./src/ts/models.ts":
  /*!**************************!*\
    !*** ./src/ts/models.ts ***!
    \**************************/

  /*! exports provided: COMBINED_ACCOUNT_ID, LogLevel, FolderType, ModelFactory, to, UserSetting, ServerSetting, HttpResponse, Server, Authentication, Folder, Contact, Contacts, Message, Messages, Action, SearchConvertor, FoldersConvertor, Attachment, Attachments, MessageBody, Account, FoldersInfoResult, SearchModel, MessageNotify, DisplayContact, MessageCompose, ContactConvertor, ReplyToBodyConvertor, ForwardBodyConvertor, MessageComposeConvertor, FileResult, UploadResult, Identity, MessageSave, MessageSaveConvertor, SaveMessageResponse, ComposedResult, FormDataSerialized, LabelValue, AppSetting, AppSettings, ALL_MAIL */

  /***/
  function srcTsModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMBINED_ACCOUNT_ID", function () {
      return COMBINED_ACCOUNT_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogLevel", function () {
      return LogLevel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderType", function () {
      return FolderType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelFactory", function () {
      return ModelFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "to", function () {
      return to;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSetting", function () {
      return UserSetting;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerSetting", function () {
      return ServerSetting;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponse", function () {
      return HttpResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Server", function () {
      return Server;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Authentication", function () {
      return Authentication;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Folder", function () {
      return Folder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contacts", function () {
      return Contacts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Messages", function () {
      return Messages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Action", function () {
      return Action;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchConvertor", function () {
      return SearchConvertor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoldersConvertor", function () {
      return FoldersConvertor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Attachment", function () {
      return Attachment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Attachments", function () {
      return Attachments;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageBody", function () {
      return MessageBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Account", function () {
      return Account;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoldersInfoResult", function () {
      return FoldersInfoResult;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchModel", function () {
      return SearchModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageNotify", function () {
      return MessageNotify;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayContact", function () {
      return DisplayContact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageCompose", function () {
      return MessageCompose;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactConvertor", function () {
      return ContactConvertor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplyToBodyConvertor", function () {
      return ReplyToBodyConvertor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForwardBodyConvertor", function () {
      return ForwardBodyConvertor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageComposeConvertor", function () {
      return MessageComposeConvertor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileResult", function () {
      return FileResult;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadResult", function () {
      return UploadResult;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Identity", function () {
      return Identity;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageSave", function () {
      return MessageSave;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageSaveConvertor", function () {
      return MessageSaveConvertor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveMessageResponse", function () {
      return SaveMessageResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComposedResult", function () {
      return ComposedResult;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormDataSerialized", function () {
      return FormDataSerialized;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelValue", function () {
      return LabelValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSetting", function () {
      return AppSetting;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALL_MAIL", function () {
      return ALL_MAIL;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dateformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dateformat */
    "./node_modules/dateformat/lib/dateformat.js");
    /* harmony import */


    var dateformat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./decorators */
    "./src/ts/decorators.ts");

    var COMBINED_ACCOUNT_ID = "-1";
    var LogLevel;

    (function (LogLevel) {
      LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
      LogLevel[LogLevel["INFO"] = 1] = "INFO";
      LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
    })(LogLevel || (LogLevel = {}));

    ;
    var FolderType;

    (function (FolderType) {
      FolderType[FolderType["Inbox"] = 1] = "Inbox";
      FolderType[FolderType["Sent"] = 2] = "Sent";
      FolderType[FolderType["Drafts"] = 3] = "Drafts";
      FolderType[FolderType["Spam"] = 4] = "Spam";
      FolderType[FolderType["Trash"] = 5] = "Trash";
      FolderType[FolderType["Other"] = 10] = "Other";
    })(FolderType || (FolderType = {}));

    ;

    var ModelFactory = /*#__PURE__*/function () {
      function ModelFactory() {
        _classCallCheck(this, ModelFactory);
      }

      _createClass(ModelFactory, null, [{
        key: "_primitive",
        value: function _primitive(obj) {
          if (typeof obj == 'boolean') {
            return obj;
          }

          if (typeof obj == 'string') {
            return obj;
          }

          if (typeof obj == 'number') {
            return obj;
          }
        }
      }, {
        key: "_create",
        value: function _create(json, type) {
          var result = new type();
          Object.keys(json).map(function (k) {
            return k.replace(/^@/g, '');
          }).forEach(function (k) {
            var d = Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserializers"])(type).find(function (d) {
              return d.prop == k;
            });
            var value = typeof json['@' + k] == 'undefined' ? json[k] : json['@' + k];

            if (!d || typeof value == undefined || value == null) {
              result[k] = value;
              return;
            }

            if (d.arg == 'date') {
              result[k] = new Date(json[k]);
              return;
            }

            if (typeof d.arg == 'function' && !!d.arg.prototype['convert']) {
              var convertor = new d.arg();
              result[k] = convertor.convert(value);
              return;
            }

            result[k] = ModelFactory.instance(value, d.arg);
          });
          return result;
        }
      }, {
        key: "instance",
        value: function instance(json, type) {
          if (typeof json == undefined || json == null) {
            return null;
          }

          if (typeof type == 'undefined') {
            if (typeof json == 'object' && !Array.isArray(json)) {
              throw Error('UNKNOWN_TYPE');
            }

            if (Array.isArray(json)) {
              return json.map(function (o) {
                return ModelFactory._primitive(o);
              });
            }

            return ModelFactory._primitive(json);
          }

          if (Array.isArray(json)) {
            return json.map(function (j) {
              return ModelFactory._create(j, type);
            });
          }

          return ModelFactory._create(json, type);
        }
      }]);

      return ModelFactory;
    }();

    function to(promise) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
        var data;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.prev = 0;
                _context27.next = 3;
                return promise;

              case 3:
                data = _context27.sent;
                return _context27.abrupt("return", [null, data]);

              case 7:
                _context27.prev = 7;
                _context27.t0 = _context27["catch"](0);
                return _context27.abrupt("return", [_context27.t0, null]);

              case 10:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, null, [[0, 7]]);
      }));
    }

    var UserSetting = function UserSetting() {
      _classCallCheck(this, UserSetting);
    };

    var ServerSetting = function ServerSetting() {
      _classCallCheck(this, ServerSetting);
    };

    var HttpResponse = function HttpResponse() {
      _classCallCheck(this, HttpResponse);
    };

    var Server = function Server() {
      _classCallCheck(this, Server);
    };

    var Authentication = function Authentication() {
      _classCallCheck(this, Authentication);
    };

    var Folder = function Folder() {
      _classCallCheck(this, Folder);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Folder)], Folder.prototype, "SubFolders", void 0);

    var Contact = function Contact() {
      _classCallCheck(this, Contact);
    };

    var Contacts = function Contacts() {
      _classCallCheck(this, Contacts);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contact)], Contacts.prototype, "Collection", void 0);

    var Message = function Message() {
      _classCallCheck(this, Message);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], Message.prototype, "From", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], Message.prototype, "To", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], Message.prototype, "Cc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], Message.prototype, "Bcc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], Message.prototype, "ReplyTo", void 0);

    var Messages = function Messages() {
      _classCallCheck(this, Messages);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Message)], Messages.prototype, "Collection", void 0);

    var Action = function Action() {
      _classCallCheck(this, Action);
    };

    var ActionConvertor = /*#__PURE__*/function () {
      function ActionConvertor() {
        _classCallCheck(this, ActionConvertor);
      }

      _createClass(ActionConvertor, [{
        key: "convert",
        value: function convert(src) {
          var result = new Action();

          if (src['view']) {
            result.view = src['view'].url;
          }

          if (src['download']) {
            result.download = src['download'].url;
          }

          return result;
        }
      }]);

      return ActionConvertor;
    }();

    var SearchConvertor = /*#__PURE__*/function () {
      function SearchConvertor() {
        _classCallCheck(this, SearchConvertor);
      }

      _createClass(SearchConvertor, [{
        key: "_add",
        value: function _add(result, key, value) {
          if (!value) {
            return result;
          }

          return result + (result == '' ? '' : ' ') + "".concat(key, ":\"").concat(value, "\"");
        }
      }, {
        key: "_date",
        value: function _date(d) {
          if (!d) {
            return '';
          }

          return dateformat__WEBPACK_IMPORTED_MODULE_1__(d, 'yyyy.mm.dd');
        }
      }, {
        key: "convert",
        value: function convert(src) {
          var result = '';
          result = this._add(result, 'from', src.from);
          result = this._add(result, 'to', src.to);
          result = this._add(result, 'subject', src.subject);
          result = this._add(result, 'text', src.text);

          if (src.attachments) {
            result = this._add(result, 'has', 'attachments');
          }

          if (src.since || src.till) {
            result = this._add(result, 'date', "".concat(this._date(src.since), "/").concat(this._date(src.till)));
          }

          if (!result && src.all) {
            result = src.all;
          }

          result = this._add(result, 'folder', src.folder);
          return result;
        }
      }]);

      return SearchConvertor;
    }();

    var FoldersConvertor = /*#__PURE__*/function () {
      function FoldersConvertor() {
        _classCallCheck(this, FoldersConvertor);
      }

      _createClass(FoldersConvertor, [{
        key: "_addNewFolder",
        value: function _addNewFolder(x, possibleParents) {
          var parts = x.split('/');
          var name = parts[parts.length - 1];
          var f = new Folder();
          f.Id = x;
          f.Count = 0;
          f.Unread = 0;
          f.Name = name;
          f.SubFolders = [];

          if (parts.length == 1) {
            possibleParents.push(f);
            return;
          }

          var parentName = parts[parts.length - 2];
          var parent = possibleParents.find(function (p) {
            return p.Name == parentName;
          });

          if (!parent) {
            return;
          }

          parent.SubFolders.push(f);
        }
      }, {
        key: "convert",
        value: function convert(src) {
          var _this28 = this;

          if (!src) {
            return [];
          }

          var arr;

          try {
            console.log('parsing', src);
            arr = JSON.parse(src);
          } catch (_a) {
            arr = [];
          }

          arr.sort(function (a, b) {
            return a.split('/').length - b.split('/').length;
          });
          var levels = arr[arr.length - 1].split('/').length;
          var result = [];
          var tree = new Map();

          var _loop = function _loop(level) {
            var items = arr.filter(function (x) {
              return x.split('/').length == level;
            });

            if (level == 1) {
              items.forEach(function (i) {
                return _this28._addNewFolder(i, result);
              });
              tree.set(level, result);
              return "continue";
            }

            items.forEach(function (i) {
              return _this28._addNewFolder(i, tree.get(level - 1));
            });
            tree.set(level, tree.get(level - 1).map(function (x) {
              return x.SubFolders;
            }).reduce(function (acc, v) {
              return acc.concat(v);
            }, []));
          };

          for (var level = 1; level <= levels; level++) {
            var _ret = _loop(level);

            if (_ret === "continue") continue;
          }

          return result;
        }
      }]);

      return FoldersConvertor;
    }();

    var Attachment = function Attachment() {
      _classCallCheck(this, Attachment);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(ActionConvertor)], Attachment.prototype, "Actions", void 0);

    var Attachments = function Attachments() {
      _classCallCheck(this, Attachments);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Attachment)], Attachments.prototype, "Collection", void 0);

    var MessageBody = /*#__PURE__*/function (_Message) {
      _inherits(MessageBody, _Message);

      var _super11 = _createSuper(MessageBody);

      function MessageBody() {
        _classCallCheck(this, MessageBody);

        return _super11.apply(this, arguments);
      }

      return MessageBody;
    }(Message);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], MessageBody.prototype, "From", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], MessageBody.prototype, "To", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], MessageBody.prototype, "Cc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], MessageBody.prototype, "Bcc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Contacts)], MessageBody.prototype, "ReplyTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Attachments)], MessageBody.prototype, "Attachments", void 0);

    var Account = function Account() {
      _classCallCheck(this, Account);

      this.Folders$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
      this.TypesSet = false;
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Server)], Account.prototype, "Server", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(FoldersConvertor)], Account.prototype, "FoldersOrder", void 0);

    var FoldersInfoResult = function FoldersInfoResult() {
      _classCallCheck(this, FoldersInfoResult);
    };

    var SearchModel = function SearchModel() {
      _classCallCheck(this, SearchModel);
    };

    var MessageNotify = function MessageNotify() {
      _classCallCheck(this, MessageNotify);
    };

    var DisplayContact = /*#__PURE__*/function (_Contact) {
      _inherits(DisplayContact, _Contact);

      var _super12 = _createSuper(DisplayContact);

      function DisplayContact() {
        _classCallCheck(this, DisplayContact);

        return _super12.apply(this, arguments);
      }

      return DisplayContact;
    }(Contact);

    var MessageCompose = function MessageCompose() {
      _classCallCheck(this, MessageCompose);

      this.DraftInfo = [];
    };

    var ContactConvertor = /*#__PURE__*/function () {
      function ContactConvertor() {
        _classCallCheck(this, ContactConvertor);
      }

      _createClass(ContactConvertor, [{
        key: "convert",
        value: function convert(src) {
          var result = ModelFactory.instance(src, DisplayContact);
          result.display = result.DisplayName || result.Email;
          return result;
        }
      }]);

      return ContactConvertor;
    }();

    var ReplyToBodyConvertor = /*#__PURE__*/function () {
      function ReplyToBodyConvertor() {
        _classCallCheck(this, ReplyToBodyConvertor);
      }

      _createClass(ReplyToBodyConvertor, [{
        key: "convert",
        value: function convert(msg) {
          var d = new Date(msg.TimeStampInUTC * 1000);
          var c = msg.From.Collection[0];
          return "\n<br/>\n<br/>\nOn ".concat(dateformat__WEBPACK_IMPORTED_MODULE_1__(d, 'ddd, mmm dd "at" HH:MM'), ", ").concat(c.DisplayName || c.Email, " wrote:\n<blockquote>").concat(msg.Html || msg.Plain, "</blockquote>\n");
        }
      }]);

      return ReplyToBodyConvertor;
    }();

    var ForwardBodyConvertor = /*#__PURE__*/function () {
      function ForwardBodyConvertor() {
        _classCallCheck(this, ForwardBodyConvertor);
      }

      _createClass(ForwardBodyConvertor, [{
        key: "_collection",
        value: function _collection(contacts) {
          if (!contacts || !Array.isArray(contacts.Collection)) {
            return '';
          }

          return contacts.Collection.map(function (c) {
            return c.DisplayName ? "".concat(c.DisplayName, " &lt;").concat(c.Email, "&gt;") : c.Email;
          }).join(', ');
        }
      }, {
        key: "convert",
        value: function convert(msg) {
          var d = new Date(msg.TimeStampInUTC * 1000);

          var cc = this._collection(msg.Cc);

          return "\n<br/>\n---- Original message ----<br/>\nFrom: ".concat(this._collection(msg.From), "<br/>\nTo: ").concat(this._collection(msg.To), "<br/>\n").concat(cc ? 'CC: ' + cc + '<br/>' : '', "\nSent: ").concat(dateformat__WEBPACK_IMPORTED_MODULE_1__(d, 'ddd, mmm dd, yyyy HH:MM'), "<br/>\nSubject: ").concat(msg.Subject, "<br/>\n<br/>\n").concat(msg.Html || msg.Plain, "\n");
        }
      }]);

      return ForwardBodyConvertor;
    }();

    var MessageComposeConvertor = /*#__PURE__*/function () {
      function MessageComposeConvertor() {
        _classCallCheck(this, MessageComposeConvertor);

        this.composeType = 'new';
        this.currentEmail = null;
        this._conv = new ContactConvertor();
      }

      _createClass(MessageComposeConvertor, [{
        key: "_convertCollection",
        value: function _convertCollection(c) {
          var _this29 = this;

          if (!c || !Array.isArray(c.Collection)) {
            return [];
          }

          return c.Collection.map(function (c) {
            return _this29._conv.convert(c);
          });
        }
      }, {
        key: "convert",
        value: function convert(src) {
          var _this30 = this;

          var result = new MessageCompose();

          if (!src) {
            result.Body = '';
            result.Subject = '';
            result.Attachments = [];
            result.Bcc = [];
            result.Cc = [];
            result.To = [];
            result.ReplyTo = [];
            result.DraftInfo = [];
          } else {
            result.Body = src.Html || src.Plain;
            result.Subject = src.Subject;
            result.Attachments = src.Attachments ? src.Attachments.Collection : [];
            result.Bcc = this._convertCollection(src.Bcc);
            result.AccountID = src.AccountID;
            result.Cc = this._convertCollection(src.Cc);
            result.To = this._convertCollection(src.To);
            result.ReplyTo = this._convertCollection(src.ReplyTo);
            result.DraftInfo = src.DraftInfo;

            if (this.composeType == 'from-draft') {
              result.DraftUid = src.Uid;
            }

            if (['reply', 'reply-all'].indexOf(this.composeType) != -1) {
              result.To = this._convertCollection(src.From);

              if (this.composeType == 'reply-all') {
                result.To = result.To.concat(this._convertCollection(src.To).filter(function (c) {
                  return c.Email != _this30.currentEmail;
                }));
                result.Cc = this._convertCollection(src.Cc).filter(function (c) {
                  return c.Email != _this30.currentEmail;
                });
              }

              var conv = new ReplyToBodyConvertor();
              result.Body = conv.convert(src);
              result.Attachments = [];
              result.Subject = "Re: ".concat(result.Subject);
              result.InReplyTo = src.MessageId;

              if (!result.DraftInfo || !Array.isArray(result.DraftInfo) || result.DraftInfo.length == 0) {
                result.DraftInfo = [this.composeType, src.Uid, src.Folder];
              }
            }

            if (this.composeType == 'forward') {
              result.To = [];
              result.Cc = [];
              result.References = " ".concat(src.MessageId);
              result.InReplyTo = src.MessageId;

              var _conv2 = new ForwardBodyConvertor();

              result.Body = _conv2.convert(src);
              result.Subject = "Fwd: ".concat(src.Subject);

              if (!result.DraftInfo || !Array.isArray(result.DraftInfo) || result.DraftInfo.length == 0) {
                result.DraftInfo = ["forward", src.Uid, src.Folder];
              }
            }
          }

          return result;
        }
      }]);

      return MessageComposeConvertor;
    }();

    var FileResult = function FileResult() {
      _classCallCheck(this, FileResult);
    };

    var UploadResult = function UploadResult() {
      _classCallCheck(this, UploadResult);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(Attachment)], UploadResult.prototype, "Attachment", void 0);

    var Identity = function Identity() {
      _classCallCheck(this, Identity);
    };

    var MessageSave = function MessageSave() {
      _classCallCheck(this, MessageSave);

      this.FetcherID = '';
      this.DraftInfo = [];
      this.Importance = 3;
      this.SendReadingConfirmation = false;
      this.References = '';
      this.Sensitivity = 0;
    };

    var MessageSaveConvertor = /*#__PURE__*/function () {
      function MessageSaveConvertor() {
        _classCallCheck(this, MessageSaveConvertor);
      }

      _createClass(MessageSaveConvertor, [{
        key: "_mapCollection",
        value: function _mapCollection(arr) {
          return arr.map(function (a) {
            return a.DisplayName ? "".concat(a.DisplayName, " <").concat(a.Email, ">") : a.Email;
          }).join(",");
        }
      }, {
        key: "convert",
        value: function convert(src) {
          var result = new MessageSave();
          result.To = this._mapCollection(src.To);
          result.Cc = this._mapCollection(src.Cc);
          result.Bcc = this._mapCollection(src.Bcc);
          result.Subject = src.Subject;
          result.DraftUid = src.DraftUid;
          result.DraftInfo = src.DraftInfo;
          result.Text = src.Body;
          result.IsHtml = true;
          result.Attachments = src.Attachments.reduce(function (acc, v) {
            acc[v.TempName] = [v.FileName, "", "0", "0", ""];
            return acc;
          }, {});
          result.InReplyTo = src.InReplyTo;
          result.References = src.References;
          return result;
        }
      }]);

      return MessageSaveConvertor;
    }();

    var SaveMessageResponse = function SaveMessageResponse() {
      _classCallCheck(this, SaveMessageResponse);
    };

    var ComposedResult = function ComposedResult() {
      _classCallCheck(this, ComposedResult);
    };

    var FormDataSerialized = function FormDataSerialized() {
      _classCallCheck(this, FormDataSerialized);
    };

    var LabelValue = function LabelValue() {
      _classCallCheck(this, LabelValue);
    };

    var AppSetting = function AppSetting() {
      _classCallCheck(this, AppSetting);
    };

    var AppSettings = function AppSettings() {
      _classCallCheck(this, AppSettings);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(ServerSetting)], AppSettings.prototype, "server", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(AppSetting)], AppSettings.prototype, "pageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(AppSetting)], AppSettings.prototype, "composeType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(AppSetting)], AppSettings.prototype, "checkEmailInterval", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(AppSetting)], AppSettings.prototype, "theme", void 0);
    var ALL_MAIL = '[Gmail]/All Mail';
    /***/
  },

  /***/
  "./src/ts/modules/main.ts":
  /*!********************************!*\
    !*** ./src/ts/modules/main.ts ***!
    \********************************/

  /*! exports provided: Main */

  /***/
  function srcTsModulesMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Main", function () {
      return Main;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/web-intent/ngx */
    "./node_modules/@ionic-native/web-intent/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
    /* harmony import */


    var primeng_blockui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/blockui */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-blockui.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/chips */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chips.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! primeng/inputtextarea */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js");
    /* harmony import */


    var primeng_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! primeng/menu */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menu.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-message.js");
    /* harmony import */


    var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! primeng/overlaypanel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-overlaypanel.js");
    /* harmony import */


    var primeng_panel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! primeng/panel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
    /* harmony import */


    var primeng_sidebar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! primeng/sidebar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! primeng/toolbar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toolbar.js");
    /* harmony import */


    var primeng_tree__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! primeng/tree */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tree.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _components_attachments__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ../components/attachments */
    "./src/ts/components/attachments.ts");
    /* harmony import */


    var _components_avatar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ../components/avatar */
    "./src/ts/components/avatar.ts");
    /* harmony import */


    var _components_compose__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ../components/compose */
    "./src/ts/components/compose.ts");
    /* harmony import */


    var _components_editor__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ../components/editor */
    "./src/ts/components/editor.ts");
    /* harmony import */


    var _components_folders_list__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ../components/folders-list */
    "./src/ts/components/folders-list.ts");
    /* harmony import */


    var _components_loading__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ../components/loading */
    "./src/ts/components/loading.ts");
    /* harmony import */


    var _components_message__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ../components/message */
    "./src/ts/components/message.ts");
    /* harmony import */


    var _components_messages_list__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ../components/messages-list */
    "./src/ts/components/messages-list.ts");
    /* harmony import */


    var _pages_home__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ../pages/home */
    "./src/ts/pages/home.ts");
    /* harmony import */


    var _pages_main__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ../pages/main */
    "./src/ts/pages/main.ts");
    /* harmony import */


    var _pages_playground__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ../pages/playground */
    "./src/ts/pages/playground.ts");
    /* harmony import */


    var _pages_settings__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ../pages/settings */
    "./src/ts/pages/settings.ts");
    /* harmony import */


    var _pipes__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ../pipes */
    "./src/ts/pipes.ts");
    /* harmony import */


    var _routing__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ../routing */
    "./src/ts/routing.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _services_contacts__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ../services/contacts */
    "./src/ts/services/contacts.ts");
    /* harmony import */


    var _services_file__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ../services/file */
    "./src/ts/services/file.ts");
    /* harmony import */


    var _services_layout__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ../services/layout */
    "./src/ts/services/layout.ts");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ../services/mails */
    "./src/ts/services/mails.ts");
    /* harmony import */


    var _services_navigation__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ../services/navigation */
    "./src/ts/services/navigation.ts");
    /* harmony import */


    var _services_route_reuse__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ../services/route-reuse */
    "./src/ts/services/route-reuse.ts");
    /* harmony import */


    var _services_settings__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ../services/settings */
    "./src/ts/services/settings.ts");
    /* harmony import */


    var _services_store__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ../services/store */
    "./src/ts/services/store.ts");
    /* harmony import */


    var _services_background__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ../services/background */
    "./src/ts/services/background.ts");
    /* harmony import */


    var _nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ../nextcloud/nextcloud */
    "./src/ts/nextcloud/nextcloud.ts");
    /* harmony import */


    var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! primeng/dynamicdialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
    /* harmony import */


    var _nextcloud_webdav__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ../nextcloud/webdav */
    "./src/ts/nextcloud/webdav.ts");
    /* harmony import */


    var _nextcloud_filepick__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ../nextcloud/filepick */
    "./src/ts/nextcloud/filepick.ts");
    /* harmony import */


    var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ngx-pinch-zoom */
    "./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js");
    /* harmony import */


    var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! primeng/splitbutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-splitbutton.js");

    var Main = function Main(i) {
      _classCallCheck(this, Main);

      _base__WEBPACK_IMPORTED_MODULE_32__["Statics"].injector = i;
    };

    Main.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    Main = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_main__WEBPACK_IMPORTED_MODULE_42__["Main"], _pages_home__WEBPACK_IMPORTED_MODULE_41__["Home"], _pages_settings__WEBPACK_IMPORTED_MODULE_44__["Settings"], _components_loading__WEBPACK_IMPORTED_MODULE_38__["Loading"], _pages_playground__WEBPACK_IMPORTED_MODULE_43__["Playground"], _components_folders_list__WEBPACK_IMPORTED_MODULE_37__["FoldersList"], _pipes__WEBPACK_IMPORTED_MODULE_45__["FoldersTree"], _components_messages_list__WEBPACK_IMPORTED_MODULE_40__["MessagesList"], _pipes__WEBPACK_IMPORTED_MODULE_45__["MessageDate"], _pipes__WEBPACK_IMPORTED_MODULE_45__["MessageFrom"], _pipes__WEBPACK_IMPORTED_MODULE_45__["FolderLabel"], _components_message__WEBPACK_IMPORTED_MODULE_39__["Message"], _components_avatar__WEBPACK_IMPORTED_MODULE_34__["Avatar"], _pipes__WEBPACK_IMPORTED_MODULE_45__["AvatarText"], _pipes__WEBPACK_IMPORTED_MODULE_45__["AvatarColor"], _pipes__WEBPACK_IMPORTED_MODULE_45__["MessageFromTxt"], _pipes__WEBPACK_IMPORTED_MODULE_45__["MessageFromTxtFull"], _pipes__WEBPACK_IMPORTED_MODULE_45__["ContactsListTxt"], _pipes__WEBPACK_IMPORTED_MODULE_45__["ContactsArray"], _pipes__WEBPACK_IMPORTED_MODULE_45__["AsHtml"], _pipes__WEBPACK_IMPORTED_MODULE_45__["AttachmentsList"], _pipes__WEBPACK_IMPORTED_MODULE_45__["HumanFileSize"], _pipes__WEBPACK_IMPORTED_MODULE_45__["FileIconPipe"], _components_compose__WEBPACK_IMPORTED_MODULE_35__["Compose"], _components_attachments__WEBPACK_IMPORTED_MODULE_33__["Attachments"], _components_editor__WEBPACK_IMPORTED_MODULE_36__["Editor"], _pipes__WEBPACK_IMPORTED_MODULE_45__["CurrentEmail"], _pipes__WEBPACK_IMPORTED_MODULE_45__["BorderRight"], _pipes__WEBPACK_IMPORTED_MODULE_45__["AccountToContact"], _pipes__WEBPACK_IMPORTED_MODULE_45__["IsCombinedAccount"], _pipes__WEBPACK_IMPORTED_MODULE_45__["Count"], _nextcloud_filepick__WEBPACK_IMPORTED_MODULE_60__["Filepick"], _pipes__WEBPACK_IMPORTED_MODULE_45__["HasArchive"], _pipes__WEBPACK_IMPORTED_MODULE_45__["FoldersFlatList"], _pipes__WEBPACK_IMPORTED_MODULE_45__["IsOfType"]],
      entryComponents: [_components_loading__WEBPACK_IMPORTED_MODULE_38__["Loading"], _nextcloud_filepick__WEBPACK_IMPORTED_MODULE_60__["Filepick"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_27__["SidebarModule"], primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_30__["ToolbarModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_26__["PanelModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_message__WEBPACK_IMPORTED_MODULE_24__["MessageModule"], primeng_blockui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_31__["TreeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routing__WEBPACK_IMPORTED_MODULE_46__["routes"], {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadAllModules"],
        useHash: true
      }), primeng_table__WEBPACK_IMPORTED_MODULE_28__["TableModule"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_25__["OverlayPanelModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_16__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__["CheckboxModule"], primeng_chips__WEBPACK_IMPORTED_MODULE_18__["ChipsModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_29__["ToastModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_22__["InputTextareaModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_23__["MenuModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_58__["DynamicDialogModule"], ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_61__["PinchZoomModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_62__["SplitButtonModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _services_settings__WEBPACK_IMPORTED_MODULE_54__["Settings"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], _services_api__WEBPACK_IMPORTED_MODULE_47__["Api"], _services_contacts__WEBPACK_IMPORTED_MODULE_48__["Contacts"], _services_layout__WEBPACK_IMPORTED_MODULE_50__["Layout"], _services_navigation__WEBPACK_IMPORTED_MODULE_52__["Navigation"], _services_store__WEBPACK_IMPORTED_MODULE_55__["Store"], _services_mails__WEBPACK_IMPORTED_MODULE_51__["Mails"], primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"], _services_file__WEBPACK_IMPORTED_MODULE_49__["FileService"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
        useClass: _services_route_reuse__WEBPACK_IMPORTED_MODULE_53__["DefaultRouteReuseStrategy"]
      }, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"], _services_background__WEBPACK_IMPORTED_MODULE_56__["Background"], _nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_57__["Nextcloud"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_58__["DialogService"], _nextcloud_webdav__WEBPACK_IMPORTED_MODULE_59__["Webdav"], _ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_10__["WebIntent"]],
      bootstrap: [_pages_main__WEBPACK_IMPORTED_MODULE_42__["Main"]]
    })], Main);
    /***/
  },

  /***/
  "./src/ts/nextcloud/filepick.scss":
  /*!****************************************!*\
    !*** ./src/ts/nextcloud/filepick.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcTsNextcloudFilepickScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nc-filepick .ui-tree {\n  width: 100%;\n  overflow-y: auto;\n  min-width: 300px;\n}\nnc-filepick p-tree {\n  width: 100%;\n}\nnc-filepick .content {\n  overflow-y: auto;\n  max-height: 400px;\n  height: 400px;\n}\nnc-filepick .flex {\n  display: flex;\n}\nnc-filepick .file {\n  font-size: 20px;\n}\nnc-filepick .selected {\n  background-color: #007ad9;\n  color: white;\n}\nnc-filepick .size {\n  text-align: right;\n}\n.ui-dialog-maximized .ui-tree {\n  height: calc(100vh - 140px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpeGEvcHJvZ3JhbXMvYWZ0ZXJsb2dpYy1jbGllbnQvc3JjL3RzL25leHRjbG91ZC9maWxlcGljay5zY3NzIiwic3JjL3RzL25leHRjbG91ZC9maWxlcGljay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRElFO0VBQ0UsV0FBQTtBQ0ZKO0FES0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0FDSko7QURPRTtFQUNFLGVBQUE7QUNMSjtBRFFFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDTko7QURTRTtFQUNFLGlCQUFBO0FDUEo7QURXQTtFQUNFLHNDQUFBO0FDUkYiLCJmaWxlIjoic3JjL3RzL25leHRjbG91ZC9maWxlcGljay5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmMtZmlsZXBpY2sge1xuICAudWktdHJlZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG5cblxuICBwLXRyZWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuXG4gIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmZpbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FkOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuc2l6ZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cblxuLnVpLWRpYWxvZy1tYXhpbWl6ZWQgLnVpLXRyZWUge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCkgIWltcG9ydGFudDtcbn1cbiIsIm5jLWZpbGVwaWNrIC51aS10cmVlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5uYy1maWxlcGljayBwLXRyZWUge1xuICB3aWR0aDogMTAwJTtcbn1cbm5jLWZpbGVwaWNrIC5jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG5uYy1maWxlcGljayAuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5uYy1maWxlcGljayAuZmlsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbm5jLWZpbGVwaWNrIC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdhZDk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm5jLWZpbGVwaWNrIC5zaXplIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi51aS1kaWFsb2ctbWF4aW1pemVkIC51aS10cmVlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQwcHgpICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/ts/nextcloud/filepick.ts":
  /*!**************************************!*\
    !*** ./src/ts/nextcloud/filepick.ts ***!
    \**************************************/

  /*! exports provided: FilepickInstance, Filepick */

  /***/
  function srcTsNextcloudFilepickTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilepickInstance", function () {
      return FilepickInstance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Filepick", function () {
      return Filepick;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utils */
    "./src/ts/nextcloud/utils.ts");
    /* harmony import */


    var _webdav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./webdav */
    "./src/ts/nextcloud/webdav.ts");

    var FilepickInstance = function FilepickInstance() {
      _classCallCheck(this, FilepickInstance);
    };

    var Filepick = /*#__PURE__*/function (_base__WEBPACK_IMPORT8) {
      _inherits(Filepick, _base__WEBPACK_IMPORT8);

      var _super13 = _createSuper(Filepick);

      function Filepick() {
        var _this31;

        _classCallCheck(this, Filepick);

        _this31 = _super13.call(this);
        _this31.path = '/';
        _this31.type = 'file';
        _this31.choose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this31._loading = true;
        _this31._files = [];
        _this31._selection = [];
        FilepickInstance.instance = _assertThisInitialized(_this31);
        return _this31;
      }

      _createClass(Filepick, [{
        key: "_initMe",
        value: function _initMe() {
          this._load();
        }
      }, {
        key: "_results",
        value: function _results(files) {
          var _this32 = this;

          var result = files.map(function (f) {
            return _utils__WEBPACK_IMPORTED_MODULE_4__["NextcloudUtils"].toTreeNode(f, _this32.type == 'file');
          });

          if (this.type == 'file') {
            return result;
          }

          return result.filter(function (f) {
            return !f.leaf;
          });
        }
      }, {
        key: "_load",
        value: function _load(node) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var path, result;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    if (!(node && node.children)) {
                      _context28.next = 3;
                      break;
                    }

                    node.expanded = true;
                    return _context28.abrupt("return");

                  case 3:
                    path = node ? node.data.filename : this.path;
                    this._loading = true;
                    _context28.next = 7;
                    return this._webdav.getFiles(path);

                  case 7:
                    result = _context28.sent;

                    if (!node) {
                      this._files = this._results(result);
                    } else {
                      node.children = this._results(result);
                    }

                    this._loading = false;

                  case 10:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "_select",
        value: function _select(i, ev) {
          if (i.data.type == 'directory') {
            this._load(i);

            return;
          }

          if (!ev.ctrlKey) {
            this._files.forEach(function (f) {
              return f.partialSelected = false;
            });

            this._selection = [];
          }

          i.partialSelected = true;

          this._selection.push(i);

          console.log('selected is now', this._selection);
        }
      }, {
        key: "_choose",
        value: function _choose() {
          var _this33 = this;

          var selection = this._selection ? Array.isArray(this._selection) ? this._selection : [this._selection] : [];
          this.choose.emit(selection.map(function (n) {
            return n.data;
          }).filter(function (f) {
            return f.type == _this33.type;
          })); // this.choose.emit(this._selection.map(n => n.data));
        }
      }]);

      return Filepick;
    }(_base__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Filepick.prototype, "path", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Filepick.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Filepick.prototype, "choose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_webdav__WEBPACK_IMPORTED_MODULE_5__["Webdav"])], Filepick.prototype, "_webdav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgCycle"])('init')], Filepick.prototype, "_initMe", null);
    Filepick = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'nc-filepick',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filepick.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/ts/nextcloud/filepick.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filepick.scss */
      "./src/ts/nextcloud/filepick.scss"))["default"]]
    })], Filepick);
    /***/
  },

  /***/
  "./src/ts/nextcloud/filepicker.ts":
  /*!****************************************!*\
    !*** ./src/ts/nextcloud/filepicker.ts ***!
    \****************************************/

  /*! exports provided: FilePickerType, FilePicker, FilePickerBuilder, getFilePickerBuilder */

  /***/
  function srcTsNextcloudFilepickerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilePickerType", function () {
      return FilePickerType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilePicker", function () {
      return FilePicker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilePickerBuilder", function () {
      return FilePickerBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFilePickerBuilder", function () {
      return getFilePickerBuilder;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models */
    "./src/ts/nextcloud/models.ts"); /// <reference types="@nextcloud/typings" />


    if (window.top && window.top['OC']) {
      window['OC'] = window.top['OC'];
    }

    var FilePickerType;

    (function (FilePickerType) {
      FilePickerType[FilePickerType["Choose"] = 1] = "Choose";
      FilePickerType[FilePickerType["Move"] = 2] = "Move";
      FilePickerType[FilePickerType["Copy"] = 3] = "Copy";
      FilePickerType[FilePickerType["CopyMove"] = 4] = "CopyMove";
    })(FilePickerType || (FilePickerType = {}));

    var FilePicker = /*#__PURE__*/function () {
      function FilePicker(title, multiSelect, mimeTypeFilter, modal, type, directoriesAllowed, path) {
        _classCallCheck(this, FilePicker);

        this.title = title;
        this.multiSelect = multiSelect;
        this.mimeTypeFiler = mimeTypeFilter;
        this.modal = modal;
        this.type = type;
        this.directoriesAllowed = directoriesAllowed;
        this.path = path;
      }

      _createClass(FilePicker, [{
        key: "pick",
        value: function pick() {
          var _this34 = this;

          return new Promise(function (res, rej) {
            OC.dialogs.filepicker(_this34.title, res, _this34.multiSelect, _this34.mimeTypeFiler, _this34.modal, _this34.type, _this34.path, {
              allowDirectoryChooser: _this34.directoriesAllowed
            });
          });
        }
      }], [{
        key: "download",
        value: function download(path) {
          return new Promise(function (resolve) {
            OC['Files'].getClient().getFileContents(path).then(function (code, content) {
              resolve(content);
            });
          });
        }
      }, {
        key: "_getPath",
        value: function _getPath(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            var _yield$Object5, _yield$Object6, err, p, name, ext, p2, idx;

            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_1__["to"])(OC['Files'].getClient().getFileInfo(path));

                  case 2:
                    _yield$Object5 = _context29.sent;
                    _yield$Object6 = _slicedToArray(_yield$Object5, 1);
                    err = _yield$Object6[0];

                    if (!err) {
                      _context29.next = 7;
                      break;
                    }

                    return _context29.abrupt("return", path);

                  case 7:
                    p = /^(.*)\.([^\.]+)$/;
                    name = path.replace(p, '$1');
                    ext = name == path ? '' : path.replace(p, '$2');
                    p2 = /^(.*)-([0-9]+)$/;
                    idx = name.replace(p2, '$2');

                    if (idx == name) {
                      idx = 1;
                    } else {
                      idx = parseInt(idx) + 1;
                    }

                    name = "".concat(name.replace(p2, '$1'), "-").concat(idx.toString());
                    return _context29.abrupt("return", FilePicker._getPath(name + (ext == '' ? '' : '.' + ext)));

                  case 15:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29);
          }));
        }
      }, {
        key: "upload",
        value: function upload(path, content) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            var _path;

            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return FilePicker._getPath(path);

                  case 2:
                    _path = _context30.sent;
                    _context30.next = 5;
                    return OC['Files'].getClient().putFileContents(_path, content);

                  case 5:
                    return _context30.abrupt("return", _path);

                  case 6:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30);
          }));
        }
      }, {
        key: "exists",
        value: function exists(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    return _context31.abrupt("return", new Promise(function (resolve) {
                      return OC['Files'].getClient().getFileInfo(path).then(function () {
                        return resolve(true);
                      }).fail(function () {
                        return resolve(false);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31);
          }));
        }
      }, {
        key: "credentials",
        get: function get() {
          var result = new _models__WEBPACK_IMPORTED_MODULE_2__["NextcloudCredentials"]();
          result.appPassword = OC['requestToken'];
          result.loginName = OC['currentUser'];
          result.server = window.location.origin;
          return result;
        }
      }, {
        key: "basePath",
        get: function get() {
          return OC['Files'].getClient().getBaseUrl();
        }
      }]);

      return FilePicker;
    }();

    var FilePickerBuilder = /*#__PURE__*/function () {
      function FilePickerBuilder(title) {
        _classCallCheck(this, FilePickerBuilder);

        this.multiSelect = false;
        this.mimeTypeFiler = [];
        this.modal = true;
        this.type = FilePickerType.Choose;
        this.directoriesAllowed = false;
        this.title = title;
      }

      _createClass(FilePickerBuilder, [{
        key: "setMultiSelect",
        value: function setMultiSelect(ms) {
          this.multiSelect = ms;
          return this;
        }
      }, {
        key: "addMimeTypeFilter",
        value: function addMimeTypeFilter(filter) {
          this.mimeTypeFiler.push(filter);
          return this;
        }
      }, {
        key: "setMimeTypeFilter",
        value: function setMimeTypeFilter(filter) {
          this.mimeTypeFiler = filter;
          return this;
        }
      }, {
        key: "setModal",
        value: function setModal(modal) {
          this.modal = modal;
          return this;
        }
      }, {
        key: "setType",
        value: function setType(type) {
          this.type = type;
          return this;
        }
      }, {
        key: "allowDirectories",
        value: function allowDirectories() {
          var allow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this.directoriesAllowed = allow;
          return this;
        }
      }, {
        key: "startAt",
        value: function startAt(path) {
          this.path = path;
          return this;
        }
      }, {
        key: "build",
        value: function build() {
          return new FilePicker(this.title, this.multiSelect, this.mimeTypeFiler, this.modal, this.type, this.directoriesAllowed, this.path);
        }
      }]);

      return FilePickerBuilder;
    }();

    function getFilePickerBuilder(title) {
      return new FilePickerBuilder(title);
    }
    /***/

  },

  /***/
  "./src/ts/nextcloud/models.ts":
  /*!************************************!*\
    !*** ./src/ts/nextcloud/models.ts ***!
    \************************************/

  /*! exports provided: NextcloudPoll, NextcloudLogin, NextcloudCredentials, NextcloudItem, NextcloudShare, NextcloudShareResult */

  /***/
  function srcTsNextcloudModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextcloudPoll", function () {
      return NextcloudPoll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextcloudLogin", function () {
      return NextcloudLogin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextcloudCredentials", function () {
      return NextcloudCredentials;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextcloudItem", function () {
      return NextcloudItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextcloudShare", function () {
      return NextcloudShare;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextcloudShareResult", function () {
      return NextcloudShareResult;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");

    var NextcloudPoll = function NextcloudPoll() {
      _classCallCheck(this, NextcloudPoll);
    };

    var NextcloudLogin = function NextcloudLogin() {
      _classCallCheck(this, NextcloudLogin);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_1__["deserialize"])(NextcloudPoll)], NextcloudLogin.prototype, "poll", void 0);

    var NextcloudCredentials = function NextcloudCredentials() {
      _classCallCheck(this, NextcloudCredentials);
    };

    var NextcloudItem = function NextcloudItem() {
      _classCallCheck(this, NextcloudItem);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_1__["deserialize"])(Date)], NextcloudItem.prototype, "lastmod", void 0);

    var NextcloudShare = function NextcloudShare() {
      _classCallCheck(this, NextcloudShare);
    };

    var NextcloudShareResult = function NextcloudShareResult() {
      _classCallCheck(this, NextcloudShareResult);
    };
    /***/

  },

  /***/
  "./src/ts/nextcloud/nextcloud.ts":
  /*!***************************************!*\
    !*** ./src/ts/nextcloud/nextcloud.ts ***!
    \***************************************/

  /*! exports provided: Nextcloud */

  /***/
  function srcTsNextcloudNextcloudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Nextcloud", function () {
      return Nextcloud;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/dynamicdialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _filepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./filepicker */
    "./src/ts/nextcloud/filepicker.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./models */
    "./src/ts/nextcloud/models.ts");
    /* harmony import */


    var _webdav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./webdav */
    "./src/ts/nextcloud/webdav.ts");
    /* harmony import */


    var _filepick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./filepick */
    "./src/ts/nextcloud/filepick.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Nextcloud_1;

    var Nextcloud = Nextcloud_1 = /*#__PURE__*/function (_base__WEBPACK_IMPORT9) {
      _inherits(Nextcloud, _base__WEBPACK_IMPORT9);

      var _super14 = _createSuper(Nextcloud);

      function Nextcloud() {
        var _this35;

        _classCallCheck(this, Nextcloud);

        _this35 = _super14.call(this);
        _this35._lastPath = '/';
        _this35._credentials = null;
        return _this35;
      }

      _createClass(Nextcloud, [{
        key: "_rest",
        value: function _rest(url, options, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            var result, json;
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    if (!options) {
                      options = {};
                    }

                    if (options && !options.headers) {
                      options.headers = {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      };
                    } //options.headers = {'OCS-APIRequest': 'true'};


                    _context32.next = 4;
                    return fetch(url, options);

                  case 4:
                    result = _context32.sent;

                    if (!(result.status < 200 || result.status >= 300)) {
                      _context32.next = 7;
                      break;
                    }

                    throw Error(result.statusText);

                  case 7:
                    _context32.next = 9;
                    return result.json();

                  case 9:
                    json = _context32.sent;
                    return _context32.abrupt("return", _models__WEBPACK_IMPORTED_MODULE_5__["ModelFactory"].instance(json, type));

                  case 11:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32);
          }));
        }
      }, {
        key: "_processLastPath",
        value: function _processLastPath(x) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    if (x.length > 0) {
                      this._lastPath = x[0].replace(/^(.*)\/[^\/]+$/g, '$1');
                    }

                  case 1:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "_pickFromFrame",
        value: function _pickFromFrame() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
            var picker, result;
            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    picker = new _filepicker__WEBPACK_IMPORTED_MODULE_6__["FilePicker"]('Choose a file', true, [], true, 1, false, this._lastPath);
                    _context34.next = 3;
                    return picker.pick();

                  case 3:
                    result = _context34.sent;
                    _context34.next = 6;
                    return this._processLastPath(result);

                  case 6:
                    return _context34.abrupt("return", result);

                  case 7:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }, {
        key: "_pickFromApp",
        value: function _pickFromApp(maximized) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'file';
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
            var options, ref;
            return regeneratorRuntime.wrap(function _callee35$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    options = {
                      modal: true,
                      header: type == 'file' ? 'Choose a file' : 'Choose a directory',
                      closable: true,
                      closeOnEscape: false,
                      styleClass: 'content'
                    };

                    if (maximized) {
                      options.styleClass = 'ui-dialog-maximized';
                    }

                    ref = this._modal.open(_filepick__WEBPACK_IMPORTED_MODULE_9__["Filepick"], options);
                    _context35.next = 5;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve);
                    });

                  case 5:
                    _filepick__WEBPACK_IMPORTED_MODULE_9__["FilepickInstance"].instance.type = type;
                    return _context35.abrupt("return", new Promise(function (resolve) {
                      _filepick__WEBPACK_IMPORTED_MODULE_9__["FilepickInstance"].instance.choose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function (files) {
                        resolve(files.map(function (f) {
                          return f.filename;
                        }));
                        ref.close();
                      });

                      ref.onDestroy.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function () {
                        return resolve([]);
                      });
                    }));

                  case 7:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee35, this);
          }));
        }
      }, {
        key: "pickFile",
        value: function pickFile() {
          var maximized = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    if (!this._isNcSetup) {
                      _context36.next = 2;
                      break;
                    }

                    return _context36.abrupt("return", this._pickFromApp(maximized));

                  case 2:
                    return _context36.abrupt("return", this._pickFromFrame());

                  case 3:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }, {
        key: "_pickFolderOC",
        value: function _pickFolderOC() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
            var picker, result;
            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    picker = new _filepicker__WEBPACK_IMPORTED_MODULE_6__["FilePicker"]('Choose a folder', false, ['*.zzz'], true, 1, true, this._lastPath);
                    _context37.next = 3;
                    return picker.pick();

                  case 3:
                    result = _context37.sent;
                    _context37.next = 6;
                    return this._processLastPath([result]);

                  case 6:
                    return _context37.abrupt("return", result);

                  case 7:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this);
          }));
        }
      }, {
        key: "_pickFolderNc",
        value: function _pickFolderNc(maximized) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
            var result;
            return regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    _context38.next = 2;
                    return this._pickFromApp(maximized, 'directory');

                  case 2:
                    result = _context38.sent;
                    return _context38.abrupt("return", result[0]);

                  case 4:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38, this);
          }));
        }
      }, {
        key: "pickFolder",
        value: function pickFolder() {
          var maximized = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
            return regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    if (!this._isNcSetup) {
                      _context39.next = 2;
                      break;
                    }

                    return _context39.abrupt("return", this._pickFolderNc(maximized));

                  case 2:
                    return _context39.abrupt("return", this._pickFolderOC());

                  case 3:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39, this);
          }));
        }
      }, {
        key: "_downloadOC",
        value: function _downloadOC(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
            var content, blob, bin;
            return regeneratorRuntime.wrap(function _callee40$(_context40) {
              while (1) {
                switch (_context40.prev = _context40.next) {
                  case 0:
                    _context40.next = 2;
                    return fetch("".concat(_filepicker__WEBPACK_IMPORTED_MODULE_6__["FilePicker"].basePath, "/").concat(path));

                  case 2:
                    content = _context40.sent;
                    _context40.next = 5;
                    return content.blob();

                  case 5:
                    blob = _context40.sent;
                    _context40.next = 8;
                    return blob.arrayBuffer();

                  case 8:
                    bin = _context40.sent;
                    return _context40.abrupt("return", bin);

                  case 10:
                  case "end":
                    return _context40.stop();
                }
              }
            }, _callee40);
          }));
        }
      }, {
        key: "_downloadApp",
        value: function _downloadApp(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
            return regeneratorRuntime.wrap(function _callee41$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    return _context41.abrupt("return", this._webdav.download(path));

                  case 1:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee41, this);
          }));
        }
      }, {
        key: "download",
        value: function download(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
            return regeneratorRuntime.wrap(function _callee42$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    if (!this._isNcSetup) {
                      _context42.next = 2;
                      break;
                    }

                    return _context42.abrupt("return", this._downloadApp(path));

                  case 2:
                    return _context42.abrupt("return", this._downloadOC(path));

                  case 3:
                  case "end":
                    return _context42.stop();
                }
              }
            }, _callee42, this);
          }));
        }
      }, {
        key: "upload",
        value: function upload(path, content) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
            return regeneratorRuntime.wrap(function _callee43$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    if (!this._isNcSetup) {
                      _context43.next = 4;
                      break;
                    }

                    _context43.next = 3;
                    return this._webdav.upload(path, content);

                  case 3:
                    return _context43.abrupt("return", path);

                  case 4:
                    return _context43.abrupt("return", _filepicker__WEBPACK_IMPORTED_MODULE_6__["FilePicker"].upload(path, content));

                  case 5:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee43, this);
          }));
        }
      }, {
        key: "_poll",
        value: function _poll(poll) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
            var _yield$Object7, _yield$Object8, err, result;

            return regeneratorRuntime.wrap(function _callee44$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    if (!(n >= 30)) {
                      _context44.next = 2;
                      break;
                    }

                    throw 'NOT_LOGGED_IN_WITHIN_30_SECONDS';

                  case 2:
                    _context44.next = 4;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_5__["to"])(this._rest(poll.endpoint, {
                      method: 'post',
                      body: "token=".concat(poll.token)
                    }, _models__WEBPACK_IMPORTED_MODULE_7__["NextcloudCredentials"]));

                  case 4:
                    _yield$Object7 = _context44.sent;
                    _yield$Object8 = _slicedToArray(_yield$Object7, 2);
                    err = _yield$Object8[0];
                    result = _yield$Object8[1];

                    if (!err) {
                      _context44.next = 12;
                      break;
                    }

                    _context44.next = 11;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, 1000);
                    });

                  case 11:
                    return _context44.abrupt("return", this._poll(poll, n + 1));

                  case 12:
                    this.credentials = result;
                    return _context44.abrupt("return", result);

                  case 14:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee44, this);
          }));
        }
      }, {
        key: "login",
        value: function login(baseUrl) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
            var loginData, a;
            return regeneratorRuntime.wrap(function _callee45$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    _context45.next = 2;
                    return this._rest("".concat(baseUrl, "/index.php/login/v2"), {
                      method: 'post'
                    }, _models__WEBPACK_IMPORTED_MODULE_7__["NextcloudLogin"]);

                  case 2:
                    loginData = _context45.sent;
                    a = document.createElement('a');
                    a.href = loginData.login;
                    a.target = '_blank';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    return _context45.abrupt("return", this._poll(loginData.poll));

                  case 10:
                  case "end":
                    return _context45.stop();
                }
              }
            }, _callee45, this);
          }));
        }
      }, {
        key: "mkdir",
        value: function mkdir(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
            return regeneratorRuntime.wrap(function _callee46$(_context46) {
              while (1) {
                switch (_context46.prev = _context46.next) {
                  case 0:
                    _context46.next = 2;
                    return this._webdav.mkdir(path);

                  case 2:
                    return _context46.abrupt("return", _context46.sent);

                  case 3:
                  case "end":
                    return _context46.stop();
                }
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "exists",
        value: function exists(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
            return regeneratorRuntime.wrap(function _callee47$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    if (!this._isNcSetup) {
                      _context47.next = 2;
                      break;
                    }

                    return _context47.abrupt("return", this._webdav.exists(path));

                  case 2:
                    return _context47.abrupt("return", _filepicker__WEBPACK_IMPORTED_MODULE_6__["FilePicker"].exists(path));

                  case 3:
                  case "end":
                    return _context47.stop();
                }
              }
            }, _callee47, this);
          }));
        }
      }, {
        key: "_shareDate",
        value: function _shareDate() {
          var d = new Date();
          d.setDate(d.getDate() + 1);
          var m = d.getMonth() + 1;
          var day = d.getDate();
          return "".concat(d.getFullYear(), "-").concat(m < 10 ? '0' : '').concat(m, "-").concat(day < 10 ? '0' : '').concat(day);
        }
      }, {
        key: "share",
        value: function share(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
            var c, params, options, result;
            return regeneratorRuntime.wrap(function _callee48$(_context48) {
              while (1) {
                switch (_context48.prev = _context48.next) {
                  case 0:
                    c = this.credentials;
                    params = {
                      path: path,
                      shareType: 3,
                      expireDate: this._shareDate()
                    };
                    options = {
                      method: 'post',
                      headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'OCS-APIRequest': 'true',
                        'Accept': 'application/json, text/plain, */*'
                      },
                      body: JSON.stringify(params)
                    };

                    if (this._isNcSetup) {
                      options.headers['Authorization'] = "Basic ".concat(btoa(c.loginName + ':' + c.appPassword));
                    }

                    _context48.next = 6;
                    return this._rest("".concat(c.server, "/ocs/v2.php/apps/files_sharing/api/v1/shares"), options, _models__WEBPACK_IMPORTED_MODULE_7__["NextcloudShareResult"]);

                  case 6:
                    result = _context48.sent;
                    return _context48.abrupt("return", result.ocs.data);

                  case 8:
                  case "end":
                    return _context48.stop();
                }
              }
            }, _callee48, this);
          }));
        }
      }, {
        key: "unshare",
        value: function unshare(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
            var c, options;
            return regeneratorRuntime.wrap(function _callee49$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    c = this.credentials;
                    options = {
                      method: 'delete',
                      headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'OCS-APIRequest': 'true',
                        'Accept': 'application/json, text/plain, */*'
                      }
                    };

                    if (this._isNcSetup) {
                      options.headers['Authorization'] = "Basic ".concat(btoa(c.loginName + ':' + c.appPassword));
                    }

                    return _context49.abrupt("return", this._rest("".concat(c.server, "/ocs/v2.php/apps/files_sharing/api/v1/shares/").concat(id), options, Object));

                  case 4:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee49, this);
          }));
        }
      }, {
        key: "credentials",
        set: function set(x) {
          this._credentials = x;

          this._webdav.init(x);
        },
        get: function get() {
          if (this._isNcSetup) {
            return this._credentials;
          }

          return _filepicker__WEBPACK_IMPORTED_MODULE_6__["FilePicker"].credentials;
        }
      }, {
        key: "_isNcSetup",
        get: function get() {
          return !!this._credentials;
        }
      }, {
        key: "isNextcloud",
        get: function get() {
          return Nextcloud_1.isOC || this._isNcSetup;
        }
      }], [{
        key: "isOC",
        get: function get() {
          return window.top && window.top['OC'];
        }
      }]);

      return Nextcloud;
    }(_base__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["NgInject"])(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"])], Nextcloud.prototype, "_modal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["NgInject"])(_webdav__WEBPACK_IMPORTED_MODULE_8__["Webdav"])], Nextcloud.prototype, "_webdav", void 0);
    Nextcloud = Nextcloud_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Nextcloud);
    /***/
  },

  /***/
  "./src/ts/nextcloud/storage.ts":
  /*!*************************************!*\
    !*** ./src/ts/nextcloud/storage.ts ***!
    \*************************************/

  /*! exports provided: Storage */

  /***/
  function srcTsNextcloudStorageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return Storage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Storage = /*#__PURE__*/function () {
      function Storage() {
        _classCallCheck(this, Storage);
      }

      _createClass(Storage, null, [{
        key: "get",
        value: function get(arg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
            var response, txt;
            return regeneratorRuntime.wrap(function _callee50$(_context50) {
              while (1) {
                switch (_context50.prev = _context50.next) {
                  case 0:
                    _context50.next = 2;
                    return fetch("".concat(Storage._url, "/").concat(arg.key));

                  case 2:
                    response = _context50.sent;
                    _context50.next = 5;
                    return response.text();

                  case 5:
                    txt = _context50.sent;
                    return _context50.abrupt("return", {
                      value: JSON.parse(txt)
                    });

                  case 7:
                  case "end":
                    return _context50.stop();
                }
              }
            }, _callee50);
          }));
        }
      }, {
        key: "set",
        value: function set(arg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
            var data;
            return regeneratorRuntime.wrap(function _callee51$(_context51) {
              while (1) {
                switch (_context51.prev = _context51.next) {
                  case 0:
                    data = new FormData();
                    data.set('key', arg.key);
                    data.set('value', arg.value);
                    _context51.next = 5;
                    return fetch("".concat(Storage._url), {
                      method: 'POST',
                      body: data
                    });

                  case 5:
                  case "end":
                    return _context51.stop();
                }
              }
            }, _callee51);
          }));
        }
      }]);

      return Storage;
    }();

    Storage._baseUrl = window.location.href.replace(/^(.*)\/js(\/index.html)?.*$/, '$1');
    Storage._url = "".concat(Storage._baseUrl, "/api/0.1/store");
    /***/
  },

  /***/
  "./src/ts/nextcloud/utils.ts":
  /*!***********************************!*\
    !*** ./src/ts/nextcloud/utils.ts ***!
    \***********************************/

  /*! exports provided: NextcloudUtils */

  /***/
  function srcTsNextcloudUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextcloudUtils", function () {
      return NextcloudUtils;
    });

    var NextcloudUtils = /*#__PURE__*/function () {
      function NextcloudUtils() {
        _classCallCheck(this, NextcloudUtils);
      }

      _createClass(NextcloudUtils, null, [{
        key: "fileIcon",
        value: function fileIcon(f) {
          var ext = f.basename.replace(/^.*\.([^\.]+)$/, '$1');

          if (ext.match(/pdf/i)) {
            return 'fa fa-file-pdf-o';
          }

          if (ext.match(/(xls|xlsx|ods)/i)) {
            return 'fa fa-file-excel-o';
          }

          if (ext.match(/(png|jpg|jpeg|bmp|gif)/i)) {
            return 'fa fa-file-image-o';
          }

          if (ext.match(/(doc|docx|odt)/i)) {
            return 'fa fa-file-word-o';
          }

          return 'fa fa-file-o';
        }
      }, {
        key: "toTreeNode",
        value: function toTreeNode(src) {
          var forFiles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return {
            label: src.basename,
            leaf: src.type == 'file',
            data: src,
            selectable: true,
            collapsedIcon: src.type == 'file' ? NextcloudUtils.fileIcon(src) : 'fa fa-folder-o',
            expandedIcon: 'fa fa-folder-open-o'
          };
        }
      }]);

      return NextcloudUtils;
    }();
    /***/

  },

  /***/
  "./src/ts/nextcloud/webdav.ts":
  /*!************************************!*\
    !*** ./src/ts/nextcloud/webdav.ts ***!
    \************************************/

  /*! exports provided: Webdav */

  /***/
  function srcTsNextcloudWebdavTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Webdav", function () {
      return Webdav;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var webdav_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! webdav/web */
    "./node_modules/webdav/web/index.js");
    /* harmony import */


    var webdav_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webdav_web__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./models */
    "./src/ts/nextcloud/models.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Webdav = /*#__PURE__*/function (_base__WEBPACK_IMPORT10) {
      _inherits(Webdav, _base__WEBPACK_IMPORT10);

      var _super15 = _createSuper(Webdav);

      function Webdav() {
        var _this36;

        _classCallCheck(this, Webdav);

        _this36 = _super15.apply(this, arguments);
        _this36._client = null;
        _this36._ready$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        return _this36;
      }

      _createClass(Webdav, [{
        key: "init",
        value: function init(credentials) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
            return regeneratorRuntime.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    if (credentials) {
                      _context52.next = 2;
                      break;
                    }

                    return _context52.abrupt("return");

                  case 2:
                    this._client = Object(webdav_web__WEBPACK_IMPORTED_MODULE_3__["createClient"])("".concat(credentials.server, "/remote.php/dav/files/").concat(credentials.loginName), {
                      username: credentials.loginName,
                      password: credentials.appPassword
                    });

                    this._ready$.next();

                  case 4:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, this);
          }));
        }
      }, {
        key: "getFiles",
        value: function getFiles(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
            var _this37 = this;

            var result;
            return regeneratorRuntime.wrap(function _callee53$(_context53) {
              while (1) {
                switch (_context53.prev = _context53.next) {
                  case 0:
                    _context53.next = 2;
                    return new Promise(function (resolve) {
                      return _this37._ready$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(resolve);
                    });

                  case 2:
                    _context53.next = 4;
                    return this._client.getDirectoryContents(path);

                  case 4:
                    result = _context53.sent;
                    result.sort(function (a, b) {
                      if (a.type == b.type) {
                        return a.basename.toLowerCase() < b.basename.toLowerCase() ? -1 : 1;
                      }

                      return a.type == 'directory' ? -1 : 1;
                    });
                    return _context53.abrupt("return", _models__WEBPACK_IMPORTED_MODULE_5__["ModelFactory"].instance(result, _models__WEBPACK_IMPORTED_MODULE_6__["NextcloudItem"]));

                  case 7:
                  case "end":
                    return _context53.stop();
                }
              }
            }, _callee53, this);
          }));
        }
      }, {
        key: "download",
        value: function download(path) {
          return this._client.getFileContents(path);
        }
      }, {
        key: "upload",
        value: function upload(path, content) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
            return regeneratorRuntime.wrap(function _callee54$(_context54) {
              while (1) {
                switch (_context54.prev = _context54.next) {
                  case 0:
                    _context54.next = 2;
                    return this._client.putFileContents(path, content, {
                      overwrite: true
                    });

                  case 2:
                  case "end":
                    return _context54.stop();
                }
              }
            }, _callee54, this);
          }));
        }
      }, {
        key: "mkdir",
        value: function mkdir(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
            return regeneratorRuntime.wrap(function _callee55$(_context55) {
              while (1) {
                switch (_context55.prev = _context55.next) {
                  case 0:
                    return _context55.abrupt("return", this._client.createDirectory(path));

                  case 1:
                  case "end":
                    return _context55.stop();
                }
              }
            }, _callee55, this);
          }));
        }
      }, {
        key: "exists",
        value: function exists(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
            return regeneratorRuntime.wrap(function _callee56$(_context56) {
              while (1) {
                switch (_context56.prev = _context56.next) {
                  case 0:
                    return _context56.abrupt("return", this._client.exists(path));

                  case 1:
                  case "end":
                    return _context56.stop();
                }
              }
            }, _callee56, this);
          }));
        }
      }, {
        key: "getFileUrl",
        value: function getFileUrl(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee57() {
            return regeneratorRuntime.wrap(function _callee57$(_context57) {
              while (1) {
                switch (_context57.prev = _context57.next) {
                  case 0:
                    return _context57.abrupt("return", this._client.getFileDownloadLink(path));

                  case 1:
                  case "end":
                    return _context57.stop();
                }
              }
            }, _callee57, this);
          }));
        }
      }, {
        key: "getStats",
        value: function getStats(path) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
            return regeneratorRuntime.wrap(function _callee58$(_context58) {
              while (1) {
                switch (_context58.prev = _context58.next) {
                  case 0:
                    return _context58.abrupt("return", this._client.stat(path));

                  case 1:
                  case "end":
                    return _context58.stop();
                }
              }
            }, _callee58, this);
          }));
        }
      }]);

      return Webdav;
    }(_base__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]);

    Webdav = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Webdav);
    /***/
  },

  /***/
  "./src/ts/pages/home.ts":
  /*!******************************!*\
    !*** ./src/ts/pages/home.ts ***!
    \******************************/

  /*! exports provided: Home */

  /***/
  function srcTsPagesHomeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home", function () {
      return Home;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _services_contacts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/contacts */
    "./src/ts/services/contacts.ts");
    /* harmony import */


    var _services_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/layout */
    "./src/ts/services/layout.ts");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/mails */
    "./src/ts/services/mails.ts");
    /* harmony import */


    var _services_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/settings */
    "./src/ts/services/settings.ts");
    /* harmony import */


    var _services_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../services/utils */
    "./src/ts/services/utils.ts");
    /* harmony import */


    var _services_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../services/navigation */
    "./src/ts/services/navigation.ts");

    var Home = /*#__PURE__*/function (_base__WEBPACK_IMPORT11) {
      _inherits(Home, _base__WEBPACK_IMPORT11);

      var _super16 = _createSuper(Home);

      function Home(_route) {
        var _this38;

        _classCallCheck(this, Home);

        _this38 = _super16.call(this);
        _this38._route = _route;
        _this38._isMobile = true;
        _this38._messages = [];
        _this38._row = [''];
        _this38._folder = 'inbox';
        _this38._selection = [];
        _this38._message = null;
        _this38._spamFolder = false;
        _this38._userMenu = [];
        _this38._compose = false;
        _this38._composer = false;
        _this38._composeType = 'new';
        _this38._toolbarVisible = false;
        _this38._composeTitle = '';
        _this38._mobileViewType = 'list';
        _this38._showSettings = false;
        _this38._themeClass = {};
        _this38._refreshing = false;

        _this38._contacts.add([]);

        return _this38;
      }

      _createClass(Home, [{
        key: "_initMe",
        value: function _initMe() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee62() {
            var _this39 = this;

            var server, theme;
            return regeneratorRuntime.wrap(function _callee62$(_context62) {
              while (1) {
                switch (_context62.prev = _context62.next) {
                  case 0:
                    console.log('init main component');
                    this.showLoading();
                    this._accounts$ = this._mails.accounts$;
                    this._isMobile = this._layout.isMobile;
                    this.connect(this._mails.currentAccount$, function (account) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee59() {
                        return regeneratorRuntime.wrap(function _callee59$(_context59) {
                          while (1) {
                            switch (_context59.prev = _context59.next) {
                              case 0:
                                this._account = account;
                                this.hideLoading();

                              case 2:
                              case "end":
                                return _context59.stop();
                            }
                          }
                        }, _callee59, this);
                      }));
                    });
                    this.connect(this._mails.refreshed$, function () {
                      return _this39._refreshing = false;
                    });
                    this.connect(this._api.sessionExpired$, function (u) {
                      _this39.alert('Session expired', "User: ".concat(u.email));

                      _this39.navigate('settings:empty');
                    });
                    this.connect(this._mails.folderChanged$, function (f) {
                      return _this39._folderNotify(f);
                    });
                    _context62.next = 10;
                    return this._settings.getServer();

                  case 10:
                    server = _context62.sent;
                    _context62.next = 13;
                    return this._settings.getTheme();

                  case 13:
                    theme = _context62.sent;
                    this._themeClass = {
                      dark: theme == 'dark'
                    };
                    this._userMenu = _services_utils__WEBPACK_IMPORTED_MODULE_12__["Utils"].buildUserMenu(server, this._onMenu.bind(this));
                    this.connect(this._route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (map) {
                      return map.has('action');
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (map) {
                      return map.get('action');
                    })), function (url) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee61() {
                        var _this40 = this;

                        var p, action, param, m;
                        return regeneratorRuntime.wrap(function _callee61$(_context61) {
                          while (1) {
                            switch (_context61.prev = _context61.next) {
                              case 0:
                                p = /^(.*):(.*)$/g;

                                if (url.match(p)) {
                                  _context61.next = 3;
                                  break;
                                }

                                return _context61.abrupt("return");

                              case 3:
                                action = url.replace(p, '$1');
                                param = url.replace(p, '$2');

                                if (!(action == 'mailto')) {
                                  _context61.next = 9;
                                  break;
                                }

                                this._newMessage('new', undefined, [_models__WEBPACK_IMPORTED_MODULE_6__["ModelFactory"].instance({
                                  Email: param
                                }, _models__WEBPACK_IMPORTED_MODULE_6__["Contact"])]);

                                _context61.next = 19;
                                break;

                              case 9:
                                if (!(action == 'readmail')) {
                                  _context61.next = 18;
                                  break;
                                }

                                if (this._list) {
                                  _context61.next = 12;
                                  break;
                                }

                                return _context61.abrupt("return");

                              case 12:
                                m = this._list.rows.find(function (m) {
                                  return m.Uid == param;
                                });

                                if (m) {
                                  _context61.next = 15;
                                  break;
                                }

                                return _context61.abrupt("return");

                              case 15:
                                this._zone.run(function () {
                                  return _this40._messageNotify(m);
                                });

                                _context61.next = 19;
                                break;

                              case 18:
                                if (action == 'settings') {
                                  this._zone.run(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this40, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
                                      var _this41 = this;

                                      return regeneratorRuntime.wrap(function _callee60$(_context60) {
                                        while (1) {
                                          switch (_context60.prev = _context60.next) {
                                            case 0:
                                              if (!(param == 'empty')) {
                                                _context60.next = 5;
                                                break;
                                              }

                                              this.hideLoading();
                                              this._showSettings = true;
                                              this._mobileViewType = 'settings';
                                              return _context60.abrupt("return");

                                            case 5:
                                              this._showSettings = false;
                                              this._mobileViewType = 'list';

                                              this._router.navigateByUrl('').then(function () {
                                                _this41.softRefresh();
                                              });

                                            case 8:
                                            case "end":
                                              return _context60.stop();
                                          }
                                        }
                                      }, _callee60, this);
                                    }));
                                  });
                                }

                              case 19:
                              case "end":
                                return _context61.stop();
                            }
                          }
                        }, _callee61, this);
                      }));
                    });
                    this.connect(this._nav.backButton$, function () {
                      return _this39._toolbarBack();
                    });

                  case 18:
                  case "end":
                    return _context62.stop();
                }
              }
            }, _callee62, this);
          }));
        }
      }, {
        key: "_folderNotify",
        value: function _folderNotify(f) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
            return regeneratorRuntime.wrap(function _callee63$(_context63) {
              while (1) {
                switch (_context63.prev = _context63.next) {
                  case 0:
                    this._folder = f.Id;
                    this._message = null;
                    this._spamFolder = this._api.isSpamFolder(f);
                    this._toolbarVisible = false;

                  case 4:
                  case "end":
                    return _context63.stop();
                }
              }
            }, _callee63, this);
          }));
        }
      }, {
        key: "_messageNotify",
        value: function _messageNotify(m) {
          console.log('message notify');

          this._list.unselect();

          this._message = m;
          this._mobileViewType = 'message';
        }
      }, {
        key: "_selectionChanged",
        value: function _selectionChanged(messages) {
          console.log('selection changed with', messages);
          this._selection = messages;
        }
      }, {
        key: "_actionIcon",
        value: function _actionIcon(which) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee64() {
            return regeneratorRuntime.wrap(function _callee64$(_context64) {
              while (1) {
                switch (_context64.prev = _context64.next) {
                  case 0:
                    if (!(this._selection.length == 0 && !this._message)) {
                      _context64.next = 2;
                      break;
                    }

                    return _context64.abrupt("return");

                  case 2:
                    this.showLoading();
                    _context64.next = 5;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_6__["to"])(this._action(which));

                  case 5:
                    if (this._message) {
                      this._toolbarBack();
                    }

                    this.hideLoading();

                  case 7:
                  case "end":
                    return _context64.stop();
                }
              }
            }, _callee64, this);
          }));
        }
      }, {
        key: "_action",
        value: function _action(which) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
            var _this42 = this;

            var row, arr, err, _yield$Object9, _yield$Object10, _yield$Object11, _yield$Object12, _yield$Object13, _yield$Object14, _yield$Object15, _yield$Object16;

            return regeneratorRuntime.wrap(function _callee65$(_context65) {
              while (1) {
                switch (_context65.prev = _context65.next) {
                  case 0:
                    if (this._message) {
                      row = this._list.rows.find(function (r) {
                        return r.Uid == _this42._message.Uid;
                      });
                    }

                    arr = this._selection.length > 0 ? this._selection : [row || this._message];
                    err = null;

                    if (!(which == 'mark-read' || which == 'mark-unread')) {
                      _context65.next = 9;
                      break;
                    }

                    _context65.next = 6;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_6__["to"])(this._api.markRead(this._account, this._folder, arr, which == 'mark-read'));

                  case 6:
                    _yield$Object9 = _context65.sent;
                    _yield$Object10 = _slicedToArray(_yield$Object9, 1);
                    err = _yield$Object10[0];

                  case 9:
                    if (!(which == 'delete')) {
                      _context65.next = 16;
                      break;
                    }

                    _context65.next = 12;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_6__["to"])(this._api.moveOrDeleteMessages(this._account, this._folder, arr));

                  case 12:
                    _yield$Object11 = _context65.sent;
                    _yield$Object12 = _slicedToArray(_yield$Object11, 1);
                    err = _yield$Object12[0];

                    if (!err) {
                      if (arr.indexOf(this._message) != -1) {
                        this._message = null;
                        this._mobileViewType = 'list';
                      }
                    }

                  case 16:
                    if (!(which == 'spam')) {
                      _context65.next = 22;
                      break;
                    }

                    _context65.next = 19;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_6__["to"])(this._api.markSpam(this._account, this._folder, arr));

                  case 19:
                    _yield$Object13 = _context65.sent;
                    _yield$Object14 = _slicedToArray(_yield$Object13, 1);
                    err = _yield$Object14[0];

                  case 22:
                    if (!(which == 'archive')) {
                      _context65.next = 28;
                      break;
                    }

                    _context65.next = 25;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_6__["to"])(this._api.archive(this._account, this._folder, arr));

                  case 25:
                    _yield$Object15 = _context65.sent;
                    _yield$Object16 = _slicedToArray(_yield$Object15, 1);
                    err = _yield$Object16[0];

                  case 28:
                    if (err) {
                      this.alert('Error performing the action', err.message);
                    }

                  case 29:
                  case "end":
                    return _context65.stop();
                }
              }
            }, _callee65, this);
          }));
        }
      }, {
        key: "_refresh",
        value: function _refresh() {
          this._refreshing = true;

          this._mails.refresh$.emit();
        }
      }, {
        key: "_changeAccount",
        value: function _changeAccount(email) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
            return regeneratorRuntime.wrap(function _callee66$(_context66) {
              while (1) {
                switch (_context66.prev = _context66.next) {
                  case 0:
                    this._toolbarVisible = false;
                    this._account = null;
                    this.showLoading();
                    _context66.next = 5;
                    return this._mails.setCurrentAccount(email.match(/,/) ? _models__WEBPACK_IMPORTED_MODULE_6__["COMBINED_ACCOUNT_ID"] : email);

                  case 5:
                    this._message = null;
                    this.hideLoading();

                  case 7:
                  case "end":
                    return _context66.stop();
                }
              }
            }, _callee66, this);
          }));
        }
      }, {
        key: "_onMenu",
        value: function _onMenu(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee67() {
            return regeneratorRuntime.wrap(function _callee67$(_context67) {
              while (1) {
                switch (_context67.prev = _context67.next) {
                  case 0:
                    if (!(item.id != 'settings')) {
                      _context67.next = 4;
                      break;
                    }

                    _context67.next = 3;
                    return this._changeAccount(item.id);

                  case 3:
                    return _context67.abrupt("return");

                  case 4:
                    this._showSettings = true;

                  case 5:
                  case "end":
                    return _context67.stop();
                }
              }
            }, _callee67, this);
          }));
        }
      }, {
        key: "_newMessage",
        value: function _newMessage(type, msg, to) {
          var _this43 = this;

          var title = type == 'new' ? 'Compose new message' : ['reply', 'reply-all'].indexOf(type) != -1 ? 'Reply to message' : 'Forward message';
          this._composer = true;
          this._composeType = type;
          this._composeTitle = title;
          this._composeMessage = msg;
          this._mobileViewType = 'compose';

          if (type == 'new') {
            this._composeTo = to;
          }

          setTimeout(function () {
            _this43.hideLoading();

            _this43._compose = true;
          });
        }
      }, {
        key: "_hideCompose",
        value: function _hideCompose(ev) {
          var _this44 = this;

          this._compose = false;
          this._composeTo = [];
          this._composeMessage = null;
          this._mobileViewType = 'list';
          setTimeout(function () {
            return _this44._composer = false;
          });

          if (ev == 'sent') {
            this._refresh();
          }
        }
      }, {
        key: "_toolbarBack",
        value: function _toolbarBack() {
          this._message = null;

          this._hideCompose('cancel');

          if (['', '/'].indexOf(this._router.url) == -1) {
            this.navigate('');
          }

          if (this._layout.isMobile) {
            this._list.unselect();
          }
        }
      }, {
        key: "_msgBodyNotify",
        value: function _msgBodyNotify(ev) {
          this._newMessage(ev.type, ev.message, [ev.contact]);
        }
      }, {
        key: "_settingsClick",
        value: function _settingsClick() {
          this._mobileViewType = 'settings';
          this._toolbarVisible = false;
        }
      }]);

      return Home;
    }(_base__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]);

    Home.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_7__["Api"])], Home.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_layout__WEBPACK_IMPORTED_MODULE_9__["Layout"])], Home.prototype, "_layout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_mails__WEBPACK_IMPORTED_MODULE_10__["Mails"])], Home.prototype, "_mails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_settings__WEBPACK_IMPORTED_MODULE_11__["Settings"])], Home.prototype, "_settings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_contacts__WEBPACK_IMPORTED_MODULE_8__["Contacts"])], Home.prototype, "_contacts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])], Home.prototype, "_zone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_navigation__WEBPACK_IMPORTED_MODULE_13__["Navigation"])], Home.prototype, "_nav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagesList', {
      "static": false
    })], Home.prototype, "_list", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgCycle"])('init')], Home.prototype, "_initMe", null);
    Home = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/home.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/home.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/home.scss */
      "./src/assets/scss/home.scss"))["default"]]
    })], Home);
    /***/
  },

  /***/
  "./src/ts/pages/main.ts":
  /*!******************************!*\
    !*** ./src/ts/pages/main.ts ***!
    \******************************/

  /*! exports provided: Main */

  /***/
  function srcTsPagesMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Main", function () {
      return Main;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _services_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/layout */
    "./src/ts/services/layout.ts");
    /* harmony import */


    var _ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/web-intent/ngx */
    "./node_modules/@ionic-native/web-intent/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Main = /*#__PURE__*/function (_base__WEBPACK_IMPORT12) {
      _inherits(Main, _base__WEBPACK_IMPORT12);

      var _super17 = _createSuper(Main);

      function Main() {
        var _this45;

        _classCallCheck(this, Main);

        _this45 = _super17.call(this);
        _this45._mobile = true;
        _this45._ready = false;

        _this45._initializeApp();

        _this45.connect(_this45._api.ready$, function (result) {
          if (!result) {
            _this45.navigate('settings:empty');

            _this45._ready = true;
            return;
          }

          _this45._ready = true;
        });

        return _this45;
      }

      _createClass(Main, [{
        key: "_initializeApp",
        value: function _initializeApp() {
          var _this46 = this;

          this._platform.ready().then(function () {
            _this46._mobile = _this46._layout.isMobile;

            _this46._splash.hide();

            if (_this46._platform.is('desktop')) {
              return;
            }

            _this46.connect(_this46._intent.onIntent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (i) {
              return i.action == _this46._intent.ACTION_VIEW && !!i['data'];
            })), function (i) {
              return _this46._zone.run(function () {
                return _this46.navigate(i['data']);
              });
            });
          });
        }
      }]);

      return Main;
    }(_base__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"])], Main.prototype, "_platform", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"])], Main.prototype, "_splash", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_layout__WEBPACK_IMPORTED_MODULE_7__["Layout"])], Main.prototype, "_layout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_6__["Api"])], Main.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_8__["WebIntent"])], Main.prototype, "_intent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])], Main.prototype, "_zone", void 0);
    Main = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'main-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/main.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/main.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/main.scss */
      "./src/assets/scss/main.scss"))["default"]]
    })], Main);
    /***/
  },

  /***/
  "./src/ts/pages/playground.ts":
  /*!************************************!*\
    !*** ./src/ts/pages/playground.ts ***!
    \************************************/

  /*! exports provided: Playground */

  /***/
  function srcTsPagesPlaygroundTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Playground", function () {
      return Playground;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/mails */
    "./src/ts/services/mails.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");

    var Playground = /*#__PURE__*/function (_base__WEBPACK_IMPORT13) {
      _inherits(Playground, _base__WEBPACK_IMPORT13);

      var _super18 = _createSuper(Playground);

      function Playground() {
        var _this47;

        _classCallCheck(this, Playground);

        _this47 = _super18.apply(this, arguments);
        _this47._message = null;
        _this47._body = null;
        return _this47;
      }

      _createClass(Playground, [{
        key: "_initMe",
        value: function _initMe() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee69() {
            var _this48 = this;

            return regeneratorRuntime.wrap(function _callee69$(_context69) {
              while (1) {
                switch (_context69.prev = _context69.next) {
                  case 0:
                    this._contact = _models__WEBPACK_IMPORTED_MODULE_4__["ModelFactory"].instance({
                      Email: 'cosmin@taid.be',
                      DisplayName: 'Cosmin Popescu'
                    }, _models__WEBPACK_IMPORTED_MODULE_4__["Contact"]);
                    this.showLoading();
                    this.connect(this._mails.currentAccount$, function (account) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this48, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee68() {
                        return regeneratorRuntime.wrap(function _callee68$(_context68) {
                          while (1) {
                            switch (_context68.prev = _context68.next) {
                              case 0:
                                this._account = account;
                                this.hideLoading(); // this._body = await this._api.getMessageBody(this._account, '[Gmail]/Drafts', '11021');

                              case 2:
                              case "end":
                                return _context68.stop();
                            }
                          }
                        }, _callee68, this);
                      }));
                    });

                  case 3:
                  case "end":
                    return _context69.stop();
                }
              }
            }, _callee69, this);
          }));
        }
      }, {
        key: "_folderNotify",
        value: function _folderNotify(f) {
          console.log('selected folder', f);
          this._folder = f.Id;
        }
      }, {
        key: "_messageNotify",
        value: function _messageNotify(m) {
          this._message = m;
          console.log('message is', m);
        }
      }, {
        key: "_msgBodyNotify",
        value: function _msgBodyNotify(ev) {
          console.log('notified with', ev);
        }
      }, {
        key: "_choose",
        value: function _choose(ev) {
          console.log('selection is', ev);
        }
      }]);

      return Playground;
    }(_base__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_services_mails__WEBPACK_IMPORTED_MODULE_5__["Mails"])], Playground.prototype, "_mails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_6__["Api"])], Playground.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgCycle"])('init')], Playground.prototype, "_initMe", null);
    Playground = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'al-playground',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/playground.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/playground.html"))["default"]
    })], Playground);
    /***/
  },

  /***/
  "./src/ts/pages/settings.ts":
  /*!**********************************!*\
    !*** ./src/ts/pages/settings.ts ***!
    \**********************************/

  /*! exports provided: Settings */

  /***/
  function srcTsPagesSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _services_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/settings */
    "./src/ts/services/settings.ts");
    /* harmony import */


    var _services_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/store */
    "./src/ts/services/store.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/mails */
    "./src/ts/services/mails.ts");
    /* harmony import */


    var _nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../nextcloud/nextcloud */
    "./src/ts/nextcloud/nextcloud.ts");

    var Settings = /*#__PURE__*/function (_base__WEBPACK_IMPORT14) {
      _inherits(Settings, _base__WEBPACK_IMPORT14);

      var _super19 = _createSuper(Settings);

      function Settings() {
        var _this49;

        _classCallCheck(this, Settings);

        _this49 = _super19.apply(this, arguments);
        _this49._validate = false;
        _this49._loading = true;
        _this49._urlFixed = false;
        return _this49;
      }

      _createClass(Settings, [{
        key: "_initMe",
        value: function _initMe() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee70() {
            return regeneratorRuntime.wrap(function _callee70$(_context70) {
              while (1) {
                switch (_context70.prev = _context70.next) {
                  case 0:
                    _context70.next = 2;
                    return this._settings.appSettings;

                  case 2:
                    this._model = _context70.sent;

                    if (!this._model.server) {
                      this._model.server = new _models__WEBPACK_IMPORTED_MODULE_4__["ServerSetting"]();
                      this._model.server.users = [];
                    }

                  case 4:
                  case "end":
                    return _context70.stop();
                }
              }
            }, _callee70, this);
          }));
        }
      }, {
        key: "_setFixUrl",
        value: function _setFixUrl(value) {
          this._urlFixed = value;
        }
      }, {
        key: "_remove",
        value: function _remove(user) {
          this._model.server.users = this._model.server.users.filter(function (u) {
            return u.email != user.email;
          });
        }
      }, {
        key: "_add",
        value: function _add() {
          this._model.server.users.push(new _models__WEBPACK_IMPORTED_MODULE_4__["UserSetting"]());
        }
      }, {
        key: "_waitApiReady",
        value: function _waitApiReady() {
          return this._api.ready$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).toPromise();
        }
      }, {
        key: "_save",
        value: function _save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee71() {
            var users, server, _yield$Object17, _yield$Object18, err, result, email, x;

            return regeneratorRuntime.wrap(function _callee71$(_context71) {
              while (1) {
                switch (_context71.prev = _context71.next) {
                  case 0:
                    if (!(!this._model.server && !Array.isArray(this._model.server.users) || this._model.server.users.length == 0)) {
                      _context71.next = 3;
                      break;
                    }

                    this.alert('You have to have at least one account', '');
                    return _context71.abrupt("return");

                  case 3:
                    _context71.next = 5;
                    return this._settings.needAuthenticating(this._model.server);

                  case 5:
                    users = _context71.sent;

                    if (!(users.length > 0)) {
                      _context71.next = 29;
                      break;
                    }

                    this.showLoading(); // To be able to do anything with the API we need a server url, at least.
                    // So, we set this before.

                    server = new _models__WEBPACK_IMPORTED_MODULE_4__["ServerSetting"]();
                    server.url = this._model.server.url;
                    server.users = [];
                    _context71.next = 13;
                    return this._settings.setServer(server);

                  case 13:
                    _context71.next = 15;
                    return this._waitApiReady();

                  case 15:
                    _context71.next = 17;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_4__["to"])(this._api.login(users));

                  case 17:
                    _yield$Object17 = _context71.sent;
                    _yield$Object18 = _slicedToArray(_yield$Object17, 2);
                    err = _yield$Object18[0];
                    result = _yield$Object18[1];
                    this._validate = true;
                    this.hideLoading();

                    if (!(err || !result)) {
                      _context71.next = 27;
                      break;
                    }

                    this.alert('Some accounts could not be logged in', '');
                    console.log('err is', err);
                    return _context71.abrupt("return");

                  case 27:
                    _context71.next = 29;
                    return this._waitApiReady();

                  case 29:
                    _context71.next = 31;
                    return this._store.getCurrentAccount();

                  case 31:
                    email = _context71.sent;
                    x = false;

                    if (email != _models__WEBPACK_IMPORTED_MODULE_4__["COMBINED_ACCOUNT_ID"] && !this._model.server.users.find(function (u) {
                      return u.email == email;
                    })) {
                      x = true;
                    }

                    _context71.next = 36;
                    return this._settings.saveSettings(this._model);

                  case 36:
                    if (!x) {
                      _context71.next = 41;
                      break;
                    }

                    _context71.next = 39;
                    return this._mails.setCurrentAccount(this._model.server.users[0].email);

                  case 39:
                    this.navigate('').then(function () {
                      return window.location.reload();
                    });
                    return _context71.abrupt("return");

                  case 41:
                    _context71.next = 43;
                    return this._mails.setCurrentAccount(null);

                  case 43:
                    this.navigate('settings:saved'); // window.location.reload();
                    // this.navigate('settings:' + op);

                  case 44:
                  case "end":
                    return _context71.stop();
                }
              }
            }, _callee71, this);
          }));
        }
      }, {
        key: "_nextcloudLogin",
        value: function _nextcloudLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee72() {
            var _yield$Object19, _yield$Object20, err, result;

            return regeneratorRuntime.wrap(function _callee72$(_context72) {
              while (1) {
                switch (_context72.prev = _context72.next) {
                  case 0:
                    this.showLoading();
                    _context72.next = 3;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_4__["to"])(this._nc.login(this._model.nextcloudUrl));

                  case 3:
                    _yield$Object19 = _context72.sent;
                    _yield$Object20 = _slicedToArray(_yield$Object19, 2);
                    err = _yield$Object20[0];
                    result = _yield$Object20[1];

                    if (!err) {
                      _context72.next = 12;
                      break;
                    }

                    console.error(err);
                    this.alert('There was an error performing login to nextcloud', err.message);
                    this.hideLoading();
                    return _context72.abrupt("return");

                  case 12:
                    this._settings.setNextcloudLogin(result);

                    this.alert('You have been authenticated to nextcloud', '', 'success', true);
                    this.hideLoading();
                    return _context72.abrupt("return");

                  case 16:
                  case "end":
                    return _context72.stop();
                }
              }
            }, _callee72, this);
          }));
        }
      }]);

      return Settings;
    }(_base__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_services_store__WEBPACK_IMPORTED_MODULE_6__["Store"])], Settings.prototype, "_store", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_7__["Api"])], Settings.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_services_mails__WEBPACK_IMPORTED_MODULE_9__["Mails"])], Settings.prototype, "_mails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_services_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"])], Settings.prototype, "_settings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_10__["Nextcloud"])], Settings.prototype, "_nc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgCycle"])('init')], Settings.prototype, "_initMe", null);
    Settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'al-settings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../../html/settings.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/html/settings.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/scss/settings.scss */
      "./src/assets/scss/settings.scss"))["default"]]
    })], Settings);
    /***/
  },

  /***/
  "./src/ts/pipes.ts":
  /*!*************************!*\
    !*** ./src/ts/pipes.ts ***!
    \*************************/

  /*! exports provided: FoldersTree, NcFilesToTree, FolderLabel, AttachmentsList, MessageDate, MessageFrom, MessageFromTxt, MessageFromTxtFull, AsHtml, ContactsListTxt, ContactsArray, AvatarColor, AccountToContact, AvatarText, HumanFileSize, FileIconPipe, CurrentEmail, BorderRight, IsCombinedAccount, Count, HasArchive, FoldersFlatList, IsOfType */

  /***/
  function srcTsPipesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoldersTree", function () {
      return FoldersTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NcFilesToTree", function () {
      return NcFilesToTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderLabel", function () {
      return FolderLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttachmentsList", function () {
      return AttachmentsList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageDate", function () {
      return MessageDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageFrom", function () {
      return MessageFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageFromTxt", function () {
      return MessageFromTxt;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageFromTxtFull", function () {
      return MessageFromTxtFull;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsHtml", function () {
      return AsHtml;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsListTxt", function () {
      return ContactsListTxt;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsArray", function () {
      return ContactsArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarColor", function () {
      return AvatarColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountToContact", function () {
      return AccountToContact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarText", function () {
      return AvatarText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HumanFileSize", function () {
      return HumanFileSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileIconPipe", function () {
      return FileIconPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentEmail", function () {
      return CurrentEmail;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorderRight", function () {
      return BorderRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsCombinedAccount", function () {
      return IsCombinedAccount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Count", function () {
      return Count;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HasArchive", function () {
      return HasArchive;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoldersFlatList", function () {
      return FoldersFlatList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsOfType", function () {
      return IsOfType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var dateformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dateformat */
    "./node_modules/dateformat/lib/dateformat.js");
    /* harmony import */


    var dateformat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./models */
    "./src/ts/models.ts");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _services_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/utils */
    "./src/ts/services/utils.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_mails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/mails */
    "./src/ts/services/mails.ts");

    var FoldersTree = /*#__PURE__*/function (_base__WEBPACK_IMPORT15) {
      _inherits(FoldersTree, _base__WEBPACK_IMPORT15);

      var _super20 = _createSuper(FoldersTree);

      function FoldersTree() {
        _classCallCheck(this, FoldersTree);

        return _super20.apply(this, arguments);
      }

      _createClass(FoldersTree, [{
        key: "transform",
        value: function transform(folders) {
          var _this50 = this;

          if (!folders || !Array.isArray(folders)) {
            return [];
          }

          return folders.map(function (f) {
            return {
              label: f.Unread > 0 ? "".concat(f.Name, " (").concat(f.Unread, ")") : f.Name,
              children: _this50.transform(f.SubFolders),
              data: f,
              selectable: f.SubFolders.length == 0
            };
          });
        }
      }]);

      return FoldersTree;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    FoldersTree = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'foldersTree'
    })], FoldersTree);

    var NcFilesToTree = /*#__PURE__*/function (_base__WEBPACK_IMPORT16) {
      _inherits(NcFilesToTree, _base__WEBPACK_IMPORT16);

      var _super21 = _createSuper(NcFilesToTree);

      function NcFilesToTree() {
        _classCallCheck(this, NcFilesToTree);

        return _super21.apply(this, arguments);
      }

      _createClass(NcFilesToTree, [{
        key: "transform",
        value: function transform(files) {
          return files.map(function (f) {
            return {
              label: f.basename,
              leaf: f.type == 'file',
              data: f
            };
          });
        }
      }]);

      return NcFilesToTree;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    NcFilesToTree = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'ncFilesToTree'
    })], NcFilesToTree);

    var FolderLabel = /*#__PURE__*/function (_base__WEBPACK_IMPORT17) {
      _inherits(FolderLabel, _base__WEBPACK_IMPORT17);

      var _super22 = _createSuper(FolderLabel);

      function FolderLabel() {
        _classCallCheck(this, FolderLabel);

        return _super22.apply(this, arguments);
      }

      _createClass(FolderLabel, [{
        key: "_label",
        value: function _label(f) {
          return f.Unread > 0 ? "".concat(f.Name, " (").concat(f.Unread, ")") : f.Name;
        }
      }, {
        key: "transform",
        value: function transform(folder) {
          var _this51 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._label(folder)), this._api.folderUpdated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (f) {
            return f.Id == folder.Id;
          }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            if (typeof result == 'string') {
              return result;
            }

            return _this51._label(result);
          }));
        }
      }]);

      return FolderLabel;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_services_api__WEBPACK_IMPORTED_MODULE_8__["Api"])], FolderLabel.prototype, "_api", void 0);
    FolderLabel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'folderLabel'
    })], FolderLabel);

    var AttachmentsList = /*#__PURE__*/function (_base__WEBPACK_IMPORT18) {
      _inherits(AttachmentsList, _base__WEBPACK_IMPORT18);

      var _super23 = _createSuper(AttachmentsList);

      function AttachmentsList() {
        _classCallCheck(this, AttachmentsList);

        return _super23.apply(this, arguments);
      }

      _createClass(AttachmentsList, [{
        key: "transform",
        value: function transform(m) {
          return _services_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].extractCollection(m.Attachments);
        }
      }]);

      return AttachmentsList;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    AttachmentsList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'attachmentsList'
    })], AttachmentsList);

    var MessageDate = /*#__PURE__*/function (_base__WEBPACK_IMPORT19) {
      _inherits(MessageDate, _base__WEBPACK_IMPORT19);

      var _super24 = _createSuper(MessageDate);

      function MessageDate() {
        _classCallCheck(this, MessageDate);

        return _super24.apply(this, arguments);
      }

      _createClass(MessageDate, [{
        key: "_sameDay",
        value: function _sameDay(d1, d2) {
          return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
        }
      }, {
        key: "transform",
        value: function transform(message) {
          var d1 = new Date();
          var d2 = new Date(message.TimeStampInUTC * 1000);

          if (this._sameDay(d1, d2)) {
            return dateformat__WEBPACK_IMPORTED_MODULE_2__(d2, 'hh:MM');
          }

          var d3 = new Date(d2.getTime() + 24 * 60 * 60 * 1000);

          if (this._sameDay(d1, d3)) {
            return 'Yesterday, ' + dateformat__WEBPACK_IMPORTED_MODULE_2__(d2, 'hh:MM');
          }

          if (d1.getTime() - d2.getTime() <= 15 * 24 * 60 * 60 * 1000) {
            return dateformat__WEBPACK_IMPORTED_MODULE_2__(d2, 'mmm dd');
          }

          return dateformat__WEBPACK_IMPORTED_MODULE_2__(d2, 'mmm dd, yyyy');
        }
      }]);

      return MessageDate;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    MessageDate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'messageDate'
    })], MessageDate);

    var MessageFrom = /*#__PURE__*/function (_base__WEBPACK_IMPORT20) {
      _inherits(MessageFrom, _base__WEBPACK_IMPORT20);

      var _super25 = _createSuper(MessageFrom);

      function MessageFrom() {
        _classCallCheck(this, MessageFrom);

        return _super25.apply(this, arguments);
      }

      _createClass(MessageFrom, [{
        key: "transform",
        value: function transform(msg) {
          if (!msg.From && msg.From.Count < 1) {
            return null;
          }

          return msg.From.Collection[0];
        }
      }]);

      return MessageFrom;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    MessageFrom = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'messageFrom'
    })], MessageFrom);

    var MessageFromTxt = /*#__PURE__*/function (_base__WEBPACK_IMPORT21) {
      _inherits(MessageFromTxt, _base__WEBPACK_IMPORT21);

      var _super26 = _createSuper(MessageFromTxt);

      function MessageFromTxt() {
        _classCallCheck(this, MessageFromTxt);

        return _super26.apply(this, arguments);
      }

      _createClass(MessageFromTxt, [{
        key: "transform",
        value: function transform(c) {
          return c.DisplayName || c.Email;
        }
      }]);

      return MessageFromTxt;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    MessageFromTxt = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'messageFromTxt'
    })], MessageFromTxt);

    var MessageFromTxtFull = /*#__PURE__*/function (_base__WEBPACK_IMPORT22) {
      _inherits(MessageFromTxtFull, _base__WEBPACK_IMPORT22);

      var _super27 = _createSuper(MessageFromTxtFull);

      function MessageFromTxtFull() {
        _classCallCheck(this, MessageFromTxtFull);

        return _super27.apply(this, arguments);
      }

      _createClass(MessageFromTxtFull, [{
        key: "transform",
        value: function transform(c) {
          var toSpan = function toSpan(x) {
            return "<span style=\"color: blue\">".concat(x, "</span>");
          };

          return c.DisplayName ? "".concat(c.DisplayName, " (").concat(toSpan(c.Email), ")") : toSpan(c.Email);
        }
      }]);

      return MessageFromTxtFull;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    MessageFromTxtFull = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'messageFromTxtFull'
    })], MessageFromTxtFull);

    var AsHtml = /*#__PURE__*/function (_base__WEBPACK_IMPORT23) {
      _inherits(AsHtml, _base__WEBPACK_IMPORT23);

      var _super28 = _createSuper(AsHtml);

      function AsHtml() {
        _classCallCheck(this, AsHtml);

        return _super28.apply(this, arguments);
      }

      _createClass(AsHtml, [{
        key: "transform",
        value: function transform(html) {
          return this._sanitizer.bypassSecurityTrustHtml(html);
        }
      }]);

      return AsHtml;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"])], AsHtml.prototype, "_sanitizer", void 0);
    AsHtml = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'asHtml'
    })], AsHtml);

    var ContactsListTxt = /*#__PURE__*/function (_base__WEBPACK_IMPORT24) {
      _inherits(ContactsListTxt, _base__WEBPACK_IMPORT24);

      var _super29 = _createSuper(ContactsListTxt);

      function ContactsListTxt() {
        _classCallCheck(this, ContactsListTxt);

        return _super29.apply(this, arguments);
      }

      _createClass(ContactsListTxt, [{
        key: "transform",
        value: function transform(c) {
          var collection = _services_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].extractCollection(c);

          if (collection.length == 0) {
            return '';
          }

          var pipe = new MessageFromTxtFull();
          return collection.map(function (c) {
            return pipe.transform(c);
          }).reduce(function (acc, v) {
            return acc + (acc == '' ? '' : ', ') + v;
          }, '');
        }
      }]);

      return ContactsListTxt;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    ContactsListTxt = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'contactsListTxt'
    })], ContactsListTxt);

    var ContactsArray = /*#__PURE__*/function (_base__WEBPACK_IMPORT25) {
      _inherits(ContactsArray, _base__WEBPACK_IMPORT25);

      var _super30 = _createSuper(ContactsArray);

      function ContactsArray() {
        _classCallCheck(this, ContactsArray);

        return _super30.apply(this, arguments);
      }

      _createClass(ContactsArray, [{
        key: "transform",
        value: function transform(c) {
          return _services_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].extractCollection(c);
        }
      }]);

      return ContactsArray;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    ContactsArray = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'contactsArray'
    })], ContactsArray);

    var AvatarColor = /*#__PURE__*/function (_base__WEBPACK_IMPORT26) {
      _inherits(AvatarColor, _base__WEBPACK_IMPORT26);

      var _super31 = _createSuper(AvatarColor);

      function AvatarColor() {
        _classCallCheck(this, AvatarColor);

        return _super31.apply(this, arguments);
      }

      _createClass(AvatarColor, [{
        key: "transform",
        value: function transform(c) {
          return _services_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].avatarColor(c);
        }
      }]);

      return AvatarColor;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    AvatarColor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'avatarColor'
    })], AvatarColor);

    var AccountToContact = /*#__PURE__*/function (_base__WEBPACK_IMPORT27) {
      _inherits(AccountToContact, _base__WEBPACK_IMPORT27);

      var _super32 = _createSuper(AccountToContact);

      function AccountToContact() {
        _classCallCheck(this, AccountToContact);

        return _super32.apply(this, arguments);
      }

      _createClass(AccountToContact, [{
        key: "transform",
        value: function transform(a) {
          return _models__WEBPACK_IMPORTED_MODULE_7__["ModelFactory"].instance({
            Email: a.Email,
            DisplayName: a.FriendlyName
          }, _models__WEBPACK_IMPORTED_MODULE_7__["Contact"]);
        }
      }]);

      return AccountToContact;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    AccountToContact = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'accountToContact'
    })], AccountToContact);

    var AvatarText = /*#__PURE__*/function (_base__WEBPACK_IMPORT28) {
      _inherits(AvatarText, _base__WEBPACK_IMPORT28);

      var _super33 = _createSuper(AvatarText);

      function AvatarText() {
        _classCallCheck(this, AvatarText);

        return _super33.apply(this, arguments);
      }

      _createClass(AvatarText, [{
        key: "transform",
        value: function transform(c) {
          var x = c.DisplayName || c.Email;
          return x.substr(0, 1).toUpperCase();
        }
      }]);

      return AvatarText;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    AvatarText = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'avatarText'
    })], AvatarText);

    var HumanFileSize = /*#__PURE__*/function (_base__WEBPACK_IMPORT29) {
      _inherits(HumanFileSize, _base__WEBPACK_IMPORT29);

      var _super34 = _createSuper(HumanFileSize);

      function HumanFileSize() {
        _classCallCheck(this, HumanFileSize);

        return _super34.apply(this, arguments);
      }

      _createClass(HumanFileSize, [{
        key: "transform",
        value: function transform(size) {
          if (!size) {
            return '';
          }

          var i = Math.floor(Math.log(size) / Math.log(1024));
          return (size / Math.pow(1024, i)).toFixed(2) + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
        }
      }]);

      return HumanFileSize;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    HumanFileSize = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'humanFileSize'
    })], HumanFileSize);

    var FileIconPipe = /*#__PURE__*/function (_base__WEBPACK_IMPORT30) {
      _inherits(FileIconPipe, _base__WEBPACK_IMPORT30);

      var _super35 = _createSuper(FileIconPipe);

      function FileIconPipe() {
        _classCallCheck(this, FileIconPipe);

        return _super35.apply(this, arguments);
      }

      _createClass(FileIconPipe, [{
        key: "transform",
        value: function transform(a) {
          if (a.MimeType.match(/pdf/i)) {
            return "file-pdf-o";
          }

          if (a.MimeType.match(/text|txt/i)) {
            return 'file-text-o';
          }

          if (a.MimeType.match(/excel/i)) {
            return 'file-excel-o';
          }

          if (a.MimeType.match(/word/i)) {
            return 'file-word-o';
          }

          if (a.MimeType.match(/gif|jpg|jpeg|png|bmp/i)) {
            return 'file-image-o';
          }

          return 'file-o';
        }
      }]);

      return FileIconPipe;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    FileIconPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'fileIcon'
    })], FileIconPipe);

    var CurrentEmail = /*#__PURE__*/function (_base__WEBPACK_IMPORT31) {
      _inherits(CurrentEmail, _base__WEBPACK_IMPORT31);

      var _super36 = _createSuper(CurrentEmail);

      function CurrentEmail() {
        _classCallCheck(this, CurrentEmail);

        return _super36.apply(this, arguments);
      }

      _createClass(CurrentEmail, [{
        key: "transform",
        value: function transform(a) {
          if (!a) {
            return '';
          }

          return a.FriendlyName ? "".concat(a.FriendlyName, " (").concat(a.Email, ")") : a.Email;
        }
      }]);

      return CurrentEmail;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    CurrentEmail = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'currentEmail'
    })], CurrentEmail);

    var BorderRight = /*#__PURE__*/function (_base__WEBPACK_IMPORT32) {
      _inherits(BorderRight, _base__WEBPACK_IMPORT32);

      var _super37 = _createSuper(BorderRight);

      function BorderRight() {
        _classCallCheck(this, BorderRight);

        return _super37.apply(this, arguments);
      }

      _createClass(BorderRight, [{
        key: "transform",
        value: function transform(msg) {
          var _this52 = this;

          return this._service.currentAccount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (account) {
            if (account.AccountID != _models__WEBPACK_IMPORTED_MODULE_7__["COMBINED_ACCOUNT_ID"]) {
              return {};
            }

            ;

            var a = _this52._service.accountById(msg.AccountID);

            if (!a) {
              return {};
            }

            var pipe = new AccountToContact();
            return {
              borderRight: "10px solid ".concat(_services_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].avatarColor(pipe.transform(a)))
            };
          }));
        }
      }]);

      return BorderRight;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_services_mails__WEBPACK_IMPORTED_MODULE_11__["Mails"])], BorderRight.prototype, "_service", void 0);
    BorderRight = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'borderRight'
    })], BorderRight);

    var IsCombinedAccount = /*#__PURE__*/function (_base__WEBPACK_IMPORT33) {
      _inherits(IsCombinedAccount, _base__WEBPACK_IMPORT33);

      var _super38 = _createSuper(IsCombinedAccount);

      function IsCombinedAccount() {
        _classCallCheck(this, IsCombinedAccount);

        return _super38.apply(this, arguments);
      }

      _createClass(IsCombinedAccount, [{
        key: "transform",
        value: function transform(a) {
          return a.AccountID == _models__WEBPACK_IMPORTED_MODULE_7__["COMBINED_ACCOUNT_ID"];
        }
      }]);

      return IsCombinedAccount;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    IsCombinedAccount = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isCombinedAccount'
    })], IsCombinedAccount);

    var Count = /*#__PURE__*/function (_base__WEBPACK_IMPORT34) {
      _inherits(Count, _base__WEBPACK_IMPORT34);

      var _super39 = _createSuper(Count);

      function Count() {
        _classCallCheck(this, Count);

        return _super39.apply(this, arguments);
      }

      _createClass(Count, [{
        key: "transform",
        value: function transform(a) {
          if (!Array.isArray(a)) {
            return 0;
          }

          ;
          return a.length;
        }
      }]);

      return Count;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    Count = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'count'
    })], Count);

    var HasArchive = /*#__PURE__*/function (_base__WEBPACK_IMPORT35) {
      _inherits(HasArchive, _base__WEBPACK_IMPORT35);

      var _super40 = _createSuper(HasArchive);

      function HasArchive() {
        _classCallCheck(this, HasArchive);

        return _super40.apply(this, arguments);
      }

      _createClass(HasArchive, [{
        key: "_search",
        value: function _search(folders) {
          if (folders.length == 0) {
            return false;
          }

          var f = folders.find(function (f) {
            return f.Id == _models__WEBPACK_IMPORTED_MODULE_7__["ALL_MAIL"];
          });

          if (f) {
            return true;
          }

          return this._search(folders.map(function (f) {
            return f.SubFolders;
          }).reduce(function (acc, v) {
            return acc.concat(v);
          }, []));
        }
      }, {
        key: "transform",
        value: function transform(a, folderId) {
          if (!a || folderId == _models__WEBPACK_IMPORTED_MODULE_7__["ALL_MAIL"]) {
            return false;
          }

          return this._search(a.FoldersOrder);
        }
      }]);

      return HasArchive;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    HasArchive = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'hasArchive'
    })], HasArchive);

    var FoldersFlatList = /*#__PURE__*/function (_base__WEBPACK_IMPORT36) {
      _inherits(FoldersFlatList, _base__WEBPACK_IMPORT36);

      var _super41 = _createSuper(FoldersFlatList);

      function FoldersFlatList() {
        _classCallCheck(this, FoldersFlatList);

        return _super41.apply(this, arguments);
      }

      _createClass(FoldersFlatList, [{
        key: "transform",
        value: function transform(account) {
          return account.Folders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (folders) {
            if (!Array.isArray(folders)) {
              return [];
            }

            var result = [{
              value: '',
              label: 'Current folder'
            }];
            result.push.apply(result, _toConsumableArray(_services_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].foldersFlatList2(folders).map(function (f) {
              return {
                value: f.Id,
                label: account.AccountID == _models__WEBPACK_IMPORTED_MODULE_7__["COMBINED_ACCOUNT_ID"] ? f.Name : f.Id
              };
            })));
            return result;
          }));
        }
      }]);

      return FoldersFlatList;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    FoldersFlatList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'foldersFlatList'
    })], FoldersFlatList);

    var IsOfType = /*#__PURE__*/function (_base__WEBPACK_IMPORT37) {
      _inherits(IsOfType, _base__WEBPACK_IMPORT37);

      var _super42 = _createSuper(IsOfType);

      function IsOfType() {
        _classCallCheck(this, IsOfType);

        return _super42.apply(this, arguments);
      }

      _createClass(IsOfType, [{
        key: "transform",
        value: function transform(x, type) {
          console.log('analyze', x, type, typeof x);
          return typeof x == type;
        }
      }]);

      return IsOfType;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    IsOfType = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'isOfType'
    })], IsOfType);
    /***/
  },

  /***/
  "./src/ts/routing.ts":
  /*!***************************!*\
    !*** ./src/ts/routing.ts ***!
    \***************************/

  /*! exports provided: routes */

  /***/
  function srcTsRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pages/home */
    "./src/ts/pages/home.ts");
    /* harmony import */


    var _pages_playground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/playground */
    "./src/ts/pages/playground.ts");

    var routes = [{
      path: 'playground',
      component: _pages_playground__WEBPACK_IMPORTED_MODULE_1__["Playground"],
      data: {
        withToolbar: true
      }
    }, {
      path: ':action',
      component: _pages_home__WEBPACK_IMPORTED_MODULE_0__["Home"],
      data: {
        withToolbar: true
      }
    }, {
      path: '',
      component: _pages_home__WEBPACK_IMPORTED_MODULE_0__["Home"],
      data: {
        withToolbar: true
      }
    }];
    /***/
  },

  /***/
  "./src/ts/services/api.ts":
  /*!********************************!*\
    !*** ./src/ts/services/api.ts ***!
    \********************************/

  /*! exports provided: Api */

  /***/
  function srcTsServicesApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Api", function () {
      return Api;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./settings */
    "./src/ts/services/settings.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./utils */
    "./src/ts/services/utils.ts");
    /* harmony import */


    var _nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../nextcloud/nextcloud */
    "./src/ts/nextcloud/nextcloud.ts");

    var Api_1;
    var Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Filesystem;

    var Api = Api_1 = /*#__PURE__*/function (_base__WEBPACK_IMPORT38) {
      _inherits(Api, _base__WEBPACK_IMPORT38);

      var _super43 = _createSuper(Api);

      function Api() {
        var _this53;

        _classCallCheck(this, Api);

        _this53 = _super43.call(this);
        _this53.ready$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        _this53.lastSearchResults = 0;
        _this53.folderUpdated$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this53.messagesDeleted$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this53.messagesMoved$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this53.messagesUpdated$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this53.sessionExpired$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this53._ready = false;
        _this53._url = null;
        _this53._accounts = [];

        _this53._init();

        _this53._settings.serverSet$.subscribe(function () {
          return _this53._init();
        });

        return _this53;
      }

      _createClass(Api, [{
        key: "_init",
        value: function _init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee73() {
            return regeneratorRuntime.wrap(function _callee73$(_context73) {
              while (1) {
                switch (_context73.prev = _context73.next) {
                  case 0:
                    _context73.next = 2;
                    return this._settings.getServer();

                  case 2:
                    this._server = _context73.sent;

                    if (!this._server) {
                      _context73.next = 8;
                      break;
                    }

                    this._url = "".concat(this._server.url, "?/Api/");
                    this._ready = true;
                    this.ready$.next(true);
                    return _context73.abrupt("return");

                  case 8:
                    this._ready = false;
                    this.ready$.next(false);

                  case 10:
                  case "end":
                    return _context73.stop();
                }
              }
            }, _callee73, this);
          }));
        }
      }, {
        key: "_checkReady",
        value: function _checkReady() {
          if (!this._ready) {
            throw new Error('API_NOT_READY');
          }
        }
      }, {
        key: "_passRequest",
        value: function _passRequest(token, module, method, parameters, type, file) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee74() {
            var data, headers, json, result, _result, response;

            return regeneratorRuntime.wrap(function _callee74$(_context74) {
              while (1) {
                switch (_context74.prev = _context74.next) {
                  case 0:
                    this._checkReady();

                    headers = {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    };

                    if (token) {
                      headers['Authorization'] = "Bearer ".concat(token);
                    }

                    if (!file) {
                      data = this._platform.is('desktop') ? "Module=".concat(module, "&Method=").concat(method, "&Parameters=").concat(encodeURIComponent(JSON.stringify(parameters))) : {
                        Module: module,
                        Method: method,
                        Parameters: JSON.stringify(parameters)
                      };
                    } else {
                      data = new FormData();
                      console.log('content is', file, file.content);
                      data.append('Module', module);
                      data.append('Method', method);
                      data.append('jua-post-type', 'ajax');
                      data.append('Parameters', JSON.stringify(parameters));
                      data.append('jua-uploader', file.content);
                      delete headers['Content-Type'];
                    }

                    if (!(this._platform.is('desktop') || file)) {
                      _context74.next = 13;
                      break;
                    }

                    _context74.next = 7;
                    return fetch(this._url, {
                      method: 'POST',
                      body: data,
                      headers: headers
                    });

                  case 7:
                    result = _context74.sent;
                    _context74.next = 10;
                    return result.json();

                  case 10:
                    json = _context74.sent;
                    _context74.next = 18;
                    break;

                  case 13:
                    console.log('posting request', data, headers);
                    _context74.next = 16;
                    return this._http.sendRequest(this._url, {
                      method: 'post',
                      data: data,
                      headers: headers,
                      responseType: 'json'
                    });

                  case 16:
                    _result = _context74.sent;
                    json = _result.data;

                  case 18:
                    response = _models__WEBPACK_IMPORTED_MODULE_9__["ModelFactory"].instance(json, _models__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"]);

                    if (!(typeof response.ErrorCode != 'undefined' && response.ErrorCode != null)) {
                      _context74.next = 22;
                      break;
                    }

                    console.log("throwing", "".concat([102, 108].indexOf(response.ErrorCode) != -1 ? 'AUTH_ERROR' : 'HTTP_ERROR', " ").concat(response.ErrorMessage || response.ErrorCode));
                    throw Error("".concat([102, 108].indexOf(response.ErrorCode) != -1 ? 'AUTH_ERROR' : 'HTTP_ERROR', " ").concat(response.ErrorMessage || response.ErrorCode));

                  case 22:
                    return _context74.abrupt("return", _models__WEBPACK_IMPORTED_MODULE_9__["ModelFactory"].instance(response.Result, type));

                  case 23:
                  case "end":
                    return _context74.stop();
                }
              }
            }, _callee74, this);
          }));
        }
      }, {
        key: "_login",
        value: function _login(u) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee75() {
            var result;
            return regeneratorRuntime.wrap(function _callee75$(_context75) {
              while (1) {
                switch (_context75.prev = _context75.next) {
                  case 0:
                    _context75.next = 2;
                    return this._passRequest(null, 'Core', 'Login', {
                      Login: u.email,
                      Password: u.pass,
                      SignMe: false
                    }, _models__WEBPACK_IMPORTED_MODULE_9__["Authentication"]);

                  case 2:
                    result = _context75.sent;

                    if (!(!result || !result.AuthToken)) {
                      _context75.next = 5;
                      break;
                    }

                    return _context75.abrupt("return", false);

                  case 5:
                    u.token = result.AuthToken;
                    return _context75.abrupt("return", true);

                  case 7:
                  case "end":
                    return _context75.stop();
                }
              }
            }, _callee75, this);
          }));
        }
      }, {
        key: "login",
        value: function login(users) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee76() {
            var _this54 = this;

            var p, results;
            return regeneratorRuntime.wrap(function _callee76$(_context76) {
              while (1) {
                switch (_context76.prev = _context76.next) {
                  case 0:
                    p = [];
                    users.forEach(function (u) {
                      return p.push(_this54._login(u));
                    });
                    _context76.next = 4;
                    return Promise.all(p);

                  case 4:
                    results = _context76.sent;
                    return _context76.abrupt("return", results.filter(function (r) {
                      return !r;
                    }).length == 0);

                  case 6:
                  case "end":
                    return _context76.stop();
                }
              }
            }, _callee76);
          }));
        }
      }, {
        key: "_handleUserExpired",
        value: function _handleUserExpired(u) {
          this.sessionExpired$.emit(u);
          console.log('user expired', u);
          throw Error('USER_EXPIRED');
        }
      }, {
        key: "_request",
        value: function _request(email, module, method, parameters, type, file) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee77() {
            var u, _yield$Object21, _yield$Object22, err, result;

            return regeneratorRuntime.wrap(function _callee77$(_context77) {
              while (1) {
                switch (_context77.prev = _context77.next) {
                  case 0:
                    u = this._userByEmail(email);

                    if (u) {
                      _context77.next = 3;
                      break;
                    }

                    throw {
                      message: 'Could not find user for request',
                      user: email,
                      method: method,
                      parameters: parameters,
                      type: type,
                      file: file
                    };

                  case 3:
                    if (u.token) {
                      _context77.next = 6;
                      break;
                    }

                    this._handleUserExpired(u);

                    return _context77.abrupt("return", null);

                  case 6:
                    _context77.next = 8;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_9__["to"])(this._passRequest(u.token, module, method, parameters, type, file));

                  case 8:
                    _yield$Object21 = _context77.sent;
                    _yield$Object22 = _slicedToArray(_yield$Object21, 2);
                    err = _yield$Object22[0];
                    result = _yield$Object22[1];

                    if (!err) {
                      _context77.next = 17;
                      break;
                    }

                    if (!err.message.match(/^AUTH_ERROR/)) {
                      _context77.next = 16;
                      break;
                    }

                    this._handleUserExpired(u);

                    return _context77.abrupt("return");

                  case 16:
                    throw err;

                  case 17:
                    return _context77.abrupt("return", result);

                  case 18:
                  case "end":
                    return _context77.stop();
                }
              }
            }, _callee77, this);
          }));
        }
      }, {
        key: "_userByEmail",
        value: function _userByEmail(email) {
          this._checkReady();

          return this._server.users.find(function (u) {
            return u.email == email;
          });
        } // Patched

      }, {
        key: "getAccounts",
        value: function getAccounts() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee79() {
            var _this55 = this;

            var p, accounts, result, r, a;
            return regeneratorRuntime.wrap(function _callee79$(_context79) {
              while (1) {
                switch (_context79.prev = _context79.next) {
                  case 0:
                    p = [];

                    this._server.users.forEach(function (u) {
                      return p.push(_this55._request(u.email, 'Mail', 'GetAccounts', null, _models__WEBPACK_IMPORTED_MODULE_9__["Account"]));
                    });

                    _context79.next = 4;
                    return Promise.all(p);

                  case 4:
                    accounts = _context79.sent;
                    result = accounts.reduce(function (acc, v) {
                      return acc.concat(v);
                    }, []);
                    this._accounts = result;
                    result.forEach(function (a) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this55, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee78() {
                        var u, list;
                        return regeneratorRuntime.wrap(function _callee78$(_context78) {
                          while (1) {
                            switch (_context78.prev = _context78.next) {
                              case 0:
                                a.Folders$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
                                u = this._userByEmail(a.Email);

                                if (u) {
                                  _context78.next = 5;
                                  break;
                                }

                                a.Folders$.next([]);
                                return _context78.abrupt("return");

                              case 5:
                                list = [];

                                _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].foldersFlatList(a.FoldersOrder, list);

                                console.log('set folder types 1');
                                _context78.next = 10;
                                return this._setFoldersTypes(a, a.FoldersOrder);

                              case 10:
                                list.forEach(function (l) {
                                  return l.AccountID = a.AccountID;
                                });
                                a.Folders$.next(a.FoldersOrder);

                              case 12:
                              case "end":
                                return _context78.stop();
                            }
                          }
                        }, _callee78, this);
                      }));
                    });
                    r = result.reduce(function (acc, v) {
                      return acc.concat(v);
                    }, []);

                    if (accounts.length > 1) {
                      a = new _models__WEBPACK_IMPORTED_MODULE_9__["Account"]();
                      a.Email = accounts.reduce(function (acc, v) {
                        return acc.concat(v);
                      }, []).map(function (a) {
                        return a.Email;
                      }).join(",");
                      a.AccountID = _models__WEBPACK_IMPORTED_MODULE_9__["COMBINED_ACCOUNT_ID"];
                      a.FriendlyName = 'Composed view';
                      a.FoldersOrder = [{
                        AccountID: a.AccountID,
                        SubFolders: [],
                        Type: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Inbox,
                        Name: 'Inbox',
                        Id: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Inbox.toString()
                      }, {
                        AccountID: a.AccountID,
                        SubFolders: [],
                        Type: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Sent,
                        Name: 'Sent mails',
                        Id: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Sent.toString()
                      }, {
                        AccountID: a.AccountID,
                        SubFolders: [],
                        Type: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Drafts,
                        Name: 'Drafts',
                        Id: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Drafts.toString()
                      }, {
                        AccountID: a.AccountID,
                        SubFolders: [],
                        Type: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Spam,
                        Name: 'Spam',
                        Id: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Spam.toString()
                      }, {
                        AccountID: a.AccountID,
                        SubFolders: [],
                        Type: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Trash,
                        Name: 'Trash',
                        Id: _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Trash.toString()
                      }];
                      a.TypesSet = true;
                      a.Folders$.next(a.FoldersOrder);
                      r.push(a);
                    }

                    return _context79.abrupt("return", r);

                  case 11:
                  case "end":
                    return _context79.stop();
                }
              }
            }, _callee79, this);
          }));
        } // Patched

      }, {
        key: "getFoldersInfo",
        value: function getFoldersInfo(account, list, auto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee80() {
            var _this56 = this;

            var p, result;
            return regeneratorRuntime.wrap(function _callee80$(_context80) {
              while (1) {
                switch (_context80.prev = _context80.next) {
                  case 0:
                    if (!(account.AccountID != _models__WEBPACK_IMPORTED_MODULE_9__["COMBINED_ACCOUNT_ID"])) {
                      _context80.next = 2;
                      break;
                    }

                    return _context80.abrupt("return", this._request(account.Email, 'Mail', 'GetRelevantFoldersInformation', {
                      AccountID: account.AccountID,
                      Folders: list.map(function (x) {
                        return x.Id;
                      })
                    }, _models__WEBPACK_IMPORTED_MODULE_9__["FoldersInfoResult"], undefined));

                  case 2:
                    p = [];
                    account.Email.split(',').forEach(function (e) {
                      var a = _this56._accounts.find(function (a) {
                        return a.Email.toLowerCase() == e.toLowerCase();
                      });

                      if (!a) {
                        return;
                      }

                      var list = [];

                      _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].foldersFlatList(a.FoldersOrder, list);

                      p.push(_this56.getFoldersInfo(a, list, auto));
                    });
                    _context80.next = 6;
                    return Promise.all(p);

                  case 6:
                    result = _context80.sent;
                    return _context80.abrupt("return", result);

                  case 8:
                  case "end":
                    return _context80.stop();
                }
              }
            }, _callee80, this);
          }));
        }
      }, {
        key: "_combinedFoldersResult",
        value: function _combinedFoldersResult(account, result) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee81() {
            var _this57 = this;

            return regeneratorRuntime.wrap(function _callee81$(_context81) {
              while (1) {
                switch (_context81.prev = _context81.next) {
                  case 0:
                    account.FoldersOrder.forEach(function (f) {
                      f.Count = 0;
                      f.Unread = 0;
                      account.Email.split(",").forEach(function (e, idx) {
                        var a = _this57._accounts.find(function (a) {
                          return a.Email == e;
                        });

                        if (!a) {
                          return;
                        }

                        var _f = _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].folderByType(f.Type, a.FoldersOrder);

                        if (!_f) {
                          return;
                        }

                        f.Count += result[idx].Counts[_f.Id][0];
                        f.Unread += result[idx].Counts[_f.Id][1];
                      });

                      _this57.folderUpdated$.emit(f);
                    });

                  case 1:
                  case "end":
                    return _context81.stop();
                }
              }
            }, _callee81);
          }));
        }
      }, {
        key: "_processMessages",
        value: function _processMessages(account, msgs) {
          msgs.Collection.forEach(function (m) {
            return m.AccountID = account.AccountID;
          });
          return msgs;
        }
      }, {
        key: "_waitFoldersLoaded",
        value: function _waitFoldersLoaded() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee82() {
            var p;
            return regeneratorRuntime.wrap(function _callee82$(_context82) {
              while (1) {
                switch (_context82.prev = _context82.next) {
                  case 0:
                    p = [];

                    this._accounts.forEach(function (a) {
                      return p.push(a.Folders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).toPromise());
                    });

                    _context82.next = 4;
                    return Promise.all(p);

                  case 4:
                  case "end":
                    return _context82.stop();
                }
              }
            }, _callee82, this);
          }));
        } // Patched

      }, {
        key: "_getMessages",
        value: function _getMessages(account, folder, offset, pageSize, search, filters, withThreads, auto, lastUid) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee83() {
            var _this58 = this;

            var params, _folder, p, result;

            return regeneratorRuntime.wrap(function _callee83$(_context83) {
              while (1) {
                switch (_context83.prev = _context83.next) {
                  case 0:
                    if (!(account.AccountID != _models__WEBPACK_IMPORTED_MODULE_9__["COMBINED_ACCOUNT_ID"])) {
                      _context83.next = 4;
                      break;
                    }

                    params = {
                      AccountID: account.AccountID,
                      Folder: folder,
                      Offset: offset,
                      Limit: pageSize,
                      Search: search,
                      Filters: filters,
                      UseThreading: withThreads
                    };

                    if (lastUid) {
                      params['InboxUixnext'] = lastUid;
                    }

                    return _context83.abrupt("return", this._request(account.Email, 'Mail', 'GetMessages', params, _models__WEBPACK_IMPORTED_MODULE_9__["Messages"], undefined).then(function (msgs) {
                      return _this58._processMessages(account, msgs);
                    }));

                  case 4:
                    _context83.next = 6;
                    return this._waitFoldersLoaded();

                  case 6:
                    _folder = account.FoldersOrder.find(function (f) {
                      return f.Id == folder;
                    });

                    if (_folder) {
                      _context83.next = 9;
                      break;
                    }

                    return _context83.abrupt("return", _models__WEBPACK_IMPORTED_MODULE_9__["ModelFactory"].instance({
                      Filters: filters,
                      Search: search,
                      Limit: pageSize,
                      Offset: offset,
                      Count: 0,
                      Collection: [],
                      MessageResultCount: 0,
                      Uids: [],
                      MessageCount: 0,
                      MessageUnseenCount: 0,
                      FolderName: _folder.Name
                    }, _models__WEBPACK_IMPORTED_MODULE_9__["Messages"]));

                  case 9:
                    p = [];
                    account.Email.split(',').forEach(function (e) {
                      var a = _this58._accounts.find(function (a) {
                        return a.Email == e;
                      });

                      if (!a) {
                        return;
                      }

                      var f = _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].folderByType(_folder.Type, a.FoldersOrder);

                      var result = _this58._getMessages(a, f.Id, offset, pageSize, search, filters, withThreads, auto, lastUid).then(function (msgs) {
                        return _this58._processMessages(a, msgs);
                      });

                      p.push(result);
                    });
                    _context83.next = 13;
                    return Promise.all(p);

                  case 13:
                    result = _context83.sent;
                    return _context83.abrupt("return", result.reduce(function (acc, v) {
                      if (!acc) {
                        return v;
                      }

                      acc.MessageResultCount += v.MessageResultCount;
                      acc.Count += v.Count;
                      acc.Collection = acc.Collection.concat(v.Collection);
                      return acc;
                    }, null));

                  case 15:
                  case "end":
                    return _context83.stop();
                }
              }
            }, _callee83, this);
          }));
        }
      }, {
        key: "getMessages",
        value: function getMessages(account, folder, offset, pageSize) {
          var search = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          var filters = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
          var auto = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
          var lastUid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee85() {
            var _this59 = this;

            var result;
            return regeneratorRuntime.wrap(function _callee85$(_context85) {
              while (1) {
                switch (_context85.prev = _context85.next) {
                  case 0:
                    if (pageSize != 1) account.Folders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (folders) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this59, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee84() {
                        var _this60 = this;

                        var list, result;
                        return regeneratorRuntime.wrap(function _callee84$(_context84) {
                          while (1) {
                            switch (_context84.prev = _context84.next) {
                              case 0:
                                list = [];

                                _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].foldersFlatList(folders, list);

                                _context84.next = 4;
                                return this.getFoldersInfo(account, list, auto);

                              case 4:
                                result = _context84.sent;

                                if (!Array.isArray(result)) {
                                  _context84.next = 9;
                                  break;
                                }

                                _context84.next = 8;
                                return this._combinedFoldersResult(account, result);

                              case 8:
                                return _context84.abrupt("return");

                              case 9:
                                Object.keys(result.Counts).forEach(function (k) {
                                  var f = list.find(function (l) {
                                    return l.Id == k;
                                  });

                                  if (!f) {
                                    return;
                                  }

                                  f.Count = result.Counts[k][0];
                                  f.Unread = result.Counts[k][1];

                                  _this60.folderUpdated$.emit(f);
                                });

                              case 10:
                              case "end":
                                return _context84.stop();
                            }
                          }
                        }, _callee84, this);
                      }));
                    });
                    _context85.next = 3;
                    return this._getMessages(account, folder, offset, pageSize, search, filters, false, auto, lastUid);

                  case 3:
                    result = _context85.sent;
                    this.lastSearchResults = result.MessageResultCount;
                    this.messagesUpdated$.emit(result.Collection);
                    return _context85.abrupt("return", result.Collection);

                  case 7:
                  case "end":
                    return _context85.stop();
                }
              }
            }, _callee85, this);
          }));
        } // Patched

      }, {
        key: "getMessageBody",
        value: function getMessageBody(account, msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee86() {
            var id, a, result;
            return regeneratorRuntime.wrap(function _callee86$(_context86) {
              while (1) {
                switch (_context86.prev = _context86.next) {
                  case 0:
                    id = msg.AccountID ? msg.AccountID : account.AccountID;
                    a = this._accounts.find(function (a) {
                      return a.AccountID == id;
                    });

                    if (a) {
                      _context86.next = 4;
                      break;
                    }

                    return _context86.abrupt("return", null);

                  case 4:
                    _context86.next = 6;
                    return this._request(a.Email, 'Mail', 'GetMessagesBodies', {
                      AccountID: a.AccountID,
                      Folder: msg.Folder,
                      Uids: [msg.Uid]
                    }, _models__WEBPACK_IMPORTED_MODULE_9__["MessageBody"]);

                  case 6:
                    result = _context86.sent;

                    if (!(!Array.isArray(result) || result.length != 1)) {
                      _context86.next = 9;
                      break;
                    }

                    return _context86.abrupt("return", null);

                  case 9:
                    result[0].AccountID = id; // const draft = await this._getFolder(FolderType.Drafts, account);
                    // result[0].IsDraft = folder == draft.Id;

                    return _context86.abrupt("return", result[0]);

                  case 11:
                  case "end":
                    return _context86.stop();
                }
              }
            }, _callee86, this);
          }));
        } // For a combined folder, when we perform an operation on a collection of messages, 
        // we need to separate each message and each account and each folder

      }, {
        key: "_getPayloadInfos",
        value: function _getPayloadInfos(account, folder, msgs) {
          var _this61 = this;

          var result = []; // Get the original folder if it is a special folder.

          var _folder = _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].isCombinedFolder(folder) ? _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].folderById(account.FoldersOrder, folder) : null;

          Array.from(new Set(msgs.map(function (m) {
            return m.AccountID;
          }))).forEach(function (accountId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this61, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee87() {
              var a, f;
              return regeneratorRuntime.wrap(function _callee87$(_context87) {
                while (1) {
                  switch (_context87.prev = _context87.next) {
                    case 0:
                      a = this._accounts.find(function (a) {
                        return a.AccountID == accountId;
                      });

                      if (a) {
                        _context87.next = 3;
                        break;
                      }

                      return _context87.abrupt("return");

                    case 3:
                      // Search the folder of the given type inside the original account
                      f = _folder == null ? {
                        Id: folder
                      } : _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].folderByType(_folder.Type, a.FoldersOrder);
                      result.push({
                        account: a,
                        folder: f.Id,
                        msgs: msgs.filter(function (m) {
                          return m.AccountID == a.AccountID;
                        })
                      });

                    case 5:
                    case "end":
                      return _context87.stop();
                  }
                }
              }, _callee87, this);
            }));
          });
          return result;
        }
      }, {
        key: "_executeCombinedAccount",
        value: function _executeCombinedAccount(account, folder, msgs, operation) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee88() {
            var promises;
            return regeneratorRuntime.wrap(function _callee88$(_context88) {
              while (1) {
                switch (_context88.prev = _context88.next) {
                  case 0:
                    promises = []; // Get the original folder if it is a special folder.

                    this._getPayloadInfos(account, folder, msgs).forEach(function (p) {
                      promises.push(operation(p.account, p.folder, p.msgs));
                    });

                    return _context88.abrupt("return", Promise.all(promises));

                  case 3:
                  case "end":
                    return _context88.stop();
                }
              }
            }, _callee88, this);
          }));
        } // Patched

      }, {
        key: "_doFlag",
        value: function _doFlag(flag, account, folder, msgs, action) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee89() {
            var _this62 = this;

            var callback;
            return regeneratorRuntime.wrap(function _callee89$(_context89) {
              while (1) {
                switch (_context89.prev = _context89.next) {
                  case 0:
                    if (!(account.AccountID != _models__WEBPACK_IMPORTED_MODULE_9__["COMBINED_ACCOUNT_ID"])) {
                      _context89.next = 4;
                      break;
                    }

                    _context89.next = 3;
                    return this._request(account.Email, 'Mail', flag, {
                      AccountID: account.AccountID,
                      Folder: folder,
                      Uids: msgs.map(function (m) {
                        return m.Uid;
                      }).join(","),
                      SetAction: action
                    });

                  case 3:
                    return _context89.abrupt("return");

                  case 4:
                    callback = function callback(account, folder, msgs) {
                      return _this62._doFlag(flag, account, folder, msgs, action);
                    };

                    _context89.next = 7;
                    return this._executeCombinedAccount(account, folder, msgs, callback.bind(this));

                  case 7:
                  case "end":
                    return _context89.stop();
                }
              }
            }, _callee89, this);
          }));
        } // Patched

      }, {
        key: "markRead",
        value: function markRead(account, folder, messages, action) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee90() {
            var _this63 = this;

            return regeneratorRuntime.wrap(function _callee90$(_context90) {
              while (1) {
                switch (_context90.prev = _context90.next) {
                  case 0:
                    _context90.next = 2;
                    return this._doFlag('SetMessagesSeen', account, folder, messages, action);

                  case 2:
                    account.Folders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (folders) {
                      return _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].folderById(folders, folder);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (f) {
                      return !!f;
                    })).subscribe(function (folder) {
                      var factor = action ? -1 : 1;
                      folder.Unread += factor * messages.length;
                      folder.Count -= factor * messages.length;

                      _this63.folderUpdated$.emit(folder);
                    });
                    messages.forEach(function (m) {
                      return m.IsSeen = action;
                    });

                  case 4:
                  case "end":
                    return _context90.stop();
                }
              }
            }, _callee90, this);
          }));
        } // Patched

      }, {
        key: "flag",
        value: function flag(account, folder, messages, action) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee91() {
            return regeneratorRuntime.wrap(function _callee91$(_context91) {
              while (1) {
                switch (_context91.prev = _context91.next) {
                  case 0:
                    _context91.next = 2;
                    return this._doFlag('SetMessageFlagged', account, folder, messages, action);

                  case 2:
                    messages.forEach(function (m) {
                      return m.IsFlagged = action;
                    });

                  case 3:
                  case "end":
                    return _context91.stop();
                }
              }
            }, _callee91, this);
          }));
        }
      }, {
        key: "_doDeleteMessages",
        value: function _doDeleteMessages(account, folder, messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee92() {
            var _this64 = this;

            var callback;
            return regeneratorRuntime.wrap(function _callee92$(_context92) {
              while (1) {
                switch (_context92.prev = _context92.next) {
                  case 0:
                    if (!(account.AccountID != _models__WEBPACK_IMPORTED_MODULE_9__["COMBINED_ACCOUNT_ID"])) {
                      _context92.next = 2;
                      break;
                    }

                    return _context92.abrupt("return", this._request(account.Email, 'Mail', 'DeleteMessages', {
                      AccountID: account.AccountID,
                      Folder: folder,
                      Uids: messages.map(function (m) {
                        return m.Uid;
                      }).join(",")
                    }));

                  case 2:
                    callback = function callback(account, folder, msgs) {
                      return _this64._doDeleteMessages(account, folder, msgs);
                    };

                    return _context92.abrupt("return", this._executeCombinedAccount(account, folder, messages, callback.bind(this)));

                  case 4:
                  case "end":
                    return _context92.stop();
                }
              }
            }, _callee92, this);
          }));
        }
      }, {
        key: "_doMoveMessages",
        value: function _doMoveMessages(account, folder, toFolder, messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee93() {
            var _this65 = this;

            var params, callback;
            return regeneratorRuntime.wrap(function _callee93$(_context93) {
              while (1) {
                switch (_context93.prev = _context93.next) {
                  case 0:
                    if (!(account.AccountID != _models__WEBPACK_IMPORTED_MODULE_9__["COMBINED_ACCOUNT_ID"])) {
                      _context93.next = 5;
                      break;
                    }

                    params = {
                      AccountID: account.AccountID,
                      Folder: folder,
                      ToFolder: toFolder,
                      Uids: messages.map(function (m) {
                        return m.Uid;
                      }).join(',')
                    };
                    _context93.next = 4;
                    return this._request(account.Email, 'Mail', 'MoveMessages', params);

                  case 4:
                    return _context93.abrupt("return");

                  case 5:
                    callback = function callback(account, toFolder, msgs) {
                      if (!Array.isArray(msgs) || msgs.length == 0) {
                        return;
                      }

                      var x = msgs[0].Folder;
                      var folder = _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].isCombinedFolder(x) ? _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].folderByType(x, account.FoldersOrder).Id : x;
                      return _this65._doMoveMessages(account, folder, toFolder, msgs);
                    };

                    return _context93.abrupt("return", this._executeCombinedAccount(account, toFolder, messages, callback));

                  case 7:
                  case "end":
                    return _context93.stop();
                }
              }
            }, _callee93, this);
          }));
        } // Patched

      }, {
        key: "deleteMessages",
        value: function deleteMessages(account, folder, messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee94() {
            return regeneratorRuntime.wrap(function _callee94$(_context94) {
              while (1) {
                switch (_context94.prev = _context94.next) {
                  case 0:
                    _context94.next = 2;
                    return this._doDeleteMessages(account, folder, messages);

                  case 2:
                    this.messagesDeleted$.emit(messages);

                  case 3:
                  case "end":
                    return _context94.stop();
                }
              }
            }, _callee94, this);
          }));
        } // Patched

      }, {
        key: "moveMessages",
        value: function moveMessages(account, folder, toFolder, messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee95() {
            return regeneratorRuntime.wrap(function _callee95$(_context95) {
              while (1) {
                switch (_context95.prev = _context95.next) {
                  case 0:
                    _context95.next = 2;
                    return this._doMoveMessages(account, folder, toFolder, messages);

                  case 2:
                    this.messagesMoved$.emit(messages);

                  case 3:
                  case "end":
                    return _context95.stop();
                }
              }
            }, _callee95, this);
          }));
        }
      }, {
        key: "downloadUrl",
        // Patched
        value: function downloadUrl(account, url, fileName, where, msg) {
          var preview = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee97() {
            var _this66 = this;

            var fileData, basePath, _yield$Object23, _yield$Object24, _err, path, _yield$Object25, _yield$Object26, err, _yield$Object27, _yield$Object28, shareErr, share, buf, blob, _url, content, result;

            return regeneratorRuntime.wrap(function _callee97$(_context97) {
              while (1) {
                switch (_context97.prev = _context97.next) {
                  case 0:
                    this._checkReady();

                    if (msg) {
                      account = this._accounts.find(function (a) {
                        return a.AccountID == msg.AccountID;
                      });
                    }

                    if (account) {
                      _context97.next = 4;
                      break;
                    }

                    throw {
                      message: "ACCOUNT_NOT_FOUND",
                      msg: msg
                    };

                  case 4:
                    _context97.next = 6;
                    return this.getAttachmentContent(account, url);

                  case 6:
                    fileData = _context97.sent;

                    if (!(preview && this._nc.isNextcloud)) {
                      _context97.next = 41;
                      break;
                    }

                    basePath = '/tmp';
                    _context97.next = 11;
                    return this._nc.exists(basePath);

                  case 11:
                    if (_context97.sent) {
                      _context97.next = 20;
                      break;
                    }

                    _context97.next = 14;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_9__["to"])(this._nc.mkdir(basePath));

                  case 14:
                    _yield$Object23 = _context97.sent;
                    _yield$Object24 = _slicedToArray(_yield$Object23, 1);
                    _err = _yield$Object24[0];

                    if (!_err) {
                      _context97.next = 20;
                      break;
                    }

                    console.error(basePath);
                    throw "COULD_NOT_CREATE_PREVIEW_FOLDER";

                  case 20:
                    path = "".concat(basePath, "/").concat(fileName);
                    _context97.next = 23;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_9__["to"])(this._nc.upload(path, fileData));

                  case 23:
                    _yield$Object25 = _context97.sent;
                    _yield$Object26 = _slicedToArray(_yield$Object25, 1);
                    err = _yield$Object26[0];

                    if (!err) {
                      _context97.next = 29;
                      break;
                    }

                    console.error('Path is', path);
                    throw "ERROR_UPLOADING_FOR_PREVIEW";

                  case 29:
                    _context97.next = 31;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_9__["to"])(this._nc.share(path));

                  case 31:
                    _yield$Object27 = _context97.sent;
                    _yield$Object28 = _slicedToArray(_yield$Object27, 2);
                    shareErr = _yield$Object28[0];
                    share = _yield$Object28[1];

                    if (!shareErr) {
                      _context97.next = 38;
                      break;
                    }

                    console.error(shareErr);
                    throw 'ERROR_SHARE';

                  case 38:
                    setTimeout(function () {
                      return _this66._nc.unshare(share.id);
                    }, 60 * 1000);
                    Api_1.openUrl(share.url);
                    return _context97.abrupt("return", null);

                  case 41:
                    if (!this._platform.is('desktop')) {
                      _context97.next = 49;
                      break;
                    }

                    _context97.next = 44;
                    return fileData.arrayBuffer();

                  case 44:
                    buf = _context97.sent;
                    blob = new Blob([buf], {
                      type: 'application/octet-stream'
                    });
                    _url = URL.createObjectURL(blob);
                    Api_1.openUrl(_url, fileName);
                    return _context97.abrupt("return", null);

                  case 49:
                    _context97.next = 51;
                    return new Promise(function (resolve, reject) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this66, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee96() {
                        var reader, r;
                        return regeneratorRuntime.wrap(function _callee96$(_context96) {
                          while (1) {
                            switch (_context96.prev = _context96.next) {
                              case 0:
                                reader = new FileReader();
                                r = reader['__zone_symbol__originalInstance'] || reader;

                                r.onloadend = function () {
                                  resolve(r.result);
                                };

                                r.onerror = function () {
                                  return reject(reader.error);
                                };

                                r.readAsBinaryString(fileData);

                              case 5:
                              case "end":
                                return _context96.stop();
                            }
                          }
                        }, _callee96);
                      }));
                    });

                  case 51:
                    content = _context97.sent;
                    _context97.next = 54;
                    return Filesystem.writeFile({
                      path: fileName,
                      data: btoa(content),
                      directory: where
                    });

                  case 54:
                    result = _context97.sent;
                    return _context97.abrupt("return", result);

                  case 56:
                  case "end":
                    return _context97.stop();
                }
              }
            }, _callee97, this);
          }));
        }
      }, {
        key: "getAttachmentContent",
        value: function getAttachmentContent(account, url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee98() {
            var user, data;
            return regeneratorRuntime.wrap(function _callee98$(_context98) {
              while (1) {
                switch (_context98.prev = _context98.next) {
                  case 0:
                    this._checkReady();

                    user = this._userByEmail(account.Email);
                    _context98.next = 4;
                    return fetch(url, {
                      headers: {
                        Authorization: "Bearer ".concat(user.token)
                      }
                    });

                  case 4:
                    data = _context98.sent;
                    return _context98.abrupt("return", data.blob());

                  case 6:
                  case "end":
                    return _context98.stop();
                }
              }
            }, _callee98, this);
          }));
        } // Patched

      }, {
        key: "downloadAttachment",
        value: function downloadAttachment(account, att, fileName, where, msg) {
          var preview = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee99() {
            return regeneratorRuntime.wrap(function _callee99$(_context99) {
              while (1) {
                switch (_context99.prev = _context99.next) {
                  case 0:
                    this._checkReady();

                    if (!(!att.Actions || !att.Actions.download)) {
                      _context99.next = 3;
                      break;
                    }

                    return _context99.abrupt("return", null);

                  case 3:
                    return _context99.abrupt("return", this.downloadUrl(account, "".concat(this._server.url, "/").concat(att.Actions.download), fileName, where, msg, preview));

                  case 4:
                  case "end":
                    return _context99.stop();
                }
              }
            }, _callee99, this);
          }));
        } // Patched

      }, {
        key: "uploadAttachment",
        value: function uploadAttachment(account, file) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee100() {
            return regeneratorRuntime.wrap(function _callee100$(_context100) {
              while (1) {
                switch (_context100.prev = _context100.next) {
                  case 0:
                    return _context100.abrupt("return", this._request(account.Email, 'Mail', 'UploadAttachment', {
                      AccountID: account.AccountID
                    }, _models__WEBPACK_IMPORTED_MODULE_9__["UploadResult"], file));

                  case 1:
                  case "end":
                    return _context100.stop();
                }
              }
            }, _callee100, this);
          }));
        }
      }, {
        key: "uploadData",
        value: function uploadData(account, data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee101() {
            return regeneratorRuntime.wrap(function _callee101$(_context101) {
              while (1) {
                switch (_context101.prev = _context101.next) {
                  case 0:
                    return _context101.abrupt("return", this._request(account.Email, 'Mail', 'UploadAttachment', {
                      AccountID: account.AccountID
                    }, _models__WEBPACK_IMPORTED_MODULE_9__["UploadResult"], data));

                  case 1:
                  case "end":
                    return _context101.stop();
                }
              }
            }, _callee101, this);
          }));
        }
      }, {
        key: "_setFoldersTypes",
        value: function _setFoldersTypes(account, folders) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee102() {
            var result;
            return regeneratorRuntime.wrap(function _callee102$(_context102) {
              while (1) {
                switch (_context102.prev = _context102.next) {
                  case 0:
                    _context102.next = 2;
                    return this._request(account.Email, 'Mail', 'GetFolders', {
                      AccountID: account.AccountID
                    }, Object);

                  case 2:
                    result = _context102.sent;

                    _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].setFolderTypes(result['Folders']['@Collection'], folders);

                    account.TypesSet = true;

                  case 5:
                  case "end":
                    return _context102.stop();
                }
              }
            }, _callee102, this);
          }));
        }
      }, {
        key: "_getFolders",
        value: function _getFolders(account) {
          return new Promise(function (resolve) {
            return account.Folders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (folders) {
              return resolve(folders);
            });
          });
        }
      }, {
        key: "folderByType",
        value: function folderByType(type, account) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee103() {
            var folders;
            return regeneratorRuntime.wrap(function _callee103$(_context103) {
              while (1) {
                switch (_context103.prev = _context103.next) {
                  case 0:
                    _context103.next = 2;
                    return this._getFolders(account);

                  case 2:
                    folders = _context103.sent;

                    if (account.TypesSet) {
                      _context103.next = 7;
                      break;
                    }

                    console.log('set folder types 2');
                    _context103.next = 7;
                    return this._setFoldersTypes(account, folders);

                  case 7:
                    return _context103.abrupt("return", _utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].folderByType(type, folders));

                  case 8:
                  case "end":
                    return _context103.stop();
                }
              }
            }, _callee103, this);
          }));
        }
      }, {
        key: "isSpamFolder",
        value: function isSpamFolder(f) {
          return f.Type == _models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Spam;
        } // Patched

      }, {
        key: "saveMessage",
        value: function saveMessage(account, msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee104() {
            var draft, params;
            return regeneratorRuntime.wrap(function _callee104$(_context104) {
              while (1) {
                switch (_context104.prev = _context104.next) {
                  case 0:
                    _context104.next = 2;
                    return this.folderByType(_models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Drafts, account);

                  case 2:
                    draft = _context104.sent;
                    params = msg;
                    params['AccountID'] = account.AccountID;
                    params['DraftFolder'] = draft.Id;
                    return _context104.abrupt("return", this._request(account.Email, 'Mail', 'SaveMessage', params, _models__WEBPACK_IMPORTED_MODULE_9__["SaveMessageResponse"]));

                  case 7:
                  case "end":
                    return _context104.stop();
                }
              }
            }, _callee104, this);
          }));
        } // Patched

      }, {
        key: "sendMessage",
        value: function sendMessage(account, msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee105() {
            var sent, draft, params;
            return regeneratorRuntime.wrap(function _callee105$(_context105) {
              while (1) {
                switch (_context105.prev = _context105.next) {
                  case 0:
                    _context105.next = 2;
                    return this.folderByType(_models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Sent, account);

                  case 2:
                    sent = _context105.sent;
                    _context105.next = 5;
                    return this.folderByType(_models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Drafts, account);

                  case 5:
                    draft = _context105.sent;
                    params = msg;
                    params['AccountID'] = account.AccountID;
                    params['DraftFolder'] = draft.Id;
                    params['SentFolder'] = sent.Id;
                    return _context105.abrupt("return", this._request(account.Email, 'Mail', 'SendMessage', params));

                  case 11:
                  case "end":
                    return _context105.stop();
                }
              }
            }, _callee105, this);
          }));
        } // Patched

      }, {
        key: "reloadAttachments",
        value: function reloadAttachments(account, attachments) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee106() {
            var result;
            return regeneratorRuntime.wrap(function _callee106$(_context106) {
              while (1) {
                switch (_context106.prev = _context106.next) {
                  case 0:
                    if (!(!Array.isArray(attachments) || attachments.length == 0)) {
                      _context106.next = 2;
                      break;
                    }

                    return _context106.abrupt("return");

                  case 2:
                    _context106.next = 4;
                    return this._request(account.Email, 'Mail', 'SaveAttachmentsAsTempFiles', {
                      Attachments: attachments.map(function (a) {
                        return a.Hash;
                      }),
                      AccountID: account.AccountID
                    }, Object);

                  case 4:
                    result = _context106.sent;
                    Object.keys(result).forEach(function (k) {
                      var a = attachments.find(function (a) {
                        return a.Hash == result[k];
                      });

                      if (!a) {
                        return;
                      }

                      a.TempName = k;
                    });

                  case 6:
                  case "end":
                    return _context106.stop();
                }
              }
            }, _callee106, this);
          }));
        } // Patched

      }, {
        key: "getOriginalDraftReply",
        value: function getOriginalDraftReply(account, msg) {
          var m = _models__WEBPACK_IMPORTED_MODULE_9__["ModelFactory"].instance({
            Uid: msg.DraftInfo[1],
            Folder: msg.DraftInfo[2]
          }, _models__WEBPACK_IMPORTED_MODULE_9__["Message"]);

          return this.getMessageBody(account, m);
        } // Patched

      }, {
        key: "moveOrDeleteMessages",
        value: function moveOrDeleteMessages(account, folder, messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee107() {
            var trash;
            return regeneratorRuntime.wrap(function _callee107$(_context107) {
              while (1) {
                switch (_context107.prev = _context107.next) {
                  case 0:
                    _context107.next = 2;
                    return this.folderByType(_models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Trash, account);

                  case 2:
                    trash = _context107.sent;

                    if (!(trash.Id == folder)) {
                      _context107.next = 8;
                      break;
                    }

                    _context107.next = 6;
                    return this.deleteMessages(account, folder, messages);

                  case 6:
                    _context107.next = 10;
                    break;

                  case 8:
                    _context107.next = 10;
                    return this.moveMessages(account, folder, trash.Id, messages);

                  case 10:
                  case "end":
                    return _context107.stop();
                }
              }
            }, _callee107, this);
          }));
        }
      }, {
        key: "archive",
        value: function archive(account, folder, messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee108() {
            return regeneratorRuntime.wrap(function _callee108$(_context108) {
              while (1) {
                switch (_context108.prev = _context108.next) {
                  case 0:
                    return _context108.abrupt("return", this.moveMessages(account, folder, _models__WEBPACK_IMPORTED_MODULE_9__["ALL_MAIL"], messages));

                  case 1:
                  case "end":
                    return _context108.stop();
                }
              }
            }, _callee108, this);
          }));
        } // Patched

      }, {
        key: "markSpam",
        value: function markSpam(account, folder, messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee109() {
            var spam, to;
            return regeneratorRuntime.wrap(function _callee109$(_context109) {
              while (1) {
                switch (_context109.prev = _context109.next) {
                  case 0:
                    _context109.next = 2;
                    return this.folderByType(_models__WEBPACK_IMPORTED_MODULE_9__["FolderType"].Spam, account);

                  case 2:
                    spam = _context109.sent;
                    to = spam.Id == folder ? 'inbox' : spam.Id;
                    _context109.next = 6;
                    return this.moveMessages(account, folder, to, messages);

                  case 6:
                  case "end":
                    return _context109.stop();
                }
              }
            }, _callee109, this);
          }));
        }
      }], [{
        key: "openUrl",
        value: function openUrl(url, fileName) {
          var a = document.createElement('a');

          if (fileName) {
            a.download = fileName;
          }

          a.target = '_blank';
          a.href = url;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }]);

      return Api;
    }(_base__WEBPACK_IMPORTED_MODULE_7__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_8__["NgInject"])(_settings__WEBPACK_IMPORTED_MODULE_10__["Settings"])], Api.prototype, "_settings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_8__["NgInject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"])], Api.prototype, "_platform", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_8__["NgInject"])(_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"])], Api.prototype, "_http", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_8__["NgInject"])(_nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_12__["Nextcloud"])], Api.prototype, "_nc", void 0);
    Api = Api_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Api);
    /***/
  },

  /***/
  "./src/ts/services/background.ts":
  /*!***************************************!*\
    !*** ./src/ts/services/background.ts ***!
    \***************************************/

  /*! exports provided: Background */

  /***/
  function srcTsServicesBackgroundTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Background", function () {
      return Background;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./settings */
    "./src/ts/services/settings.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");

    var MAX_BACKGROUND_RETRIES = 3;
    var MAX_INTERVAL = 60 * 1000 * 15;

    var Background = /*#__PURE__*/function (_base__WEBPACK_IMPORT39) {
      _inherits(Background, _base__WEBPACK_IMPORT39);

      var _super44 = _createSuper(Background);

      function Background() {
        var _this67;

        _classCallCheck(this, Background);

        _this67 = _super44.call(this);
        _this67._errors = 0;
        _this67._checkInterval = null;
        return _this67;
      }

      _createClass(Background, [{
        key: "configure",
        value: function configure(callback) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee111() {
            var _this68 = this;

            var obs;
            return regeneratorRuntime.wrap(function _callee111$(_context111) {
              while (1) {
                switch (_context111.prev = _context111.next) {
                  case 0:
                    this._callback = callback;
                    _context111.next = 3;
                    return this._settings.getCheckoutEmailInterval();

                  case 3:
                    this._checkInterval = _context111.sent;

                    if (!(this._checkInterval == 0)) {
                      _context111.next = 6;
                      break;
                    }

                    return _context111.abrupt("return");

                  case 6:
                    if (!this._platform.is('desktop')) {
                      _context111.next = 9;
                      break;
                    }

                    this._startMailsCheck();

                    return _context111.abrupt("return");

                  case 9:
                    this._backgroundTimer = window['BackgroundTimer'];
                    console.log('background timer is', this._backgroundTimer);

                    if (this._backgroundTimer) {
                      _context111.next = 13;
                      break;
                    }

                    return _context111.abrupt("return");

                  case 13:
                    this._backgroundTimer.onTimerEvent(this._backgroundRun.bind(this));

                    obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._platform.pause.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
                      return 'pause';
                    })), this._platform.resume.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
                      return 'resume';
                    })));
                    obs.subscribe(function (ev) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this68, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee110() {
                        return regeneratorRuntime.wrap(function _callee110$(_context110) {
                          while (1) {
                            switch (_context110.prev = _context110.next) {
                              case 0:
                                if (!(ev == 'resume')) {
                                  _context110.next = 7;
                                  break;
                                }

                                console.log('stopping the interval');

                                this._stopBackgroundTimer(); // this._zone.run(() => this._loadMessages({first: this._table.first}));


                                if (!(this._errors >= MAX_BACKGROUND_RETRIES)) {
                                  _context110.next = 7;
                                  break;
                                }

                                _context110.next = 6;
                                return this._settings.getCheckoutEmailInterval();

                              case 6:
                                this._checkInterval = _context110.sent;

                              case 7:
                                if (ev == 'pause') {
                                  this._startBackgroundTimer();
                                }

                              case 8:
                              case "end":
                                return _context110.stop();
                            }
                          }
                        }, _callee110, this);
                      }));
                    });

                  case 16:
                  case "end":
                    return _context111.stop();
                }
              }
            }, _callee111, this);
          }));
        }
      }, {
        key: "_startBackgroundTimer",
        value: function _startBackgroundTimer() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee112() {
            return regeneratorRuntime.wrap(function _callee112$(_context112) {
              while (1) {
                switch (_context112.prev = _context112.next) {
                  case 0:
                    this._stopBackgroundTimer();

                    console.log('starting the interval');

                    this._backgroundTimer.start(this._backgroundSuccess.bind(this), this._backgroundFailure.bind(this), {
                      timerInterval: this._checkInterval,
                      startOnBoot: false,
                      stopOnTerminate: true
                    });

                  case 3:
                  case "end":
                    return _context112.stop();
                }
              }
            }, _callee112, this);
          }));
        }
      }, {
        key: "_backgroundSuccess",
        value: function _backgroundSuccess() {
          console.log('executed background thing successfully');
        }
      }, {
        key: "_backgroundFailure",
        value: function _backgroundFailure(e) {
          console.log('error with background timer', e);
        }
      }, {
        key: "_stopBackgroundTimer",
        value: function _stopBackgroundTimer() {
          this._backgroundTimer.stop(this._backgroundSuccess.bind(this), this._backgroundFailure.bind(this));
        }
      }, {
        key: "_backgroundRun",
        value: function _backgroundRun() {
          var _this69 = this;

          return new Promise(function (resolve) {
            _this69._zone.run(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this69, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee113() {
                return regeneratorRuntime.wrap(function _callee113$(_context113) {
                  while (1) {
                    switch (_context113.prev = _context113.next) {
                      case 0:
                        _context113.next = 2;
                        return this._run();

                      case 2:
                        resolve();

                      case 3:
                      case "end":
                        return _context113.stop();
                    }
                  }
                }, _callee113, this);
              }));
            });
          });
        }
      }, {
        key: "_run",
        value: function _run() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee114() {
            var _yield$Object29, _yield$Object30, err;

            return regeneratorRuntime.wrap(function _callee114$(_context114) {
              while (1) {
                switch (_context114.prev = _context114.next) {
                  case 0:
                    _context114.next = 2;
                    return Object(_models__WEBPACK_IMPORTED_MODULE_8__["to"])(this._callback());

                  case 2:
                    _yield$Object29 = _context114.sent;
                    _yield$Object30 = _slicedToArray(_yield$Object29, 1);
                    err = _yield$Object30[0];
                    console.log('err is', err);

                    if (!(err && ++this._errors >= MAX_BACKGROUND_RETRIES && this._checkInterval < MAX_INTERVAL)) {
                      _context114.next = 12;
                      break;
                    }

                    console.log('setting the interval to max, due to 3 errors in a row', err);
                    this._checkInterval = MAX_INTERVAL;

                    this._startBackgroundTimer();

                    console.log('set done');
                    return _context114.abrupt("return");

                  case 12:
                    if (!err) {
                      _context114.next = 17;
                      break;
                    }

                    console.log('no action taken due to error', err);
                    return _context114.abrupt("return");

                  case 17:
                    if (!(this._errors >= MAX_BACKGROUND_RETRIES)) {
                      _context114.next = 24;
                      break;
                    }

                    _context114.next = 20;
                    return this._settings.getCheckoutEmailInterval();

                  case 20:
                    this._checkInterval = _context114.sent;
                    console.log('setting the interval back to', this._checkInterval, 'due to no error now');

                    this._startBackgroundTimer();

                    console.log('set done');

                  case 24:
                    this._errors = 0;

                  case 25:
                  case "end":
                    return _context114.stop();
                }
              }
            }, _callee114, this);
          }));
        }
      }, {
        key: "_startMailsCheck",
        value: function _startMailsCheck() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee115() {
            var _this70 = this;

            return regeneratorRuntime.wrap(function _callee115$(_context115) {
              while (1) {
                switch (_context115.prev = _context115.next) {
                  case 0:
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(this._checkInterval).subscribe(function () {
                      return _this70._callback();
                    });

                  case 1:
                  case "end":
                    return _context115.stop();
                }
              }
            }, _callee115, this);
          }));
        }
      }]);

      return Background;
    }(_base__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])], Background.prototype, "_zone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"])], Background.prototype, "_platform", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"])], Background.prototype, "_settings", void 0);
    Background = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Background);
    /***/
  },

  /***/
  "./src/ts/services/contacts.ts":
  /*!*************************************!*\
    !*** ./src/ts/services/contacts.ts ***!
    \*************************************/

  /*! exports provided: Contacts */

  /***/
  function srcTsServicesContactsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contacts", function () {
      return Contacts;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store */
    "./src/ts/services/store.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./api */
    "./src/ts/services/api.ts");

    var CONTACTS_KEY = 'contacts';

    var Contacts = /*#__PURE__*/function (_base__WEBPACK_IMPORT40) {
      _inherits(Contacts, _base__WEBPACK_IMPORT40);

      var _super45 = _createSuper(Contacts);

      function Contacts() {
        var _this71;

        _classCallCheck(this, Contacts);

        _this71 = _super45.call(this);
        _this71.contacts = [];

        _this71._init();

        return _this71;
      }

      _createClass(Contacts, [{
        key: "_getCollection",
        value: function _getCollection(a) {
          if (!a || !Array.isArray(a.Collection)) {
            return [];
          }

          return a.Collection;
        }
      }, {
        key: "_init",
        value: function _init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee116() {
            var _this72 = this;

            return regeneratorRuntime.wrap(function _callee116$(_context116) {
              while (1) {
                switch (_context116.prev = _context116.next) {
                  case 0:
                    _context116.next = 2;
                    return this._store.load(CONTACTS_KEY, _models__WEBPACK_IMPORTED_MODULE_5__["Contact"], []);

                  case 2:
                    this.contacts = _context116.sent;

                    this._api.messagesUpdated$.subscribe(function (messages) {
                      var list = messages.map(function (m) {
                        return _this72._getCollection(m.From).concat(_this72._getCollection(m.To)).concat(_this72._getCollection(m.Bcc)).concat(_this72._getCollection(m.Cc));
                      }).reduce(function (acc, v) {
                        return acc.concat(v);
                      }, []);

                      _this72.add(list);
                    });

                  case 4:
                  case "end":
                    return _context116.stop();
                }
              }
            }, _callee116, this);
          }));
        }
      }, {
        key: "add",
        value: function add(what) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee117() {
            var _this73 = this;

            return regeneratorRuntime.wrap(function _callee117$(_context117) {
              while (1) {
                switch (_context117.prev = _context117.next) {
                  case 0:
                    (Array.isArray(what) ? what : [what]).forEach(function (c) {
                      if (_this73.contacts.map(function (c) {
                        return c.Email;
                      }).indexOf(c.Email) == -1) {
                        _this73.contacts.push(c);

                        return;
                      }

                      var contact = _this73.contacts.find(function (_c) {
                        return _c.Email == c.Email;
                      });

                      contact.DisplayName = c.DisplayName;
                    });
                    _context117.next = 3;
                    return this._store.save(CONTACTS_KEY, this.contacts);

                  case 3:
                  case "end":
                    return _context117.stop();
                }
              }
            }, _callee117, this);
          }));
        }
      }]);

      return Contacts;
    }(_base__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_store__WEBPACK_IMPORTED_MODULE_4__["Store"])], Contacts.prototype, "_store", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_api__WEBPACK_IMPORTED_MODULE_6__["Api"])], Contacts.prototype, "_api", void 0);
    Contacts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Contacts);
    /***/
  },

  /***/
  "./src/ts/services/file.ts":
  /*!*********************************!*\
    !*** ./src/ts/services/file.ts ***!
    \*********************************/

  /*! exports provided: FileService */

  /***/
  function srcTsServicesFileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileService", function () {
      return FileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");

    var FileService = /*#__PURE__*/function (_base__WEBPACK_IMPORT41) {
      _inherits(FileService, _base__WEBPACK_IMPORT41);

      var _super46 = _createSuper(FileService);

      function FileService() {
        var _this74;

        _classCallCheck(this, FileService);

        _this74 = _super46.apply(this, arguments);
        _this74._callback = null;
        return _this74;
      }

      _createClass(FileService, [{
        key: "read",
        value: function read(f) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee119() {
            var reader, r;
            return regeneratorRuntime.wrap(function _callee119$(_context119) {
              while (1) {
                switch (_context119.prev = _context119.next) {
                  case 0:
                    reader = new FileReader();
                    r = reader['__zone_symbol__originalInstance'] || reader;
                    return _context119.abrupt("return", new Promise(function (resolve, reject) {
                      r.onloadend = function () {
                        resolve(this.result);
                      };

                      r.onerror = function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee118() {
                          return regeneratorRuntime.wrap(function _callee118$(_context118) {
                            while (1) {
                              switch (_context118.prev = _context118.next) {
                                case 0:
                                  reject(this.error);

                                case 1:
                                case "end":
                                  return _context118.stop();
                              }
                            }
                          }, _callee118, this);
                        }));
                      };

                      r.readAsBinaryString(f);
                    }));

                  case 3:
                  case "end":
                    return _context119.stop();
                }
              }
            }, _callee119);
          }));
        }
      }, {
        key: "get",
        value: function get(el) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee120() {
            var _this75 = this;

            var files, result;
            return regeneratorRuntime.wrap(function _callee120$(_context120) {
              while (1) {
                switch (_context120.prev = _context120.next) {
                  case 0:
                    if (this._callback) {
                      this._callback([]);
                    }

                    el.click();
                    _context120.next = 4;
                    return new Promise(function (resolve) {
                      _this75._callback = resolve;
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(el, 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
                        console.log('files are', el.files);
                        resolve(el.files);
                      });
                    });

                  case 4:
                    files = _context120.sent;
                    result = Array.from(files).map(function (f) {
                      return _models__WEBPACK_IMPORTED_MODULE_5__["ModelFactory"].instance({
                        content: f
                      }, _models__WEBPACK_IMPORTED_MODULE_5__["FileResult"]);
                    });
                    el.value = '';
                    return _context120.abrupt("return", result);

                  case 8:
                  case "end":
                    return _context120.stop();
                }
              }
            }, _callee120, this);
          }));
        }
      }, {
        key: "serialize",
        value: function serialize(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee121() {
            var result, fileKey, f, content;
            return regeneratorRuntime.wrap(function _callee121$(_context121) {
              while (1) {
                switch (_context121.prev = _context121.next) {
                  case 0:
                    result = new _models__WEBPACK_IMPORTED_MODULE_5__["FormDataSerialized"]();
                    result.boundary = '------WebKitFormBoundaryt32h1LxhGa2YJU6X';
                    result.data = '';
                    form.forEach(function (value, key) {
                      if (value instanceof File) {
                        fileKey = key;
                        return;
                      }

                      result.data += "".concat(result.boundary, "\r\nContent-Disposition: form-data; name=\"").concat(key, "\"\r\n\r\n").concat(value, "\r\n");
                    });
                    f = form.get(fileKey);
                    _context121.next = 7;
                    return this.read(f);

                  case 7:
                    content = _context121.sent;
                    result.data += "".concat(result.boundary, "\r\nContent-Disposition: form-data; name=\"").concat(fileKey, "\"; filename=\"").concat(f.name, "\"\r\nContent-Type: ").concat(f.type, "\r\n\r\n").concat(content, "\r\n").concat(result.boundary, "--\r\n");
                    return _context121.abrupt("return", result);

                  case 10:
                  case "end":
                    return _context121.stop();
                }
              }
            }, _callee121, this);
          }));
        }
      }]);

      return FileService;
    }(_base__WEBPACK_IMPORTED_MODULE_4__["BaseClass"]);

    FileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FileService);
    /***/
  },

  /***/
  "./src/ts/services/layout.ts":
  /*!***********************************!*\
    !*** ./src/ts/services/layout.ts ***!
    \***********************************/

  /*! exports provided: Layout */

  /***/
  function srcTsServicesLayoutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Layout", function () {
      return Layout;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Layout = /*#__PURE__*/function (_base__WEBPACK_IMPORT42) {
      _inherits(Layout, _base__WEBPACK_IMPORT42);

      var _super47 = _createSuper(Layout);

      function Layout() {
        _classCallCheck(this, Layout);

        return _super47.apply(this, arguments);
      }

      _createClass(Layout, [{
        key: "isMobile",
        get: function get() {
          return this._platform.is('desktop') && this._platform.width() < 1024 || this._platform.is('mobile');
        }
      }]);

      return Layout;
    }(_base__WEBPACK_IMPORTED_MODULE_1__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"])], Layout.prototype, "_platform", void 0);
    Layout = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], Layout);
    /***/
  },

  /***/
  "./src/ts/services/logging.ts":
  /*!************************************!*\
    !*** ./src/ts/services/logging.ts ***!
    \************************************/

  /*! exports provided: Logger, LoggingInstance */

  /***/
  function srcTsServicesLoggingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Logger", function () {
      return Logger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggingInstance", function () {
      return LoggingInstance;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");

    var Logger = /*#__PURE__*/function () {
      function Logger() {
        _classCallCheck(this, Logger);

        this.level = typeof _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].logLevel == 'undefined' ? _models__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].ERROR : _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].logLevel;
        this.includeStack = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].logStack;
        this.logged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      } // private _sysLog: LoggingService;


      _createClass(Logger, [{
        key: "_log",
        value: function _log(level) {
          if (level >= this.level) {
            var stack = [];

            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {} else {
              if (this.includeStack) {
                stack = Error().stack.split("\n");
                console.trace();
                console.log(stack);
              }

              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              console.log.apply(console, args[0]);
              this.logged.emit({
                stack: stack,
                args: args,
                level: level
              });
            }
          }
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log('error is', error);

          this._log(_models__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].ERROR, [error.message, (error.stack || '').split("\n")]);
        }
      }, {
        key: "debug",
        value: function debug() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          this._log(_models__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].DEBUG, args);
        }
      }, {
        key: "info",
        value: function info() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          this._log(_models__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].INFO, args);
        }
      }, {
        key: "error",
        value: function error() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          this._log(_models__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].ERROR, args);
        }
      }]);

      return Logger;
    }();

    var LoggingInstance = function LoggingInstance() {
      _classCallCheck(this, LoggingInstance);
    };

    LoggingInstance.logger = new Logger();
    /***/
  },

  /***/
  "./src/ts/services/mails.ts":
  /*!**********************************!*\
    !*** ./src/ts/services/mails.ts ***!
    \**********************************/

  /*! exports provided: Mails */

  /***/
  function srcTsServicesMailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mails", function () {
      return Mails;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./api */
    "./src/ts/services/api.ts");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./store */
    "./src/ts/services/store.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./utils */
    "./src/ts/services/utils.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LocalNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].LocalNotifications;

    var Mails = /*#__PURE__*/function (_base__WEBPACK_IMPORT43) {
      _inherits(Mails, _base__WEBPACK_IMPORT43);

      var _super48 = _createSuper(Mails);

      function Mails() {
        var _this76;

        _classCallCheck(this, Mails);

        _this76 = _super48.call(this);
        _this76.refresh$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this76.refreshed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this76.newEmails$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this76.folderChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this76.currentAccount$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        _this76._accounts = null;
        _this76._subscription = null;

        _this76.setCurrentAccount(null);

        LocalNotifications.addListener('localNotificationActionPerformed', function (n) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this76), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee122() {
            var pending;
            return regeneratorRuntime.wrap(function _callee122$(_context122) {
              while (1) {
                switch (_context122.prev = _context122.next) {
                  case 0:
                    this._messageClicked(n.notification.extra);

                    _context122.next = 3;
                    return LocalNotifications.getPending();

                  case 3:
                    pending = _context122.sent;

                    if (pending.notifications.length > 0) {
                      LocalNotifications.cancel(pending);
                    }

                  case 5:
                  case "end":
                    return _context122.stop();
                }
              }
            }, _callee122, this);
          }));
        });
        return _this76;
      }

      _createClass(Mails, [{
        key: "accountById",
        value: function accountById(id) {
          if (!Array.isArray(this._accounts)) {
            return null;
          }

          return this._accounts.find(function (a) {
            return a.AccountID == id;
          }) || null;
        }
      }, {
        key: "_retrieveFolderById",
        value: function _retrieveFolderById(id, folders) {
          if (folders.length == 0) {
            return null;
          }

          var folder = folders.find(function (f) {
            return f.Id.toLowerCase() == id.toLowerCase();
          });

          if (folder) {
            return folder;
          }

          var subFolders = folders.map(function (f) {
            return f.SubFolders;
          }).reduce(function (acc, v) {
            return acc.concat(v);
          }, []);
          return this._retrieveFolderById(id, subFolders);
        }
      }, {
        key: "folderById$",
        value: function folderById$(account, id) {
          var _this77 = this;

          return account.Folders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (folders) {
            return _this77._retrieveFolderById(id, folders);
          }));
        }
      }, {
        key: "setCurrentAccount",
        value: function setCurrentAccount(email) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee123() {
            var _this78 = this;

            return regeneratorRuntime.wrap(function _callee123$(_context123) {
              while (1) {
                switch (_context123.prev = _context123.next) {
                  case 0:
                    if (!(email != null)) {
                      _context123.next = 3;
                      break;
                    }

                    _context123.next = 3;
                    return this._store.setCurrentAccount(email);

                  case 3:
                    return _context123.abrupt("return", new Promise(function (resolve) {
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_this78._store.getCurrentAccount()), _this78.accounts$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            email = _ref2[0],
                            accounts = _ref2[1];

                        return accounts.length > 0 ? accounts.find(function (a) {
                          return a.Email == email || email == _models__WEBPACK_IMPORTED_MODULE_6__["COMBINED_ACCOUNT_ID"] && a.AccountID == email;
                        }) || accounts[0] : null;
                      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (account) {
                        return _this78.currentAccount$.next(account);
                      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                        return resolve();
                      })).toPromise();
                    }));

                  case 4:
                  case "end":
                    return _context123.stop();
                }
              }
            }, _callee123, this);
          }));
        }
      }, {
        key: "validate",
        value: function validate(addresses) {
          if (!Array.isArray(addresses)) {
            return true;
          }

          return addresses.reduce(function (acc, v) {
            return !acc ? acc : v.Email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
          }, true);
        }
      }, {
        key: "_messageClicked",
        value: function _messageClicked(m) {
          this._router.navigateByUrl("readmail:".concat(m.Uid));
        }
      }, {
        key: "_getFrom",
        value: function _getFrom(m) {
          var from = m.From && Array.isArray(m.From.Collection) && m.From.Collection.length > 0 ? m.From.Collection[0] : null;

          if (!from) {
            return 'New message';
          }

          return from.DisplayName || from.Email;
        }
      }, {
        key: "_doNotify",
        value: function _doNotify(messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee124() {
            var _this79 = this;

            var callback, _perm, notifications, perm;

            return regeneratorRuntime.wrap(function _callee124$(_context124) {
              while (1) {
                switch (_context124.prev = _context124.next) {
                  case 0:
                    callback = this._messageClicked.bind(this);

                    if (!this._platform.is('desktop')) {
                      _context124.next = 11;
                      break;
                    }

                    if (!(window.Notification.permission != 'granted')) {
                      _context124.next = 8;
                      break;
                    }

                    _context124.next = 5;
                    return window.Notification.requestPermission();

                  case 5:
                    _perm = _context124.sent;

                    if (!(_perm != 'granted')) {
                      _context124.next = 8;
                      break;
                    }

                    return _context124.abrupt("return");

                  case 8:
                    notifications = [];
                    messages.forEach(function (m) {
                      var x = new window.Notification(_this79._getFrom(m), {
                        body: m.Subject
                      });

                      x.onclick = function () {
                        callback(m);
                        notifications.forEach(function (n) {
                          return n.close();
                        });
                      };

                      notifications.push(x);
                    });
                    return _context124.abrupt("return");

                  case 11:
                    _context124.next = 13;
                    return LocalNotifications.requestPermission();

                  case 13:
                    perm = _context124.sent;

                    if (perm.granted) {
                      _context124.next = 16;
                      break;
                    }

                    return _context124.abrupt("return");

                  case 16:
                    _context124.next = 18;
                    return LocalNotifications.schedule({
                      notifications: messages.map(function (m) {
                        return {
                          title: _this79._getFrom(m),
                          body: m.Subject,
                          id: parseInt(m.Uid),
                          extra: m
                        };
                      })
                    });

                  case 18:
                  case "end":
                    return _context124.stop();
                }
              }
            }, _callee124, this);
          }));
        }
      }, {
        key: "showNotifications",
        value: function showNotifications(lastMsg, messages) {
          var ts = lastMsg && lastMsg.TimeStampInUTC || 1;

          if (messages[0].TimeStampInUTC <= ts) {
            return;
          }

          this._doNotify(messages.filter(function (m) {
            return m.TimeStampInUTC > ts;
          }));
        }
      }, {
        key: "messageInComposedFolder",
        value: function messageInComposedFolder(msg, folder) {
          if (!_utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].isCombinedFolder(folder.Id)) {
            return msg.Folder == folder.Id;
          }

          if (!this._accounts) {
            return false;
          }

          var a = this._accounts.find(function (a) {
            return a.AccountID == msg.AccountID;
          });

          if (!a) {
            return false;
          }

          var f = a.FoldersOrder.find(function (f) {
            return f.Id == msg.Folder;
          });

          if (!f) {
            return false;
          }

          return f.Type == folder.Type;
        }
      }, {
        key: "accounts$",
        get: function get() {
          var _this80 = this;

          if (this._subscription) {
            return this._subscription;
          }

          this._subscription = this._api.ready$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (result) {
            return result;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_this80._api.getAccounts());
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (accounts) {
            return _this80._accounts = accounts;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
          return this._subscription;
        }
      }]);

      return Mails;
    }(_base__WEBPACK_IMPORTED_MODULE_4__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_api__WEBPACK_IMPORTED_MODULE_7__["Api"])], Mails.prototype, "_api", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_store__WEBPACK_IMPORTED_MODULE_8__["Store"])], Mails.prototype, "_store", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"])], Mails.prototype, "_platform", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_5__["NgInject"])(_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"])], Mails.prototype, "_router", void 0);
    Mails = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Mails);
    /***/
  },

  /***/
  "./src/ts/services/navigation.ts":
  /*!***************************************!*\
    !*** ./src/ts/services/navigation.ts ***!
    \***************************************/

  /*! exports provided: Navigation */

  /***/
  function srcTsServicesNavigationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Navigation", function () {
      return Navigation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");

    var Navigation = /*#__PURE__*/function (_base__WEBPACK_IMPORT44) {
      _inherits(Navigation, _base__WEBPACK_IMPORT44);

      var _super49 = _createSuper(Navigation);

      function Navigation() {
        var _this81;

        _classCallCheck(this, Navigation);

        _this81 = _super49.call(this);
        _this81.routeData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        _this81.routeParams$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        _this81.backButton$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        _this81._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (ev) {
          return ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
        })).subscribe(function () {
          _this81.routeData$.next(_this81._route.root.firstChild.snapshot.data);

          _this81.routeParams$.next(_this81._route.firstChild.snapshot.params);
        });

        document.addEventListener('backbutton', function (ev) {
          ev.stopPropagation();
          ev.preventDefault();

          _this81._zone.run(function () {
            _this81.backButton$.emit();
          });
        }, false);
        return _this81;
      }

      _createClass(Navigation, [{
        key: "connectToRoute",
        value: function connectToRoute(key) {
          return this.routeParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (p) {
            return Object.keys(p).indexOf(key) != -1;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) {
            return p[key];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
        }
      }]);

      return Navigation;
    }(_base__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])], Navigation.prototype, "_router", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])], Navigation.prototype, "_route", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["NgInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])], Navigation.prototype, "_zone", void 0);
    Navigation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Navigation);
    /***/
  },

  /***/
  "./src/ts/services/route-reuse.ts":
  /*!****************************************!*\
    !*** ./src/ts/services/route-reuse.ts ***!
    \****************************************/

  /*! exports provided: DefaultRouteReuseStrategy */

  /***/
  function srcTsServicesRouteReuseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultRouteReuseStrategy", function () {
      return DefaultRouteReuseStrategy;
    });

    var DefaultRouteReuseStrategy = /*#__PURE__*/function () {
      function DefaultRouteReuseStrategy() {
        _classCallCheck(this, DefaultRouteReuseStrategy);
      }

      _createClass(DefaultRouteReuseStrategy, [{
        key: "shouldDetach",
        value: function shouldDetach(route) {
          return false;
        }
      }, {
        key: "store",
        value: function store(route, detachedTree) {}
      }, {
        key: "shouldAttach",
        value: function shouldAttach(route) {
          return false;
        }
      }, {
        key: "retrieve",
        value: function retrieve(route) {
          return null;
        }
      }, {
        key: "shouldReuseRoute",
        value: function shouldReuseRoute(future, curr) {
          return true;
        }
      }]);

      return DefaultRouteReuseStrategy;
    }();
    /***/

  },

  /***/
  "./src/ts/services/settings.ts":
  /*!*************************************!*\
    !*** ./src/ts/services/settings.ts ***!
    \*************************************/

  /*! exports provided: Settings */

  /***/
  function srcTsServicesSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../decorators */
    "./src/ts/decorators.ts");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store */
    "./src/ts/services/store.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _nextcloud_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../nextcloud/models */
    "./src/ts/nextcloud/models.ts");
    /* harmony import */


    var _nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../nextcloud/nextcloud */
    "./src/ts/nextcloud/nextcloud.ts");

    var SERVER_KEY = 'server';
    var PAGE_SIZE_KEY = 'page-size';
    var MESSAGE_TYPE_KEY = 'message-type';
    var CHECK_INTERVAL = 'check-emails-interval';
    var NEXTCLOUD_CREDENTIALS = 'nextcloud-credentials';
    var CLOUD_PREVIEW = 'preview-in-cloud';
    var NEXTCLOUD_URL = 'nextcloud-url';
    var THEME = 'theme';
    var EMAIL_INTERVAL_OPTIONS = [{
      label: '1 minute',
      value: 60 * 1000
    }, {
      label: '5 minutes',
      value: 60 * 1000 * 5
    }, {
      label: '10 minutes',
      value: 60 * 1000 * 10
    }, {
      label: '15 minutes',
      value: 60 * 1000 * 15
    }, {
      label: 'Never',
      value: 0
    }];
    var MESSAGE_TYPE_OPTIONS = [{
      label: 'Html',
      value: 'HTML'
    }, {
      label: 'Plain text',
      value: 'TEXT'
    }];
    var PAGE_SIZE = [{
      label: '20 messages',
      value: 20
    }, {
      label: '50 messages',
      value: 50
    }, {
      label: '100 messages',
      value: 100
    }];
    var THEME_OPTIONS = [{
      label: 'Light',
      value: 'light'
    }, {
      label: 'Dark',
      value: 'dark'
    }];

    var Settings = /*#__PURE__*/function (_base__WEBPACK_IMPORT45) {
      _inherits(Settings, _base__WEBPACK_IMPORT45);

      var _super50 = _createSuper(Settings);

      function Settings() {
        var _this82;

        _classCallCheck(this, Settings);

        _this82 = _super50.call(this);
        _this82.serverSet$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        _this82.initTheme();

        _this82._initNextcloud();

        return _this82;
      }

      _createClass(Settings, [{
        key: "initTheme",
        value: function initTheme() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee125() {
            var theme;
            return regeneratorRuntime.wrap(function _callee125$(_context125) {
              while (1) {
                switch (_context125.prev = _context125.next) {
                  case 0:
                    _context125.next = 2;
                    return this.getTheme();

                  case 2:
                    theme = _context125.sent;

                    if (!(theme == 'dark')) {
                      _context125.next = 7;
                      break;
                    }

                    document.body.style.backgroundColor = '#323232';
                    document.querySelector('#theme-link').setAttribute('href', 'assets/themes/luna-pink/theme.css');
                    return _context125.abrupt("return");

                  case 7:
                    document.body.style.backgroundColor = 'inherit';
                    document.querySelector('#theme-link').setAttribute('href', 'assets/themes/nova-light/theme.css');

                  case 9:
                  case "end":
                    return _context125.stop();
                }
              }
            }, _callee125, this);
          }));
        }
      }, {
        key: "_initNextcloud",
        value: function _initNextcloud() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee126() {
            var c;
            return regeneratorRuntime.wrap(function _callee126$(_context126) {
              while (1) {
                switch (_context126.prev = _context126.next) {
                  case 0:
                    _context126.next = 2;
                    return this.getNextcloudLogin();

                  case 2:
                    c = _context126.sent;

                    if (c) {
                      _context126.next = 5;
                      break;
                    }

                    return _context126.abrupt("return");

                  case 5:
                    this._nc.credentials = c;

                  case 6:
                  case "end":
                    return _context126.stop();
                }
              }
            }, _callee126, this);
          }));
        }
      }, {
        key: "getServer",
        value: function getServer() {
          return this._store.load(SERVER_KEY, _models__WEBPACK_IMPORTED_MODULE_5__["ServerSetting"]);
        }
      }, {
        key: "setServer",
        value: function setServer(servers) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee127() {
            var result;
            return regeneratorRuntime.wrap(function _callee127$(_context127) {
              while (1) {
                switch (_context127.prev = _context127.next) {
                  case 0:
                    servers.users.forEach(function (u) {
                      return u.pass = null;
                    });
                    _context127.next = 3;
                    return this._store.save(SERVER_KEY, servers);

                  case 3:
                    result = _context127.sent;
                    this.serverSet$.emit();
                    return _context127.abrupt("return", result);

                  case 6:
                  case "end":
                    return _context127.stop();
                }
              }
            }, _callee127, this);
          }));
        }
      }, {
        key: "getPageSize",
        value: function getPageSize() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee128() {
            return regeneratorRuntime.wrap(function _callee128$(_context128) {
              while (1) {
                switch (_context128.prev = _context128.next) {
                  case 0:
                    return _context128.abrupt("return", this._store.load(PAGE_SIZE_KEY, undefined, 20));

                  case 1:
                  case "end":
                    return _context128.stop();
                }
              }
            }, _callee128, this);
          }));
        }
      }, {
        key: "setPageSize",
        value: function setPageSize(s) {
          return this._store.save(PAGE_SIZE_KEY, s);
        }
      }, {
        key: "getMessageType",
        value: function getMessageType() {
          return this._store.load(MESSAGE_TYPE_KEY, undefined, 'HTML');
        }
      }, {
        key: "setMessageType",
        value: function setMessageType(type) {
          return this._store.save(MESSAGE_TYPE_KEY, type);
        }
      }, {
        key: "getCheckoutEmailInterval",
        value: function getCheckoutEmailInterval() {
          return this._store.load(CHECK_INTERVAL, undefined, 60 * 1000 * 15);
        }
      }, {
        key: "setCheckoutEmailInterval",
        value: function setCheckoutEmailInterval(value) {
          return this._store.save(CHECK_INTERVAL, value);
        }
      }, {
        key: "getNextcloudLogin",
        value: function getNextcloudLogin() {
          return this._store.load(NEXTCLOUD_CREDENTIALS, _nextcloud_models__WEBPACK_IMPORTED_MODULE_6__["NextcloudCredentials"]);
        }
      }, {
        key: "setNextcloudLogin",
        value: function setNextcloudLogin(x) {
          return this._store.save(NEXTCLOUD_CREDENTIALS, x);
        }
      }, {
        key: "getNextcloudUrl",
        value: function getNextcloudUrl() {
          return this._store.load(NEXTCLOUD_URL);
        }
      }, {
        key: "setNextcloudUrl",
        value: function setNextcloudUrl(x) {
          return this._store.save(NEXTCLOUD_URL, x);
        }
      }, {
        key: "getTheme",
        value: function getTheme() {
          return this._store.load(THEME);
        }
      }, {
        key: "setTheme",
        value: function setTheme(x) {
          return this._store.save(THEME, x);
        }
      }, {
        key: "getCloudPreview",
        value: function getCloudPreview() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee129() {
            var result;
            return regeneratorRuntime.wrap(function _callee129$(_context129) {
              while (1) {
                switch (_context129.prev = _context129.next) {
                  case 0:
                    _context129.next = 2;
                    return this._store.load(CLOUD_PREVIEW);

                  case 2:
                    result = _context129.sent;

                    if (!(result == null)) {
                      _context129.next = 5;
                      break;
                    }

                    return _context129.abrupt("return", false);

                  case 5:
                    return _context129.abrupt("return", result);

                  case 6:
                  case "end":
                    return _context129.stop();
                }
              }
            }, _callee129, this);
          }));
        }
      }, {
        key: "setCloudPreview",
        value: function setCloudPreview(x) {
          return this._store.save(CLOUD_PREVIEW, x);
        }
      }, {
        key: "_toAppSetting",
        value: function _toAppSetting(x, options) {
          var result = new _models__WEBPACK_IMPORTED_MODULE_5__["AppSetting"]();
          result.model = options.find(function (o) {
            return o.value == x;
          });
          result.options = options;
          return result;
        }
      }, {
        key: "saveSettings",
        value: function saveSettings(settings) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee130() {
            var p;
            return regeneratorRuntime.wrap(function _callee130$(_context130) {
              while (1) {
                switch (_context130.prev = _context130.next) {
                  case 0:
                    p = [];
                    p.push(this.setServer(settings.server));
                    p.push(this.setCheckoutEmailInterval(settings.checkEmailInterval.model.value));
                    p.push(this.setMessageType(settings.composeType.model.value));
                    p.push(this.setPageSize(settings.pageSize.model.value));
                    p.push(this.setNextcloudUrl(settings.nextcloudUrl));
                    p.push(this.setCloudPreview(settings.previewInCloud));
                    p.push(this.setTheme(settings.theme.model.value));
                    _context130.next = 10;
                    return Promise.all(p);

                  case 10:
                    this.initTheme();

                  case 11:
                  case "end":
                    return _context130.stop();
                }
              }
            }, _callee130, this);
          }));
        }
      }, {
        key: "needAuthenticating",
        value: function needAuthenticating(server) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee131() {
            var current;
            return regeneratorRuntime.wrap(function _callee131$(_context131) {
              while (1) {
                switch (_context131.prev = _context131.next) {
                  case 0:
                    if (server) {
                      _context131.next = 2;
                      break;
                    }

                    return _context131.abrupt("return", []);

                  case 2:
                    _context131.next = 4;
                    return this.getServer();

                  case 4:
                    current = _context131.sent;

                    if (!(!current || current.url != server.url)) {
                      _context131.next = 7;
                      break;
                    }

                    return _context131.abrupt("return", server.users);

                  case 7:
                    return _context131.abrupt("return", server.users.filter(function (u) {
                      return !u.token || u.pass;
                    }));

                  case 8:
                  case "end":
                    return _context131.stop();
                }
              }
            }, _callee131, this);
          }));
        }
      }, {
        key: "appSettings",
        get: function get() {
          var _this83 = this;

          return new Promise(function (resolve) {
            var model = new _models__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]();
            var p = [];
            p.push(_this83.getCheckoutEmailInterval().then(function (x) {
              return model.checkEmailInterval = _this83._toAppSetting(x, EMAIL_INTERVAL_OPTIONS);
            }));
            p.push(_this83.getMessageType().then(function (x) {
              return model.composeType = _this83._toAppSetting(x, MESSAGE_TYPE_OPTIONS);
            }));
            p.push(_this83.getPageSize().then(function (x) {
              return model.pageSize = _this83._toAppSetting(x, PAGE_SIZE);
            }));
            p.push(_this83.getServer().then(function (x) {
              return model.server = x;
            }));
            p.push(_this83.getNextcloudUrl().then(function (x) {
              return model.nextcloudUrl = x;
            }));
            p.push(_this83.getCloudPreview().then(function (x) {
              return model.previewInCloud = x;
            }));
            p.push(_this83.getTheme().then(function (x) {
              return model.theme = _this83._toAppSetting(x, THEME_OPTIONS);
            }));
            Promise.all(p).then(function () {
              return resolve(model);
            });
          });
        }
      }]);

      return Settings;
    }(_base__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_store__WEBPACK_IMPORTED_MODULE_4__["Store"])], Settings.prototype, "_store", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_decorators__WEBPACK_IMPORTED_MODULE_3__["NgInject"])(_nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_7__["Nextcloud"])], Settings.prototype, "_nc", void 0);
    Settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Settings);
    /***/
  },

  /***/
  "./src/ts/services/store.ts":
  /*!**********************************!*\
    !*** ./src/ts/services/store.ts ***!
    \**********************************/

  /*! exports provided: Store */

  /***/
  function srcTsServicesStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Store", function () {
      return Store;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base */
    "./src/ts/base.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");
    /* harmony import */


    var _nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../nextcloud/nextcloud */
    "./src/ts/nextcloud/nextcloud.ts");
    /* harmony import */


    var _nextcloud_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../nextcloud/storage */
    "./src/ts/nextcloud/storage.ts");

    var Storage = _nextcloud_nextcloud__WEBPACK_IMPORTED_MODULE_5__["Nextcloud"].isOC ? _nextcloud_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] : _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;
    var PREFIX = 'afterlogic-client-';
    var CURRENT_ACCOUNT = 'current-account';
    var FOLDER_SEARCH = 'last-folder-searched';

    var Store = /*#__PURE__*/function (_base__WEBPACK_IMPORT46) {
      _inherits(Store, _base__WEBPACK_IMPORT46);

      var _super51 = _createSuper(Store);

      function Store() {
        _classCallCheck(this, Store);

        return _super51.apply(this, arguments);
      }

      _createClass(Store, [{
        key: "load",
        value: function load(key, type, defValue) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee132() {
            var result;
            return regeneratorRuntime.wrap(function _callee132$(_context132) {
              while (1) {
                switch (_context132.prev = _context132.next) {
                  case 0:
                    _context132.next = 2;
                    return Storage.get({
                      key: PREFIX + key
                    });

                  case 2:
                    result = _context132.sent;

                    if (result.value) {
                      _context132.next = 5;
                      break;
                    }

                    return _context132.abrupt("return", defValue ? defValue : null);

                  case 5:
                    return _context132.abrupt("return", _models__WEBPACK_IMPORTED_MODULE_4__["ModelFactory"].instance(JSON.parse(result.value).data, type));

                  case 6:
                  case "end":
                    return _context132.stop();
                }
              }
            }, _callee132);
          }));
        }
      }, {
        key: "save",
        value: function save(key, data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee133() {
            return regeneratorRuntime.wrap(function _callee133$(_context133) {
              while (1) {
                switch (_context133.prev = _context133.next) {
                  case 0:
                    return _context133.abrupt("return", Storage.set({
                      key: PREFIX + key,
                      value: JSON.stringify({
                        data: data,
                        date: new Date()
                      })
                    }));

                  case 1:
                  case "end":
                    return _context133.stop();
                }
              }
            }, _callee133);
          }));
        }
      }, {
        key: "getCurrentAccount",
        value: function getCurrentAccount() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee134() {
            return regeneratorRuntime.wrap(function _callee134$(_context134) {
              while (1) {
                switch (_context134.prev = _context134.next) {
                  case 0:
                    return _context134.abrupt("return", this.load(CURRENT_ACCOUNT));

                  case 1:
                  case "end":
                    return _context134.stop();
                }
              }
            }, _callee134, this);
          }));
        }
      }, {
        key: "setCurrentAccount",
        value: function setCurrentAccount(email) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee135() {
            return regeneratorRuntime.wrap(function _callee135$(_context135) {
              while (1) {
                switch (_context135.prev = _context135.next) {
                  case 0:
                    return _context135.abrupt("return", this.save(CURRENT_ACCOUNT, email));

                  case 1:
                  case "end":
                    return _context135.stop();
                }
              }
            }, _callee135, this);
          }));
        }
      }, {
        key: "getFolderSearch",
        value: function getFolderSearch() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee136() {
            return regeneratorRuntime.wrap(function _callee136$(_context136) {
              while (1) {
                switch (_context136.prev = _context136.next) {
                  case 0:
                    return _context136.abrupt("return", this.load(FOLDER_SEARCH));

                  case 1:
                  case "end":
                    return _context136.stop();
                }
              }
            }, _callee136, this);
          }));
        }
      }, {
        key: "setFolderSearch",
        value: function setFolderSearch(f) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee137() {
            return regeneratorRuntime.wrap(function _callee137$(_context137) {
              while (1) {
                switch (_context137.prev = _context137.next) {
                  case 0:
                    this.save(FOLDER_SEARCH, f);

                  case 1:
                  case "end":
                    return _context137.stop();
                }
              }
            }, _callee137, this);
          }));
        }
      }]);

      return Store;
    }(_base__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]);

    Store = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Store);
    /***/
  },

  /***/
  "./src/ts/services/utils.ts":
  /*!**********************************!*\
    !*** ./src/ts/services/utils.ts ***!
    \**********************************/

  /*! exports provided: Utils */

  /***/
  function srcTsServicesUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../models */
    "./src/ts/models.ts");

    var Utils = /*#__PURE__*/function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "avatarColor",
        value: function avatarColor(contact) {
          var name = contact.Email;
          var hash = 0;

          for (var i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
          }

          var h = hash % 360;
          return 'hsl(' + h + ', 50%, 50%)';
        }
      }, {
        key: "extractCollection",
        value: function extractCollection(c) {
          if (!c || !Array.isArray(c.Collection)) {
            return [];
          }

          return c.Collection;
        }
      }, {
        key: "userByEmail",
        value: function userByEmail(users, email) {
          return users.find(function (u) {
            return u.email == email;
          });
        }
      }, {
        key: "_searchFolder",
        value: function _searchFolder(folders, predicate) {
          if (!Array.isArray(folders) || folders.length == 0) {
            return null;
          }

          var result = folders.find(predicate);
          return result || Utils._searchFolder(folders.map(function (f) {
            return f.SubFolders;
          }).reduce(function (acc, v) {
            return acc.concat(v);
          }, []), predicate);
        }
      }, {
        key: "folderByType",
        value: function folderByType(type, folders) {
          return Utils._searchFolder(folders, function (f) {
            return f.Type == type;
          });
        }
      }, {
        key: "setFolderTypes",
        value: function setFolderTypes(data, folders) {
          if (data.length == 0) {
            return;
          }

          data.forEach(function (_f) {
            var f = Utils.folderById(folders, _f['FullName']);

            if (!f) {
              return;
            }

            f.Type = _f['Type'];
          });
          this.setFolderTypes(data.filter(function (d) {
            return !!d['SubFolders'] && Array.isArray(d['SubFolders']['@Collection']);
          }).map(function (d) {
            return d['SubFolders']['@Collection'];
          }).reduce(function (acc, v) {
            return acc.concat(v);
          }, []), folders);
        }
      }, {
        key: "folderById",
        value: function folderById(folders, id) {
          return Utils._searchFolder(folders, function (f) {
            return f.Id == id;
          });
        }
      }, {
        key: "isDraftReply",
        value: function isDraftReply(msg) {
          return !!msg.DraftUid && msg.DraftInfo && Array.isArray(msg.DraftInfo) && msg.DraftInfo.length >= 3;
        }
      }, {
        key: "emptySearch",
        value: function emptySearch(model) {
          return !model.from && !model.to && !model.text && !model.till && !model.since && !model.simple && !model.subject && !model.attachments;
        }
      }, {
        key: "buildUserMenu",
        value: function buildUserMenu(server, callback) {
          if (!server || !Array.isArray(server.users)) {
            return [];
          }

          var f = function f(ev) {
            return callback(ev.item);
          };

          var result = server.users.map(function (u) {
            return {
              label: u.email,
              icon: "fa fa-user",
              command: f,
              id: u.email
            };
          });

          if (server.users.length > 1) {
            result.push({
              label: 'Combined view',
              icon: 'fa fa-users',
              command: f,
              id: _models__WEBPACK_IMPORTED_MODULE_0__["COMBINED_ACCOUNT_ID"]
            });
          }

          result.push({
            label: 'Settings',
            icon: 'fa fa-cog',
            command: f,
            id: 'settings'
          });
          return result;
        }
      }, {
        key: "isComposedResult",
        value: function isComposedResult(x) {
          return Array.isArray(x) && x.length > 0 && x[0] instanceof _models__WEBPACK_IMPORTED_MODULE_0__["ComposedResult"];
        }
      }, {
        key: "isCombinedFolder",
        value: function isCombinedFolder(id) {
          if (!id.match(/^[0-9]+$/)) {
            return false;
          }

          return [_models__WEBPACK_IMPORTED_MODULE_0__["FolderType"].Sent, _models__WEBPACK_IMPORTED_MODULE_0__["FolderType"].Spam, _models__WEBPACK_IMPORTED_MODULE_0__["FolderType"].Inbox, _models__WEBPACK_IMPORTED_MODULE_0__["FolderType"].Trash, _models__WEBPACK_IMPORTED_MODULE_0__["FolderType"].Drafts].indexOf(parseInt(id)) != -1;
        }
      }, {
        key: "foldersFlatList",
        value: function foldersFlatList(folders, result) {
          result.push.apply(result, folders);
          folders.forEach(function (f) {
            return Utils.foldersFlatList(f.SubFolders, result);
          });
        }
      }, {
        key: "foldersFlatList2",
        value: function foldersFlatList2(folders) {
          var result = [];
          folders.forEach(function (f) {
            result.push(f);
            result.push.apply(result, _toConsumableArray(Utils.foldersFlatList2(f.SubFolders)));
          });
          return result;
        }
      }, {
        key: "foldersDiff",
        value: function foldersDiff(f1, f2) {
          if (f1.toLowerCase() == f2.toLowerCase()) {
            return false;
          }

          if (f1.toLowerCase() == "inbox" && f2.toLowerCase() == _models__WEBPACK_IMPORTED_MODULE_0__["FolderType"].Inbox.toString()) {
            return false;
          }

          return f1.toLowerCase() != f2.toLowerCase();
        }
      }, {
        key: "transformMessageBody",
        value: function transformMessageBody(clientWidth, el) {
          if (el.scrollWidth <= clientWidth) {
            return null;
          }

          var scale = clientWidth / el.scrollWidth;
          var x = (el.scrollWidth - clientWidth) / 2;
          var height = el.scrollHeight * scale;
          var y = (el.scrollHeight - height) / 2;
          return "transform: scale(".concat(scale, ") translate(-").concat(x, "px, -").concat(y, "px); max-height: ").concat(height, "px");
        }
        /**
         * Returns an array. First result is the txt being searched
         * and the second one is the folder (if it is set in the criterias)
         */

      }, {
        key: "searchFolder",
        value: function searchFolder(txt) {
          if (!txt) {
            return ['', null];
          }

          var p = /^(.*) folder:"([^"]+)"$/;

          if (!txt.match(p)) {
            return [txt, null];
          }

          return [txt.replace(p, '$1'), txt.replace(p, '$2')];
        }
      }]);

      return Utils;
    }();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/lixa/programs/afterlogic-client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map