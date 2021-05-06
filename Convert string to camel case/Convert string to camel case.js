function toCamelCase(str) {
    console.log('Str: ', str)
      var newArr1 = [];
      var newArr2 = [];
      var isDesh = false
      var isUnder = false
      if (str == '') {
          return ''
      } else {
          if (str.includes('-')) {
            console.log('desh')
              isDesh = true
              var newStr1 = str.split('-')
              for(i=0; i< newStr1.length; i++){
                  if(i == 0){
                      newArr1.push(newStr1[i])
                      continue
                  }else{
                      var n = newStr1[i].charCodeAt(0);
                      if (n > 96 && n < 123) {
                          var m = String.fromCharCode(n - 32);
                          var newElm = newStr1[i].replace(newStr1[i][0], m)
                          newArr1.push(newElm)
                      } else {
                          newArr1.push(newStr1[i])
                      }
                  }
              }
          }else if(str.includes('_')){
            console.log('under')
              isUnder = true
              var count = 0;
              var newStr1 = str.split('_')
              console.log('newStr1:', newStr1 )
              for(i=0; i< newStr1.length; i++){
                  if(i == 0){
                      newArr2.push(newStr1[i])
                      continue
                  }else{
                      var n = newStr1[i].charCodeAt(0);
                      if (n > 96 && n < 123) {
                          var m = String.fromCharCode(n - 32);
                          console.log('m: ',m)
                          var newElm = newStr1[i].replace(newStr1[i][0], m)
                          console.log('newElm: ', newElm)
                          newArr2.push(newElm)
                      } else {
                          newArr2.push(newStr1[i])
                      }
                  }
              }
          }
          
          if (isDesh) {
            console.log('new: ',newArr1)
              return newArr1.join('')
          } else if (isUnder) {
            console.log('new: ', newArr2)
              return newArr2.join('')
          }
  
      }
  }
  