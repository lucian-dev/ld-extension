# LD Extension Boilerplate

This is a boilerplate for building browser extensions using modern web development tools. It leverages Laravel Mix and Tailwind CSS for efficient asset compilation and styling.

## Features

- **Laravel Mix**: Simplifies the process of compiling and bundling assets.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Sass**: Enables the use of Sass for more powerful stylesheets.
- **Resolve URL Loader**: Helps resolve relative paths in CSS files.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ld-extension
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Development

- To start the development server and watch for changes, run:

  ```bash
  npm run watch
  ```

- To compile the assets for production, run:

  ```bash
  npm run production
  ```

### Project Structure

- **src/**: Contains the source code for the extension.
- **dist/**: Compiled files ready for distribution.
- **assets/**: Static assets like images and fonts.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **webpack.mix.js**: Configuration file for Laravel Mix.

### Customization

- Modify `tailwind.config.js` to customize Tailwind CSS settings.
- Update `webpack.mix.js` to change the asset compilation process.
