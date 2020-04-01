import React from 'react';
import Link from '@material-ui/core/Link';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  // ReferenceLine
} from 'recharts';

function Chart(props) {
  const theme = useTheme();
  return (
    <>
      <ResponsiveContainer>
        <LineChart
          data={props.data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey='k' stroke={theme.palette.text.secondary} />
          <YAxis type="number" stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position='left'
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              {props.title}
            </Label>
          </YAxis>
          <Line
            type='monotone'
            dataKey='v'
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
        
      </ResponsiveContainer>
      <div>
        <Link color="primary" href="#">
          Current Global: Insert Total
        </Link>
      </div>
    </>
  );
}

export default Chart;
