def reverseVowels(s: str) -> str:
    j = [i for i in s if i in 'aeiouAEIUO']
    s = list(s)
    for i in range(len(s)):
        if s[i] in 'aeiouAEIOU':
            s[i] = j.pop() 
    return ''.join(s)

# print(reverseVowels('leetcode'))


def firstUniqChar(s: str) -> int:
    seen = []
    idx = {}
    for i in range(len(s)):
        if s[i] not in seen:
            seen.append(s[i])
            idx[s[i]] = i
        elif s[i] in seen:
            idx.pop(s[i], None)
    result = min(idx.values(), default=-1)
    return result


print(firstUniqChar("loveleetcode"))