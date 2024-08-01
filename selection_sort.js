// Perform selection sort
function selection_sort(arr) {
    let t1 = performance.now();
    
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }

        if (i !== lowest) {
            // Swap the elements
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    let t2 = performance.now();
    let t3 = t2 - t1;
    console.log(`Time taken: ${t3} milliseconds`);

    return arr;
}

// Average case: Random order
var A1 = selection_sort([1, 5, 15, 8, 20, 2, 9]);
console.log('Average case Sorted array A1:', A1);

// Best case: Already sorted
var A2 = selection_sort([1, 2, 3, 4, 5, 6, 7]);
console.log('Best case Sorted array A2:', A2);

// Worst case: Reverse sorted
var A3 = selection_sort([17, 26, 35, 44, 53, 62, 71]);
console.log('Worst case Sorted array A3:', A3);

// Time complexity
// Worst case: O(n^2)
// Best case: O(n^2)
// Average case: O(n^2)
