// https://github.com/alxnddr/waterfall-chart-example
// https://javascript.plainenglish.io/how-to-create-a-waterfall-chart-in-react-with-visx-51ed1721dc77
// https://airbnb.io/visx/gallery

import { ParentSize } from "@visx/responsive";
import { WaterfallChart } from "./WaterfallChart";
import "./App.css";
import React from "react";
import BarGroupExample from "./BarGroupExample";

const data2 = [
  { month: "Jan", earnings: 23 },
  { month: "Feb", earnings: 18 },
  { month: "Mar", earnings: -14 },
  { month: "Apr", earnings: 4 },
  { month: "May", earnings: -26 },
  { month: "Jun", earnings: 10 },
  { month: "Jul", earnings: 32 },
  { month: "Aug", earnings: 48 },
  { month: "Sep", earnings: 12 },
  { month: "Oct", earnings: -14 },
  { month: "Nov", earnings: -15 },
  { month: "Dec", earnings: 5 },
];

export type BarGroupProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};

function App() {
  return (
    <div className="App">
      <ParentSize>
        {({ width, height }) => (
          <WaterfallChart
            width={width}
            height={height}
            data={data2}
            xAccessor={(datum) => datum.month}
            yAccessor={(datum) => datum.earnings}
            yLabel="Earnings"
          />
        )}
      </ParentSize>
      <BarGroupExample width={1000} height={1000} />
    </div>
  );
}

export default App;
