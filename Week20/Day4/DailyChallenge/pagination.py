
class Pagination:
    def __init__(self, items=None, pageSize=10):
        if not self.__validate_args(items, pageSize):
            raise Exception('wrong args')

        self.__items = items
        self.__pageSize = int(pageSize)
        self.__currentPage = 1
        self.__totalPages = len(items) // pageSize

    def __validate_args(self, items, pageSize):
        if items == None:
            return True
        if (type(items) is list and
                type(pageSize) is int and
                len(items) > pageSize > 0):
            return True
        return False

    def getVisibleItems(self):
        def is_in_current(i):  # returns True if index is within range of current page items
            return (i >= self.__currentPage - 1 and
                    i < self.__currentPage + self.__pageSize - 1)

        return [item for i, item in enumerate(self.__items) if is_in_current(i)]

    def prevPage(self):
        if self.__currentPage == 1:
            return self
        self.__currentPage -= self.__pageSize
        return self

    def nextPage(self):
        if self.__currentPage + self.__pageSize > len(self.__items):
            return self
        self.__currentPage += self.__pageSize
        return self

    def firstPage(self):
        self.__currentPage = 1
        return self

    def lastPage(self):
        self.__currentPage = self.__totalPages * self.__pageSize + 1
        return self

    def goToPage(self, pageNum):
        if type(pageNum) is not int:
            print('parameter pageNum must be integer')
            return self
        if pageNum > self.__totalPages:
            return self.lastPage()
        if pageNum < 1:
            return self.firstPage()
        self.__currentPage = pageNum
        return self


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

page = Pagination(alphabetList, 4)


print(page.getVisibleItems())              # ['a', 'b', 'c', 'd']
print(page.nextPage().getVisibleItems())   # ['e', 'f', 'g', 'h']
print(page.nextPage().getVisibleItems())   # ['i', 'j', 'k', 'l']
print(page.nextPage().getVisibleItems())   # ['m', 'n', 'o', 'p']
print(page.nextPage().getVisibleItems())   # ['q', 'r', 's', 't']
print(page.nextPage().getVisibleItems())   # ['u', 'v', 'w', 'x']
print(page.nextPage().getVisibleItems())   # ['y', 'z']

print(page.nextPage().getVisibleItems())   # ['y', 'z']
print(page.nextPage().getVisibleItems())   # ['y', 'z']
print(page.firstPage().getVisibleItems())  # ['a', 'b', 'c', 'd']
print(page.lastPage().getVisibleItems())   # ['y', 'z']
