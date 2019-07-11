def merge(left, right):
	to_ret = []
	i,j = 0,0
	for k in range(len(left)):
		if left[i] <= right[j]:
			to_ret.append(left[k])
			i += 1
		else:
			to_ret.append(left[k])
			j += 1
	return to_ret

def mergeSort(arr):
	if len(arr) <= 1: return arr 
	leftSorted = mergeSort(leftSorted)
	rightSorted = mergeSort(rightSorted)

	merge(leftSorted, rightSorted)


def countInversions(sequence):
	print("ree")

print(merge([1,2,3], [4,5,6]))