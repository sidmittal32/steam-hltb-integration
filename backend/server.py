from flask import Flask, request, jsonify
from howlongtobeatpy import HowLongToBeat
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
hltb = HowLongToBeat()

@app.route('/fetch_times', methods=['GET'])
def fetch_times():
    game_title = request.args.get('title')
    if not game_title:
        return jsonify({'error': 'No game title provided'}), 400  # Bad request if no title

    try:
        results = hltb.search(game_title)
    except Exception as e:
        return jsonify({'error': 'Search failed', 'details': str(e)}), 500  # Server error

    if results:
        # Pick the best match based on similarity
        best = max(results, key=lambda x: x.similarity)
        response = {
            'game_name': best.game_name,
            'main_story': best.main_story,
            'main_extra': best.main_extra,
            'completionist': best.completionist,
            'game_web_link': best.game_web_link
        }
        return jsonify(response)
    else:
        return jsonify({'error': 'Game not found'}), 404  # Not found

if __name__ == '__main__':
    # Running the app on port 5000
    app.run(host='0.0.0.0', port=5000)
