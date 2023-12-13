data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

wrong_answers = dict()
correct_answers = []

def star_wars_quiz():
    for i, item in enumerate(data):
        if len(wrong_answers) >= 3:
            print('Try to play again!')
            print_wrong_answer_info()
            break
        question, answer = item.values()
        user_answer = input(f'{question}')
        if user_answer.lower() != answer.lower():
            wrong_answers[i] = user_answer
            print('')
        else:
            correct_answers.append(answer)
                
        inform()
        
def print_wrong_answer_info():
    print('You answerd wrong to next questions:\n')
    
    for i, user_answer in wrong_answers.items():
        question, answer = data[i].values()
        print(f'{question}\n Your answer: {user_answer}\n Correct: {answer}')
               
        
def inform():
    print(f'Correct answers: {len(correct_answers)}, Incorrect answers: {len(wrong_answers)}')        
        
star_wars_quiz()