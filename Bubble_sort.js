/*

OVERVIEW:
    Bubble Sort compares the 2 numbers next to each other and if the number1
    is larger than number2 -> Swap. If not larger, no Swap.
    At the end, the larger number comes on top.
    Pass 1 - Larger number at the top
    Pass 2 - Continue same Process, if num1 > num2 -> Swap
    Number of comparisons/pass:n-1

    Output: Sorted Array

*/

function bubbleSort(arr) {
    let noSwap;
    //Loop through arr with variable i from the end to the beginning of the array
    for (let i = arr.length; i > 0; i--) {
        //Start inner loop with variable j from the beginning unitil i-1
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            //Compare, if arr[j] > arr[j+1] then swap
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        console.log("Pass Complete");
        if (noSwap) break;
    }
    //Return the sorted array
    return arr;
}

bubbleSort([9, 18, 1, 45, 20, 67, 43, 65]);

//Time complexity : 
// - Worst Case : BigO(N^2)
// - Best Case : BigO(n)