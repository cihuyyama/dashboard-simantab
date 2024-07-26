// components/HumidityChart.tsx
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { TimeData } from '../types/type';
import { formatDateTime } from '../utils/dateFormatter';

interface HumidityChartProps {
  data: TimeData[];
}

const HumidityChart: React.FC<HumidityChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => formatDateTime(item.datetime)),
    datasets: [
      {
        label: 'Humidity (%)',
        data: data.map(item => parseFloat(item.value || '0')),
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default HumidityChart;
