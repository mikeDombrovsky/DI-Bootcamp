# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
import string
import random

generated = ''.join(random.choices(string.ascii_letters, k=5))

print(generated)