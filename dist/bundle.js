/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Courier New', Courier, monospace;\n}\n\nbody {\n  background-color: hsl(0, 0%, 100%);\n}\n\nbutton,\nlabel,\ninput,\nselect {\n  padding: 3px;\n  margin: 3px;\n}\n\nbutton {\n  width: 80px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n}\n\nh2 {\n  text-align: center;\n}\n\ntable {\n  border: 1px solid hsl(140, 100%, 25%);\n  border-radius: 3px;\n  text-align: center;\n}\n\ntable {\n  margin: auto;\n}\n\ntd {\n  text-align: center;\n}\n\nth {\n  width: 220px;\n}\n\n.container {\n  width: 900px;\n  margin: auto;\n  color: hsl(0, 0%, 5%);\n}\n\n.content {\n  background-color: hsl(140, 100%, 95%);\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 3px 1px lightgrey;\n}\n\n.forms {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.header {\n  background-color: bisque;\n  text-align: center;\n  border-radius: 5px;\n  box-shadow: 2px 2px 3px 1px lightgrey;\n}\n\n.hide {\n  display: none;\n}\n\n.nav {\n  background-color: lightskyblue;\n}\n\n#project-form {\n  width: 30%;\n}\n\n#todo-form {\n  width: 30%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/item.js":
/*!********************************!*\
  !*** ./src/components/item.js ***!
  \********************************/
/*! exports provided: item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "item", function() { return item; });
const item = (title, description, dueDate, priority, project) => {
  return {
    title,
    description,
    dueDate,
    priority,
    project,
  };
};




/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/*! exports provided: project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return project; });
const project = (projectName) => {
  return {
    name: projectName,
    todos: [],
  };
};




/***/ }),

/***/ "./src/data/projects.js":
/*!******************************!*\
  !*** ./src/data/projects.js ***!
  \******************************/
/*! exports provided: projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
const projects = [
  {
    name: 'Default',
    todos: [
      {
        title: 'Read book',
        description: 'Relax and read',
        dueDate: '2020-12-15',
        priority: 'normal',
        project: 'default',
      },
      {
        title: 'Eat pizza',
        description: 'Lunch with Jason and Mark',
        dueDate: '2020-12-15',
        priority: 'urgent',
        project: 'default',
      },
      {
        title: 'Have a beer',
        description: 'After work is done',
        dueDate: '2020-12-15',
        priority: 'minimal',
        project: 'default',
      },
    ],
  },
];



// const projects = [
//   {
//     name: 'Default',
//     todos: [
//       {
//         title: 'test',
//         description: 'test',
//         dueDate: 'test',
//         priority: 'normal',
//         project: 'test'
//       },
//     ],
//   },
// ];


/***/ }),

/***/ "./src/events/newProject.js":
/*!**********************************!*\
  !*** ./src/events/newProject.js ***!
  \**********************************/
/*! exports provided: newProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProject", function() { return newProject; });
/* harmony import */ var _renders_renderProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renders/renderProject */ "./src/renders/renderProject.js");
/* harmony import */ var _renders_renderProjectOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renders/renderProjectOption */ "./src/renders/renderProjectOption.js");
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/project */ "./src/components/project.js");
/* harmony import */ var _helpers_clearForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/clearForm */ "./src/helpers/clearForm.js");
/* harmony import */ var _helpers_addProjectToState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/addProjectToState */ "./src/helpers/addProjectToState.js");






function newProject(e, firstProject) {
  const form = document.querySelector('#project-form');
  const formName = form.name.value;

  const defaultName = 'Untitled';
  const name = formName || firstProject || defaultName;
  const newProject = Object(_components_project__WEBPACK_IMPORTED_MODULE_2__["project"])(name);
  
  Object(_helpers_addProjectToState__WEBPACK_IMPORTED_MODULE_4__["addProjectToState"])(newProject);
  Object(_renders_renderProjectOption__WEBPACK_IMPORTED_MODULE_1__["renderProjectOption"])(newProject.name);
  Object(_renders_renderProject__WEBPACK_IMPORTED_MODULE_0__["renderProject"])(newProject.name);

  Object(_helpers_clearForm__WEBPACK_IMPORTED_MODULE_3__["clearForm"])(form);
}




/***/ }),

/***/ "./src/events/newTodo.js":
/*!*******************************!*\
  !*** ./src/events/newTodo.js ***!
  \*******************************/
/*! exports provided: newTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTodo", function() { return newTodo; });
/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/item */ "./src/components/item.js");
/* harmony import */ var _renders_renderTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renders/renderTodo */ "./src/renders/renderTodo.js");
/* harmony import */ var _helpers_clearForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/clearForm */ "./src/helpers/clearForm.js");
/* harmony import */ var _helpers_addTodoToState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/addTodoToState */ "./src/helpers/addTodoToState.js");
/* harmony import */ var _helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/capitalizeFirstLetter */ "./src/helpers/capitalizeFirstLetter.js");
/* harmony import */ var _helpers_toSpaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/toSpaces */ "./src/helpers/toSpaces.js");







// BASE VARIABLES

function newTodo() {
  const form = document.querySelector('#todo-form');

  // AVAILABLE IF NEEDED FOR CHOOSING WHEN TO MODIFY VALUES
  // const formattedPriority = capitalizeFirstLetter(form.priority.value);
  // const formattedProject = capitalizeFirstLetter(toSpaces(form.project.value));

  const todo = Object(_components_item__WEBPACK_IMPORTED_MODULE_0__["item"])(
    form.title.value,
    form.description.value,
    form.due.value,
    form.priority.value,
    form.project.value
  );

  Object(_helpers_addTodoToState__WEBPACK_IMPORTED_MODULE_3__["addTodoToState"])(todo);
  Object(_renders_renderTodo__WEBPACK_IMPORTED_MODULE_1__["renderTodo"])(todo);
  Object(_helpers_clearForm__WEBPACK_IMPORTED_MODULE_2__["clearForm"])(form);
}




/***/ }),

/***/ "./src/helpers/addProjectToState.js":
/*!******************************************!*\
  !*** ./src/helpers/addProjectToState.js ***!
  \******************************************/
/*! exports provided: addProjectToState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProjectToState", function() { return addProjectToState; });
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/projects */ "./src/data/projects.js");


function addProjectToState(project) {
  // console.log('project: ' + project.name);
  // projects = [...projects, project]; // THESE ARE CAUSING REFERENCE ERRORS. UNKNOWN WHY.
  // projects = projects.concat(project);
  _data_projects__WEBPACK_IMPORTED_MODULE_0__["projects"].push(project);
  console.log(_data_projects__WEBPACK_IMPORTED_MODULE_0__["projects"]);
}




/***/ }),

/***/ "./src/helpers/addTodoToState.js":
/*!***************************************!*\
  !*** ./src/helpers/addTodoToState.js ***!
  \***************************************/
/*! exports provided: addTodoToState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodoToState", function() { return addTodoToState; });
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/projects */ "./src/data/projects.js");
/* harmony import */ var _capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capitalizeFirstLetter */ "./src/helpers/capitalizeFirstLetter.js");
/* harmony import */ var _toSpaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toSpaces */ "./src/helpers/toSpaces.js");




function addTodoToState(todo) {
  // FIND INDEX OF PROJECT THAT TODO WILL BE INSERTED INTO
  const objIndex = _data_projects__WEBPACK_IMPORTED_MODULE_0__["projects"].findIndex((project) => {
    return project.name == Object(_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_1__["capitalizeFirstLetter"])(Object(_toSpaces__WEBPACK_IMPORTED_MODULE_2__["toSpaces"])(todo.project));
  });
  console.log(objIndex); // SHOWS CORRECTLY

  const newTodos = [..._data_projects__WEBPACK_IMPORTED_MODULE_0__["projects"][objIndex].todos, todo];
  _data_projects__WEBPACK_IMPORTED_MODULE_0__["projects"][objIndex].todos = newTodos;
  console.log('*********************');
}



// OPTIONS FOR INSERTING INTO OBJECTS IN ARRAYS
// MAP
// const newProjects = projects.map(p =>
//   p.value === 'jquery-ui'
//     ? { ...p, desc: 'new description' }
//     : p
// );

// IN THEORY MORE EFFICIENT WITH SLICE
// const objIndex = projects.findIndex(obj => obj.value === 'jquery-ui');

// // make new object of updated object.
// const updatedObj = { ...projects[objIndex], desc: 'updated desc value'};

// // make final new array of objects by combining updated object.
// const updatedProjects = [
//   ...projects.slice(0, objIndex),
//   updatedObj,
//   ...projects.slice(objIndex + 1),
// ];


/***/ }),

/***/ "./src/helpers/capitalizeFirstLetter.js":
/*!**********************************************!*\
  !*** ./src/helpers/capitalizeFirstLetter.js ***!
  \**********************************************/
/*! exports provided: capitalizeFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}




/***/ }),

/***/ "./src/helpers/clearForm.js":
/*!**********************************!*\
  !*** ./src/helpers/clearForm.js ***!
  \**********************************/
/*! exports provided: clearForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearForm", function() { return clearForm; });
// SET FORM VALUES TO EMPTY STRINGS IGNORING THE SUBMIT BUTTON
function clearForm(form) {
  for (let i = 0; i < form.length - 1; i++) {
    form[i].value = '';
  }
  if (form.priority) {
    form.priority.value = 'normal';
  }
  if (form.project) {
    form.project.value = 'default';
  }
}




/***/ }),

/***/ "./src/helpers/toKebabCase.js":
/*!************************************!*\
  !*** ./src/helpers/toKebabCase.js ***!
  \************************************/
/*! exports provided: toKebabCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toKebabCase", function() { return toKebabCase; });
function toKebabCase(string) {
  return string.split(' ').join('-');
}




/***/ }),

/***/ "./src/helpers/toSpaces.js":
/*!*********************************!*\
  !*** ./src/helpers/toSpaces.js ***!
  \*********************************/
/*! exports provided: toSpaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSpaces", function() { return toSpaces; });
function toSpaces(string) {
  return string.split('-').join(' ');
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_newTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/newTodo */ "./src/events/newTodo.js");
/* harmony import */ var _events_newProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/newProject */ "./src/events/newProject.js");
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/projects */ "./src/data/projects.js");
/* harmony import */ var _renders_renderProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renders/renderProject */ "./src/renders/renderProject.js");
/* harmony import */ var _renders_renderProjectOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renders/renderProjectOption */ "./src/renders/renderProjectOption.js");
/* harmony import */ var _renders_renderTodo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renders/renderTodo */ "./src/renders/renderTodo.js");
// IMPORTS








const starter = _data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"][0].name;

// TODO BUTTON REFERENCE AND EVENT LISTENER WITH CALLED FUNCTION
document.querySelector('.new-todo').addEventListener('click', _events_newTodo__WEBPACK_IMPORTED_MODULE_1__["newTodo"]);
document.querySelector('.new-project').addEventListener('click', _events_newProject__WEBPACK_IMPORTED_MODULE_2__["newProject"]);

// INITIALIZE PAGE
Object(_renders_renderProjectOption__WEBPACK_IMPORTED_MODULE_5__["renderProjectOption"])(starter);
Object(_renders_renderProject__WEBPACK_IMPORTED_MODULE_4__["renderProject"])(starter);

// RENDER DUMMY DATA
_data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"][0].todos.forEach((todo) => {
  Object(_renders_renderTodo__WEBPACK_IMPORTED_MODULE_6__["renderTodo"])(todo);
});

// -----------------------------------------------------------------------------
// BRAINSTORMING AND PLANNING
// ----------------------------------------------------------------------------
// STRUCTURE FOR LOCALSTORAGE?
// [
//   {
//     name: 'something',
//     todos: [
//       {
//         item1: 'details',
//         item2: 'details',
//         item3: 'details'
//       },
//       {...},
//       {...}
//     ]
//   },
//   {next project}
// ]

// RESTRUCTURE TO USE OBJECT FORMAT FOR PROPER STORAGE INTO LOCAL STORAGE
// const projects = [
//   {
//     name: 'Default',
//     todos: [
//       {
//         title: 'test',
//         description: 'test',
//         due: 'test',
//         priority: 'normal',
//       },
//     ],
//   },
// ];
// console.log(projects[0].todos[0].priority);


/***/ }),

/***/ "./src/renders/helpers/buildProjectHeader.js":
/*!***************************************************!*\
  !*** ./src/renders/helpers/buildProjectHeader.js ***!
  \***************************************************/
/*! exports provided: buildProjectHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildProjectHeader", function() { return buildProjectHeader; });
function buildProjectHeader(projectName) {
  const header = document.createElement('h2');
  header.textContent = projectName;
  return header;
}




/***/ }),

/***/ "./src/renders/helpers/buildTableBody.js":
/*!***********************************************!*\
  !*** ./src/renders/helpers/buildTableBody.js ***!
  \***********************************************/
/*! exports provided: buildTableBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTableBody", function() { return buildTableBody; });
function buildTableBody() {
  const cellNames = ['DUMMY', 'DUMMY', 'DUMMY', 'DUMMY'];
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  cellNames.forEach((name) => {
    const td = document.createElement('td');
    td.textContent = name;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
  return tbody;
}




/***/ }),

/***/ "./src/renders/helpers/buildTableHeaders.js":
/*!**************************************************!*\
  !*** ./src/renders/helpers/buildTableHeaders.js ***!
  \**************************************************/
/*! exports provided: buildTableHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTableHeaders", function() { return buildTableHeaders; });
function buildTableHeaders() {
  const cellNames = ['Title', 'Due'];
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  cellNames.forEach((name) => {
    const th = document.createElement('th');
    th.textContent = name;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  return thead;
}




/***/ }),

/***/ "./src/renders/renderProject.js":
/*!**************************************!*\
  !*** ./src/renders/renderProject.js ***!
  \**************************************/
/*! exports provided: renderProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProject", function() { return renderProject; });
/* harmony import */ var _helpers_buildProjectHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/buildProjectHeader */ "./src/renders/helpers/buildProjectHeader.js");
/* harmony import */ var _helpers_buildTableHeaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/buildTableHeaders */ "./src/renders/helpers/buildTableHeaders.js");
/* harmony import */ var _helpers_buildTableBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/buildTableBody */ "./src/renders/helpers/buildTableBody.js");
/* harmony import */ var _helpers_toKebabCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toKebabCase */ "./src/helpers/toKebabCase.js");





function renderProject(projectName) {
  const projects = document.querySelector('.projects');

  const project = document.createElement('div');
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  project.classList.add('project');
  project.setAttribute('id', `${Object(_helpers_toKebabCase__WEBPACK_IMPORTED_MODULE_3__["toKebabCase"])(projectName.toLowerCase())}`);
  table.classList.add('list');

  table.appendChild(Object(_helpers_buildTableHeaders__WEBPACK_IMPORTED_MODULE_1__["buildTableHeaders"])());
  table.appendChild(tbody);
  project.appendChild(Object(_helpers_buildProjectHeader__WEBPACK_IMPORTED_MODULE_0__["buildProjectHeader"])(projectName));
  project.appendChild(table);
  projects.appendChild(project);
  // buildTableBody(); // CAN BE REMOVED AT ANY TIME WE DON'T NEED DUMMY DATA ANY MORE
}




/***/ }),

/***/ "./src/renders/renderProjectOption.js":
/*!********************************************!*\
  !*** ./src/renders/renderProjectOption.js ***!
  \********************************************/
/*! exports provided: renderProjectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProjectOption", function() { return renderProjectOption; });
/* harmony import */ var _helpers_toKebabCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/toKebabCase */ "./src/helpers/toKebabCase.js");


function renderProjectOption(projectName) {
  if (projectName === 'Default') {
    return;
  }
  const select = document.querySelector('#project');
  const option = document.createElement('option');

  option.value = Object(_helpers_toKebabCase__WEBPACK_IMPORTED_MODULE_0__["toKebabCase"])(projectName.toLowerCase());
  option.textContent = projectName;
  select.appendChild(option);
}




/***/ }),

/***/ "./src/renders/renderTodo.js":
/*!***********************************!*\
  !*** ./src/renders/renderTodo.js ***!
  \***********************************/
/*! exports provided: renderTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTodo", function() { return renderTodo; });
function renderTodo(obj) {
  const tbody = document.querySelector(`#${obj.project} tbody`);

  const tr = document.createElement('tr');
  const title = document.createElement('td');
  const dueDate = document.createElement('td');

  title.textContent = obj.title;
  dueDate.textContent = obj.dueDate;

  tr.appendChild(title);
  tr.appendChild(dueDate);

  tbody.appendChild(tr);
}




/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map