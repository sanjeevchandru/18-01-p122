document.write("87. to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements."+"<br>");
function test87(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
       if(arr1[i]==arr2[i]){
        return true;
       }
       return false;
    }
}
document.write("The array's are:[1,2,3],[1,2,3], Ans:"+ test87([1,2,3],[1,2,3])+"<br>");
document.write("The array's are:[1,2,3,4],[1,2,4,3], Ans:"+test87([1,2,3,4],[1,2,4,3])+"<br>");
document.write("The array's are:[1,2,3],[3,2,1], Ans:"+test87([1,2,3],[2,3,1])+"<br><br>");