function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
         console.log('test123r')
          return match.charAt(1).toUpperCase();
     });
}