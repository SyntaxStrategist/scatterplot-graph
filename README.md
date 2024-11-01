# Scatterplot Graph

This project is a data visualization application that displays a scatterplot graph of the 35 fastest times up Alpe d'Huez in professional cycling, highlighting instances of doping allegations among athletes. It is built using HTML, CSS, JavaScript, and D3.js.

## Project Overview

The scatterplot visualizes the fastest times recorded for the famous Alpe d'Huez climb in the Tour de France. It features interactive tooltips that provide additional information about each cyclist, including any doping allegations associated with their performance.

### Features

- **Interactive Scatterplot**: Visual representation of times against years.
- **Detailed Tooltips**: Hover over data points to see cyclist performance details, nationality, and doping status.
- **Color-Coded Dots**: Distinguish between cyclists with and without doping allegations using different colors.

## Technologies Used

- **HTML5**: Structure and layout of the application.
- **CSS3**: Styling and design elements.
- **JavaScript**: Interactivity and functionality.
- **D3.js**: Library used for creating dynamic and interactive data visualizations.

## User Stories

This project fulfills the following user stories from freeCodeCamp's curriculum:
1. A title element with `id="title"` is displayed.
2. An x-axis with `id="x-axis"` displays the years.
3. A y-axis with `id="y-axis"` shows the time in `MM:SS` format.
4. Dots representing data points are present with `class="dot"`.
5. Each dot has `data-xvalue` and `data-yvalue` attributes matching the respective data values.
6. The x and y values of each dot align correctly on the respective axes.
7. Multiple tick labels on the y-axis are displayed in `MM:SS` format.
8. Multiple tick labels on the x-axis display the year.
9. A legend with `id="legend"` is included for color-coded information regarding doping allegations.
10. Tooltips with `id="tooltip"` appear on hover, displaying relevant details about each data point.

## Getting Started

### Prerequisites

To run this project locally, you'll need a web server for optimal functionality. You can use **Live Server** in Visual Studio Code or set up a simple server using Node.js.

### Running the Project

1. **Clone this repository**:
   ```bash
   git clone https://github.com/SyntaxStrategist/scatterplot-graph.git
   cd scatterplot-graph
   ```

2. **Open the project in your preferred code editor**.

3. **Start the server**:
   - If using Live Server in VSCode, right-click on `index.html` and select "Open with Live Server".
   - If using Node.js, ensure you have a server set up to serve static files.

4. **Open your browser** and navigate to the appropriate local address (e.g., `http://localhost:5500` for Live Server) to view the scatterplot graph.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the D3.js community for their extensive resources and documentation, which made this project possible.
- Thanks to freeCodeCamp for providing the project framework and enhancing my skills in data visualization.
