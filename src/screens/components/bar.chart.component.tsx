import {IView} from 'components';
import React from 'react';
import {Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Colors} from 'styles';
import {scaleSize} from 'styles/mixins';
import {RADIUS_ORIGIN} from 'styles/typography';
export function BarChartComponent() {
  return (
    <IView>
      <BarChart
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
        width={scaleSize(350)} // from react-native
        height={scaleSize(240)}
        yAxisLabel="$"
        withVerticalLabels={true}
        withHorizontalLabels={true}
        withInnerLines={false}
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //   backgroundColor: 'red',
          backgroundGradientFrom: Colors.WHITE,
          backgroundGradientTo: Colors.WHITE,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => Colors.SECONDARY,
          labelColor: (opacity = 1) => Colors.BLACK,
          style: {
            // borderRadius: 16,
            // borderColor: 'red',
          },
        }}
        style={{
          marginVertical: 0,
          borderRadius: RADIUS_ORIGIN,
          borderWidth: 1,
          borderColor: Colors.SECONDARY,
          paddingVertical: 10,
        }}
      />
    </IView>
  );
}
