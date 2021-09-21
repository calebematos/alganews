import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Chart  from '../app/components/Chart/Chart';


const data: Chart.ChartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Desempenho pessoal',
      data: [120, 190, 300, 550, 212, 375],
      fill: true,
      backgroundColor: '#0099FF',
      borderColor: '#0099FF',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
    {
      label: 'Média de desempenho do time',
      data: [100, 220, 150, 640, 371, 563],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};


export default {
  title: 'Example/Chart',
  component: Chart
} as ComponentMeta<typeof Chart>;



const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args ={
  title: 'Média de performance nos últimos 12 meses',
  data
}

export const WithoutData = Template.bind({})
WithoutData.args ={
  title: 'Média de performance nos últimos 12 meses'
}