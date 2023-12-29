def reverseVowels(s: str) -> str:
    j = [i for i in s if i in 'aeiouAEIUO']
    s = list(s)
    for i in range(len(s)):
        if s[i] in 'aeiouAEIOU':
            s[i] = j.pop() 
    return ''.join(s)

print(reverseVowels('leetcode'))