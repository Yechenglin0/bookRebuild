
require('./vue-infinite-loading.js')
require('./rem.js')
require('./fetch.js')
var getPos = require('./function.js')

var $$ = function (ele) {
    return document.querySelectorAll(ele).length === 1 ? document.querySelector(ele) : document.querySelectorAll(ele);
}

window.addEventListener('scroll.elasticity', function (e){
    e.preventDefault();
});
window.addEventListener('touchmove.elasticity', function (e){
    e.preventDefault();
});

var myVue = new Vue({
    el: '#app',
    data: {
        texts: ['搜索', '图书馆信息'],
        headerCon: true,  /* 改变header及信息 */
        footerCon: false,  /* 改变footer及信息 */
        searchCon: true,  /* 点击搜索框，弹出搜索内容 */
        inputMessage: '',       /* 用户输入信息 */
        loading_footer: false,          /* 我的板块加载 */
        loaded_footer: false,            /* 我的板块加载 判断是否加载过 */

        /* 上拉加载完成标志 */
        searchBookEnd: false,
        newbookEnd: false,
        distance: 300,
        /* 推荐图书 */
        books: [
            {
                name: '第二本我比你还要长你不信你自己看看',
                love: true,
                show: false,        // 点击书名，弹出书的信息框标志
                author: '李立平大是',
                number: 'GDOINGN',
                position: {
                    lib: '这个图书馆  我也不一个',
                    floor: '(T1-310)',
                },
            },
            {
                name: '第三本我比你还要长你不三本我比你还要长你',
                love: true,
                show: false,        // 点击书名，弹出书的信息框标志
                author: '李立平大是',
                number: 'GDOINGN',
                position: {
                    lib: '这个图书馆  我也不一个',
                    floor: '(T1-310)',
                },
            },
            {
                name: '第三本我比你还要长你比你还要长你',
                love: true,
                show: false,        // 点击书名，弹出书的信息框标志
                author: '李立平大是',
                number: 'GDOINGN',
                position: {
                    lib: '这个图书馆  我也不一个',
                    floor: '(T1-310)',
                },
            },
            {
                name: '比你还要长你',
                love: true,
                show: false,        // 点击书名，弹出书的信息框标志
                author: '李立平大是',
                number: 'GDOINGN',
                position: {
                    lib: '这个图书馆  我也不一个',
                    floor: '(T1-310)',
                },
            },
            {
                name: '第三本我比你还比你还要长你',
                love: true,
                show: false,        // 点击书名，弹出书的信息框标志
                author: '李立平大是',
                number: 'GDOINGN',
                position: {
                    lib: '这个图书馆  我也不一个',
                    floor: '(T1-310)',
                },
            },
        ],
        /* 搜索的书 */
        searchBooks: [],
        footerMessageFocusIndex: 0,   /* footer focus index,default:0 */
        footerMessage: [
            {
                img: '../public/img/search.png',
                imgFocus: '../public/img/search_focus.png',
                text: '查询',
                focus: true,
            },
            {
                img: '../public/img/book.png',
                imgFocus: '../public/img/book_focus.png',
                text: '新书',
                focus: false,
            },
            {
                img: '../public/img/myinfor.png',
                imgFocus: '../public/img/myinfor_focus.png',
                text: '我的',
                focus: false,
            }
        ],
        myselfColumnsDefaultIndex: -1,
        myselfColumns: [
            {
                imgSrc: '../public/img/borrow_icon.png',
                text  : '正在借阅',
                number: 1,
                show  : false,
                myselfInfors: [
                    {
                        deadline: '10-30',
                        name: '就是这么长的书名',
                        author: '李立平=作何哈哈哈哈',
                        number: 'GDOINGN',
                        position: {
                            lib: '这个图书馆  我也不一个',
                            floor: '(T1-310)'
                        },
                    },
                    {
                        deadline: '10-30',
                        name: '老扒手对您我斯蒂芬',
                        author: '李立平大是',
                        number: 'GDOINGN',
                        position: {
                            lib: '这个图书馆  我也不一个',
                            floor: '(T1-310)'
                        },
                    },
                ],
            },
            {
                imgSrc: '../public/img/history_icon.png',
                text  : '历史借阅',
                number: 1,
                show  : false,
                myselfInfors: [
                    {
                        name: '这是一本书',
                        deadline: '10-30',
                        author: '李立平大是',
                        number: 'GDOINGN',
                        position: {
                            lib: '这个图书馆  我也不一个',
                            floor: '(T1-310)'
                        },
                    },
                    {
                        name: '这是一本书',
                        deadline: '10-30',
                        author: '李立平大是',
                        number: 'GDOINGN',
                        position: {
                            lib: '这个图书馆  我也不一个',
                            floor: '(T1-310)'
                        },
                    },
                ],
            },
            {
                imgSrc: '../public/img/pay_icon.png',
                text  : '欠费书目',
                number: 1,
                show  : false,
                myselfInfors: [
                    {
                        name: '这是一本书',
                        deadline: '10-30',
                        author: '李立平大是',
                        number: 'GDOINGN',
                        position: {
                            lib: '这个图书馆  我也不一个',
                            floor: '(T1-310)'
                        },
                        arrearage: 3.00,
                    },
                    {
                        name: '这是一本书',
                        deadline: '10-30',
                        author: '李立平大是',
                        number: 'GDOINGN',
                        position: {
                            lib: '这个图书馆  我也不一个',
                            floor: '(T1-310)'
                        },
                        arrearage: 3.00,
                    },
                ],
            },
            {
                imgSrc: '../public/img/lovers_icon.png',
                text  : '我的收藏',
                number: 1,
                show  : false,
                myselfInfors: [
                    {
                        name: '这是一本书',
                        deadline: '10-30',
                        author: '李立平大是',
                        number: 'GDOINGN',
                        position: {
                            lib: '这个图书馆  我也不一个',
                            floor: '(T1-310)'
                        },
                    },
                    {
                        name: '这是一本书',
                        deadline: '10-30',
                        author: '李立平大是',
                        number: 'GDOINGN',
                        position: {
                            lib: '这个图书馆  我也不一个',
                            floor: '(T1-310)'
                        },
                    },   //  个这个图书馆我也不一个(T1-310)
                        "/(.*?)(\(.*?\))/"
                ],
            },
        ],
        newbookDatas: [],
    },
    methods: {
        onInfinite: function(con) {
            let j = 0;
            if (this.searchChunk) {   /* 获取搜索的书 */
                if (con) {
                    this.searchCon = false;
                    fetch('?s=/addon/BookRebuild/BookRebuild/getFromApi/type/search/content/' + con).then((res) => {
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
                    });
                } else {
                    //   加载更多
                }
            } else if (this.newbookChunk) {    /* 获取新书 */
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
        gotoSearch: function() {
            this.searchBooks = [];
            let inputInfor = $$('.input-infor').value;
            // alert(11);
            $$('.input-infor').focus = false;
            inputInfor = inputInfor.replace(/\s{2,}/g, ' ');
            this.inputMessage = $$('.input-infor').value;
            if (inputInfor.replace(/\s/g, '').length === 0) {    /* 判断输入是否为空，空则返回推荐图书 */
                this.searchCon = true;
            } else if (inputInfor && inputInfor.length >= 1) {
                this.onInfinite.call(null, inputInfor);
            }
        },
        showBookInfor_search: function(e = window.event) {   // 显示或者关闭搜索出来书的信息
            let target = target || e.target;
            if (target.classList.contains('book-name')) {  //  显示

                let searchBookList = Array.prototype.slice.call($$('.search-book-list'));
                this.searchBooks[searchBookList.indexOf(target.parentNode)].show = true;

            } else if (target.classList.contains('showbook-infor')) {   // 关闭

                let searchBookList = Array.prototype.slice.call($$('.search-book-list'));
                this.searchBooks[searchBookList.indexOf(target.parentNode)].show = false;
            } 
        },
        showBookInfor_hot: function(e = window.event) {     // 显示或者关闭新书的信息
            let target = target || e.target;
            if (target.classList.contains('book-list')) {  //  显示

                let hotBooks = Array.prototype.slice.call($$('.book-lists li'));
                this.books[hotBooks.indexOf(target.parentNode)].show = true;

            } else if (target.classList.contains('showbook-infor')) {   // 关闭

                let hotBooks = Array.prototype.slice.call($$('.book-lists li'));
                this.books[hotBooks.indexOf(target.parentNode)].show = false;

            }  
        },
        changeHeader: function(ev = window.event) {
            let target = ev.target;
            if (target && !target.classList.contains('header-focus')) {
                this.headerCon = !this.headerCon;
            }
        },
        changeLoveState_search: function(index) {
            
            var thisBook = this.searchBooks[index];
            var body = {
                "name": thisBook.name,
                "author": thisBook.author,
                "number": thisBook.number,
                "love": thisBook.love,
                "position": thisBook.position.lib + thisBook.position.floor
            };

            var startState = thisBook.love;   //  初始状态，点击更换状态，等到后端响应再次更改状态
            thisBook.love = !thisBook.love;   

            if (startState) {  // 取消收藏
                fetch('?s=/addon/BookRebuild/BookRebuild/deleteFromCollection', {
                    'method': 'POST',
                    'headers': {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    'body': 'number=' + body.number,
                }).then((res) => {
                    if (res.ok) {
                        console.log(res);
                        res.text().then((response) => {
                                console.log('res', response);
                            if (response) {
                                thisBook.love = false;
                            } else {
                                thisBook.love = true;  // 取消收藏失败
                            }
                        });
                    } else {
                        thisBook.love = true;
                    }
                });
            } else {   // 添加收藏
                fetch('?s=/addon/BookRebuild/BookRebuild/addToCollection', {
                    'method': 'POST',
                    'headers': {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    'body': 'body=' + JSON.stringify(body),
                }).then((res) => {
                    if (res.ok) {
                        res.text().then((response) => {
                            console.log(response);
                            if (response) {
                                this.searchBooks[index].love = true;
                            } else {        // 添加失败
                                this.searchBooks[index].love = false;
                            }
                        });
                    } else {
                        this.searchBooks[index].love = false;
                    }
                });
            }
        },
        showMyselfColumn: function(index) {
            this.myselfColumns[index].show = !this.myselfColumns[index].show;
        },
        changeLoveState_newbook: function(index) {
            let target = window.event.target;
            target.classList.toggle('love-focus');
        },
        changeLoveState_store:function(index) {
            let target = window.event.target;
            target.classList.toggle('love-focus');
        },
        changeFooter: function(index) {
            let target = window.event.target;
            // console.log(target)
            let container = target;
            let content = target.parentNode.parentNode;
            console.log(container, content)

            if ((content.nodeName.toLowerCase() === 'section' 
                || target.classList.contains('content-con')) 
                && !content.classList.contains('footer-focus')) {
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
        getInfor_myself: function() {
            fetch('./index.php').then((res) => {
                if (res.ok) {
                    res.text().then((response) => {
                        setTimeout(() => {
                            this.loading_footer = false;
                            console.log(response);
                        }, 1000)
                    })
                }
            })
        }
    },
    computed: {
        searchChunk: function() {
            return this.footerMessage[0].focus;
        },
        newbookChunk: function() {
            return this.footerMessage[1].focus;
        },
        myselfChunk: function() {
            return this.footerMessage[2].focus;
        }
    },
});




