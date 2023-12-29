from itertools import permutations
def isGood(nums):
    k = permutations(nums)
    j = [i for i in k]
    return j 

print(isGood([1,2,3,3]))