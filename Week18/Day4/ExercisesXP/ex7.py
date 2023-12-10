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

wrong_aswers = []
correct_answers = 0

def star_wars_quiz():
    for item in data:
        question, answer = item.values()
        user_answer = input(f'{question}')
        if user_answer != answer:
            wrong_aswers.append(user_answer)
        else:
            correct_answers += 1
                
        inform()
        
def inform():
    print(f'Correct answers: {correct_answers}, Incorrect answers: {len(wrong_aswers)}')        
        
star_wars_quiz()