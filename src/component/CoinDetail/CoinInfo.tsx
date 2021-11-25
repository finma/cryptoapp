import { CircularProgress } from "@material-ui/core";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useCallback, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { SelectButton } from "src/component/Button";
import { chartDays } from "src/config/data";
import { CryptoState } from "src/context/CryptoContex";
import { getHistoricalChart } from "src/service/crypto";
import type { CoinDetailTypes } from "src/type/crypto";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const CoinInfo = (props: { coin: CoinDetailTypes | undefined }) => {
  const { coin } = props;
  const { currency } = CryptoState();

  const [historicData, setHistoricData] = useState<any>();
  const [days, setDays] = useState(1);

  const fetchHistoricData = useCallback(async () => {
    const res = await getHistoricalChart(coin?.id, days, currency);

    setHistoricData(res.prices);
  }, [coin?.id, currency, days]);

  useEffect(() => {
    fetchHistoricData();
  }, [fetchHistoricData, currency]);
  return (
    <div className="md:flex md:flex-col md:justify-center md:items-center p-6 w-full md:w-[75%]">
      {historicData?.length < 1 ? (
        <CircularProgress style={{ color: "gold" }} size={250} thickness={1} />
      ) : (
        <>
          <Line
            data={{
              labels: historicData?.map((coin: (string | number | Date)[]) => {
                const date = new Date(coin[0]);
                const time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData?.map((coin: any[]) => {
                    return coin[1];
                  }),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div className="flex justify-around mt-8 w-full">
            {chartDays.map((day) => {
              return (
                <SelectButton
                  key={day.value}
                  onClick={() => {
                    return setDays(day.value);
                  }}
                  selected={day.value === days}
                  label={day.label}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
