import Vue from 'vue'
import VToast from './toast.vue';

const newInstance = new Vue(VToast);

const Toast = config => {

  if (typeof config === "object" && !!config)
  	for(let i in config)
  		newInstance[i]=config[i];
  else
  	newInstance.text=config;

  newInstance.icon="success";

  document.body.appendChild(newInstance.$mount().$el)

}

const Load = config => {

  if (typeof config === "object" && !!config)
  	for(let i in config)
  		newInstance[i]=config[i];
  else
  	newInstance.text=config;

  newInstance.icon = "weui-loading"

  document.body.appendChild(newInstance.$mount().$el)

}

export { Toast, Load };
