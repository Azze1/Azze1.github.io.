from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/update_count', methods=['POST'])
def update_count():
    data = request.get_json()
    count = data['count']
    if count != 0 :
        print(f'Current count: {count}')
    return '', 204




if __name__ == '__main__':
    app.run(debug=True)