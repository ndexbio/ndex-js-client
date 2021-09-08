(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/axios/lib/helpers/bind.js
  var require_bind = __commonJS({
    "node_modules/axios/lib/helpers/bind.js"(exports, module) {
      "use strict";
      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };
    }
  });

  // node_modules/axios/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/axios/lib/utils.js"(exports, module) {
      "use strict";
      var bind = require_bind();
      var toString = Object.prototype.toString;
      function isArray(val) {
        return toString.call(val) === "[object Array]";
      }
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
      }
      function isArrayBuffer(val) {
        return toString.call(val) === "[object ArrayBuffer]";
      }
      function isFormData(val) {
        return typeof FormData !== "undefined" && val instanceof FormData;
      }
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }
        return result;
      }
      function isString(val) {
        return typeof val === "string";
      }
      function isNumber(val) {
        return typeof val === "number";
      }
      function isObject(val) {
        return val !== null && typeof val === "object";
      }
      function isPlainObject(val) {
        if (toString.call(val) !== "[object Object]") {
          return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      function isDate(val) {
        return toString.call(val) === "[object Date]";
      }
      function isFile(val) {
        return toString.call(val) === "[object File]";
      }
      function isBlob(val) {
        return toString.call(val) === "[object Blob]";
      }
      function isFunction(val) {
        return toString.call(val) === "[object Function]";
      }
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }
      function isURLSearchParams(val) {
        return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
      }
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
      }
      function isStandardBrowserEnv() {
        if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function forEach(obj, fn) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }
      function merge() {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }
      function stripBOM(content) {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      }
      module.exports = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isFunction,
        isStream,
        isURLSearchParams,
        isStandardBrowserEnv,
        forEach,
        merge,
        extend,
        trim,
        stripBOM
      };
    }
  });

  // node_modules/axios/lib/helpers/buildURL.js
  var require_buildURL = __commonJS({
    "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      module.exports = function buildURL(url, params, paramsSerializer) {
        if (!params) {
          return url;
        }
        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }
            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }
            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + "=" + encode(v));
            });
          });
          serializedParams = parts.join("&");
        }
        if (serializedParams) {
          var hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      };
    }
  });

  // node_modules/axios/lib/core/InterceptorManager.js
  var require_InterceptorManager = __commonJS({
    "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function InterceptorManager() {
        this.handlers = [];
      }
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };
      module.exports = InterceptorManager;
    }
  });

  // node_modules/axios/lib/helpers/normalizeHeaderName.js
  var require_normalizeHeaderName = __commonJS({
    "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
    }
  });

  // node_modules/axios/lib/core/enhanceError.js
  var require_enhanceError = __commonJS({
    "node_modules/axios/lib/core/enhanceError.js"(exports, module) {
      "use strict";
      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;
        if (code) {
          error.code = code;
        }
        error.request = request;
        error.response = response;
        error.isAxiosError = true;
        error.toJSON = function toJSON() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code
          };
        };
        return error;
      };
    }
  });

  // node_modules/axios/lib/core/createError.js
  var require_createError = __commonJS({
    "node_modules/axios/lib/core/createError.js"(exports, module) {
      "use strict";
      var enhanceError = require_enhanceError();
      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };
    }
  });

  // node_modules/axios/lib/core/settle.js
  var require_settle = __commonJS({
    "node_modules/axios/lib/core/settle.js"(exports, module) {
      "use strict";
      var createError = require_createError();
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
        }
      };
    }
  });

  // node_modules/axios/lib/helpers/cookies.js
  var require_cookies = __commonJS({
    "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }() : function nonStandardBrowserEnv() {
        return {
          write: function write() {
          },
          read: function read() {
            return null;
          },
          remove: function remove() {
          }
        };
      }();
    }
  });

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  var require_isAbsoluteURL = __commonJS({
    "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
      "use strict";
      module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
      };
    }
  });

  // node_modules/axios/lib/helpers/combineURLs.js
  var require_combineURLs = __commonJS({
    "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
      "use strict";
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      };
    }
  });

  // node_modules/axios/lib/core/buildFullPath.js
  var require_buildFullPath = __commonJS({
    "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
      "use strict";
      var isAbsoluteURL = require_isAbsoluteURL();
      var combineURLs = require_combineURLs();
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    }
  });

  // node_modules/axios/lib/helpers/parseHeaders.js
  var require_parseHeaders = __commonJS({
    "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
          return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
          i = line.indexOf(":");
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));
          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var require_isURLSameOrigin = __commonJS({
    "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() : function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
    }
  });

  // node_modules/axios/lib/adapters/xhr.js
  var require_xhr = __commonJS({
    "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var settle = require_settle();
      var cookies = require_cookies();
      var buildURL = require_buildURL();
      var buildFullPath = require_buildFullPath();
      var parseHeaders = require_parseHeaders();
      var isURLSameOrigin = require_isURLSameOrigin();
      var createError = require_createError();
      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;
          var responseType = config.responseType;
          if (utils.isFormData(requestData)) {
            delete requestHeaders["Content-Type"];
          }
          var request = new XMLHttpRequest();
          if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
          }
          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(resolve, reject, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(createError("Network Error", config, null, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
            request = null;
          };
          if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                delete requestHeaders[key];
              } else {
                request.setRequestHeader(key, val);
              }
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", config.onUploadProgress);
          }
          if (config.cancelToken) {
            config.cancelToken.promise.then(function onCanceled(cancel) {
              if (!request) {
                return;
              }
              request.abort();
              reject(cancel);
              request = null;
            });
          }
          if (!requestData) {
            requestData = null;
          }
          request.send(requestData);
        });
      };
    }
  });

  // node_modules/axios/lib/defaults.js
  var require_defaults = __commonJS({
    "node_modules/axios/lib/defaults.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var normalizeHeaderName = require_normalizeHeaderName();
      var enhanceError = require_enhanceError();
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
          headers["Content-Type"] = value;
        }
      }
      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== "undefined") {
          adapter = require_xhr();
        } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
          adapter = require_xhr();
        }
        return adapter;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        },
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
            setContentTypeIfUnset(headers, "application/json");
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          var transitional = this.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw enhanceError(e, this, "E_JSON_PARSE");
                }
                throw e;
              }
            }
          }
          return data;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        }
      };
      defaults.headers = {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }
  });

  // node_modules/axios/lib/core/transformData.js
  var require_transformData = __commonJS({
    "node_modules/axios/lib/core/transformData.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var defaults = require_defaults();
      module.exports = function transformData(data, headers, fns) {
        var context = this || defaults;
        utils.forEach(fns, function transform(fn) {
          data = fn.call(context, data, headers);
        });
        return data;
      };
    }
  });

  // node_modules/axios/lib/cancel/isCancel.js
  var require_isCancel = __commonJS({
    "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
      "use strict";
      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    }
  });

  // node_modules/axios/lib/core/dispatchRequest.js
  var require_dispatchRequest = __commonJS({
    "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var transformData = require_transformData();
      var isCancel = require_isCancel();
      var defaults = require_defaults();
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
      }
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = config.headers || {};
        config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
        config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
        utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
          delete config.headers[method];
        });
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
            }
          }
          return Promise.reject(reason);
        });
      };
    }
  });

  // node_modules/axios/lib/core/mergeConfig.js
  var require_mergeConfig = __commonJS({
    "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function mergeConfig(config1, config2) {
        config2 = config2 || {};
        var config = {};
        var valueFromConfig2Keys = ["url", "method", "data"];
        var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
        var defaultToConfig2Keys = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding"
        ];
        var directMergeKeys = ["validateStatus"];
        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            config[prop] = getMergedValue(void 0, config1[prop]);
          }
        }
        utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(void 0, config2[prop]);
          }
        });
        utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
        utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(void 0, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            config[prop] = getMergedValue(void 0, config1[prop]);
          }
        });
        utils.forEach(directMergeKeys, function merge(prop) {
          if (prop in config2) {
            config[prop] = getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            config[prop] = getMergedValue(void 0, config1[prop]);
          }
        });
        var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
        var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
          return axiosKeys.indexOf(key) === -1;
        });
        utils.forEach(otherKeys, mergeDeepProperties);
        return config;
      };
    }
  });

  // node_modules/axios/package.json
  var require_package = __commonJS({
    "node_modules/axios/package.json"(exports, module) {
      module.exports = {
        _from: "axios@^0.21.1",
        _id: "axios@0.21.4",
        _inBundle: false,
        _integrity: "sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==",
        _location: "/axios",
        _phantomChildren: {},
        _requested: {
          type: "range",
          registry: true,
          raw: "axios@^0.21.1",
          name: "axios",
          escapedName: "axios",
          rawSpec: "^0.21.1",
          saveSpec: null,
          fetchSpec: "^0.21.1"
        },
        _requiredBy: [
          "#USER",
          "/"
        ],
        _resolved: "https://registry.npmjs.org/axios/-/axios-0.21.4.tgz",
        _shasum: "c67b90dc0568e5c1cf2b0b858c43ba28e2eda575",
        _spec: "axios@^0.21.1",
        _where: "/Users/dylanfong/src/work/idekerlab/new-network-viewer/ndex-js-client",
        author: {
          name: "Matt Zabriskie"
        },
        browser: {
          "./lib/adapters/http.js": "./lib/adapters/xhr.js"
        },
        bugs: {
          url: "https://github.com/axios/axios/issues"
        },
        bundleDependencies: false,
        bundlesize: [
          {
            path: "./dist/axios.min.js",
            threshold: "5kB"
          }
        ],
        dependencies: {
          "follow-redirects": "^1.14.0"
        },
        deprecated: false,
        description: "Promise based HTTP client for the browser and node.js",
        devDependencies: {
          coveralls: "^3.0.0",
          "es6-promise": "^4.2.4",
          grunt: "^1.3.0",
          "grunt-banner": "^0.6.0",
          "grunt-cli": "^1.2.0",
          "grunt-contrib-clean": "^1.1.0",
          "grunt-contrib-watch": "^1.0.0",
          "grunt-eslint": "^23.0.0",
          "grunt-karma": "^4.0.0",
          "grunt-mocha-test": "^0.13.3",
          "grunt-ts": "^6.0.0-beta.19",
          "grunt-webpack": "^4.0.2",
          "istanbul-instrumenter-loader": "^1.0.0",
          "jasmine-core": "^2.4.1",
          karma: "^6.3.2",
          "karma-chrome-launcher": "^3.1.0",
          "karma-firefox-launcher": "^2.1.0",
          "karma-jasmine": "^1.1.1",
          "karma-jasmine-ajax": "^0.1.13",
          "karma-safari-launcher": "^1.0.0",
          "karma-sauce-launcher": "^4.3.6",
          "karma-sinon": "^1.0.5",
          "karma-sourcemap-loader": "^0.3.8",
          "karma-webpack": "^4.0.2",
          "load-grunt-tasks": "^3.5.2",
          minimist: "^1.2.0",
          mocha: "^8.2.1",
          sinon: "^4.5.0",
          "terser-webpack-plugin": "^4.2.3",
          typescript: "^4.0.5",
          "url-search-params": "^0.10.0",
          webpack: "^4.44.2",
          "webpack-dev-server": "^3.11.0"
        },
        homepage: "https://axios-http.com",
        jsdelivr: "dist/axios.min.js",
        keywords: [
          "xhr",
          "http",
          "ajax",
          "promise",
          "node"
        ],
        license: "MIT",
        main: "index.js",
        name: "axios",
        repository: {
          type: "git",
          url: "git+https://github.com/axios/axios.git"
        },
        scripts: {
          build: "NODE_ENV=production grunt build",
          coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
          examples: "node ./examples/server.js",
          fix: "eslint --fix lib/**/*.js",
          postversion: "git push && git push --tags",
          preversion: "npm test",
          start: "node ./sandbox/server.js",
          test: "grunt test",
          version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
        },
        typings: "./index.d.ts",
        unpkg: "dist/axios.min.js",
        version: "0.21.4"
      };
    }
  });

  // node_modules/axios/lib/helpers/validator.js
  var require_validator = __commonJS({
    "node_modules/axios/lib/helpers/validator.js"(exports, module) {
      "use strict";
      var pkg = require_package();
      var validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      var currentVerArr = pkg.version.split(".");
      function isOlderVersion(version, thanVersion) {
        var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
        var destVer = version.split(".");
        for (var i = 0; i < 3; i++) {
          if (pkgVersionArr[i] > destVer[i]) {
            return true;
          } else if (pkgVersionArr[i] < destVer[i]) {
            return false;
          }
        }
        return false;
      }
      validators.transitional = function transitional(validator, version, message) {
        var isDeprecated = version && isOlderVersion(version);
        function formatMessage(opt, desc) {
          return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return function(value, opt, opts) {
          if (validator === false) {
            throw new Error(formatMessage(opt, " has been removed in " + version));
          }
          if (isDeprecated && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new TypeError("options must be an object");
        }
        var keys = Object.keys(options);
        var i = keys.length;
        while (i-- > 0) {
          var opt = keys[i];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === void 0 || validator(value, opt, options);
            if (result !== true) {
              throw new TypeError("option " + opt + " must be " + result);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw Error("Unknown option " + opt);
          }
        }
      }
      module.exports = {
        isOlderVersion,
        assertOptions,
        validators
      };
    }
  });

  // node_modules/axios/lib/core/Axios.js
  var require_Axios = __commonJS({
    "node_modules/axios/lib/core/Axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var buildURL = require_buildURL();
      var InterceptorManager = require_InterceptorManager();
      var dispatchRequest = require_dispatchRequest();
      var mergeConfig = require_mergeConfig();
      var validator = require_validator();
      var validators = validator.validators;
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      Axios.prototype.request = function request(config) {
        if (typeof config === "string") {
          config = arguments[1] || {};
          config.url = arguments[0];
        } else {
          config = config || {};
        }
        config = mergeConfig(this.defaults, config);
        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = "get";
        }
        var transitional = config.transitional;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
            forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
            clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
          }, false);
        }
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, void 0];
          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);
          promise = Promise.resolve(config);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }
          return promise;
        }
        var newConfig = config;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }
        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }
        return promise;
      };
      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        Axios.prototype[method] = function(url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data
          }));
        };
      });
      module.exports = Axios;
    }
  });

  // node_modules/axios/lib/cancel/Cancel.js
  var require_Cancel = __commonJS({
    "node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
      "use strict";
      function Cancel(message) {
        this.message = message;
      }
      Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      };
      Cancel.prototype.__CANCEL__ = true;
      module.exports = Cancel;
    }
  });

  // node_modules/axios/lib/cancel/CancelToken.js
  var require_CancelToken = __commonJS({
    "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
      "use strict";
      var Cancel = require_Cancel();
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }
          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      };
      module.exports = CancelToken;
    }
  });

  // node_modules/axios/lib/helpers/spread.js
  var require_spread = __commonJS({
    "node_modules/axios/lib/helpers/spread.js"(exports, module) {
      "use strict";
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    }
  });

  // node_modules/axios/lib/helpers/isAxiosError.js
  var require_isAxiosError = __commonJS({
    "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
      "use strict";
      module.exports = function isAxiosError(payload) {
        return typeof payload === "object" && payload.isAxiosError === true;
      };
    }
  });

  // node_modules/axios/lib/axios.js
  var require_axios = __commonJS({
    "node_modules/axios/lib/axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var bind = require_bind();
      var Axios = require_Axios();
      var mergeConfig = require_mergeConfig();
      var defaults = require_defaults();
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);
        utils.extend(instance, Axios.prototype, context);
        utils.extend(instance, context);
        return instance;
      }
      var axios3 = createInstance(defaults);
      axios3.Axios = Axios;
      axios3.create = function create(instanceConfig) {
        return createInstance(mergeConfig(axios3.defaults, instanceConfig));
      };
      axios3.Cancel = require_Cancel();
      axios3.CancelToken = require_CancelToken();
      axios3.isCancel = require_isCancel();
      axios3.all = function all(promises) {
        return Promise.all(promises);
      };
      axios3.spread = require_spread();
      axios3.isAxiosError = require_isAxiosError();
      module.exports = axios3;
      module.exports.default = axios3;
    }
  });

  // node_modules/axios/index.js
  var require_axios2 = __commonJS({
    "node_modules/axios/index.js"(exports, module) {
      module.exports = require_axios();
    }
  });

  // src/NDEx.js
  var NDEx = class {
    constructor(hostprefix) {
      if (hostprefix === void 0 || hostprefix === null || hostprefix === "") {
        throw new Error("NDEx server endpoint base URL is required in client constructor.");
      }
      this._host = hostprefix;
      this._v3baseURL = this._host.substring(0, this.host.lastIndexOf("v2")) + "v3";
    }
    get host() {
      return this._host;
    }
    get googleAuth() {
      return this._googleAuth;
    }
    SetGoogleAuth(googleAuthObj) {
      if (googleAuthObj !== void 0) {
        this._googleAuth = googleAuthObj;
        this._authType = "g";
      }
    }
    setAuthToken(authToken) {
      if (authToken !== void 0) {
        this._authToken = authToken;
        this._authType = "g";
      }
    }
    get authenticationType() {
      return this._authType;
    }
    get username() {
      return this._username;
    }
    get password() {
      return this._password;
    }
    setBasicAuth(accountname, password) {
      if (accountname !== void 0 && accountname != null && accountname !== "") {
        this._username = accountname;
        this._password = password;
        this._authType = "b";
        return;
      }
      this._username = void 0;
      this._password = void 0;
      this._authType = void 0;
    }
    _httpGetOpenObj(URL) {
      let APIEndPointPrefix = this.host;
      return new Promise(function(resolve, reject) {
        axios({
          method: "get",
          url: URL,
          baseURL: APIEndPointPrefix
        }).then((response) => {
          if (response.status === 200) {
            return resolve(response.data);
          }
          return reject(response);
        }, (response) => {
          return reject(response);
        });
      });
    }
    _getIdToken() {
      return this._authToken ? this._authToken : this._googleAuth.getAuthInstance().currentUser.get().getAuthResponse().id_token;
    }
    _setAuthHeader(config) {
      if (this._authType === "b") {
        config["auth"] = {
          username: this.username,
          password: this.password
        };
      } else if (this.authenticationType === "g") {
        const idToken = this._getIdToken();
        if (config["headers"] === void 0) {
          config["headers"] = {};
        }
        config["headers"]["Authorization"] = "Bearer " + idToken;
      }
    }
    _httpGetProtectedObjAux(prefix, URL, parameters) {
      let config = {
        method: "get",
        url: URL,
        baseURL: prefix
      };
      this._setAuthHeader(config);
      if (parameters !== void 0) {
        config["params"] = parameters;
      }
      return new Promise(function(resolve, reject) {
        axios(config).then((response) => {
          if (response.status === 200) {
            return resolve(response.data);
          }
          return reject(response);
        }, (response) => {
          return reject(response);
        });
      });
    }
    _httpGetV3ProtectedObj(URL, parameters) {
      return this._httpGetProtectedObjAux(this._v3baseURL, URL, parameters);
    }
    _httpGetProtectedObj(URL, parameters) {
      return this._httpGetProtectedObjAux(this.host, URL, parameters);
    }
    _httpPostProtectedObjAux(prefix, URL, parameters, data) {
      let config = {
        method: "post",
        url: URL,
        baseURL: prefix
      };
      this._setAuthHeader(config);
      if (parameters !== void 0) {
        config["params"] = parameters;
      }
      config.data = data;
      return new Promise(function(resolve, reject) {
        axios(config).then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return resolve(response.data);
          }
          return reject(response);
        }, (response) => {
          return reject(response);
        });
      });
    }
    _httpPostProtectedObj(URL, parameters, data) {
      return this._httpPostProtectedObjAux(this.host, URL, parameters, data);
    }
    _httpPostV3ProtectedObj(URL, parameters, data) {
      return this._httpPostProtectedObjAux(this._v3baseURL, URL, parameters, data);
    }
    _httpPutObj(URL, parameters, data) {
      let config = {
        method: "put",
        url: URL,
        baseURL: this.host
      };
      this._setAuthHeader(config);
      if (parameters !== void 0) {
        config["params"] = parameters;
      }
      config.data = data;
      return new Promise(function(resolve, reject) {
        axios(config).then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return resolve(response.data);
          }
          return reject(response);
        }, (response) => {
          return reject(response);
        });
      });
    }
    _httpDeleteObj(URL, parameters) {
      let config = {
        method: "delete",
        url: URL,
        baseURL: this.host
      };
      this._setAuthHeader(config);
      if (parameters !== void 0) {
        config["params"] = parameters;
      }
      return new Promise(function(resolve, reject) {
        axios(config).then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return resolve(response.data);
          }
          return reject(response);
        }, (response) => {
          return reject(response);
        });
      });
    }
    getStatus() {
      return this._httpGetOpenObj("admin/status");
    }
    getSignedInUser() {
      if (this._authType == null) {
        throw new Error("Authentication parameters are missing in NDEx client.");
      }
      return this._httpGetProtectedObj("user", { valid: true });
    }
    getUser(uuid) {
      return this._httpGetProtectedObj("user/" + uuid);
    }
    getAccountPageNetworks(offset, limit) {
      return new Promise((resolve, reject) => {
        this.getSignedInUser().then((user) => {
          let params = {};
          if (offset !== void 0) {
            params.offset = offset;
          }
          if (limit !== void 0) {
            params.limit = limit;
          }
          this._httpGetProtectedObj("/user/" + user.externalId + "/networksummary", params).then((networkArray) => {
            resolve(networkArray);
          }, (err) => {
            reject(err);
          });
        }, (err) => {
          reject(err);
        });
      });
    }
    getAccountPageNetworksByUUID(uuid, offset, limit) {
      let params = {};
      if (offset !== void 0) {
        params.offset = offset;
      }
      if (limit !== void 0) {
        params.limit = limit;
      }
      return this._httpGetProtectedObj("user/" + uuid + "/networksummary", params);
    }
    createGroup(group) {
      return new Promise((resolve, reject) => {
        this._httpPostProtectedObj("group", void 0, group).then((response) => {
          let uuidr = response.split("/");
          let uuid = uuidr[uuidr.length - 1];
          return resolve(uuid);
        }, (err) => {
          reject(err);
        });
      });
    }
    getGroup(uuid) {
      return this._httpGetProtectedObj("group/" + uuid);
    }
    updateGroup(group) {
      return new Promise((resolve, reject) => {
        this._httpPutObj("group/" + group.externalId, void 0, group).then((response) => {
          return resolve(response);
        }, (err) => {
          reject(err);
        });
      });
    }
    deleteGroup(uuid) {
      return this._httpDeleteObj("group/" + uuid);
    }
    getRawNetwork(uuid, accessKey) {
      let parameters = {};
      if (accessKey !== void 0) {
        parameters = { accesskey: accessKey };
      }
      return this._httpGetProtectedObj("network/" + uuid, parameters);
    }
    getCX2Network(uuid, accessKey) {
      let parameters = {};
      if (accessKey !== void 0) {
        parameters = { accesskey: accessKey };
      }
      return this._httpGetV3ProtectedObj("networks/" + uuid, parameters);
    }
    getNetworkSummary(uuid, accessKey) {
      let parameters = {};
      if (accessKey !== void 0) {
        parameters = { accesskey: accessKey };
      }
      return this._httpGetProtectedObj("network/" + uuid + "/summary", parameters);
    }
    createNetworkFromRawCX(rawCX, parameters) {
      return new Promise((resolve, reject) => {
        this._httpPostProtectedObj("network", parameters, rawCX).then((response) => {
          let uuidr = response.split("/");
          let uuid = uuidr[uuidr.length - 1];
          return resolve(uuid);
        }, (err) => {
          reject(err);
        });
      });
    }
    updateNetworkFromRawCX(uuid, rawcx) {
      return this._httpPutObj("network/" + uuid, void 0, rawcx);
    }
    deleteNetwork(uuid) {
      return this._httpDeleteObj("network/" + uuid);
    }
    searchUsers(searchTerms, start, size) {
      let params = {};
      if (start !== void 0) {
        params.start = start;
      }
      if (size !== void 0) {
        params.limit = size;
      }
      let data = { searchString: searchTerms };
      return this._httpPostProtectedObj("search/user", params, data);
    }
    searchGroups(searchTerms, start, size) {
      let params = {};
      if (start !== void 0) {
        params.start = start;
      }
      if (size !== void 0) {
        params.limit = size;
      }
      let data = { searchString: searchTerms };
      return this._httpPostProtectedObj("search/group", params, data);
    }
    searchNetworks(searchTerms, start, size, optionalParameters) {
      let params = {};
      if (start !== void 0) {
        params.start = start;
      }
      if (size !== void 0) {
        params.limit = size;
      }
      let data = { searchString: searchTerms };
      if (optionalParameters !== void 0) {
        if (optionalParameters.permission !== void 0) {
          data.permission = optionalParameters.permission;
        }
        if (optionalParameters.includeGroups !== void 0) {
          data.includeGroups = optionalParameters.includeGroups;
        }
        if (optionalParameters.accountName !== void 0) {
          data.accountName = optionalParameters.accountName;
        }
      }
      return this._httpPostProtectedObj("search/network", params, data);
    }
    neighborhoodQuery(uuid, searchTerms, saveResult, parameters) {
      let params = {};
      if (saveResult !== void 0 && saveResult === true) {
        params.save = true;
      }
      let data = {
        searchString: searchTerms,
        searchDepth: 1
      };
      if (parameters !== void 0) {
        if (parameters.searchDepth !== void 0) {
          data.searchDepth = parameters.searchDepth;
        }
        if (parameters.edgeLimit !== void 0) {
          data.edgeLimit = parameters.edgeLimit;
        }
        if (parameters.errorWhenLimitIsOver !== void 0) {
          data.errorWhenLimitIsOver = parameters.errorWhenLimitIsOver;
        }
        if (parameters.directOnly !== void 0) {
          data.directOnly = parameters.directOnly;
        }
      }
      return this._httpPostProtectedObj("search/network/" + uuid + "/query", params, data);
    }
    interConnectQuery(uuid, searchTerms, saveResult, parameters) {
      let params = {};
      if (saveResult !== void 0 && saveResult === true) {
        params.save = true;
      }
      let data = { searchString: searchTerms };
      if (parameters !== void 0) {
        if (parameters.edgeLimit !== void 0) {
          data.edgeLimit = parameters.edgeLimit;
        }
        if (parameters.errorWhenLimitIsOver !== void 0) {
          data.errorWhenLimitIsOver = parameters.errorWhenLimitIsOver;
        }
      }
      return this._httpPostProtectedObj("search/network/" + uuid + "/interconnectquery", params, data);
    }
    getUsersByUUIDs(uuidList) {
      return this._httpPostProtectedObj("batch/user", void 0, uuidList);
    }
    getGroupsByUUIDs(uuidList) {
      return this._httpPostProtectedObj("batch/group", void 0, uuidList);
    }
    getNetworkSummariesByUUIDs(uuidList, accessKey) {
      let parameter = accessKey === void 0 ? void 0 : { accesskey: accessKey };
      return this._httpPostProtectedObj("batch/network/summary", parameter, uuidList);
    }
    getNetworkPermissionsByUUIDs(uuidList) {
      return this._httpPostProtectedObj("batch/network/permission", void 0, uuidList);
    }
    exportNetworks(exportJob) {
      return this._httpPostProtectedObj("batch/network/export", void 0, exportJob);
    }
    getRandomEdges(uuid, limit, accessKey) {
      if (limit <= 0)
        throw new Error("Value of parameter limit has to be greater than 0.");
      let parameters = {
        size: limit,
        method: "random"
      };
      if (accessKey !== void 0) {
        parameters = { accesskey: accessKey };
      }
      return this._httpGetV3ProtectedObj("networks/" + uuid + "/aspects/edges", parameters);
    }
    getMetaData(uuid, accessKey) {
      let parameters = {};
      if (accessKey !== void 0) {
        parameters["accesskey"] = accessKey;
      }
      return this._httpGetProtectedObj("network/" + uuid + "/aspect", parameters);
    }
    getAspectElements(uuid, aspectName, limit, accessKey) {
      let parameters = {};
      if (limit !== void 0) {
        parameters = {
          size: limit
        };
      }
      if (accessKey !== void 0) {
        parameters["accesskey"] = accessKey;
      }
      return this._httpGetV3ProtectedObj("networks/" + uuid + "/aspects/" + aspectName, parameters);
    }
    getFilteredEdges(uuid, columnName, valueString, operator, limit, order, format, accessKey) {
      let parameters = {};
      if (limit !== void 0) {
        parameters = {
          size: limit
        };
      }
      if (order !== void 0) {
        parameters["order"] = order;
      }
      if (accessKey !== void 0) {
        parameters["accesskey"] = accessKey;
      }
      if (format !== void 0) {
        parameters["format"] = format;
      }
      let data = {
        "name": columnName,
        "value": valueString,
        "operator": operator
      };
      return this._httpPostV3ProtectedObj("/search/networks/" + uuid + "/edges", parameters, data);
    }
    getCX2MetaData(uuid, accessKey) {
      let parameters = {};
      if (accessKey !== void 0) {
        parameters["accesskey"] = accessKey;
      }
      return this._httpGetV3ProtectedObj("networks/" + uuid + "/aspects", parameters);
    }
    cancelDOIRequest(uuid) {
      const cancelBody = { type: "Cancel_DOI", networkId: uuid };
      return this._httpPostProtectedObj("admin/request", {}, cancelBody);
    }
  };

  // src/CyNDEx.js
  var import_axios = __toModule(require_axios2());
  var CY_REST_BASE_URL = "http://127.0.0.1";
  var CyNDEx = class {
    constructor(port = 1234) {
      this._port = port;
    }
    get port() {
      return this._port;
    }
    static get cyRestBaseURL() {
      return CY_REST_BASE_URL;
    }
    setNDExServer(ndexServer) {
      if (ndexServer !== void 0 && ndexServer != null && ndexServer !== "") {
        this._ndexServer = ndexServer;
      }
    }
    getNDExServer() {
      return this._ndexServer ? this._ndexServer : "http://public.ndexbio.org";
    }
    setGoogleAuth(googleAuthObj) {
      if (googleAuthObj !== void 0) {
        this._googleAuth = googleAuthObj;
        this._authType = "g";
      }
    }
    setAuthToken(authToken) {
      if (authToken !== void 0) {
        this._authToken = authToken;
        this._authType = "g";
      }
    }
    setBasicAuth(username, password) {
      if (username !== void 0 && username != null && username !== "") {
        this._username = username;
        this._password = password;
        this._authType = "b";
      }
    }
    cyRestURL() {
      return CY_REST_BASE_URL + ":" + this._port;
    }
    _getIdToken() {
      return this._authToken ? this._authToken : this._googleAuth.getAuthInstance().currentUser.get().getAuthResponse().id_token;
    }
    _getAuthorizationFields() {
      switch (this._authType) {
        case "b":
          return {
            username: this._username,
            password: this._password
          };
        case "g":
          return {
            idToken: this._getIdToken()
          };
        default:
          return {};
      }
    }
    _httpGet(url) {
      const baseURL = this.cyRestURL();
      return new Promise(function(resolve, reject) {
        (0, import_axios.default)({
          method: "get",
          url,
          baseURL
        }).then((response) => {
          if (response.status === 200) {
            return resolve(response.data);
          }
          return reject(response);
        }, (response) => {
          return reject(response);
        });
      });
    }
    _httpPut(url, parameters, data) {
      return this._http("put", url, parameters, data);
    }
    _httpPost(url, parameters, data) {
      return this._http("post", url, parameters, data);
    }
    _http(method, url, parameters, data) {
      const baseURL = this.cyRestURL();
      let config = {
        method,
        url,
        baseURL
      };
      if (parameters !== void 0) {
        config["params"] = parameters;
      }
      config.data = data;
      return new Promise(function(resolve, reject) {
        (0, import_axios.default)(config).then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return resolve(response.data);
          }
          return reject(response);
        }, (response) => {
          return reject(response);
        });
      });
    }
    getCyNDExStatus() {
      return this._httpGet("/cyndex2/v1");
    }
    getCytoscapeNetworkSummary(suid = "current") {
      return this._httpGet("/cyndex2/v1/networks/" + suid);
    }
    postNDExNetworkToCytoscape(uuid, accessKey, createView = void 0) {
      const importParams = {
        serverUrl: this.getNDExServer() + "/v2",
        uuid,
        accessKey,
        createView
      };
      const authorizationFields = this._getAuthorizationFields();
      return this._httpPost("/cyndex2/v1/networks", void 0, Object.assign(importParams, authorizationFields));
    }
    postCXNetworkToCytoscape(cx) {
      return this._httpPost("/cyndex2/v1/networks/cx", void 0, cx);
    }
    postCytoscapeNetworkToNDEx(suid = "current") {
      const saveParams = {
        serverUrl: this.getNDExServer() + "/v2"
      };
      const authorizationFields = this._getAuthorizationFields();
      return this._httpPost("/cyndex2/v1/networks/" + suid, void 0, Object.assign(saveParams, authorizationFields));
    }
    putCytoscapeNetworkInNDEx(suid = "current", uuid) {
      const saveParams = {
        serverUrl: this.getNDExServer() + "/v2",
        uuid
      };
      const authorizationFields = this._getAuthorizationFields();
      return this._httpPut("/cyndex2/v1/networks/" + suid, void 0, Object.assign(saveParams, authorizationFields));
    }
  };

  // src/index.js
  var src_default = { NDEx, CyNDEx };
})();
