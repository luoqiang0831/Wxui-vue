import {Button} from './button/index.js';
import {Alert,Confirm} from './dialog/index.js';
import {Toast , Load} from './toast/index.js';
import { Cell } from './cell/index.js';
import { ListGroup, List } from './list/index.js';
import { Slider } from './slider/index.js';
import { Uploader } from './uploader/index.js';
import { Gallery } from './gallery/index.js';
import { Panel ,PanelItem ,PanelInfo } from './panel/index.js';
import { cllItem,formGroup,Input,radioGroup,smsValida,validaCode,switchs,checkboxGroup } from './form/index.js';
import { Progress } from './progress/index.js';
import { IosSheet ,AndroidSheet } from './actionSheet/index.js';
import { Mask } from './mask/index.js';
import { Picker , TimePicker } from './picker/index.js';
import { SearchBar } from './searchbar/index.js';

if (typeof window !== 'undefined' && window.Vue) {

	install(window.Vue);
    
}

export default Vue=>{

	Vue.component(Button.name, Button)
	Vue.component(switchs.name, switchs)
	Vue.component(Input.name, Input)
	Vue.component(cllItem.name, cllItem)
	Vue.component(formGroup.name, formGroup)
	Vue.component(radioGroup.name, radioGroup)
	Vue.component(smsValida.name, smsValida)
	Vue.component(validaCode.name, validaCode)
	Vue.component(checkboxGroup.name, checkboxGroup)
	Vue.component(Cell.name, Cell)
	Vue.component(ListGroup.name, ListGroup)
	Vue.component(List.name, List)
	Vue.component(Slider.name, Slider)
	Vue.component(Uploader.name, Uploader)
	Vue.component(Gallery.name, Gallery)
	Vue.component(Panel.name, Panel)
	Vue.component(PanelItem.name, PanelItem)
	Vue.component(PanelInfo.name, PanelInfo)
	Vue.component(Progress.name, Progress)
	Vue.component(IosSheet.name, IosSheet)
	Vue.component(AndroidSheet.name, AndroidSheet)
	Vue.component(Mask.name, Mask)
	Vue.component(Picker.name, Picker)
	Vue.component(TimePicker.name, TimePicker)
	Vue.component(SearchBar.name, SearchBar)

	Vue.prototype.$alert = Alert;
	Vue.prototype.$confirm = Confirm;
	Vue.prototype.$toast = Toast;
	Vue.prototype.$load = Load;
	
}



