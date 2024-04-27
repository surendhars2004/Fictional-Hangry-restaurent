
import React from 'react';

const ReservationModal = ({ isOpen, onClose, date, time, count }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={onClose} 
          ></div>
          <div className="bg-white p-6 rounded-lg shadow-xl z-20">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Confirm Reservation</h2>
              <p className="text-gray-600 mt-2">
                No of People : {count} <br />
                Are you sure you want to confirm your reservation for {date} at {time}?
              </p>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-indigo-600 text-white rounded-md px-4 py-2"
                onClick={() => {
                  onClose();
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationModal;
