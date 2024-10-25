# Shamir's Secret Sharing Algorithm Implementation

## Overview
An implementation of Shamir's Secret Sharing Algorithm to securely distribute a secret using polynomial interpolation.

## Features
Polynomial interpolation, dynamic base decoding, JSON input handling, robust calculations for constant term (c).

## Table of Contents
- [Getting Started](#getting-started) - [Installation](#installation) - [Usage](#usage) - [Input Format](#input-format) - [Example Output](#example-output) - [Contributing](#contributing) - [License](#license) - [Acknowledgements](#acknowledgements)

## Getting Started
Clone the repository: `git clone https://github.com/praveenpandeypa1/Secret.git`, navigate to the directory: `cd Secret-Sharing`, and install dependencies: `npm install`.

## Usage
Run the program with: `node index.js`. Ensure a valid JSON input file is present.

## Input Format
Input JSON should be structured as follows: `{"n": 5, "k": 3, "roots": {"2": "111", "3": "1010", "5": "10011"}}`.

### Example Input File
Create `input.json` with: `{"n": 5, "k": 3, "roots": {"2": "111", "3": "1010", "5": "10011"}}`.

## Example Output
Expected output when running the program: `Secret (c) for test case: 4` and `Secret (c) for test case: 1`.

## Contributing
Contributions welcome! Fork the repo and submit a pull request. Follow code style and include tests.

## License
Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
Inspired by Shamir's Secret Sharing and contributions from various libraries and resources.

## Contact
Reach out via GitHub issues for inquiries or suggestions. 

Thank you for checking out my project!
