def bubbleSort(array):

    i = 0

    while (i<len(array)):

        j = 0
        while (j<(len(array)-1-i)):

            if (array[j]>array[j+1]):

                swap = array[j+1]
                array[j+1] = array[j]
                array[j]=swap

            j += 1

        i += 1

    return array

array1 = [5,3,4,6,1,8,7]
array2 = [7,6,5,4,3,2,1]

bubbleSort(array1)
bubbleSort(array2)

print(array1)
print(array2)
