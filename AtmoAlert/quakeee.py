pip install Flask
pip install requests

from flask import Flask, render_template, request
import requests
import json

# Initialize the Flask app
app = Flask(__name__)

# Define the API endpoint for the earthquake data
url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

# Define the model for earthquake prediction
model = None

# Load the model from disk
try:
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
except:
    pass

# Define a function to get the earthquake data
def get_earthquake_data():
    response = requests.get(url)
    data = json.loads(response.text)
    return data['features']

# Define a function to predict earthquakes based on location
def predict_earthquakes(latitude, longitude):
    # Convert the latitude and longitude to a numpy array
    coords = np.array([latitude, longitude]).reshape(1, -1)
    # Use the model to predict the probability of an earthquake
    proba = model.predict_proba(coords)
    # Return the probability of an earthquake
    return proba[0, 1]

# Define a route for the home page
@app.route('/')
def home():
    # Get the earthquake data
    earthquake_data = get_earthquake_data()
    # Render the home page template
    return render_template('quake.html', earthquake_data=earthquake_data)

# Define a route for the prediction page
@app.route('/predict', methods=['GET', 'POST'])
def predict():
    # If the form has been submitted
    if request.method == 'POST':
        # Get the latitude and longitude from the form
        latitude = request.form['latitude']
        longitude = request.form['longitude']
        # Predict the probability of an earthquake
        probability = predict_earthquakes(latitude, longitude)
        # Render the prediction page template with the probability
        return render_template('predict.html', probability=probability)
    # If the form has not been submitted
    else:
        # Render the prediction page template
        return render_template('predict.html')

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)