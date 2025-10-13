import React, { useState } from 'react';
import './App.css';

function App() {
  const [startLocation, setStartLocation] = useState('');
  const [destinations, setDestinations] = useState(['']);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const addDestination = () => {
    setDestinations([...destinations, '']);
  };

  const updateDestination = (index: number, value: string) => {
    const newDestinations = [...destinations];
    newDestinations[index] = value;
    setDestinations(newDestinations);
  };

  const removeDestination = (index: number) => {
    if (destinations.length > 1) {
      setDestinations(destinations.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>✈️ Travel Agent</h1>
        <p>Plan your perfect trip with AI</p>

        <div className="travel-form">
          <h2>Plan Your Trip</h2>

          <div className="form-group">
            <label>Starting From:</label>
            <input
              type="text"
              placeholder="Enter your starting location"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Destinations:</label>
            {destinations.map((destination, index) => (
              <div key={index} className="destination-input">
                <input
                  type="text"
                  placeholder={`Destination ${index + 1}`}
                  value={destination}
                  onChange={(e) => updateDestination(index, e.target.value)}
                />
                {destinations.length > 1 && (
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeDestination(index)}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button type="button" className="add-destination-btn" onClick={addDestination}>
              + Add Destination
            </button>
          </div>

          <div className="form-group dates">
            <div className="date-input">
              <label>Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="date-input">
              <label>End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Additional Information:</label>
            <textarea
              placeholder="Tell us about your preferences, budget, interests, or any special requirements..."
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              rows={4}
            />
          </div>

          <button className="get-started-btn">Plan My Trip</button>
        </div>
      </header>
    </div>
  );
}

export default App;
