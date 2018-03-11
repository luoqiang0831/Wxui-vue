import Vue from 'vue'
import VAlaert from './alert.vue';
import VConfirm from './confirm.vue';

const newInstance = (_module,_props={}) => {

    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(_module, {
                props: _props
            });
        },
        created:function(){

          window.addEventListener("hashchange", this.hashChange);

        },
        methods:{
        	hashChange:function () {

        	    const el = this.$el;

        	    el.parentNode && el.parentNode.removeChild(el);

        	},
        }
    });

    return Instance.$mount();
};


const Alert = config=>{

	if(typeof config === "string")config.content=config;

	document.body.appendChild(newInstance(VAlaert,config).$el)

}

const Confirm = config=>{

	if(typeof config === "string")config.content=config;

	document.body.appendChild(newInstance(VConfirm,config).$el)

}

export { Alert , Confirm};