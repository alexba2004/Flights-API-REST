# Flights-API-REST

Flights API REST is a powerful and efficient RESTful API designed to manage flight ticket data for an airline agency. Built using JavaScript, Node.js, and Express, this API offers CRUD (Create, Read, Update, Delete) operations for interacting with flight ticket information stored in a MongoDB database.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations to manage flight ticket data efficiently.

- **Express Middleware**: Utilize Express middleware such as CORS and Morgan for handling cross-origin resource sharing and logging HTTP requests, enhancing security and debugging capabilities.

- **MongoDB Integration**: Seamlessly interact with a MongoDB database using Mongoose, allowing for efficient storage and retrieval of flight ticket information.

## Dependencies

- **cors**: ^2.8.5
- **ejs**: ^3.1.9
- **express**: ^4.18.2
- **mongoose**: ^8.1.1
- **morgan**: ^1.10.0

## Development Dependencies

- **dotenv**: ^16.4.1
- **nodemon**: ^3.0.3

## Getting Started

To start using Flights API REST:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up environment variables in a `.env` file as needed, following the example provided in `.env.example`.
4. Start the server using `npm start` or `npm run dev` for development with nodemon.
5. Access the API endpoints to perform CRUD operations for managing flight ticket data.

## API Endpoints

- `GET /`: Retrieve all flight tickets.
- `GET /:seat`: Retrieve a specific flight ticket by seat.
- `POST /`: Insert a new flight ticket.
- `PUT /:seat`: Update an existing flight ticket by seat.
- `DELETE /delete/:seat`: Delete a flight ticket by seat.

## Usage

Flights API REST is designed to provide a straightforward and efficient way to manage flight ticket data for an airline agency. Integrate the API endpoints into your frontend application to perform CRUD operations seamlessly.

## Contribution

Contributions to Flights API REST are welcome! If you have any suggestions, feature requests, or bug reports, please submit them through the repository's issue tracker.

## License

This project is under the MIT License. Please refer to the [LICENSE](LICENSE) file for more details.

## Contact

If you have questions, suggestions, or comments, don't hesitate to get in touch with me. You can reach me at my social media.

## Farewell

I hope you find this repository useful for learning and practicing. If you have any questions or need assistance, please feel free to contact me. Enjoy exploring my GitHub profile!