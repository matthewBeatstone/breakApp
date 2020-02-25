from flask import *
from flask_cors import CORS
from pymongo import *
import datetime
from queue import PriorityQueue


client = MongoClient()
db = client['break']
collection = db['orders']

app = Flask(__name__)

CORS(app)

orders_stack = []
orders_queue = PriorityQueue()

@app.route('/order', methods=['POST', 'GET'])
def order():
	if request.json:
		data = request.json['order']
		orders_queue.put((1, data))
		order = {
			'order': data,
			'date': datetime.datetime.now()
		}
		orders_stack.append(data)
		collection.insert_one(order).inserted_id


	return jsonify(status=200)



def handle_order():
		yield "id: 1 \nevent:message \ndata: {}\n\n".format('ciao')
 

@app.route('/cashdesk/', methods=['POST', 'GET'])
def cashdesk():
	return Response(handle_order(), mimetype='text/event-stream')


if __name__ == '__main__':
	app.run(debug = True)
