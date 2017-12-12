import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

export default class App extends React.Component {
  render() {
    return (
      <div className={'grafico-de-acessos'}>
        <Chart
          chartType="LineChart"
          data={[['Data', 'Confirmações'], [8, 12], [4, 5.5]]}
          options={{}}
          graph_id="LineChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    );
  }
}
render(<App />, document.querySelector('#app'));