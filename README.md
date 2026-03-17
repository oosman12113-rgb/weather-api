# Weather API

This is a API application that returns the current temperature upon request using a given U.S. ZIP code.

'GET /locations/{zip-code}'

## Optional Query Paramter

- 'scale=Fahrenheit' (default)
- 'scale=Celsius'

## Requests tested

'''bash
http://localhost:8080/locations/24060
http://localhost:8080/locations/90210?scale=Celsius
http://localhost:8080/locations/60606?SCALE=Fahrenheit


# Example Response

'''json
{
    "temperature": 43,
    "scale": "Fahrenheit"
}


## How to Run Application

1. Install required systems

bash
npm install

2. Create a '.env' file from the root folder

input "OPENWEATHER_API_KEY=your_api_key_here

Replace placeholder with actual key

3. Start server

```bash
npm test
```

4. Open in local browser:

"http://localhost:8080

## Run tests

```bash
npm test
```

## Design Rationale

- Used Node.js and Express** to build the API. This gave an efficient way to handle http routes
- Used *OpenWeather API* to retrieive temperature data ('Other api's of your choosing can be used')
- Project was seprated into multiple different files (services, routes, etc.) to ensure code is organized.

## Errror Handling

- Returns '400' for invalid ZIP codes or scale values
- Returns error message if the weather API fails


## Variables
\
- API key is stored in a '.env' file
- a file named '.env.example' is implemented to showcase the required structure


## References

- Openweather API: https://openweathermap.org/
- Node.js download: https://nodejs.org/en/download
Express Documentaion: https://expressjs.com/


## Resources used

- AI tools were used to help with understanding concepts and debugging issues
- Utilized many Google searches for correct source code and structure