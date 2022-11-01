import { ResponsiveLine } from "@nivo/line";

const RateLibery = reReRateData => (
  <div style={{ width: "50vw", height: "200px" }}>
    <ResponsiveLine
      data={reReRateData.reReRateData}
      margin={{ top: 20, right: 190, bottom: 20, left: 30 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={{
        orient: "right",
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: "",
        legendOffset: 0,
      }}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      pointSize={10}
      pointColor="black"
      pointBorderWidth={2}
      pointBorderColor="black"
      pointLabelYOffset={-12}
      legends={[]}
      animate={false}
      motionConfig="default"
    />
  </div>
);

export default RateLibery;
