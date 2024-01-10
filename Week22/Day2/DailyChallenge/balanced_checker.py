from my_stack import Stack
import re

def check_balance(expr):
    openers = Stack()
    if not re.match('^[\[\]\{\}\(\)1-9\s\+\-\*\/]*$', expr):
        return False
    
    for char in expr:
        if char in ['{', '(', '[']:
            openers.add(char)
            continue
        
        if char in ['}', ')', ']']:
            if openers.is_empty() or not openers.is_match(char):
                return False
            openers.pop()
        
    if(openers.is_empty()):
        return True
    return False


def tests():
    
    assert check_balance("(1 + 2) * {[(3 / 4) - 5]}"), 'Your buggy checker failed in positive test!'

    inputs_false = ["[1 + 2) * (3 - 4)]", "((1 + 2)", 'lol']
    for inp in inputs_false:
        assert not check_balance(inp), 'Your buggy checker failed in negative tests!'
        
    print('TESTS PASSED')
    
tests()
    