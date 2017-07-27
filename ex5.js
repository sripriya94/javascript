
let arr=[7,8,2,3,4,5,2,1];
let num={};
let output=[];
let a=(arr)=>{

for(var i=0;i<arr.length;i++)
{
num[arr[i]]=0;
}
for(x in num)
{
output.push(x);

}console.log(output);																																																																																																																																																																																																																																																																																													
}
a(arr);
