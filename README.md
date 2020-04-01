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

1. Update the data from the official repository.

cd python/data/COVID19

`git pull`

2. Cleanse and Insert the updated data using Python Scripts

`python <script.py>`

3. Data is now available for server to deliver to client
