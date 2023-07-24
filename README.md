# Expand Card - README

This repository contains a simple HTML, CSS, and JavaScript project called "Expand Card". It implements a card-based interface where clicking on a card expands it to display additional content. Below is an overview of the project files and how to use it.

## Project Structure

The project consists of three main files:

1. `index.html`: This is the HTML file that defines the structure of the web page. It contains a container with several cards, each representing an image with some text content.

2. `style.css`: This is the CSS file that styles the web page. It defines the layout, animations, and appearance of the cards.

3. `app.js`: This is the JavaScript file that adds interactivity to the cards. It handles the click event on each card, allowing them to expand and collapse.

## How to Use

To use this project, you can follow these steps:

1. Clone the repository: Clone this repository to your local machine using Git.

2. Open the `index.html` file: Once you have cloned the repository, navigate to the project's folder and open the `index.html` file in your web browser.

3. Explore the Expand Card: You will see a header titled "Expand Card" and a container with multiple cards. Each card contains an image and some text content.

4. Interact with the cards: Click on any of the cards to expand it. The expanded card will grow larger, and the text content will become visible. Click on the same card again to collapse it back to its original size.

5. Responsive Design: The project includes responsive design features using media queries. If you resize your browser window to a width less than 576 pixels (e.g., on a mobile device), the number of visible cards will be reduced, and the layout will adjust accordingly.

## Dependencies

This project uses Google Fonts to load the "Roboto" font. It is loaded via the following link in the `style.css` file:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
```

## Customization

If you wish to customize the project, you can make the following changes:

- **Card Images**: You can replace the background images of each card by modifying the URLs in the `style.css` file. The images are set for each `.imgX` class.

- **Card Text**: To change the text displayed on each card, modify the `<h3>` element inside each `.imgs` div in the `index.html` file.

- **Styling**: The appearance and animations of the cards can be customized by editing the CSS rules in the `style.css` file.

## Compatibility

The project should work on most modern web browsers. However, since it uses modern JavaScript features, it may not be compatible with very old browsers.

Please note that this README file is for explanatory purposes only and does not include the actual project files. To access the complete project, please clone the repository or download the project files from the original source.

Enjoy exploring the Expand Card project! If you have any questions or feedback, feel free to reach out. Happy coding!