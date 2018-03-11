<template>
    <div class="weui-mask" :style="styles"><slot></slot></div>
</template>

<script type="text/babel">
    // import {addClass, removeClass, getScrollview, isIOS} from '../../../utils/assist';

    export default {
        name: 'wx-mask',
        data() {
            return {
                show: this.value
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            bgcolor: {
                type: String,
                default: '#000'
            },
            opacity: {
                default: .4
            },
            animated: {
                type: Boolean,
                default: true
            },
            transition:{
                type:String,
                default:'opacity 0.2s linear 0s'
            }
        },
        watch: {
            value(val) {

                this.show = val;

                setTimeout(() => {
                    //removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
                    if(!val)
                        this.$el.style.opacity=0;
                }, 200);
            }
        },
        computed: {
            styles() {

                const style = {'transition':this.transition,'pointer-events':'none','opacity':0};
                if (this.show) {
                    style['opacity'] = '1';
                    style['pointer-events'] = 'auto';
                }

                return style;
            }
        },
        // mounted() {
        //     this.scrollView = getScrollview(this.$el);
        // },
        
    }
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-tips/weui-mask";
</style>