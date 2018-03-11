
/**
 * [toJson 转换JSON]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export function toJson(str) { 

	if(typeof str === "string"){

		let _t=str.split(","),

			_temp="{";

		for(let _i of _t){

			let _s=_i.split(":");

			_temp+='"'+_s[0]+'":"'+_s[1]+'",';
		}

		return JSON.parse(_temp.slice(0,-1)+"}");
	}

}
/**
 * [checkMobile 检查手机号]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export function checkMobile(str) {

	if(!(/^1[345789]\d{9}$/.test(str)))return false;
	return true;
} 

