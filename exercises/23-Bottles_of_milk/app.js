// Your code here:
let song;
for (let i=99; i>=1; i--){
    song='';
    song+=i;
    song+=(i==1)? ' bottle': ' bottles';
    song+=' of milk on the wall, ' + i;
    song+=(i==1)? ' bottle': ' bottles';
    song+=' of milk. Take one down and pass it around, ';
    if (i==1){
        song+='no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. '+
        'Go to the store and buy some more, 99 bottles of milk on the wall.';
    }else {
        song+=(i-1);
        song+=(i==2)? ' bottle': ' bottles';
        song+=' of milk on the wall. ';
    }
    console.log(song);
}