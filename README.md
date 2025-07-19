# Express Webhook App

This project is an Express application that sets up a webhook to handle GET and POST requests. It is designed to verify incoming webhooks and process the data received.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-webhook-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will be available at `http://localhost:3000/webhook`.

### Webhook Endpoints

- **GET /webhook**: This endpoint is used for webhook verification.
- **POST /webhook**: This endpoint is used to receive and process incoming data.

## Deployment

This application can be deployed on Render. Make sure to configure the `render.yaml` file with the necessary environment variables and settings.

## License

This project is licensed under the MIT License.