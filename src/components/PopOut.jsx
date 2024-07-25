import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PopOut = ({ data, closeModal }) => {
  const [loading, setLoading] = useState(true);
  const [sensor, setSensor] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const fetchSensor = async () => {
    try {
      const response = await axios.get(
        `https://formd-research.000webhostapp.com/sensor?sample_id=${data.id}`
      );
      const filteredData = response.data.filter(
        (item) => item.sample_id === data.id
      );
      setSensor(filteredData);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching sensor data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensor();
    return () => {
      setSensor([]);
      setLoading(true);
    };
  }, [data.id]);

  const generateLabels = (start, end, step) => {
    const labels = [];
    for (let i = start; i <= end; i += step) {
      labels.push(i.toFixed(1));
    }
    return labels;
  };

  const volt = sensor.map((item) => item.v_reading);

  const formatDateTime = (datetime) => {
    return format(new Date(datetime), "dd-MM-yyyy HH:mm:ss");
  };

  const chartData = {
    labels: generateLabels(0, 2, 0.2),
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
        display: false,
      },
      title: {
        display: true,
        text: "Grafik Tegangan selama Pendeteksian",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Waktu pengukuran (s)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Tegangan (V)",
        },
      },
    },
  };

  // Calculate the indices for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sensor.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate the total number of pages
  const totalPages = Math.ceil(sensor.length / rowsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-[8rem] h-[4rem] rounded-md bg-white">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="sr-only text-black">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full max-w-lg md:max-w-3xl h-full md:h-[550px] rounded-lg md:p-10 p-4 shadow-lg mx-auto overflow-auto">
      <h2 className="text-xl text-center font-bold">Detail Data</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-10">
        <div className="flex flex-col items-center justify-center font-['Monteserrat']">
          <span className="px-4 py-2 bg-[#11468f] text-white rounded-lg mb-3">
            Data ID:
          </span>{" "}
          {data.id}
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="p-2 text-sm bg-[#11468f] text-white rounded-lg mb-3">
            Waktu dan Tanggal:
          </span>{" "}
          {formatDateTime(data.created_at)}
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="px-4 py-2 bg-[#11468f] text-white rounded-lg mb-3">
            Konsentrasi Formalin
          </span>{" "}
          {data.concentration} ppm
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="px-4 py-2 bg-[#11468f] text-white rounded-lg mb-3">
            Absorbansi
          </span>{" "}
          {data.absorbance} a.u
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center mx-auto gap-4 mt-10">
        <div className="w-full">
          <table className="bg-white border border-gray-200 w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Intensitas</th>
                <th className="px-4 py-2 border">Tegangan</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border text-center">
                    {indexOfFirstRow + index + 1}
                  </td>
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
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePrevPage}
              className={`text-white px-4 py-2 rounded mr-2 ${currentPage === 1 ? "disabled bg-blue-100" : "hover:bg-blue-700 bg-blue-500"}`}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <button
              onClick={handleNextPage}
              className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === totalPages ? "disabled bg-blue-100" : "hover:bg-blue-700"}`}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-4 md:mt-0">
          <div className="h-[12rem] w-full md:w-[20rem] p-2 border border-gray-300 rounded-lg">
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
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
