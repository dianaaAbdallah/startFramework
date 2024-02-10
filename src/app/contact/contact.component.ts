import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
onBlurMethod(id:string){
  var inputText:any= document.getElementById(id);

  if(inputText!=null&& inputText.value!=""){
    inputText.classList.add('formKeyDown');
}
else{
  inputText.classList.remove('formKeyDown');
}
 }
}
