import ReservationModal from "./ReservationModal"
import React, { useState } from 'react';
export default function Reservation(){

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedCount, setSelectedCount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
    };
  
    const handleTimeChange = (e) => {
      setSelectedTime(e.target.value);
    };
    const handleCountChange = (e) => {
      setSelectedCount(e.target.value);
    };
  
    const handleReservationSubmit = (e) => {
      e.preventDefault();
      setIsModalOpen(true); 
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return(

        <div className="md:border md:rounded-lg mt-10 block md:mx-[7%]  p-10 md:shadow-xl">
            <h1 className="text-center font-bold text-3xl max-sm:text-xl"><span className="hangry stylish-bold">HANGRY's</span> Indian Restaurent</h1>
            <div className="flex justify-center items-center gap-2 m-4 max-sm:gap-1">

                <div className="border rounded-[4px] p-1 border-red-600"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="Red" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg></div>

                <div className="border rounded-[4px] p-1 border-red-600"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg></div>

                <div className="border rounded-[4px] p-1 border-red-600"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg></div>

                <div className="border rounded-[4px] p-1 border-red-600"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg></div>

                <div className="border rounded-[4px] p-1 border-red-600" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star-half" viewBox="0 0 16 16">
                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
                </svg></div>

                <p className="text-gray-500 text-md max-sm:text-sm" > 449 Reviews</p>
            </div>

            <div>
                <div className=" flex items-center justify-center bg-gray-50">
                    <div className="max-w-4xl  w-full ">
                        <form className="mt-8 space-y-3 " onSubmit={handleReservationSubmit}>
                        <div className="flex justify-between gap-4 max-sm:flex-col">

                            <div className="sm:w-[260px] max-sm:w-[100%]">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                    Date </label>
                                <input
                                     id="date" type="date" required 
                                     className="mt-1 p-1 border border-gray-300 outline-indigo-600 rounded-md w-full"
                                     onChange={handleDateChange}/>
                            </div>

                            <div className="sm:w-[260px] max-sm:w-[100%]">
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                                     Time</label>
                                <input id="time" type="time" required
                                    className="mt-1 p-1 border border-gray-300 outline-indigo-600 rounded-md w-full"
                                    onChange={handleTimeChange}/>
                            </div>

                            <div className="sm:w-[260px] max-sm:w-[100%]">
                                <label htmlFor="count" className="block text-sm font-medium text-gray-700">
                                    No. of People</label>
                                <input id="number" type="number" required min={0} max={6}
                                    className="mt-1 p-1 border border-gray-300 outline-indigo-600 rounded-md w-full"
                                    onChange={handleCountChange}/>
                            </div>

                        </div>

                        <div className=" max-w-[auto]">
                            <button type="submit"
                                className="w-full  bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">
                                Confirm Reservation
                            </button>
                        </div>
                        </form>
                    </div>
                    <ReservationModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        count ={selectedCount}
                        date={selectedDate}
                        time={selectedTime}/>
                </div>
            </div>

        </div>

        
    )
}