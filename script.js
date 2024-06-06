function firstChar(text) {
  // your code here
	  let x = text.trim()
  x.length==0?return "":return x[0]
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
