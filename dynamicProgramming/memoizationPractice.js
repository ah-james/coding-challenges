const addTo80 = n => { // this could be inefficient if it takes a long time to run
    return n +  80
}



// memoization is remembering a solution to a subproblem so it doesn't have to be calculated again
const memoizedAddTo80 = () => {
    let cache = {} // to remove cache from global scope use closure
    return (n) => {
        if (n in cache) { // if n exists in cache
            return cache[n] // return cached value
        } else {
            cache[n] = n + 80 // if n doesn't exist, add it to the cache
            return cache[n]
        }
    }
} // using this, if n already exists in the cache the process will be significantly more efficient

const memoized = memoizedAddTo80() // this will return anonymous function inside memoizedAddTo80

console.log(memoized(5))