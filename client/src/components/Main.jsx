import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Chart from './Chart';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import * as ENDPOINTS from '../constants/index';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 280
  }
}));

const Main = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [confirmed, setConfirmed] = useState();
  const [recovered, setRecovered] = useState();
  const [deaths, setDeaths] = useState();
  useEffect(() => {
    let cancel = false;

    const runEffect = async () => {
      const confirmed = await api.get(ENDPOINTS.US_CONFIRMED);
      if (cancel) {
        return;
      }
      setConfirmed(confirmed.data[0].values);

      const recovered = await api.get(ENDPOINTS.US_RECOVERED);
      if (cancel) {
        return;
      }
      setRecovered(recovered.data[0].values);

      const deaths = await api.get(ENDPOINTS.US_DEATHS);
      if (cancel) {
        return;
      }
      setDeaths(deaths.data[0].values);
    };
    runEffect();

    // Cleanup function that will be called on
    // 1. Unmount
    // 2. Dependency Array Change
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <>
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart title='Confirmed Cases' data={confirmed} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart title='Recovered Cases' data={recovered} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart title='Deaths' data={deaths} />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Main;
