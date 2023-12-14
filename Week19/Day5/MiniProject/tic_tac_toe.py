results = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']]

current_player = 'X'

winner = None

def display_board():
    board = f'''
    TIC TAC TOE
    *****************
    *   {results[0][0]} | {results[0][1]} | {results[0][2]}   *
    *  ---|---|---  *
    *   {results[1][0]} | {results[1][1]} | {results[1][2]}   *
    *  ---|---|---  *
    *   {results[2][0]} | {results[2][1]} | {results[2][2]}   *
    *****************
    '''
    print(board)

def player_input(player):
    print(f'Player {player} turn.')
    while True:
        try:
            row = int(input('Enter row (1 - 3): ')) - 1
            column = int(input('Enter column (1 - 3): ')) - 1
            if results[row][column] != ' ':
                print('This cell is not empty, sorry')
            else:
                results[row][column] = player
                return
        except:
            print('You typed somethong wrong, try again')

def check_win():
    return check_row1() or check_row2() or check_row3() or check_col1() or check_col2() or check_col3() or check_diagonal1() or check_diagonal2()

def setWinner(player):
    global winner
    winner = player
        
        
def check_row1():
    if  current_player == results[0][0] == results[0][1] == results[0][2]:
        setWinner(results[0][0])
        return True

def check_row2():
    if current_player == results[1][0] == results[1][1] == results[1][2]:
        setWinner(results[1][0])
        return True

def check_row3():
    if current_player == results[2][0] == results[2][1] == results[2][2]:
        setWinner(results[2][0])
        return True

def check_col1():
    if current_player == results[0][0] == results[1][0] == results[2][0]:
        setWinner(results[0][0])
        return True

def check_col2():
    if current_player == results[0][1] == results[1][1] == results[2][1]:
        setWinner(results[0][1])
        return True

def check_col3():
    if current_player == results[0][2] == results[1][2] == results[2][2]:
        setWinner(results[0][2])
        return True

def check_diagonal1():
    if current_player == results[0][0] == results[1][1] == results[2][2]:
        setWinner(results[0][0])
        return True

def check_diagonal2():
    if current_player == results[0][2] == results[1][1] == results[2][0]:
        setWinner(results[0][2])
        return True
    
def check_full():
    for row in results:
        for square in row:
            if square  == ' ':
                return False
    return True    

def swithPlayer():
    global current_player
    if current_player == 'X':
        current_player = 'O'
    else:
        current_player = 'X'

def play():
    
    while True:
        display_board()
        player_input(current_player)
        
        if check_win():
            display_board()
            return print(f'Yoooho! {winner} won!')
        
        if check_full():
            display_board()
            return print('Tie! Play again!')
        
        swithPlayer()

play()