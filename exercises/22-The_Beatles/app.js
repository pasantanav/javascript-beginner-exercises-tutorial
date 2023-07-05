function sing(){
    let song= '';
    for(let i=0; i<12; i++){
        if(i==4){
            song+='there will be an answer, ';
        } else if(i==10){
            song+= 'whisper words of wisdom,';
        } else if(i==11){
            song+= ' let it be';
        } else{
            song+= 'let it be, ';
        }
        
    }
    return song;
}

//Your code above ^^^

console.log(sing());