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

  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  useEffect(() => {
    let cancel = false;

    const runEffect = async () => {
      const data1 = await axios(
        'http://localhost:5000/us-confirmed-growth-curve/'
      );
      if (cancel) {
        return;
      }
      setData1(data1.data[0].values);
      console.log(data1.data[0].values);

      const data2 = await axios(
        'http://localhost:5000/us-recovered-growth-curve/'
      );
      if (cancel) {
        return;
      }
      setData2(data2.data[0].values);
      console.log(data2.data[0].values);

      const data3 = await axios(
        'http://localhost:5000/us-deaths-growth-curve/'
      );
      if (cancel) {
        return;
      }
      setData3(data3.data[0].values);
      console.log(data3.data[0].values);
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
                <Chart title="Confirmed Cases" data={data1} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart title="Recovered Cases" data={data2} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart title="Deaths" data={data3} />
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
