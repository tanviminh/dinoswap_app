import {IView} from 'components';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Colors} from 'styles';
import {scaleSize} from 'styles/mixins';
import {RADIUS_ORIGIN} from 'styles/typography';
export function LineChartComponent() {
  return (
    <IView>
      <LineChart
        data={{
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
          //   labels: [],
          datasets: [
            {
              data: [
                0,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={scaleSize(360)} // from react-native
        height={scaleSize(240)}
        yAxisLabel="$"
        withVerticalLabels={true}
        withHorizontalLabels={true}
        withInnerLines={false}
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //   backgroundColor: 'red',
          backgroundGradientFrom: Colors.SECONDARY,
          backgroundGradientTo: Colors.PRIMARY,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {},
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            // stroke: Colors.BROWN,
          },
        }}
        bezier
        style={{
          marginVertical: 0,
          borderRadius: RADIUS_ORIGIN,
        }}
      />
    </IView>
  );
}
