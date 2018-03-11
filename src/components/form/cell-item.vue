<template>
	<div class="weui-cell">
	 	<div class="weui-cell__hd"><label class="weui-label" v-html="name"></label></div>
		<div class="weui-cell__bd">
		   <slot></slot>
		</div>
		<!-- <div class="weui-cell__ft">
            <i class="weui-icon-success"></i>
        </div> -->
	</div>
</template>
<script >
export default {
  name: 'wx-item',
  props:{
  	name:String
  }
}
</script>
