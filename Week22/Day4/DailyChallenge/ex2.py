
# Exercise 2: Longest Substring Without Repeating Characters
# You are given a string s. Your task is to find the length of
# the longest substring without repeating characters.
# A substring is a contiguous sequence of characters within a string.
# Write a function to accomplish this task with an efficient time complexity.

# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

def longest_unique_substring(s):
    max_len = 0

    curr = ''
    curr_len = 0

    for char in s:  # O(n)
        if char not in curr:  # O(n^2)
            curr += char
            curr_len += 1
        else:
            if curr_len > max_len:
                max_len = curr_len
                
            curr = char
            curr_len = 1

    return max_len


print(longest_unique_substring("abcabcbb")) # 3
print(longest_unique_substring("bbbbb")) # 1
print(longest_unique_substring("pwwkew"))  # 3
