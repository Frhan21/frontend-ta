import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { format } from "date-fns";
import PopOut from "./PopOut";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrash,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

const Table = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://express-pi-dun.vercel.app/api/sample"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const openModal = (item) => {
    setSelectedData(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedData(null);
  };

  const formatDateTime = (datetime) => {
    return format(new Date(datetime), "dd-MM-yyyy HH:mm:ss");
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-white rounded-md">
        <div
          className="inline-block w-8 h-8 border-4 rounded-full spinner-border animate-spin"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mx-0 lg:container md:mx-auto md:mt-2">
      <div className="w-full max-w-full overflow-y-auto full">
        <table className="table w-full bg-white border border-gray-200 rounded-md table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th className="px-2 py-2 text-sm border md:text-md">No</th>
              <th className="text-[12px] md:text-md px-2 py-2 border">Waktu dan Tanggal</th>
              <th className="px-2 py-2 text-sm border md:text-md">Sampel ke-</th>
              <th className="px-2 py-2 text-sm border md:text-md">Absorbansi (a.u)</th>
              <th className="px-2 py-2 text-sm border md:text-md">Konsentrasi (ppm)</th>
              <th className="px-2 py-2 text-sm border md:text-md">Detail</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={item.id}>
                <td className="px-2 py-2 text-center border">
                  {indexOfFirstRow + index + 1}
                </td>
                <td className="text-[12px] md:text-[16px] px-2 py-2 border text-center">
                  {formatDateTime(item.created_at)}
                </td>
                <td className="px-2 py-2 text-center border">
                  Sampel ke-{indexOfFirstRow + index + 1}
                </td>
                <td className="px-2 py-2 text-center border">
                  {item.absorbance}
                </td>
                <td className="px-2 py-2 text-center border">
                  {item.concentration}
                </td>
                <td className="px-2 py-2 text-center border">
                  <button
                    onClick={() => openModal(item)}
                    className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          className={` text-white px-4 py-2 rounded mr-2 ${
            currentPage === 1 ? "disabled bg-gray-100" : "hover:bg-gray-700 bg-gray-500"
          }`}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border mx-1 rounded ${
              index + 1 === currentPage
                ? "bg-gray-700 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={` text-white px-4 py-2 rounded ml-2 ${
            currentPage === totalPages
              ? "disabled bg-gray-100"
              : "hover:bg-gray-700 bg-gray-500"
          }`}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detail Data"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedData && (
          <PopOut
            data={selectedData}
            closeModal={closeModal}
            format={formatDateTime}
          />
        )}
      </Modal>
    </div>
  );
};

export default Table;
