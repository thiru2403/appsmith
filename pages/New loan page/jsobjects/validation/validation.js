export default {
	 isValid : ()=>{
		 if("{{borrowerPhoneNumber.text.length}}" == 10){
			 return true;
		 }else{
			 return false;
		 }
	 }
}