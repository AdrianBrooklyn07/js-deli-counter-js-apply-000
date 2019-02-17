function takeANumber(line, name){
  line.push(name);
  return  "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line, name){
   line.pop(name);
    if (line.length === 0){ 
      return "There is nobody waiting to be served!";
     }else{
       return "Currently serving Steven.";
    }
}

  function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
    } else {
      var personX = line.shift();
      return "Now serving " + personX + "!";
    }  
  }
  
  