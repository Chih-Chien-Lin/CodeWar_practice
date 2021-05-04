function rgb(r, g, b){
    // complete this function  
    var input = [r,g,b];
    var exp = [];
    var list = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(i = 0; i < 3; i++){
  
      if(input[i] < 0 || input[i] == 0){
        exp.push('00');
      }else if(input[i] > 255 || input[i] == 255){
        exp.push('FF');
      }else if(input[i] < 255 && input[i] > 0){
        var temp1= parseInt(input[i] / 16);
        var temp2= input[i] % 16;
        exp.push(list[temp1] + list[temp2]);
      }  
    }
    var result = exp.join('');
    return result
  }