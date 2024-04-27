import Aboutimg from './assets/images/Aboutimg.jpg'
function About(){
    return(
        <>
        <div className='text-center text-gray-500 text-xl font-extrabold mt-6 mb-0'>Learn More About Us!</div>
        <div className="flex  max-sm:flex-col px-[10%] justify-between about ">
        <img className='w-[35%] max-sm:w-[100%] bg-gray-400 rounded-lg max-sm:rounded-[50%]' src={Aboutimg} alt="" />
            <div className='w-[60%] max-sm:w-[100%]  home-left text-center'>
                <div className='home-title xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl leading-tight text-orange-700'>Made With Love. Simply Delicious</div>
                <div className='my-6 xl:text-lg lg:text-lg md:text-md sm:text-sm max-sm:text-max-sm'>We don't just make  food. We make people's experience. Maywood was built on the belief that food should be special, and we carry that belief into everything we do. </div>
               
            </div>
        </div>
        </>
    )
}
export default About