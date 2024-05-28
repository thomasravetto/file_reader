# file_reader

## Description

This Node.js application reads a file from a path or an URL given by the user, counts the number of words, letters and spaces contained in the file and detect words that are repeated more than 10 times.

## Requirements

- Node.js
- npm

## Installation

1. Clone repository:
```sh
git clone https://github.com/thomasravetto/file_reader.git

cd file_reader
```

2. Install dependencies:
```sh
npm install
```

## Usage

1. Compile Typescript project:
```sh
npm run compile
```

2. Start application:
```sh
npm start
```

3. When prompted, input file path or URL.

## Test

To execute unit tests:
```sh
npm test
```

## Project structure

- src/ - Contains source code.
- dist/ - Contains compiled JS code.
- dist/tests/ - Contains unit tests.

## Design pattern

The application uses the Singleton pattern for the FileReader class and the Factory pattern for the TextAnalyser class.