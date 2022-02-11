import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from 'recharts';

import { useDarkModeProps } from '@/hooks';

const dataWeek = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataMonth = [
  {
    name: 'Page D',
    uv: 2700,
    pv: 3908,
    amt: 2010,
  },
  {
    name: 'Page E',
    uv: 1850,
    pv: 4800,
    amt: 2201,
  },
  {
    name: 'Page F',
    uv: 2200,
    pv: 3800,
    amt: 2700,
  },
  {
    name: 'Page G',
    uv: 3105,
    pv: 4300,
    amt: 2120,
  },
];

export function ChartViewsAndSells({ filterBy = 'week' }) {
  const strokeProps = useDarkModeProps({ stroke: '#fff' });
  const data = filterBy == 'week' ? dataWeek : dataMonth;

  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart width={300} data={data}>
        <XAxis dataKey="name" {...strokeProps} />
        <YAxis {...strokeProps} />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

ChartViewsAndSells.propTypes = {
  filterBy: PropTypes.string,
};
