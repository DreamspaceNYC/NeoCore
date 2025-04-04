from flask import Flask, request, jsonify
import subprocess, uuid, os

app = Flask(__name__)

def mutate_visual(input_stream):
    cmd = [
        "ffmpeg", "-i", "pipe:0", "-vf", "scale=iw*1.01:ih*1.01", "-c:v", "libx264", "-crf", "23", "-preset", "veryfast", "-c:a", "copy", "-"
    ]
    process = subprocess.run(cmd, input=input_stream, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return process.stdout

@app.route('/process', methods=['POST'])
def process_video():
    data = request.get_json()
    video_url = data.get('filepath')

    if not video_url:
        return jsonify({"error": "Missing 'filepath'"}), 400

    try:
        #
