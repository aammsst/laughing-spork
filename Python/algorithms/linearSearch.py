def linearSearch(array, value):

    for i in array:
        if i == value:
            return True

    return False

array1 = [1,2,3,5,6,7,8]
array2 = [1,7,8,5,9,3,4]

print("value found") if (linearSearch(array1, 4)) else print("value NOT found")
print("value found") if (linearSearch(array2, 7)) else print("value NOT found")
