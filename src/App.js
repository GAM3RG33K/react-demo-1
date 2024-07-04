import axios from 'axios';
import React, { useState, useEffect } from "react";
import './App.css';

const App = (props) => {
  // Define the state for API data
  const [breeds, setBreeds] = useState([]);

  // Fetching data from API on component mount
  useEffect(() => {
    const url = "https://dogapi.dog/api/v2/breeds";
    axios.get(url)
      .then(response => {
        // Set the fetched data to state
        setBreeds(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

  // Rendering the list of breeds
  return (
    <div>
      <h2> List of Dog Breeds </h2>
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Life Span (years) </th>
            <th> Male Weight (kg) </th>
            <th> Female Weight (kg) </th>
            <th> Hypoallergenic </th>
          </tr>
        </thead>
        <tbody>
          {breeds.map((breed, index) => (
            <tr key={index}>
              <td>{breed.attributes.name}</td>
              <td>{breed.attributes.life.min} - {breed.attributes.life.max}</td>
              <td>{breed.attributes.male_weight.min} - {breed.attributes.male_weight.max}</td>
              <td>{breed.attributes.female_weight.min} - {breed.attributes.female_weight.max}</td>
              <td>{breed.attributes.hypoallergenic ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;