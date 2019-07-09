window.onload = function () {


    var headerArrow = document.querySelector('.header-main-arrow');
    var headerNavBottom = document.querySelectorAll('.header-main-bottom');
    var headerNavLi = document.querySelectorAll('.header-main-nav li');
    var content = document.getElementById('content');
    var contentUl = document.querySelector('.content-lists');
    var index = 0;
    
    for (var i = 0; i < headerNavLi.length; i++) {
        //把当前点击的li的下标保存起来
        headerNavLi[i].index = i;

        headerNavLi[i].onclick = function () {

            /*for (var j = 0; j < headerNavBottom.length; j++) {
                headerNavBottom[j].style.width = 0;
            }
            headerNavBottom[this.index].style.width = '100%';
            ArrowMove(this);*/
            index = this.index;
            move(index);
        }

    }

    ArrowMove(headerNavLi[0]);
    //封装小三角滑动的代码
    function ArrowMove(node) {
        headerArrow.style.left =  node.offsetLeft + node.offsetWidth / 2 - headerArrow.offsetWidth / 2 + 'px';
    }

    //在滑动的时候，调用滚动条滚动的函数
    content.onmousewheel = palte;

    content.addEventListener('DOMMouseScroll',palte);

    var flag = '';
    var timer = null;
    function palte(ev) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (ev.wheelDelta) {

                if (ev.wheelDelta > 0 ) {
                    flag = 'up';
                } else {
                    flag = 'down';
                }
            } else if (ev.detail) {

                if (ev.detail > 0 ) {
                    flag = 'down';
                } else {
                    flag = 'up';
                }
            }

            switch (flag) {
                case 'up':

                    if (index > 0) {
                        /*index--;
                        // 滑动的是content的时候获取的是ul的整体
                        contentUl.style.top = index * -content.offsetHeight + 'px';*/
                        move(--index);
                    }
                    break;

                case 'down':

                    if (index < 4) {
                        // index++;
                        // contentUl.style.top = index * -content.offsetHeight + 'px';
                        move(++index);
                    }
                    break;
            }
            // console.log(contentUl);
        },200)



    }


    function move(index) {
        contentUl.style.top = index * -content.offsetHeight + 'px';

        for (var j = 0; j < headerNavBottom.length; j++) {
            headerNavBottom[j].style.width = 0;
        }
        headerNavBottom[index].style.width = '100%';
        ArrowMove(headerNavLi[index]);
        console.log(index);
    }

};