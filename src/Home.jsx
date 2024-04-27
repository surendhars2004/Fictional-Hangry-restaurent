import Food1 from './assets/images/Food1.png'
export default function Home(){

    return(
        <>
        <div className="flex mt-32 max-sm:flex-col-reverse py-[40px] home ">
            <div className='w-[60%] max-sm:w-[100%] max-sm:text-center home-left'>
                <div className='home-title xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl leading-tight text-gray-800'>Enjoy Your healthy Delicious Food</div>
                <div className='my-6 xl:text-lg lg:text-lg md:text-md sm:text-sm max-sm:text-max-sm'>We don't just make  food. We make people's experience. Maywood was built on the belief that food should be special, and we carry that belief into everything we do. made with love and delicious</div>
                <div className='flex gap-4 max-sm:justify-center'>
                <a href="#menu"
                    className=" my-7 rounded-lg max-sm:text-[12px] max-sm:rounded-3xl px-6 py-2 text-base font-semibold leading-7 transition-all text-white bg-gray-800 hover:bg-white hover:text-gray-800  border-2 border-gray-800"
                    >
                    View  Menu
                  </a><a href="#book"
                    className="my-7 rounded-lg max-sm:text-[12px] max-sm:rounded-3xl px-6 py-2 text-base font-semibold leading-7 transition-all text-gray-800 bg-white hover:bg-gray-800 hover:text-white border-2 border-white"
                    >
                    Book A Seat
                  </a>
                </div>
            </div>
            <img className='w-[40%] max-sm:w-[100%] bg-gray-400' src={Food1} alt="" />
        </div>
        </>
    )
}