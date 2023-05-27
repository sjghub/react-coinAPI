import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
interface IChartPops {
  coinId: string;
}
interface IHistory {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}
function Chart({ coinId }: IChartPops) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistory[]>(["chart", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);
  return (
    <div>
      <h1>
        {isLoading ? (
          "Loading chart...."
        ) : (
          <ApexChart
            type="line"
            series={[
              {
                name: "hello",
                data: data?.map((price) => Number(price.low)) ?? [],
              },
            ]}
            options={{
              chart: { height: 500, width: 500, toolbar: { show: false } },
              theme: {
                mode: isDark ? "dark" : "light",
              },
              stroke: {
                curve: "smooth",
              },
              grid: { show: false },
              xaxis: {
                labels: { show: false },
                axisTicks: { show: false },
              },
              tooltip: {
                y: {
                  formatter: (value) => `$ ${value.toFixed(3)}`,
                },
              },
            }}
          />
        )}
      </h1>
    </div>
  );
}

export default Chart;
