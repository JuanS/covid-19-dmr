import React, { useContext } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { CovidContext } from './Context';
import { CalculateFactor } from './Calculator';

const Evolution = () => {
  const { state } = useContext(CovidContext);

  const calculateEvolution = () => {

    const evolution = [];

    if (state.data && state.country) {
      const data = state.data[state.country];
      const { length } = data;

      const start = length - state.evolutionDays;
      const end = length;

      for (let i = start + 1; i <= end; i += 1) {
        const factor = CalculateFactor(data, i, state.days);
        evolution.push({
          date: `${i}`,
          fine: 1,
          extra: factor - 1,
        });
      }
    }

    return evolution;
  };

  const evolution = calculateEvolution();

  return (
    <div className="Evolution-container">
      {evolution.length && (
        <ResponsiveBar
          data={evolution}
          keys={[
            'fine',
            'extra',
          ]}
          indexBy="date"
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          padding={0.3}
          colors={{ scheme: 'pastel2' }}
          enableLabel={false}
          enableGridY={false}
          isInteractive={false}
          borderColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                1.6,
              ],
            ],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 1,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'last days',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={null}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: 'color',
            modifiers: [
              [
                'darker', 1.6,
              ],
            ],
          }}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      )}
    </div>
  );
};

export default Evolution;
