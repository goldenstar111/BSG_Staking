import images from "../constants/images";

const IntroWithImage = () => {
    return (
        <section className='dark:bg-[#200A4C]'>
            <div className='lg:px-2 pt-5 pb-16 lg:pt-5 grid md:grid-cols-2 sm:grid-cols-1 gap-6  items-center justify-center space-y-3 md:space-y-0'>
                <div className='w-full lg:w-[600px] h-24 md:justify-self-end xs:flex xs:justify-center'>
                    <img src={images.Bitcoin1} alt=""
                        className='md:w-full xs:w-5/6 h-full object-cover rounded-lg' />
                </div>
                <div className='w-full lg:w-[600px] h-24 xs:flex xs:justify-center'>
                    <img src={images.Bitcoin2} alt=""
                        className='md:w-full xs:w-5/6 h-full object-cover rounded-lg' />
                </div>
            </div>
        </section>
    )
}

export default IntroWithImage;