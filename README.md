# Scatterplot Graph

This is a data visualization project that displays a scatterplot graph of the 35 fastest times up Alpe d'Huez in professional cycling, highlighting instances of doping allegations among athletes. Built with HTML, CSS, JavaScript, and D3.js.

## Project Overview

This scatterplot visualizes the fastest times recorded for the famous Alpe d'Huez climb in the Tour de France. It includes interactive tooltips to show additional information about each cyclist, including whether there were doping allegations associated with their performance.

### Features
- Interactive scatterplot showing times and years.
- Tooltips with details on each cyclist's performance, nationality, and doping status.
- Color-coded dots to differentiate between cyclists with and without doping allegations.

## Technologies Used
- **HTML5** - Structure and layout.
- **CSS3** - Styling and design.
- **JavaScript** - Interactivity.
- **D3.js** - Data visualization.

## User Stories
This project fulfills the following user stories from freeCodeCamp's curriculum:
1. A title element with `id="title"` is displayed.
2. An x-axis with `id="x-axis"` displays the years.
3. A y-axis with `id="y-axis"` shows the time in `MM:SS` format.
4. Dots representing data points are present with `class="dot"`.
5. Each dot has `data-xvalue` and `data-yvalue` properties matching the data values.
6. The x and y values of each dot align correctly on the axes.
7. Multiple tick labels on the y-axis are displayed in `MM:SS` format.
8. Multiple tick labels on the x-axis display the year.
9. A legend with `id="legend"` is included for color-coded information on doping allegations.
10. Tooltips with `id="tooltip"` appear on hover, displaying relevant details.

## Getting Started

### Prerequisites
To run this project locally, you’ll need a web server for optimal functionality. You can use **Live Server** in Visual Studio Code or a simple server with Node.js.

### Running the Project
1. **Clone this repository**:
   ```bash
   git clone https://github.com/SyntaxStrategist/scatterplot-graph.git
   cd scatterplot-graph
