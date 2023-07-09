//1. 
// Reverse

/* Given a numerical array, reverse the order of values, in-place. 
The reversed array should have the same length, 
with existing elements moved to other indices so that order of elements is reversed. 
Working 'in-place' means that you cannot use a second 
array – move values within the array that you are given. 
As always, do not use built-in array functions such as splice(). */

function reverse(arr) {

    var temp = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 -
            i] = temp;
    }   

    return arr;
}

console.log(reverse([1, 2, 3, 4, 5, 6]));

//We set a temp variable to hold the value of the current index we are on.
//We then set the current index to the value of the index at the end of the array.
//We then set the value of the index at the end of the array to the value of the temp variable.
//We then return the array.

//#######################################################################

//2.
// Rotate

/* Implement rotateArr(arr, shiftBy) that accepts array and offset.
Shift arr’s values to the right by that amount.
‘Wrap-around’ any values that shift off array’s end to the other side,
so that no data is lost. Operate in-place: given ([1,2,3],1),   
change the array to [3,1,2]. Don’t use built-in functions.
Second: allow negative shiftBy (shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
Fourth: minimize the touches of each element. */

function rotateArr(arr, shiftBy) {
    var temp = 0;
    var count = 0;
    if (shiftBy > 0) {
        while (count < shiftBy) {
            temp = arr[arr.length - 1];
            for (var i = arr.length - 1; i > 0; i--) {
                arr[i] = arr[i - 1];
            }
            arr[0] = temp;
            count++;
        }
    }
    else if (shiftBy < 0) {
        while (count > shiftBy) {
            temp = arr[0];
            for (var i = 0; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[arr.length - 1] = temp;
            count--;
        }
    }

    return arr;
}

console.log(rotateArr([1, 2, 3, 4, 5, 6], 2));