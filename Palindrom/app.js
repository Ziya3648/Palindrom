function checkPalindrom(str){
  if (typeof str === "string") {
    var isPalindrom = true;
    for( var i = 0; i <= str.length-1; i++){
      if( str[i] !== str[str.length - i-1])
      {isPalindrom = false}
   }
   if(isPalindrom == false){
    return alert('Bu söz palindrom deyil');   
   }
   else{
    return alert('Bu söz palindromdur!');
   }
  } else return alert("Daxil etdiyiniz dəyər sətr tipi deyil");
}
  