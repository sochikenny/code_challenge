function printNum (){
    for (let i = 1; i <= 100; i++){
        if (i%3===0 && i%5===0){
        console.log('CLXDTC')  
        } else if (i%3===0){
        console.log('CLX')
        } else if (i%5===0){
        console.log('DTC')
        } else {
        console.log(i)
        }
    }
}

printNum()


