import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";

const PopOut = ({ data, closeModal }) => {
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [sensor, setSensor] = useState([]);

  const fetchSensor = async () => {
    try {
      const res2 = await axios.get(
        `https://formd-research.000webhostapp.com/sensor?${data.id}`
      );
      setSensor(res2.data);
      setLoading(false);
    } catch (error) {
      console.log("err fetching data sensor", error);
    }
  };

  useEffect(() => {
    fetchSensor();
  });

  const generateLabels = (start, end, step) => {
    const labels = [];
    for (let i = start; i <= end; i += step) {
      labels.push(i.toFixed(1)); // Membulatkan menjadi satu desimal
    }
    return labels;
  };

  const volt = [];
  for (let i = 0; i < sensor.length; i++) {
    volt.push(sensor[i].v_reading);
  }

  const formatDateTime = (datetime) => {
    return format(new Date(datetime), 'dd-MM-yyyy HH:mm:ss');
  };

  const chartData = {
    labels: generateLabels(0, 10, 0.2),
    datasets: [
      {
        label: "Tegangan (V)",
        data: volt,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Menghapus legend
      },
      title: {
        display: true,
        text: 'Grafik Tegangan selama Pendeteksian',
      },
    },
    scales:{
      x: {
        title:{
          display: true,
          text: 'Waktu pengukuran (s)'
        }
      },
      y: {
        title:{
          display: true,
          text: 'Tegangan (V)'
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-[8rem] h-[4rem] rounded-md bg-white">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
      <h2 className="text-xl text-center font-bold ">Detail Data</h2>
      <div>
        <div className="flex items-center justify-center gap-10 mt-10">
          <div className="flex flex-col items-center justify-center font-['Monteserrat']">
            <span className="px-4 py-2 bg-[#11468f] text-white rounded-lg mb-3">Data ID:</span> {data.id}
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="px-2 text-sm py-2 bg-[#11468f] text-white rounded-lg mb-3">Waktu dan Tanggal:</span> {formatDateTime(data.created_at)}
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="px-4 py-2 bg-[#11468f] text-white rounded-lg mb-3">Konsentrasi Formalin</span> {data.concentration} ppm
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="px-4 py-2 bg-[#11468f] text-white rounded-lg mb-3">Absorbansi</span> {data.absorbance} a.u
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto gap-4">
          <table className="bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Intensitas</th>
                <th className="px-4 py-2 border">Tegangan</th>
              </tr>
            </thead>
            <tbody>
              {sensor.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border text-center">
                    {item.uv_reading}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {item.v_reading}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="h-[15rem] w-[30rem] mt-10">
            <Line data={chartData} options={options}/>
          </div>
        </div>
        <button
          onClick={closeModal}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopOut;
