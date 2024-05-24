**HTML Structure:**

-    **<!DOCTYPE html>**: Defines the document type as HTML.
-    `<html lang="en">`: Defines the root element of the HTML document. The `lang="en"` attribute specifies the document language as English.
-    `<head>`: Contains meta information about the document.

     -    `<meta charset="UTF-8" />`: Defines the character encoding as UTF-8.
     -    `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: Sets the viewport for mobile devices to adjust the page according to the screen size.
     -    `<title>Weather App</title>`: Specifies the title of the webpage as "Weather App".
     -    `<link rel="stylesheet" href="style.css" />`: Links an external stylesheet named "style.css" to the HTML document.

-    `<body>`: Contains the visible content of the webpage.
     -    `<div class="name">Weather App</div>`: Creates a container element with the class "name" and displays the text "Weather App".
     -    `<div class="card">`: Creates a container element with the class "card" that represents the weather card.
          -    `<div class="searchBar">`: Creates a container element with the class "searchBar" for the search bar.
               -    `<input type="text" placeholder="Search Your City....." spellcheck="false" />`: Creates an input field for the user to enter the city name. The `placeholder` attribute specifies a hint text displayed inside the input field. The `spellcheck="false"` attribute disables spell checking for the input field.
               -    `<button>`: Creates a button element.
                    -    `<img src="images/search.svg" />`: Inserts an image within the button using the source "images/search.svg".
          -    `<div class="error"><p>Invalid City Name</p></div>`: Creates a container element with the class "error" to display an error message "Invalid City Name".
          -    `<div class="weather">`: Creates a container element with the class "weather" to display the weather information.
               -    `<img src="images/clear.svg" class="weatherIcon" />`: Inserts an image using the source "images/clear.svg" and assigns the class "weatherIcon".
               -    `<h1 class="temp">0°C</h1>`: Creates a heading (h1) element with the class "temp" to display the temperature value "0°C".
               -    `<h2 class="city">City</h2>`: Creates a heading (h2) element with the class "city" to display the city name "City" (placeholder).
               -    `<div class="details">`: Creates a container element with the class "details" to display weather details.
                    -    Two instances of `<div class="column">`: Creates container elements with the class "column" to display humidity and wind speed.
                         -    `<img src="images/haze.svg" />`: Inserts an image using the source "images/haze.svg".
                         -    `<div>`: Creates a container element to group humidity information.
                              -    `<p class="humidity">0%</p>`: Creates a paragraph element with the class "humidity" to display the humidity value "0%".
                              -    `<p>Humidity</p>`: Creates a paragraph element to display the label "Humidity".
                         -    Similar structure for wind speed information using the image "images/wind.svg", class "wind" for the value, and label "Wind Speed".
     -    `<script src="script.js"></script>`: Links an external JavaScript file named "script.js" to the HTML document.

```

```

**CSS Style:**

**Import & Global Styles:**

-    Imports a font called "Rajdhani" from Google Fonts.
-    Sets general styles for all elements:
     -    No margins or padding.
     -    Font family set to "Rajdhani", fallback to sans-serif.
     -    Uses "box-sizing: border-box" for consistent box model.
     -    Text color is #efd9ff.

**Body Styles:**

-    Sets background color of the body to #222 (dark grey).

**Class Styles:**

-    `.name`:

     -    Text is centered and capitalized.
     -    Font size is 3em (large).
     -    Margin top of 30px.
     -    Bolder font weight.

-    `.card`:

     -    Width is 90% (responsive), with a max-width of 470px.
     -    Background is a linear gradient with two dark blue tones.
     -    Text color is white (#fff).
     -    Margin with top at 30px, centered horizontally, no bottom margin.
     -    Rounded corners with 20px radius.
     -    Padding of 40px horizontally and 35px vertically.
     -    Text is centered.
     -    Solid border with 3px thickness and same dark blue color.

-    `.searchBar`:

     -    Full width (100%).
     -    Flexbox layout with items aligned vertically at center and horizontally spaced-between.

-    `.searchBar input`:

     -    No border or outline.
     -    Light blue background (#ebfffc).
     -    Text color is #555 (dark grey).
     -    Padding of 10px horizontally and 25px on both sides.
     -    Height of 60px.
     -    Rounded corners with 30px radius.
     -    Takes up most of the space within the flexbox (`flex: 1`).
     -    Margin right of 16px.
     -    Font size of 18px.

-    `.searchBar button`:

     -    Similar styles to the input field, but with a rounded button shape (50% width and height).
     -    Cursor changes to "pointer" on hover.

-    `.searchBar button img`:

     -    Margin top of 5px for positioning within the button.
     -    Width of 30px for the search icon.

-    `.weatherIcon`:

     -    Width of 170px for the weather icon image.
     -    Margin top of 30px.

-    `.weatherIcon h1`:

     -    Font size of 45px for the temperature display.
     -    Regular font weight (400).
     -    Margin top of -10px for slight adjustment.

-    `.details`:

     -    Flexbox layout with items aligned vertically at center and horizontally spaced-between.
     -    Padding on sides (20px) and top (50px).

-    `.column`:

     -    Flexbox layout with items aligned vertically at center.
     -    Text is left-aligned.
     -    Padding right of 10px.

-    `.column img`:

     -    Width of 80px for the weather condition icons.
     -    Margin right of 10px.

-    `.humidity .wind`:

     -    Font size of 28px for humidity and wind values.
     -    Margin top of -6px for slight adjustment.

-    `.weather`:

     -    Initially hidden (display: none).

-    `.error`:
     -    Text is centered.
     -    Large font size (xx-large).
     -    Medium font weight (500).
     -    Margin top of 30px.
     -    Initially hidden (display: none).

```

```

**JavaScript Code:**

**Constants:**

-    `apiKey`: Stores the API key for OpenWeatherMap (replace with your own).
-    `apiUrl`: Builds the base URL for weather data API requests.

**DOM Selectors:**

-    Selects elements from the HTML by their class names or IDs:
     -    City name (.city)
     -    Temperature (.temp)
     -    Humidity (.humidity)
     -    Wind speed (.wind)
     -    Search bar input field (.searchBar input)
     -    Search button (.searchBar button)
     -    Weather icon image (.weatherIcon)
     -    Weather card (.weather)
     -    Error message (.error)

**`checkWeather` function:**

-    Takes a city name as input.
-    Fetches weather data from the OpenWeatherMap API using the city name and API key.
-    Handles response status:
     -    Status 404 (Not Found): Shows error message and hides weather card.
     -    Success:
          -    Parses the JSON response data.
          -    Updates the city name, temperature, humidity, and wind speed on the webpage.
          -    Sets the weather icon image based on the weather condition (Clouds, Clear, Rain, etc.). Shows the weather card and hides the error message.

**Event Listener:**

-    Attaches a click event listener to the search button.
-    Triggers the `checkWeather` function with the city name entered in the search bar when the button is clicked.
