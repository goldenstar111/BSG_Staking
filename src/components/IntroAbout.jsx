import { infoData } from '../constants/data';
import images from '../constants/images';

const IntroAbout = () => {

  return (
    <section className='p-6 pb-14 lg:px-16 text-center dark:bg-[#200A4C] dark:text-gray-200'>
      <p className='text-sm py-4'>Awesome Services</p>
      <h2 className='text-3xl'>Why BSG International ?</h2>
      <div>
        <div className='flex flex-wrap items-center justify-center gap-8 mt-6'>
          {
            infoData.map(data => (
              <div className='px-4 py-8 rounded-xl bg-slate-100 dark:bg-[#2B1867] w-96 space-y-4' key={data.id}>
                <img src={data.img} alt="" className='w-20 mx-auto' />
                <h3 className='text-xl'>{data.title}</h3>
                <p className='text-sm leading-6'>{data.info}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default IntroAbout