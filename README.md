# CSV Encryption Project

This project reads data from a CSV file, encrypts the data using RSA encryption, and writes the encrypted data to a new CSV file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

To run this project locally, you need to have Node.js installed. Follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/omer-sayilir/nodejs-jsencrypt
   cd nodejs-jsencrypt

2.	Install the required dependencies:
    ```bash
    npm install

## Usage

1.  Place your input CSV file in the project directory and name it input.csv. The CSV file should have two columns.
2.  Run the script:

    ```bash
    node index.js

3.	The script will read the CSV data, encrypt the contents, and generate a result.csv file containing the original and encrypted data.

## Example

    Given an input.csv file with the following content:
    ```csv
    username,password
    user1,pass1
    user2,pass2

    The result.csv will look like:
    ```csv
    user1,pass1,encryptedUser1,encryptedPass1
    user2,pass2,encryptedUser2,encryptedPass2

##  Technologies Used

	•	Node.js: JavaScript runtime used to execute the script.
	•	node-forge: A native implementation of TLS (and various other cryptographic tools) in JavaScript.
	•	csv-parse: A CSV parsing library for Node.js that allows reading and processing CSV files.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.