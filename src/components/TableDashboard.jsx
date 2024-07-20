import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { format } from 'date-fns';
import PopOut from './PopOut';

Modal.setAppElement('#root');

const Table = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://formd-research.000webhostapp.com/sample');
        console.log(response.data)
        setData(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data: ', error);
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
    return format(new Date(datetime), 'dd-MM-yyyy HH:mm:ss');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-md bg-white">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">No</th>
            <th className="px-4 py-2 border">Waktu dan Tanggal</th>
            <th className="px-4 py-2 border">Sampel ke-</th>
            <th className="px-4 py-2 border">Absorbansi</th>
            <th className="px-4 py-2 border">Konsentrasi</th>
            <th className="px-4 py-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-4 py-2 border text-center">{index + 1}</td>
              <td className="px-4 py-2 border text-center">{formatDateTime(item.created_at)}</td>
              <td className="px-4 py-2 border text-center">Sampel ke-{index + 1}</td>
              <td className="px-4 py-2 border text-center">{item.absorbance}</td>
              <td className="px-4 py-2 border text-center">{item.concentration}</td>
              <td className="px-4 py-2 border text-center">
                <button
                  onClick={() => openModal(item)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Lihat
                </button>
                <button className="bg-red-500 text-white px-4 py-1 rounded ml-2 hover:bg-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detail Data"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedData && (
          <PopOut data={selectedData} closeModal={closeModal} format={formatDateTime} />
        )}
      </Modal>
    </div>
  );
};
export default Table;
