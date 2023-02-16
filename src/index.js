module.exports = function check(str, bracketsConfig) {
  
  for (let i=0; i<str.length; i++) {
    for(let j=0; j<bracketsConfig.length; j++){
    //    console.log (str[i])
      if (str[i]===bracketsConfig[j][0]) {
        //  console.log(bracketsConfig[j][0])
        if (str[i+1]===bracketsConfig[j][1]){
            //console.log (str[i])
         //   let t=str[i];
         //   let t1=str[i+1];
            str=str.slice(0,i) + str.slice(i+2,str.length)
        //  console.log(str)
          i=-1;
          j=-1;
        }
      }
    }
  }

  
  if (str.length===0) {
    return true;
   // console.log(1);
   } else { 
    return false;
    //console.log(0);
   }
}
