import images from "../constants/images";

const IntroWithImage = () => {
    return (
        <section className='dark:bg-[#1C203B]'>
            <div className='grid grid-cols-2 gap-3 pt-10 xs:grid-cols-2 sm:grid-cols-2 '>
                <div className='w-full  h-24 '>
                    <img src={images.Bitcoin1} alt=""
                        className='w-full h-24 object-cover rounded-lg' />
                </div>
                <div className='w-full  h-24'>
                    <img src={images.Bitcoin2} alt=""
                        className='w-full h-24 object-cover rounded-lg' />
                </div>
            </div>
        </section>
    )
}

export default IntroWithImage;