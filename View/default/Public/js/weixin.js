/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(4);
	var getPos = __webpack_require__(5);

	var $$ = function $$(ele) {
	    return document.querySelectorAll(ele).length === 1 ? document.querySelector(ele) : document.querySelectorAll(ele);
	};

	window.addEventListener('scroll.elasticity', function (e) {
	    e.preventDefault();
	});
	window.addEventListener('touchmove.elasticity', function (e) {
	    e.preventDefault();
	});

	var myVue = new Vue({
	    el: '#app',
	    data: {
	        texts: ['搜索', '图书馆信息'],
	        headerCon: true, /* 改变header及信息 */
	        footerCon: false, /* 改变footer及信息 */
	        searchCon: true, /* 点击搜索框，弹出搜索内容 */
	        inputMessage: '', /* 用户输入信息 */
	        loading_footer: false, /* 我的板块加载 */
	        loaded_footer: false, /* 我的板块加载 判断是否加载过 */

	        /* 上拉加载完成标志 */
	        searchBookEnd: false,
	        newbookEnd: false,
	        distance: 300,
	        /* 推荐图书 */
	        books: [{
	            name: '第二本我比你还要长你不信你自己看看',
	            love: true,
	            show: false, // 点击书名，弹出书的信息框标志
	            author: '李立平大是',
	            number: 'GDOINGN',
	            position: {
	                lib: '这个图书馆  我也不一个',
	                floor: '(T1-310)'
	            }
	        }, {
	            name: '第三本我比你还要长你不三本我比你还要长你',
	            love: true,
	            show: false, // 点击书名，弹出书的信息框标志
	            author: '李立平大是',
	            number: 'GDOINGN',
	            position: {
	                lib: '这个图书馆  我也不一个',
	                floor: '(T1-310)'
	            }
	        }, {
	            name: '第三本我比你还要长你比你还要长你',
	            love: true,
	            show: false, // 点击书名，弹出书的信息框标志
	            author: '李立平大是',
	            number: 'GDOINGN',
	            position: {
	                lib: '这个图书馆  我也不一个',
	                floor: '(T1-310)'
	            }
	        }, {
	            name: '比你还要长你',
	            love: true,
	            show: false, // 点击书名，弹出书的信息框标志
	            author: '李立平大是',
	            number: 'GDOINGN',
	            position: {
	                lib: '这个图书馆  我也不一个',
	                floor: '(T1-310)'
	            }
	        }, {
	            name: '第三本我比你还比你还要长你',
	            love: true,
	            show: false, // 点击书名，弹出书的信息框标志
	            author: '李立平大是',
	            number: 'GDOINGN',
	            position: {
	                lib: '这个图书馆  我也不一个',
	                floor: '(T1-310)'
	            }
	        }],
	        /* 搜索的书 */
	        searchBooks: [],
	        footerMessageFocusIndex: 0, /* footer focus index,default:0 */
	        footerMessage: [{
	            img: '../public/img/search.png',
	            imgFocus: '../public/img/search_focus.png',
	            text: '查询',
	            focus: true
	        }, {
	            img: '../public/img/book.png',
	            imgFocus: '../public/img/book_focus.png',
	            text: '新书',
	            focus: false
	        }, {
	            img: '../public/img/myinfor.png',
	            imgFocus: '../public/img/myinfor_focus.png',
	            text: '我的',
	            focus: false
	        }],
	        myselfColumnsDefaultIndex: -1,
	        myselfColumns: [{
	            imgSrc: '../public/img/borrow_icon.png',
	            text: '正在借阅',
	            number: 1,
	            show: false,
	            myselfInfors: [{
	                deadline: '10-30',
	                name: '就是这么长的书名',
	                author: '李立平=作何哈哈哈哈',
	                number: 'GDOINGN',
	                position: {
	                    lib: '这个图书馆  我也不一个',
	                    floor: '(T1-310)'
	                }
	            }, {
	                deadline: '10-30',
	                name: '老扒手对您我斯蒂芬',
	                author: '李立平大是',
	                number: 'GDOINGN',
	                position: {
	                    lib: '这个图书馆  我也不一个',
	                    floor: '(T1-310)'
	                }
	            }]
	        }, {
	            imgSrc: '../public/img/history_icon.png',
	            text: '历史借阅',
	            number: 1,
	            show: false,
	            myselfInfors: [{
	                name: '这是一本书',
	                deadline: '10-30',
	                author: '李立平大是',
	                number: 'GDOINGN',
	                position: {
	                    lib: '这个图书馆  我也不一个',
	                    floor: '(T1-310)'
	                }
	            }, {
	                name: '这是一本书',
	                deadline: '10-30',
	                author: '李立平大是',
	                number: 'GDOINGN',
	                position: {
	                    lib: '这个图书馆  我也不一个',
	                    floor: '(T1-310)'
	                }
	            }]
	        }, {
	            imgSrc: '../public/img/pay_icon.png',
	            text: '欠费书目',
	            number: 1,
	            show: false,
	            myselfInfors: [{
	                name: '这是一本书',
	                deadline: '10-30',
	                author: '李立平大是',
	                number: 'GDOINGN',
	                position: {
	                    lib: '这个图书馆  我也不一个',
	                    floor: '(T1-310)'
	                },
	                arrearage: 3.00
	            }, {
	                name: '这是一本书',
	                deadline: '10-30',
	                author: '李立平大是',
	                number: 'GDOINGN',
	                position: {
	                    lib: '这个图书馆  我也不一个',
	                    floor: '(T1-310)'
	                },
	                arrearage: 3.00
	            }]
	        }, {
	            imgSrc: '../public/img/lovers_icon.png',
	            text: '我的收藏',
	            number: 1,
	            show: false,
	            myselfInfors: [{
	                name: '这是一本书',
	                deadline: '10-30',
	                author: '李立平大是',
	                number: 'GDOINGN',
	                position: {
	                    lib: '这个图书馆  我也不一个',
	                    floor: '(T1-310)'
	                }
	            }, {
	                name: '这是一本书',
	                deadline: '10-30',
	                author: '李立平大是',
	                number: 'GDOINGN',
	                position: {
	                    lib: '这个图书馆  我也不一个',
	                    floor: '(T1-310)'
	                }
	            }, //  个这个图书馆我也不一个(T1-310)
	            "/(.*?)(\(.*?\))/"]
	        }],
	        newbookDatas: []
	    },
	    methods: {
	        onInfinite: function onInfinite(con) {
	            var _this = this;

	            var j = 0;
	            if (this.searchChunk) {
	                /* 获取搜索的书 */
	                if (con) {
	                    this.searchCon = false;
	                    fetch('?s=/addon/BookRebuild/BookRebuild/getFromApi/type/search/content/' + con).then(function (res) {
	                        if (res.ok) {
	                            res.json().then(function (response) {
	                                if (!response || response.length === 0) {
	                                    console.log('啥也没有');
	                                } else {
	                                    var _iteratorNormalCompletion = true;
	                                    var _didIteratorError = false;
	                                    var _iteratorError = undefined;

	                                    try {
	                                        for (var _iterator = response[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                            var item = _step.value;

	                                            item.show = false;
	                                            _this.searchBooks.push(item);
	                                        }
	                                    } catch (err) {
	                                        _didIteratorError = true;
	                                        _iteratorError = err;
	                                    } finally {
	                                        try {
	                                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                                _iterator.return();
	                                            }
	                                        } finally {
	                                            if (_didIteratorError) {
	                                                throw _iteratorError;
	                                            }
	                                        }
	                                    }

	                                    _this.$nextTick(function () {
	                                        this.$broadcast('$InfiniteLoading:reset');
	                                    });
	                                }
	                            }).catch(function (err) {
	                                console.error(err);
	                            });
	                        }
	                    });
	                } else {
	                    //   加载更多
	                }
	            } else if (this.newbookChunk) {/* 获取新书 */
	                /*fetch('?s=/addon/BookRebuild/BookRebuild/getFromApi/type/search/content/' + con).then((res) => {
	                    if (res.ok) {
	                        res.json().then((response) => {
	                            if (!response || response.length === 0) {
	                                console.log('啥也没有');
	                            } else {
	                                for(let item of response) {
	                                    item.show = false;
	                                    this.searchBooks.push(item);
	                                }
	                                this.$nextTick(function() {
	                                    this.$broadcast('$InfiniteLoading:reset');
	                                });
	                            }
	                        }).catch((err) => {
	                            console.error(err);
	                        });
	                    }
	                });*/
	                /*setTimeout(function() {
	                    var temp = [];
	                    for (var i = this.newbookDatas.length; i <= this.newbookDatas.length + 4; i++) {
	                        temp.push(
	                            {
	                                img: '../public/img/s4610502.png',
	                                name: '第二本我比你还要长你不信你自己看看',
	                                love: true,
	                                show: false,        // 点击书名，弹出书的信息框标志
	                                author: '李立平大是',
	                                number: 'GDOINGN',
	                                position: {
	                                    lib: '这个图书馆  我也不一个',
	                                    floor: '(T1-310)'
	                                },
	                            }
	                        );
	                    }
	                    this.newbookDatas = this.newbookDatas.concat(temp);
	                    this.newbookDatas.length -= 1;
	                    this.$nextTick(function() {
	                        this.$broadcast('$InfiniteLoading:loaded');
	                    });
	                }.bind(this), 1000);*/
	            }
	        },
	        gotoSearch: function gotoSearch() {
	            this.searchBooks = [];
	            var inputInfor = $$('.input-infor').value;
	            // alert(11);
	            $$('.input-infor').focus = false;
	            inputInfor = inputInfor.replace(/\s{2,}/g, ' ');
	            this.inputMessage = $$('.input-infor').value;
	            if (inputInfor.replace(/\s/g, '').length === 0) {
	                /* 判断输入是否为空，空则返回推荐图书 */
	                this.searchCon = true;
	            } else if (inputInfor && inputInfor.length >= 1) {
	                this.onInfinite.call(null, inputInfor);
	            }
	        },
	        showBookInfor_search: function showBookInfor_search() {
	            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
	            // 显示或者关闭搜索出来书的信息
	            var target = target || e.target;
	            if (target.classList.contains('book-name')) {
	                //  显示

	                var searchBookList = Array.prototype.slice.call($$('.search-book-list'));
	                this.searchBooks[searchBookList.indexOf(target.parentNode)].show = true;
	            } else if (target.classList.contains('showbook-infor')) {
	                // 关闭

	                var _searchBookList = Array.prototype.slice.call($$('.search-book-list'));
	                this.searchBooks[_searchBookList.indexOf(target.parentNode)].show = false;
	            }
	        },
	        showBookInfor_hot: function showBookInfor_hot() {
	            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
	            // 显示或者关闭新书的信息
	            var target = target || e.target;
	            if (target.classList.contains('book-list')) {
	                //  显示

	                var hotBooks = Array.prototype.slice.call($$('.book-lists li'));
	                this.books[hotBooks.indexOf(target.parentNode)].show = true;
	            } else if (target.classList.contains('showbook-infor')) {
	                // 关闭

	                var _hotBooks = Array.prototype.slice.call($$('.book-lists li'));
	                this.books[_hotBooks.indexOf(target.parentNode)].show = false;
	            }
	        },
	        changeHeader: function changeHeader() {
	            var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;

	            var target = ev.target;
	            if (target && !target.classList.contains('header-focus')) {
	                this.headerCon = !this.headerCon;
	            }
	        },
	        changeLoveState_search: function changeLoveState_search(index) {
	            var _this2 = this;

	            var thisBook = this.searchBooks[index];
	            var body = {
	                "name": thisBook.name,
	                "author": thisBook.author,
	                "number": thisBook.number,
	                "love": thisBook.love,
	                "position": thisBook.position.lib + thisBook.position.floor
	            };

	            var startState = thisBook.love; //  初始状态，点击更换状态，等到后端响应再次更改状态
	            thisBook.love = !thisBook.love;

	            if (startState) {
	                // 取消收藏
	                fetch('?s=/addon/BookRebuild/BookRebuild/deleteFromCollection', {
	                    'method': 'POST',
	                    'headers': {
	                        "Content-Type": "application/x-www-form-urlencoded"
	                    },
	                    'body': 'number=' + body.number
	                }).then(function (res) {
	                    if (res.ok) {
	                        console.log(res);
	                        res.text().then(function (response) {
	                            console.log('res', response);
	                            if (response) {
	                                thisBook.love = false;
	                            } else {
	                                thisBook.love = true; // 取消收藏失败
	                            }
	                        });
	                    } else {
	                        thisBook.love = true;
	                    }
	                });
	            } else {
	                // 添加收藏
	                fetch('?s=/addon/BookRebuild/BookRebuild/addToCollection', {
	                    'method': 'POST',
	                    'headers': {
	                        'Content-Type': 'application/x-www-form-urlencoded'
	                    },
	                    'body': 'body=' + JSON.stringify(body)
	                }).then(function (res) {
	                    if (res.ok) {
	                        res.text().then(function (response) {
	                            console.log(response);
	                            if (response) {
	                                _this2.searchBooks[index].love = true;
	                            } else {
	                                // 添加失败
	                                _this2.searchBooks[index].love = false;
	                            }
	                        });
	                    } else {
	                        _this2.searchBooks[index].love = false;
	                    }
	                });
	            }
	        },
	        showMyselfColumn: function showMyselfColumn(index) {
	            this.myselfColumns[index].show = !this.myselfColumns[index].show;
	        },
	        changeLoveState_newbook: function changeLoveState_newbook(index) {
	            var target = window.event.target;
	            target.classList.toggle('love-focus');
	        },
	        changeLoveState_store: function changeLoveState_store(index) {
	            var target = window.event.target;
	            target.classList.toggle('love-focus');
	        },
	        changeFooter: function changeFooter(index) {
	            var target = window.event.target;
	            // console.log(target)
	            var container = target;
	            var content = target.parentNode.parentNode;
	            console.log(container, content);

	            if ((content.nodeName.toLowerCase() === 'section' || target.classList.contains('content-con')) && !content.classList.contains('footer-focus')) {
	                this.footerMessage[this.footerMessageFocusIndex].focus = false;
	                this.footerMessageFocusIndex = index;
	                this.footerMessage[index].focus = true;
	                if (index === 2 && !this.loaded_footer) {
	                    this.loading_footer = true;
	                    this.loaded_footer = true;
	                    this.getInfor_myself.call();
	                }
	            }
	        },
	        getInfor_myself: function getInfor_myself() {
	            var _this3 = this;

	            fetch('./index.php').then(function (res) {
	                if (res.ok) {
	                    res.text().then(function (response) {
	                        setTimeout(function () {
	                            _this3.loading_footer = false;
	                            console.log(response);
	                        }, 1000);
	                    });
	                }
	            });
	        }
	    },
	    computed: {
	        searchChunk: function searchChunk() {
	            return this.footerMessage[0].focus;
	        },
	        newbookChunk: function newbookChunk() {
	            return this.footerMessage[1].focus;
	        },
	        myselfChunk: function myselfChunk() {
	            return this.footerMessage[2].focus;
	        }
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!function (p, e) {
	    "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.VueInfiniteLoading = e() : p.VueInfiniteLoading = e();
	}(undefined, function () {
	    return function (p) {
	        function e(o) {
	            if (t[o]) return t[o].exports;
	            var n = t[o] = { exports: {}, id: o, loaded: !1 };
	            return p[o].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports;
	        }
	        var t = {};
	        return e.m = p, e.c = t, e.p = "/", e(0);
	    }([function (p, e, t) {
	        "use strict";

	        function o(p) {
	            return p && p.__esModule ? p : { default: p };
	        }
	        Object.defineProperty(e, "__esModule", { value: !0 });
	        var n = t(5),
	            x = o(n);
	        e.default = x.default, "undefined" != typeof window && window.Vue && window.Vue.component("infinite-loading", x.default);
	    }, function (p, e) {
	        "use strict";

	        function t(p) {
	            return "BODY" === p.tagName ? window : ["scroll", "auto"].indexOf(getComputedStyle(p).overflowY) > -1 ? p : t(p.parentNode);
	        }

	        function o(p) {
	            var e = getComputedStyle(p === window ? document.body : p),
	                t = p === window ? window.innerHeight : parseInt(e.height, 10),
	                o = p === window ? document.body.scrollHeight : p.scrollHeight,
	                n = isNaN(p.scrollTop) ? p.pageYOffset : p.scrollTop,
	                x = parseInt(e.paddingTop, 10),
	                i = parseInt(e.paddingBottom, 10);
	            return o - t - n - x - i;
	        }
	        Object.defineProperty(e, "__esModule", { value: !0 });
	        var n = { bubbles: "loading-bubbles", circles: "loading-circles", default: "loading-default", spiral: "loading-spiral", waveDots: "loading-wave-dots" };
	        e.default = { data: function data() {
	                return { scrollParent: null, scrollHandler: null, isLoading: !1, isComplete: !1, isFirstLoad: !0 };
	            }, computed: { spinnerType: function spinnerType() {
	                    return n[this.spinner] || n.default;
	                } }, props: { distance: { type: Number, default: 100 }, onInfinite: { type: Function, required: !0 }, spinner: String }, ready: function ready() {
	                this.scrollParent = t(this.$el), this.scrollHandler = function () {
	                    var p = o(this.scrollParent);!this.isLoading && p <= this.distance && (this.isLoading = !0, this.onInfinite.call());
	                }.bind(this), setTimeout(this.scrollHandler, 1), this.scrollParent.addEventListener("scroll", this.scrollHandler);
	            }, events: { "$InfiniteLoading:loaded": function $InfiniteLoadingLoaded() {
	                    this.isLoading = !1, this.isFirstLoad = !1;
	                }, "$InfiniteLoading:complete": function $InfiniteLoadingComplete() {
	                    this.isLoading = !1, this.isComplete = !0, this.scrollParent.removeEventListener("scroll", this.scrollHandler);
	                }, "$InfiniteLoading:reset": function $InfiniteLoadingReset() {
	                    this.isLoading = !1, this.isComplete = !1, this.isFirstLoad = !0, this.scrollParent.addEventListener("scroll", this.scrollHandler), setTimeout(this.scrollHandler, 1);
	                } }, destroyed: function destroyed() {
	                this.isComplete || this.scrollParent.removeEventListener("scroll", this.scrollHandler);
	            } };
	    }, function (p, e, t) {
	        e = p.exports = t(3)(), e.push([p.id, ".loading-circles[_v-34e13b62]{position:relative}.loading-circles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-2.5px;margin-left:-2.5px;width:5px;height:5px;border-radius:50%;animation:linear loading-circles .75s infinite;-webkit-animation:linear loading-circles .75s infinite}@keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}@-webkit-keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}.loading-default[_v-34e13b62]{position:relative;border:1px solid #999;animation:ease loading-rotating 1.5s infinite;-webkit-animation:ease loading-rotating 1.5s infinite}.loading-default[_v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.infinite-loading-container[_v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=loading-][_v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[_v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}", ""]);
	    }, function (p, e) {
	        p.exports = function () {
	            var p = [];
	            return p.toString = function () {
	                for (var p = [], e = 0; e < this.length; e++) {
	                    var t = this[e];
	                    t[2] ? p.push("@media " + t[2] + "{" + t[1] + "}") : p.push(t[1]);
	                }
	                return p.join("");
	            }, p.i = function (e, t) {
	                "string" == typeof e && (e = [[null, e, ""]]);
	                for (var o = {}, n = 0; n < this.length; n++) {
	                    var x = this[n][0];"number" == typeof x && (o[x] = !0);
	                }
	                for (n = 0; n < e.length; n++) {
	                    var i = e[n];"number" == typeof i[0] && o[i[0]] || (t && !i[2] ? i[2] = t : t && (i[2] = "(" + i[2] + ") and (" + t + ")"), p.push(i));
	                }
	            }, p;
	        };
	    }, function (p, e) {
	        p.exports = ' <div class=infinite-loading-container _v-34e13b62=""> <div v-show=isLoading _v-34e13b62=""> <slot name=spinner _v-34e13b62=""> <i :class=spinnerType _v-34e13b62=""></i> </slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; isFirstLoad" _v-34e13b62=""> <slot name=no-results _v-34e13b62="">No results :(</slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; !isFirstLoad" _v-34e13b62=""> <slot name=no-more _v-34e13b62="">No more data :)</slot> </div> </div> ';
	    }, function (p, e, t) {
	        var o,
	            n,
	            x = {};
	        t(7), o = t(1), n = t(4), p.exports = o || {}, p.exports.__esModule && (p.exports = p.exports.default);
	        var i = "function" == typeof p.exports ? p.exports.options || (p.exports.options = {}) : p.exports;
	        n && (i.template = n), i.computed || (i.computed = {}), Object.keys(x).forEach(function (p) {
	            var e = x[p];
	            i.computed[p] = function () {
	                return e;
	            };
	        });
	    }, function (p, e, t) {
	        function o(p, e) {
	            for (var t = 0; t < p.length; t++) {
	                var o = p[t],
	                    n = l[o.id];
	                if (n) {
	                    n.refs++;
	                    for (var x = 0; x < n.parts.length; x++) {
	                        n.parts[x](o.parts[x]);
	                    }for (; x < o.parts.length; x++) {
	                        n.parts.push(r(o.parts[x], e));
	                    }
	                } else {
	                    for (var i = [], x = 0; x < o.parts.length; x++) {
	                        i.push(r(o.parts[x], e));
	                    }l[o.id] = { id: o.id, refs: 1, parts: i };
	                }
	            }
	        }

	        function n(p) {
	            for (var e = [], t = {}, o = 0; o < p.length; o++) {
	                var n = p[o],
	                    x = n[0],
	                    i = n[1],
	                    a = n[2],
	                    r = n[3],
	                    s = { css: i, media: a, sourceMap: r };
	                t[x] ? t[x].parts.push(s) : e.push(t[x] = { id: x, parts: [s] });
	            }
	            return e;
	        }

	        function x(p, e) {
	            var t = c(),
	                o = g[g.length - 1];
	            if ("top" === p.insertAt) o ? o.nextSibling ? t.insertBefore(e, o.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), g.push(e);else {
	                if ("bottom" !== p.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	                t.appendChild(e);
	            }
	        }

	        function i(p) {
	            p.parentNode.removeChild(p);
	            var e = g.indexOf(p);
	            e >= 0 && g.splice(e, 1);
	        }

	        function a(p) {
	            var e = document.createElement("style");
	            return e.type = "text/css", x(p, e), e;
	        }

	        function r(p, e) {
	            var t, o, n;
	            if (e.singleton) {
	                var x = h++;
	                t = u || (u = a(e)), o = s.bind(null, t, x, !1), n = s.bind(null, t, x, !0);
	            } else t = a(e), o = d.bind(null, t), n = function n() {
	                i(t);
	            };
	            return o(p), function (e) {
	                if (e) {
	                    if (e.css === p.css && e.media === p.media && e.sourceMap === p.sourceMap) return;
	                    o(p = e);
	                } else n();
	            };
	        }

	        function s(p, e, t, o) {
	            var n = t ? "" : o.css;
	            if (p.styleSheet) p.styleSheet.cssText = v(e, n);else {
	                var x = document.createTextNode(n),
	                    i = p.childNodes;
	                i[e] && p.removeChild(i[e]), i.length ? p.insertBefore(x, i[e]) : p.appendChild(x);
	            }
	        }

	        function d(p, e) {
	            var t = e.css,
	                o = e.media,
	                n = e.sourceMap;
	            if (o && p.setAttribute("media", o), n && (t += "\n/*# sourceURL=" + n.sources[0] + " */", t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), p.styleSheet) p.styleSheet.cssText = t;else {
	                for (; p.firstChild;) {
	                    p.removeChild(p.firstChild);
	                }p.appendChild(document.createTextNode(t));
	            }
	        }
	        var l = {},
	            b = function b(p) {
	            var e;
	            return function () {
	                return "undefined" == typeof e && (e = p.apply(this, arguments)), e;
	            };
	        },
	            f = b(function () {
	            return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
	            );
	        }),
	            c = b(function () {
	            return document.head || document.getElementsByTagName("head")[0];
	        }),
	            u = null,
	            h = 0,
	            g = [];
	        p.exports = function (p, e) {
	            e = e || {}, "undefined" == typeof e.singleton && (e.singleton = f()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
	            var t = n(p);
	            return o(t, e), function (p) {
	                for (var x = [], i = 0; i < t.length; i++) {
	                    var a = t[i],
	                        r = l[a.id];
	                    r.refs--, x.push(r);
	                }
	                if (p) {
	                    var s = n(p);
	                    o(s, e);
	                }
	                for (var i = 0; i < x.length; i++) {
	                    var r = x[i];
	                    if (0 === r.refs) {
	                        for (var d = 0; d < r.parts.length; d++) {
	                            r.parts[d]();
	                        }delete l[r.id];
	                    }
	                }
	            };
	        };
	        var v = function () {
	            var p = [];
	            return function (e, t) {
	                return p[e] = t, p.filter(Boolean).join("\n");
	            };
	        }();
	    }, function (p, e, t) {
	        var o = t(2);"string" == typeof o && (o = [[p.id, o, ""]]);
	        t(6)(o, {});
	        o.locals && (p.exports = o.locals);
	    }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	!function (a, b) {
	    function c() {
	        var b = f.getBoundingClientRect().width;
	        b / i > 540 && (b = 540 * i);
	        var c = b / 10;
	        f.style.fontSize = c + "px", k.rem = a.rem = c;
	    }
	    var d,
	        e = a.document,
	        f = e.documentElement,
	        g = e.querySelector('meta[name="viewport"]'),
	        h = e.querySelector('meta[name="flexible"]'),
	        i = 0,
	        j = 0,
	        k = b.flexible || (b.flexible = {});
	    if (g) {
	        var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
	        l && (j = parseFloat(l[1]), i = parseInt(1 / j));
	    } else if (h) {
	        var m = h.getAttribute("content");
	        if (m) {
	            var n = m.match(/initial\-dpr=([\d\.]+)/),
	                o = m.match(/maximum\-dpr=([\d\.]+)/);
	            n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)));
	        }
	    }
	    if (!i && !j) {
	        var p = a.navigator.userAgent,
	            q = (!!p.match(/android/gi), !!p.match(/iphone/gi)),
	            r = q && !!p.match(/OS 9_3/),
	            s = a.devicePixelRatio;
	        i = q && !r ? s >= 3 && (!i || i >= 3) ? 3 : s >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i;
	    }
	    if (f.setAttribute("data-dpr", i), !g) if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);else {
	        var t = e.createElement("div");
	        t.appendChild(g), e.write(t.innerHTML);
	    }
	    a.addEventListener("resize", function () {
	        clearTimeout(d), d = setTimeout(c, 300);
	    }, !1), a.addEventListener("pageshow", function (a) {
	        a.persisted && (clearTimeout(d), d = setTimeout(c, 300));
	    }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
	        e.body.style.fontSize = 12 * i + "px";
	        // e.body.style.height = window.innerHeight + "px";
	    }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
	        var b = parseFloat(a) * this.rem;
	        return "string" == typeof a && a.match(/rem$/) && (b += "px"), b;
	    }, k.px2rem = function (a) {
	        var b = parseFloat(a) / this.rem;
	        return "string" == typeof a && a.match(/px$/) && (b += "rem"), b;
	    };
	}(window, window.lib || (window.lib = {}));

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  if (support.arrayBuffer) {
	    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

	    var isDataView = function isDataView(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj);
	    };

	    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	    };
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }

	    return iterator;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var oldValue = this.map[name];
	    this.map[name] = oldValue ? oldValue + ',' + value : value;
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    name = normalizeName(name);
	    return this.has(name) ? this.map[name] : null;
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value);
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this);
	      }
	    }
	  };

	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsArrayBuffer(blob);
	    return promise;
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsText(blob);
	    return promise;
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf);
	    var chars = new Array(view.length);

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i]);
	    }
	    return chars.join('');
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0);
	    } else {
	      var view = new Uint8Array(buf.byteLength);
	      view.set(new Uint8Array(buf));
	      return view.buffer;
	    }
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (!body) {
	        this._bodyText = '';
	      } else if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer);
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer]);
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body);
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer);
	        }
	      };
	    }

	    this.text = function () {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected;
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob);
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text');
	      } else {
	        return Promise.resolve(this._bodyText);
	      }
	    };

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;

	    if (typeof input === 'string') {
	      this.url = input;
	    } else {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this, { body: this._bodyInit });
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers();
	    rawHeaders.split('\r\n').forEach(function (line) {
	      var parts = line.split(':');
	      var key = parts.shift().trim();
	      if (key) {
	        var value = parts.join(':').trim();
	        headers.append(key, value);
	      }
	    });
	    return headers;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = 'status' in options ? options.status : 200;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = 'statusText' in options ? options.statusText : 'OK';
	    this.headers = new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request = new Request(input, init);
	      var xhr = new XMLHttpRequest();

	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        };
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	//获取滚动条当前的位置 
	function getScrollTop() {
	    var scrollTop = 0;
	    if (document.documentElement && document.documentElement.scrollTop) {
	        scrollTop = document.documentElement.scrollTop;
	    } else if (document.body) {
	        scrollTop = document.body.scrollTop;
	    }
	    return scrollTop;
	}
	//获取当前可视范围的高度 
	function getClientHeight() {
	    var clientHeight = 0;
	    if (document.body.clientHeight && document.documentElement.clientHeight) {
	        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
	    } else {
	        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
	    }
	    return clientHeight;
	}
	//获取文档完整的高度 
	function getScrollHeight() {
	    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	}

	module.exports = {
	    getScrollTop: getScrollTop,
	    getClientHeight: getClientHeight,
	    getScrollHeight: getScrollHeight
	};

/***/ }
/******/ ]);