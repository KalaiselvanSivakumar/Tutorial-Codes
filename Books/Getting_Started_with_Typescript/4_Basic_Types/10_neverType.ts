// Type never is used for values that never occur.
// For example, a function which always throws an error has the return type as never

// A function whose return type is never should not have a reachable point
function doSomething(): never {
    throw new Error("Not implemented");
}