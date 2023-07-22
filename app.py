from flask import Flask

app = Flask(__name__)

# Home page
@app.route('/')
def home():
    return 'Welcome to the Home Page!'

# Test route with material and ID
@app.route('/test/<material>/<int:id>')
def test(material, id):
    return f'This is the test for {material} with ID: {id}'

# Recommendations based on ID
@app.route('/recommendation/<int:id>')
def recommendation(id):
    # Assume some logic to fetch recommendations based on the provided ID
    # For demonstration purposes, we'll return a simple message
    return f'Recommendations for ID: {id} will be shown here.'

# Feedback based on ID
@app.route('/feedback/<int:id>')
def feedback(id):
    # Assume some logic to fetch feedback based on the provided ID
    # For demonstration purposes, we'll return a simple message
    return f'Feedback for ID: {id} will be displayed here.'

if __name__ == '__main__':
    app.run(debug=True)
