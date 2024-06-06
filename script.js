function firstChar(text) {
  // your code here
	  let x = text.trim()
    if(x.length==0){
      return ""
  }
  else{
      return x[0]
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
