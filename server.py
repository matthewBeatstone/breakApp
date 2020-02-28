from flask import *
from flask_cors import CORS, cross_origin
from pymongo import *
import datetime
from queue import Queue


client = MongoClient()
db = client['break']
collection = db['orders']

app = Flask(__name__)

CORS(app)

orders_queue = Queue()

@app.route('/order', methods=['POST', 'GET'])
def order():
	if request.json:
		data = request.json['order']
		orders_queue.put(data)
		order = {
			'order': data,
			'date': datetime.datetime.now()
		}
		collection.insert_one(order).inserted_id


	return jsonify(status=200)



def handle_order():
		if not orders_queue.empty():
			order = orders_queue.get()
			print(order)
			yield "id: 1 \nevent:order \ndata: {}\n\n".format(order)
		else:
			return None



@app.route('/cashdesk/', methods=['POST', 'GET'])
@cross_origin()
def cashdesk():
	if handle_order() is not None:
		return Response(handle_order(), mimetype='text/event-stream')
	else:
		return '', 204

if __name__ == '__main__':
	app.run(debug = True)
