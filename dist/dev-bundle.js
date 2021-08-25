/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modals */ \"./src/modules/modals.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changeImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changeImage */ \"./src/modules/changeImage.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  // Timer\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__.default)('#timer', '2021-08-29'); // Menu\n\n  _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1___default()(); //Modals\n\n  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__.default)('.popup-btn', '.popup', '.popup-content', '.popup-close'); // Tabs\n\n  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)('.service-header', '.service-header-tab', '.service-tab', 'active');\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); // Change image\n\n  (0,_modules_changeImage__WEBPACK_IMPORTED_MODULE_5__.default)(); // Calculator\n\n  (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__.default)('.calc-block', '.calc-type', '.calc-square', '.calc-count', '.calc-day', '#total', 100); // SendForm\n\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)();\n});\n\n//# sourceURL=webpack://glo3d/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator(parentCalc, typeCalc, squareCalc, countCalc, dayCalc, totalValue) {\n  var price = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 100;\n  var calcBlock = document.querySelector(parentCalc),\n      calcType = document.querySelector(typeCalc),\n      calcSquare = document.querySelector(squareCalc),\n      calcCount = document.querySelector(countCalc),\n      calcDay = document.querySelector(dayCalc),\n      calcTotalValue = document.querySelector(totalValue); // Calc validation\n\n  var validateCalc = function validateCalc(selector) {\n    var input = document.querySelector(selector);\n    input.addEventListener('input', function () {\n      //const target = e.target;\n      // if (target.matches('[type=\"text\"]')) {\n      //     target.value = target.value.replace(/\\D/g, '');\n      // }\n      if (input.value.match(/\\D/g)) {\n        input.style.border = '2px solid red';\n      } else {\n        input.style.border = '1px solid #19b5fe';\n      }\n    });\n  };\n\n  validateCalc('.calc-square');\n  validateCalc('.calc-count');\n  validateCalc('.calc-day');\n\n  var countSum = function countSum() {\n    var total = 0,\n        calcCountValue = 1,\n        calcDayValue = 1;\n    var calcTypeValue = calcType.options[calcType.selectedIndex].value,\n        calcSquareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      calcCountValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      calcDayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      calcDayValue *= 1.5;\n    }\n\n    if (calcTypeValue && calcSquareValue) {\n      total = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\n      var countSumId,\n          count = 0;\n\n      var _countSum = function _countSum() {\n        countSumId = requestAnimationFrame(_countSum);\n        count += total / 20;\n\n        if (count < total) {\n          calcTotalValue.textContent = Math.round(count);\n        } else {\n          cancelAnimationFrame(countSumId);\n          calcTotalValue.textContent = total;\n          count = 0;\n        }\n      };\n\n      countSumId = requestAnimationFrame(_countSum);\n    }\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target && target === calcType || target === calcSquare || target === calcCount || target === calcDay) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://glo3d/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/changeImage.js":
/*!************************************!*\
  !*** ./src/modules/changeImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changeImage = function changeImage() {\n  var commandPhoto = document.querySelectorAll('.command__photo');\n  commandPhoto.forEach(function (photo) {\n    photo.addEventListener('mouseover', function (event) {\n      var _ref = [event.target.dataset.img, event.target.src];\n      event.target.src = _ref[0];\n      event.target.dataset.img = _ref[1];\n    });\n  });\n  commandPhoto.forEach(function (photo) {\n    photo.addEventListener('mouseout', function (event) {\n      var _ref2 = [event.target.src, event.target.dataset.img];\n      event.target.dataset.img = _ref2[0];\n      event.target.src = _ref2[1];\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeImage);\n\n//# sourceURL=webpack://glo3d/./src/modules/changeImage.js?");

/***/ }),

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modals = function modals(triggerBtnSelector, modalSelector, modalContentSelector, closeBtnSelector) {\n  var triggerBtn = document.querySelectorAll(triggerBtnSelector),\n      modal = document.querySelector(modalSelector),\n      modalContent = document.querySelector(modalContentSelector),\n      closeBtn = document.querySelector(closeBtnSelector);\n\n  var openModal = function openModal() {\n    modal.style.display = 'block';\n    modalContent.style.position.left = '50%';\n    document.body.style.overflow = 'hidden';\n  };\n\n  function animate(_ref) {\n    var timing = _ref.timing,\n        draw = _ref.draw,\n        duration = _ref.duration;\n    var start = performance.now();\n    requestAnimationFrame(function animate(time) {\n      // timeFraction изменяется от 0 до 1\n      var timeFraction = (time - start) / duration;\n\n      if (timeFraction > 1) {\n        timeFraction = 1;\n      } // вычисление текущего состояния анимации\n\n\n      var progress = timing(timeFraction);\n      draw(progress); // отрисовать её\n\n      if (timeFraction < 1) {\n        requestAnimationFrame(animate);\n      }\n    });\n  }\n\n  triggerBtn.forEach(function (trigger) {\n    trigger.addEventListener('click', function (e) {\n      if (e.target) {\n        e.preventDefault();\n      }\n\n      openModal();\n\n      if (window.innerWidth > 768) {\n        animate({\n          duration: 500,\n          timing: function timing(timeFraction) {\n            return timeFraction;\n          },\n          draw: function draw(progress) {\n            modal.style.opacity = progress;\n          }\n        });\n        modal.style.visibility = 'visible';\n      }\n    });\n  });\n\n  var closeModal = function closeModal() {\n    modal.style.display = 'none';\n    modalContent.style.position.left = '-50%';\n    document.body.style.overflow = '';\n  };\n\n  closeBtn.addEventListener('click', function () {\n    document.body.style.overflow = '';\n\n    if (window.innerWidth > 768) {\n      window.setTimeout(function () {\n        return modal.style.visibility = 'hidden';\n      }, 500);\n      animate({\n        duration: 500,\n        timing: function timing(timeFraction) {\n          return timeFraction;\n        },\n        draw: function draw(progress) {\n          modal.style.opacity = 1 - progress;\n        }\n      });\n    } else {\n      closeModal();\n    }\n  }); //При клике на подложку - исчезаeт.\n\n  modal.addEventListener('click', function (e) {\n    if (e.target === modal) {\n      closeModal();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);\n\n//# sourceURL=webpack://glo3d/./src/modules/modals.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar sendForm = function sendForm() {\n  var forms = document.querySelectorAll('form'),\n      inputs = document.querySelectorAll('[data-input=\"input\"]'),\n      tel = document.querySelector('[type=\"tel\"]'),\n      email = document.querySelector('[type=\"email\"]'),\n      name = document.querySelector('[type=\"text\"]'),\n      text = document.querySelector('[placeholder=\"Ваше сообщение\"]');\n  tel.addEventListener('input', function (e) {\n    var target = e.target;\n    target.value = target.value.replace(/[^+0-9]/g, '');\n  });\n  email.addEventListener('input', function (e) {\n    var target = e.target;\n    target.value = target.value.replace(/[^@a-zA-Z0-9.-_]/g, '');\n  });\n  name.addEventListener('input', function (e) {\n    var target = e.target;\n    target.value = target.value.replace(/[^а-яА-Я ]/g, '');\n  });\n\n  if (text) {\n    text.addEventListener('input', function (e) {\n      var target = e.target;\n      target.value = target.value.replace(/[^а-яА-Я0-9 ,.!]/g, '');\n    });\n  }\n\n  var message = {\n    loading: 'images/form/spinner.svg',\n    success: 'Спасибо! Скоро мы с вами свяжемся',\n    failure: 'Что-то пошло не так...'\n  };\n\n  var clearInputs = function clearInputs() {\n    inputs.forEach(function (input) {\n      input.value = '';\n    });\n  }; // eslint-disable-next-line space-before-function-paren\n\n\n  var postData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, data) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(url, {\n                method: 'POST',\n                headers: {\n                  'Content-type': 'application-json'\n                },\n                body: data\n              });\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function postData(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var bindPostData = function bindPostData(form) {\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      var statusMessage = document.createElement('img');\n      statusMessage.src = message.loading;\n      statusMessage.style.cssText = \"\\n                    display: block;\\n                    margin: 0 auto;\\n                \";\n      form.append(statusMessage);\n      var formData = new FormData(form);\n      var json = JSON.stringify(Object.fromEntries(formData.entries()));\n      postData('server.php', json).then(function (data) {\n        console.log(data);\n        statusMessage.textContent = message.success;\n      })[\"catch\"](function () {\n        return statusMessage.textContent = message.failure;\n      })[\"finally\"](function () {\n        clearInputs();\n        statusMessage.remove();\n      });\n    });\n  };\n\n  forms.forEach(function (form) {\n    bindPostData(form);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://glo3d/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      slider = document.querySelector('.portfolio-content'),\n      allDots = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval;\n\n  var addDots = function addDots() {\n    slide.forEach(function () {\n      var li = document.createElement('li');\n      li.classList.add('dot');\n      allDots.append(li);\n    });\n  };\n\n  addDots();\n  var dot = document.querySelectorAll('.dot');\n\n  var prevSlide = function prevSlide(element, index, strClass) {\n    element[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(element, index, strClass) {\n    element[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  }; // Переключение слайдов по нажатию кнопки или точки\n\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://glo3d/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs(headerSelector, tabSelector, contentSelector, activeClass) {\n  var tabHeader = document.querySelector(headerSelector),\n      tabs = document.querySelectorAll(tabSelector),\n      tabContents = document.querySelectorAll(contentSelector);\n\n  var hideTabContent = function hideTabContent() {\n    tabContents.forEach(function (tabContent) {\n      return tabContent.style.display = 'none';\n    });\n    tabs.forEach(function (tab) {\n      return tab.classList.remove(activeClass);\n    });\n  };\n\n  var showTabContent = function showTabContent() {\n    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    tabContents[i].style.display = 'flex';\n    tabs[i].classList.add(activeClass);\n  };\n\n  hideTabContent();\n  showTabContent();\n  tabHeader.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target && target.classList.contains(tabSelector.replace(/\\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\\./, ''))) {\n      tabs.forEach(function (tab, i) {\n        if (target === tab || target.parentNode === tab) {\n          hideTabContent();\n          showTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://glo3d/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar timer = function timer(idSelector, deadline) {\n  var getTimeRemaining = function getTimeRemaining(endTime) {\n    var timeDifference = Date.parse(endTime) - Date.parse(new Date()),\n        seconds = Math.floor(timeDifference / 1000 % 60),\n        minutes = Math.floor(timeDifference / 1000 / 60 % 60),\n        hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24);\n    return {\n      'total': timeDifference,\n      seconds: seconds,\n      minutes: minutes,\n      hours: hours\n    };\n  };\n\n  var addZero = function addZero(num) {\n    if (num >= 0 && num < 10) {\n      return \"0\".concat(num);\n    } else {\n      return num;\n    }\n  };\n\n  var setClock = function setClock(selector, endTime) {\n    var timer = document.querySelector(selector),\n        hours = timer.querySelector('#timer-hours'),\n        minutes = timer.querySelector('#timer-minutes'),\n        seconds = timer.querySelector('#timer-seconds'),\n        timeInterval = setInterval(updateClock, 1000);\n    updateClock(); // Stops blinking layout (Мигание верстки) when update the page\n\n    function updateClock() {\n      var remainingTime = getTimeRemaining(endTime);\n      hours.textContent = addZero(remainingTime.hours);\n      minutes.textContent = addZero(remainingTime.minutes);\n      seconds.textContent = addZero(remainingTime.seconds);\n\n      if (remainingTime.total <= 0) {\n        hours.textContent = '00';\n        minutes.textContent = '00';\n        seconds.textContent = '00';\n        clearInterval(timeInterval);\n      }\n    }\n  };\n\n  setClock(idSelector, deadline);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://glo3d/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ (() => {

eval("var toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu'),\n      closeBtn = document.querySelector('.close-btn');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target === closeBtn || target.closest('menu>ul')) {\n      handlerMenu();\n    } else if (target.closest('.menu')) {\n      handlerMenu();\n    } else if (target !== menu) {\n      menu.classList.remove('active-menu');\n    }\n  });\n};\n\ntoggleMenu();\n\n//# sourceURL=webpack://glo3d/./src/modules/toggleMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;