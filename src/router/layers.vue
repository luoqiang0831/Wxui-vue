<template>
   <div class="page layers js_show">
       <div class="page__hd">
           <div class="j_info page__info" data-for="normal">
               <h2 class="page__title">WeUI页面层级</h2>
               <p class="page__desc">用于规范WeUI页面元素所属层级、层级顺序及组合规范。</p>
           </div>
           <div class="j_info page__info" data-for="popout" style="display:none">
               <h2 class="page__title">Popout</h2>
               <p class="page__desc">弹出层，作为内容层和导航层的补充，用于承载弹窗通知、操作菜单、菜单、成功或加载中等状态的Toast，表单报错提示等弹出内容。</p>
           </div>
           <div class="j_info page__info" data-for="mask" style="display:none">
               <h2 class="page__title">Mask</h2>
               <p class="page__desc">蒙层，配合Popout层使用，用于锁定内容层和导航层操作，不单独使用。</p>
           </div>
           <div class="j_info page__info" data-for="navigation" style="display:none">
               <h2 class="page__title">Navigation</h2>
               <p class="page__desc">导航层，位于内容层之上，在用户滑动内容层时可保持位置不动，通常用于承载导航栏等需要固定在页面的元素。</p>
           </div>
           <div class="j_info page__info" data-for="content" style="display:none">
               <h2 class="page__title">Content</h2>
               <p class="page__desc">内容层，承载页面主要内容。</p>
           </div>
       </div>
       <div class="page__bd">
           <div class="layers j_layers">
               <div data-name="popout" class="j_layer layers__layer layers__layer_popout j_transform"><span>Popout</span></div>
               <div data-name="mask" class="j_layer layers__layer layers__layer_mask j_transform"><span>Mask</span></div>
               <div data-name="navigation" class="j_layer layers__layer layers__layer_navigation j_transform"><span>Navigation</span></div>
               <div data-name="content" class="j_layer layers__layer layers__layer_content j_transform"><span>Content</span></div>
           </div>
       </div>
     
   </div>
</template>
<style>
    
    .page.layers {
        overflow-x: hidden;
        -webkit-perspective: 1000px;
        perspective: 1000px
    }

    @media only screen and (max-width: 320px) {
        .page.layers .page__hd {
            padding-left:20px;
            padding-right: 20px
        }
    }

    .page.layers .page__bd {
        position: relative
    }

    .page.layers .page__desc {
        min-height: 4.8em
    }

    .page.layers .layers__layer {
        position: absolute;
        left: 50%;
        width: 150px;
        height: 266px;
        margin-left: -75px;
        box-sizing: border-box;
        -webkit-transition: .5s;
        transition: .5s;
        background: url(../../static/images/layers/transparent.gif) no-repeat 50%;
        background-size: contain;
        font-size: 14px;
        color: #fff
    }

    .page.layers .layers__layer span {
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        text-align: center;
        -webkit-transition: .5s;
        transition: .5s
    }

    .page.layers .layers__layer:last-child span {
        color: #aaa
    }

    .page.layers .layers__layer.j_hide {
        opacity: 0
    }

    .page.layers .layers__layer.j_pic span {
        color: transparent
    }

    @media only screen and (min-width: 375px) and (min-height:603px) {
        .page.layers .layers__layer {
            width:180px;
            height: 320px;
            margin-left: -90px
        }
    }

    @media only screen and (min-width: 414px) and (min-height:640px) {
        .page.layers .layers__layer {
            width:200px;
            height: 355px;
            margin-left: -100px
        }
    }

    .page.layers .layers__layer_popout {
        border: 1px solid hsla(0,0%,80%,.5);
        z-index: 4
    }

    .page.layers .layers__layer_popout.j_transform {
        -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(120px);
        transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(120px)
    }

    @media only screen and (max-width: 320px) {
        .page.layers .layers__layer_popout.j_transform {
            -webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(140px);
            transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(140px)
        }
    }

    .page.layers .layers__layer_popout.j_pic {
        border-color: transparent;
        background-image: url(../../static/images/layers/popout.png)
    }

    .page.layers .layers__layer_mask {
        background-color: rgba(0,0,0,.5);
        z-index: 3
    }

    .page.layers .layers__layer_mask.j_transform {
        -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(40px);
        transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(40px)
    }

    @media only screen and (max-width: 320px) {
        .page.layers .layers__layer_mask.j_transform {
            -webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(80px);
            transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(80px)
        }
    }

    .page.layers .layers__layer_navigation {
        background-color: rgba(40,187,102,.5);
        z-index: 2
    }

    .page.layers .layers__layer_navigation.j_transform {
        -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px);
        transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px)
    }

    @media only screen and (max-width: 320px) {
        .page.layers .layers__layer_navigation.j_transform {
            -webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(20px);
            transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(20px)
        }
    }

    .page.layers .layers__layer_navigation.j_pic {
        background-color: transparent;
        background-image: url(../../static/images/layers/navigation.png)
    }

    .page.layers .layers__layer_content {
        background-color: #fff;
        z-index: 1
    }

    .page.layers .layers__layer_content.j_transform {
        -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-120px);
        transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-120px)
    }

    @media only screen and (max-width: 320px) {
        .page.layers .layers__layer_content.j_transform {
            -webkit-transform:translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px);
            transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px)
        }
    }

    .page.layers .layers__layer_content.j_pic {
        background-image: url(../../static/images/layers/content.png)
    }
</style>