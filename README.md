
![Logo](https://i.imgur.com/Vycqa3b.png)


# Microservices Challenge for Conexa

Microservices Challenge is a programming challenge designed for Conexa, utilizing NestJS and MongoDB. It consists of two microservices, 'business' and 'api.' Participants are tasked with developing scalable and modular solutions using microservice architecture to address complex business scenarios efficiently.
## Tech Stack
**Server:** Nest js, Node (>=18.8.0), Express js, MongoDB


## Run Locally

Clone the project

```bash
git clone https://github.com/Taaddde/microservice-challenge.git
```

Go to the project directory

```bash
cd microservice-challenge
```

Install dependencies

```bash
npm install
```

(Optional) You can start a local database quickly with docker-compose, otherwise clarify the database to be used in environment variables
```bash
docker-compose up -d
```

(Optional) You can popularize the database with autogenerated documents with the faker library. Make sure you have defined the connection string to your MongoDB database in the environment variables before.
```bash
npm run seed
```

Start business service
```bash
npm run start:dev:business
```

Start api service
```bash
npm run start:dev:api
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file, there is an .env.example file to use as a guideline.

`MONGODB_URI_BUSINESS`
`MONGODB_URI_API`

`SEED_USERS`

`JWT_KEY`
`JWT_EXPIRE`


## API Reference

#### POST register
```http
  POST /users/register
```
```json
  {
    "email": "Clark.Kent@hotmail.com",
    "password": "ImSuperman"
  }
```
#### POST Login
```http
  POST /users/login
```
```json
  {
    "email": "Clark.Kent@hotmail.com",
    "password": "ImSuperman"
  }
```

#### GET users list
```http
  GET /users/list
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authentication` | `string` | **Required**. Your JWT token |
| `page` | `string` | Page required |
| `limit` | `string` | Quantity of documents for page |
| `search` | `string` | Search for title |

## Running Tests

To run tests, run the following command

```bash
npm run test
```


## Deployment

To build this project run

```bash
npm run build
```

Then, start the productive server with

```bash
npm start
```
## Authors

- [@Taaddde](https://github.com/Taaddde)

