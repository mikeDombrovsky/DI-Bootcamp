import numpy as np

# Create a vector* of zeros with size 10 using np.zeros().
zeros = np.zeros(10)
print(zeros)

# Compute the memory size* of any array
memory_size = zeros.itemsize * len(zeros)
print('memory size = ', memory_size)

# Retrieve the documentation of the numpy add function from the command line.
print(np.info(np.add))

# Create a vector with values ranging from 10 to 49 using np.arange().
range_vector = np.arange(10, 50)

# Reverse a vector so the first element becomes last (Hint: Use slicing).
print(range_vector)

# reverse slicing
print(range_vector[::-1])

# Create a 3x3 matrix* with values ranging from 0 to 8 using np.reshape().
arr = np.arange(0, 9)
print(np.reshape(arr, (3, 3)))


# Find indices of non-zero elements from [1,2,0,0,4,0] using np.nonzero()
print(np.nonzero(np.array([1, 2, 0, 0, 4, 0])))


# Create a 3x3 identity matrix* using np.eye().
matrix = np.eye(3)
print(matrix)


# Create a 5x5 matrix with row values ranging from 0 to 4. 
# The output should be a matrix where each row is [0, 1, 2, 3, 4].
arr = np.arange(0,5)
print(np.tile(arr, (5, 1)))


# Create a vector of size 10 with values ranging from 0 to 1, both excluded. 
# You can use np.linspace.
print(np.linspace(0, 1, 10))


# Create a random vector of size 10 and sort it.
print(np.sort(np.random.rand(10)))


# Print the minimum and maximum representable value for each numpy scalar type
print(np.iinfo(np.int8).min)
print(np.iinfo(np.int8).max)
print(np.iinfo(np.int16).min)
print(np.iinfo(np.int16).max)
print(np.iinfo(np.int32).min)
print(np.iinfo(np.int32).max)
print(np.iinfo(np.int64).min)
print(np.iinfo(np.int64).max)

print(np.finfo(np.float32).min)
print(np.finfo(np.float32).max)
print(np.finfo(np.float64).min)
print(np.finfo(np.float64).max)

# How to convert a float (32 bits) array into an integer (32 bits) in place? Use np.ndarray.astype
print(np.array([1.1, 2.2, 2.5]).astype(np.int32))


# Subtract the mean* of each row of a matrix. Use np.mean with axis=1.
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
mean_subtracted = matrix - matrix.mean(axis=1, keepdims=True)
print(mean_subtracted)

# How to sort an array by the nth column? Use np.argsort.
matrix = np.array([[1, 3, 2], [4, 1, 5], [7, 9, 8], [10, 5, 11]])
print(matrix[matrix[:, 1].argsort()])

# How to swap two rows of an array? You can do this using array indexing.
matrix = np.array([[0, 1, 2], [3, 4, 5], [6, 7, 8]])
matrix[[1, 0]] = matrix[[0, 1]]
print(matrix)


# Given an array C that is a bincount*, how to produce an array 
# A such that np.bincount(A) == C? Use np.repeat.
array = np.array([0, 2, 2, 6, 5])
count = np.bincount(array)  # [1 0 2 0 0 1 1]
recreated_array = np.repeat(np.arange(len(count)), count)
print(recreated_array)
