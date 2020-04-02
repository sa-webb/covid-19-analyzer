# covid-19-analyzer

Perform data analysis on covid data and display the results via web app.

## Apps

Client - **React web application** to share and visualize the results.

Python - **Data analysis environment** using Anaconda and PyMongo.

Server - **Express API** that hosts the results for the client.

## Technologies Used

Client: **Create React App** with **Material-UI**, **Axios**, and **Recharts**.

Python: **Anaconda** environment, **Pandas** data analysis and manipulation tool, **PyMongo** MongoDB to store results.

Server: **Node**, **Express**, **MongoDB**

Development Tools: **Anaconda-Navigator**, **Postman**, **MongoDB Compass**

Package managers: **Yarn**, **NPM**

## Environment Requirements

1. Anaconda
2. MongoDB
3. Node
4. React

## Gettings Started

### Updating the data from the official repository

cd python/data/COVID19

`git pull`

### DB Config & Population

1. Populate python `.env` and server `.env` with URI and database name.

2. Execute `./app.zsh` to chain the Python Scripts for data cleansing and insertion.

3. Explore data with MongoDB Compass
