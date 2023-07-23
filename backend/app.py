from database import db_connection
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
    return call_quiz(request.json["input"])

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
    return call_skills(db_connection)

if __name__ == '__main__':
    app.run()
    db_connection.close()