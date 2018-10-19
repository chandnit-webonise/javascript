var num=[5,4,2,8,2,1,4,5,8,5,2,8,8,8];
var count=0;

num.sort();

for(i=0;i<num.length;i++) {
  if(num[i+1]!=num[i]) {
    count++;
    console.log(num[i]+ " "+count);
    count=0;
  } else {
      count++;
    }
}