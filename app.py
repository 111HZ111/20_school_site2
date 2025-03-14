from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/logoped')
def logoped():
    return render_template('logoped.html')

@app.route('/psychologist')
def psychologist():
    return render_template('psychologist.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

@app.route('/pdd')
def pdd():
    return render_template('pdd.html')

if __name__ == '__main__':
    app.run(debug=True)