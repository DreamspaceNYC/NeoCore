from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    return jsonify({"result": f"Janus Pro processed: {data.get('input', '')}"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)

