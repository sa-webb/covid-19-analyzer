# covid-19-analyzer

Perform data analysis on covid data and display the results via web app.

## Apps

Client - React web application to share and visualize the results.

Python - Anaconda environment for data analysis and PyMongo to store results used by the server.

Server - API to expose results from database to client.

## Technologies Used

Client: **Create React App** with **Material-UI**, **Axios**, and **Recharts**.

Python: **Anaconda** environment, **Pandas** data analysis and manipulation tool, **PyMongo** MongoDB to store results.

Server: **Node**, **Express**, **MongoDB**

Development Tools: **Anaconda-Navigator**, **Postman**, **MongoDB Compass**

## Environment Requirements

1. Anaconda
2. MongoDB
3. Node
4. React

## Gettings Started

### Updating the data from the official repository

cd python/data/COVID19

`git pull`

1. Populate python `.env` and server `.env` with URI and database name.

2. Execute `./app.zsh` to cleanse and insert the updated data into MongoDB using Python Scripts

3. Explore data with MongoDB Compass
