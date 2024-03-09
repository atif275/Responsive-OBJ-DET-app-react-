import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer // Import ResponsiveContainer
} from 'recharts';
import './TimeLineStyles.css'


const TimeLine = ({data}) => {
    // Prepare chart data from detections
  const chartData = data.map(detection => ({
    time: detection.time,
    times: detection.time,
    //detections: detection.objects.length,
    // objects:detection.objects,
    objects: detection.objects,
  }));
  
  const isEmpty = data.length === 0;
  const defaultData = Array.from({ length: 5 }, (_, index) => ({ time: index, times: 0 }));
  return (
    <div style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer>
      <LineChart
        className='bg-custom-gray bg-opacity-120'
       
        data={isEmpty ? defaultData: chartData}
        margin={{ right: 6, left:8, top:4, bottom: 2 }}
      >
        <CartesianGrid stroke="#767676" strokeOpacity={4} strokeWidth={0.5} />
        <XAxis className='text-xs' dataKey="time" />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="times" stroke="#3f73a5" dot={<CustomDot />} />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label}) => {
  if (active && payload && payload.length) {
    const objects = payload[0].payload.objects;
    return (
      <div className="p-2 bg-slate-900 flex flex-col gap-0 rounded-md">
        <p className="text-sm text-lg text-white">{`${label} sec`}</p>
        <p className="text-sm text-indigo-400">
          Detections:
          <span className="ml-2">{objects}</span>
        </p>
      </div>
    );
  }
};

const CustomDot = (props) => {
  const { cx, cy, stroke, payload } = props;

  return (
    <svg
      x={cx - 5}
      y={cy - 5}
      width={10}
      height={10}
      viewBox="0 0 15 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={3} y={3} width={4} height={4} fill="#f3be00" stroke="#f3be00" strokeWidth="2" />
    </svg>
  );
};

export default TimeLine;