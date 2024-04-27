
import React from 'react';

const BookModal = ({ isOpen, onClose, date, time, count }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="mb-4">
                <h2 className="text-xl font-bold">Confirm Reservation</h2>
                <div className="text-gray-600 mt-2">
                    <p>People : {count}</p>
                    <p>Date : {date}</p>
                    <p>Time : {time}</p>
                  Are you sure you want to confirm your reservation?
                </div>
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
                    onClose()
                    alert(`Reservation confirmed for ${count}People ${date} at ${time}`);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookModal;
