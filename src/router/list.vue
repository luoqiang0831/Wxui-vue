<template>
    <div class="page__bd">
        <wx-list-group title="带说明的列表项">
            <wx-list arrow>
                <span>选项一</span>
                <span slot="tips">点击跳转</span>
            </wx-list>
             <wx-list arrow>
                <span>选项一</span>
                <span slot="tips">点击跳转</span>
            </wx-list>
             <wx-list arrow>
                <span>选项一</span>
                <span slot="tips">点击跳转</span>
            </wx-list>
        </wx-list-group>
        <wx-list-group title="带图标、说明的列表项">
            <wx-list>
                <span slot="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></span>
                <span>选项一</span>
                <span slot="tips">点击跳转</span>
            </wx-list>
             <wx-list>
                <span slot="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></span>
                <span>选项一</span>
                <span slot="tips">点击跳转</span>
            </wx-list>
             <wx-list type="a" href="https://www.baidu.com/">
                <span slot="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></span>
                <span>选项一</span>
                <span slot="tips">点击百度</span>
            </wx-list>
        </wx-list-group>

        <wx-list-group title="滑动可删除的列表">
            <wx-list type="del">
                <span>选项一</span>
                <span slot="tips">说明一</span>
            </wx-list>
            <wx-list type="del" :delcallback="delafter">
                <span>选项二</span>
                <span slot="tips">说明二</span>
            </wx-list>
            <wx-list>
                <span>选项三</span>
                <span slot="tips">说明三</span>
            </wx-list>
            <wx-list>
                <span>选项四</span>
                <span slot="tips">说明四</span>
            </wx-list>
            <wx-list>
                <span>选项五</span>
                <span slot="tips">说明五</span>
            </wx-list>
        </wx-list-group>
    </div>
</template>
<script>
    export default{
        methods:{
            succeed:function(){

                this.$toast("成功")
            },
            delafter:function(el,target){
                console.log(el,target)
            },
            error:function(){

                this.$load({
                    text:"加载中",
                    icon:"cancel",
                    callback:()=>{


                    }
                })
            }

        }
    }
</script>