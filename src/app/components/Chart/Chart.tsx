import { transparentize } from 'polished';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import Heading from '../Typography/Heading'
import NoData from '../NoData/NoData';

const options: Chart.ChartOptions = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension:0
    }
  },
  legend: {
    display: true,
    align: 'center',
    position: 'bottom',
    labels: {
      usePointStyle: true
    }
    
  },
  scales: {
    xAxes:[
      {
        display: true,
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'cashflow',
      }
    ],
  },
};

export interface ChartProps {
  data: Chart.ChartData,
  title: string
}

export default function Chart({ data, title }: ChartProps){
  return <ChatWrapper style={{width:'100%'}}>
    <div style={{ marginBottom: 16}}>
      <Heading level={3}>
        {title}
      </Heading>
      
    </div>
    {
      data 
      ? <Line 
        height={139}
        width={600}
        type="line"
        data={data} 
        options={options}
        />    
      : <NoData heigh={139}/>
    }
  </ChatWrapper>
}

const ChatWrapper = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid ${transparentize(0.9, '#274060')};
`