var hello = formatDuration(3600);
console.log('hello: ', hello);
function formatDuration (seconds) {
    // Complete this function
    var output = ''
    var list = [];
    var secYear = 60*60*24*365;
    var secDay = 60*60*24;
    var secHr = 60*60;
    var secMin = 60;

    var year = Math.floor(seconds / secYear);
    var temp1 = seconds % secYear;
    if(year != 0){
        if(year > 1){
            list.push(year + ' years')
        }else{
            list.push(year + ' year')
        }
    }

    var day = Math.floor( temp1 / secDay);
    var temp2 = temp1 % secDay;
    if(day != 0){
        if(day > 1){
            list.push(day + ' days')
        }else{
            list.push(day + ' day')
        }
    }

    var hr = Math.floor(temp2 / secHr);
    var temp3 = temp2 % secHr;
    if(hr != 0){
        if(hr > 1){
            list.push(hr + ' hours')
        }else{
            list.push(hr + ' hour')
        }
    }

    var min = Math.floor(temp3 / secMin);
    var temp4 = temp3 % secMin;
    if(min != 0){
        if(min > 1){
            list.push(min + ' minutes')
        }else{
            list.push(min + ' minute')
        }
    }

    if(temp4 != 0){
        if(temp4 > 1){
            list.push(temp4 + ' seconds')
        }else{
            list.push(temp4 + ' second')
        }
    }

    if(seconds == 0){
        output = 'now'
    }

    for(i = 0; i < list.length ; i++){
        if(list.length == 1){
            output = list[i]
        }else if(i+1 == list.length){
            output = output + ' and '+ list[i]
        }else if(i == 0 && list.length !=1){
            output = list[i]
        }
        else{
            output = output + ', ' + list[i]
        }
    }
    return output
  }
  