const f=[];
const climStairs=function(n){
  if(n==1) return 1;
  if(n==2) return 2;

  if(f[n]===undefined){
    f[n]=climStairs(n-1)+climStairs(n-2);

  }
  return f[n];
}
console.log(climStairs(100));