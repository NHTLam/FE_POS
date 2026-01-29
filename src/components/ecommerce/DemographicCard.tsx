import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function DemographicCard() {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Tiền mặt", "Chuyển khoản", "QR"],
    series: [5000000, 3000000, 2000000],

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            value: {
              formatter: (val) => `${Number(val).toLocaleString()} đ`,
            },
          },
        },
      },
    },

    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },

    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
      style: {
        fontSize: "12px",
        fontWeight: "bold",
      },
      dropShadow: {
        enabled: false,
      },
    },

    legend: {
      position: "bottom",
      show: true,
      fontFamily: "Outfit",
    },
    
    tooltip: {
      enabled: false,
      theme: "light",
      y: {
        formatter: (val) =>
          `${Number(val).toLocaleString()} đ`,
        title: {
          formatter: () => "Doanh thu",
        },
      },
    },
  };

  const series = [5000000, 3000000, 2000000];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Payment Methods
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Revenue by payment method
          </p>
        </div>
      </div>
      <div className="py-3">
        <Chart options={options} series={series} type="donut" height={330} />
      </div>
    </div>
  );
}
