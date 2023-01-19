import math


def biSearch(array, value):
    hi = len(array)
    lo = 0
    while hi != lo:
        mid = math.floor(lo + (hi - lo)/2)
        if array[mid] == value:
            return True
        elif array[mid] > value:
            hi = mid
        else:
            lo = mid + 1
    return False


array1 = [1, 2, 3, 5, 7, 8, 9]
array2 = [3, 4, 6, 8, 9, 11, 17]

print("Found!") if biSearch(array1, 7) else print("NOT Found")
print("Found!") if biSearch(array2, 7) else print("NOT Found")
