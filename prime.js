function primeCheck(num){
    let count=0;
    for (let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }else{
          continue;
        } 
    }
  if(count==2){
    return true;
  }else{
    return false;
  }
}
let ans = primeCheck(78);
console.log(ans);