from collections import deque

def is_palindrome(phrase):
    phrase = ''.join(phrase.lower().split())
    length = len(phrase)
    j = length - 1
    for i in range(length // 2 + 1):
        if phrase[i] != phrase[j]:
            return False
        j -= 1
    return True

def is_palindrome2(phrase):
    phrase = ''.join(phrase.lower().split())
    dq = deque(phrase)
    while len(dq) > 1:
        head = dq.popleft()
        tail = dq.pop()
        if head != tail:
            return False
    return True
    

print(is_palindrome("Racecar"))
print(is_palindrome("hello"))

print(is_palindrome2("Racecar"))
print(is_palindrome2("hello"))
