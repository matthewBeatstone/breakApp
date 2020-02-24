from flask import *
from flask_cors import CORS
from pymongo import *
import datetime

client = MongoClient()
db = client['break']
collection = db['orders']

app = Flask(__name__)

CORS(app)


@app.route('/order', methods=['POST', 'GET'])
def order():
	if request.json:
		data = request.json['order']
		
		order = {
			'order': data,
			'date': datetime.datetime.now()
		}
		collection.insert_one(order).inserted_id


		print(order)
	
	return jsonify(status=200)



if __name__ == '__main__':
	app.run(debug = True)
