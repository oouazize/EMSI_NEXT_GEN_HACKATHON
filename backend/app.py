from database.database import con
from flask import Flask
from flask import request

from model.recommendation import recommendation as call_recommendation
from model.quiz import quiz as call_quiz
from model.feedback import feedback as call_feedback
from model.skills import skills as call_skills

app = Flask(__name__)

# quiz
@app.route('/api/quiz', methods=['POST'])
def quiz():
    result = call_quiz(request.json["topic"], request.json["level"], request.json["input"])
    question, options = result.split("options:")

    question = question.strip()
    options = options.strip().split(",")
    return {
        "question": question,
        "options": options
    }

# Recommendations
@app.route('/api/recommendation', methods=['GET'])
def recommendation():
    return call_recommendation()

# Feedback
@app.route('/api/feedback', methods=['GET'])
def feedback():
    return call_feedback()

# Skills
@app.route('/api/skills', methods=['GET'])
def skills():
    return call_skills(con).tolist()

if __name__ == '__main__':
    app.run()
    con.close()