<template>
 	<input
 	    :autocomplete="autocomplete"
 	    :spellcheck="spellcheck"
 	    ref="input"
 	    :type="type"
 	    :placeholder="placeholder"
 	    :disabled="disabled"
 	    :maxlength="maxlength"
 	    :readonly="readonly"
 	    :name="name"
 	    :min="min"
 	    :max="max"
 	    :value="currentValue"
 	    :number="number"
 	    :autofocus="autofocus">
</template>
<script>
export default {
  name: 'wx-input',
  data() {
      return {
          currentValue: this.value,
          isempty: !this.value,
          valid: true,
          errorMsg: '',
          errorCode: '',
          regexObj: {
              email: '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$',
              mobile: '^(86)?1[3,4,5,7,8]\\d{9}$',
              bankcard: '^\\d{15,19}$'
          }
      }
  },
  props: {
      type: {
          validator (value) {
              return ['text', 'textarea', 'tel', 'password', 'url', 'email', 'date'].indexOf(value) > -1;
          },
          default: 'text'
      },
      value: {
          type: [String, Number],
          default: ''
      },
      size: {
          validator (value) {
              return ['small', 'large', 'default'].indexOf(value) > -1;
          }
      },
      placeholder: {
          type: String,
          default: ''
      },
      maxlength: {
          type: Number
      },
      disabled: {
          type: Boolean,
          default: false
      },
      icon: String,
      autosize: {
          type: [Boolean, Object],
          default: false
      },
      rows: {
          type: Number,
          default: 2
      },
      min: {
          type: Number,
          default: 2
      },
      max: {
          type: Number,
          default: 2
      },
      readonly: {
          type: Boolean,
          default: false
      },
      name: {
          type: String
      },
      number: {
          type: Boolean,
          default: false
      },
      autofocus: {
          type: Boolean,
          default: false
      },
      spellcheck: {
          type: Boolean,
          default: false
      },
      autocomplete: {
          validator (value) {
              return ['on', 'off'].indexOf(value) > -1;
          },
          default: 'off'
      },
  },
  // methods:{

  // 	validatorInput(val, showError) {

  // 	    if(this.required && val === '') {
  // 	        this.error('不能为空', 'NOT_NULL');
  // 	        return;
  // 	    }

  // 	    if (this.min && val.length < this.min) {
  // 	        this.error(`最少输入${this.min}位字符`, 'NOT_MIN_SIZE');
  // 	        return;
  // 	    }

  // 	    const v = this.regex === 'bankcard' ? val.replace(/\s/g, '') : val;
  // 	    const reg = this.regexObj[this.regex] ? this.regexObj[this.regex] : this.trim(this.regex, '/');
  // 	    if (!!v && this.regex && !new RegExp(reg).test(v)) {
  // 	        this.error('输入字符不符合规则', 'NOT_REGEX_RULE');
  // 	        return;
  // 	    }

  // 	},
  // 	validationBlur:function(e){

  // 		this.validatorInput(this.currentValue, true)

  // 		this.handleBlur && this.handleBlur(e);

  // 	}

  // }
}
</script>
