function firstNonRepeatingLetter(s) {
    if(s == ''){
      return ''
    }else{
      var s1 = s.toLowerCase()
      var count = 0;
      console.log('s1: ',s1)
    for(i = 0; i < s1.length; i++){
      console.log('i: ',i)
      console.log('s1[i]: ', s1[i])
      count = 0;
      count = s1.split(s1[i]).length
      console.log('count: ',count)
      if(count == 2){
        console.log('result')
        if(s.includes(s1[i])){
          return s[i]
          break
        }else{
          return s1[i].toUpperCase()
          break
        }
        
      }else{
        if(i == s1.length -1){
          return ''
        }
        console.log('next')
        continue
      }
    }  
    }
  }