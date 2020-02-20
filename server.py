from flask import *
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


@app.route('/order', methods=['POST', 'GET'])
def order():
	if request.json:
		order = request.json['order']
		print(order)
	
	return jsonify(status=200)



if __name__ == '__main__':
	app.run(debug = True)
