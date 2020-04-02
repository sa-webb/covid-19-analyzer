# Python

This repository pulls data from the John Hopkins COVID-19 Repository into the data/COVID-19 folder.

## Data sources

1. archived_data
2. csse_covid_19_data
3. who_covid_19_situation_reports

## Workflow

1. Pull remote data.
2. Activate conda environment
3. Write scripts for data
4. Insert the results into MongoDB using PyMongo
5. Expose the results to the servers api

### Execute multiple python files at once

#### Using a script

`chmod +x app.zsh`

#### Using terminal

`python file1.py && python file2.py` ...
