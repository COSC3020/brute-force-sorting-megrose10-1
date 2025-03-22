# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

I discussed what this problem is overall asking with cole, olivia, and ashylyn. Part of this code was produced last fall. When my original permuations were not working, I went to the TA during lab/office hours and he recommended reading https://medium.com/@mevinmevi88/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-0cac4fece570, which I used before this implementation but decided on a more interative approach. I referenced https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/ and this website https://en.wikipedia.org/wiki/Heap%27s_algorithm for heap's algorithm on developing permutatiosn. I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Starting with generating all permutatiosn, this would take a complexity of n factorial (O(n!)). In the loop that checks each permutation if it is sorted or not, we call checkSort which has a for loop being O(n) This would all result in O(n * n!) being average and worst case. The other for loops not mentioned are not in the time complexity since these override or are constant. The best case input for this implementation would be a sorted array, since it checks it first thing. The worst case would be an array going in descending order since it would try all permutations and the sorted one being last. The worst case will stay at O(n * n!). In some cases, randomly permutating may help time complexities, which has a possibility of improving the average cases, however, this is not guaranteed.
