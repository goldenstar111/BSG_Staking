import images from '../constants/images';
import Graph from '../assets/Graph';
import { Link } from 'react-router-dom';

const NFTHeroSection = ({ themeToggling, menuToggling, setMenuToggling }) => {

  return (
    <section className='px-4 lg:px-36 py-12 text-center dark:bg-[#200A4C] text-gray-700 dark:text-gray-200 relative ' onClick={() => setMenuToggling()}>
      <div className={`hidden lg:block absolute top-[-180px] left-[350px] w-40 -z-0`}>
        <img src={themeToggling ? images.topLeft_1 : images.topLeft_1_w} alt="" className='w-full' />
      </div>

      {/* 🟡 Circle 2 🟡*/}
      {/* <div className={`w-80 h-80 bg-gradient-to-l ${themeToggling
        ? 'from-[#2B1867] to-[#BF36E6] opacity-10 rotate-[210deg]'
        : 'from-slate-200 rotate-[30deg]'} 
        rounded-full absolute top-40 left-0`}></div> */}

      <div className={`hidden lg:block absolute top-20 left-[-100px] w-[340px] -z-0`}>
        <img src={themeToggling ? images.topLeft_2 : images.topLeft_2_w} alt="" className='w-full' />
      </div>

      {/* 🟡 Circle 3 🟡*/}
      <div className={`hidden lg:block absolute bottom-0 top-96 left-[-250px] w-96 -z-0`}>
        <img src={themeToggling ? images.bottomLeft_3 : images.bottomLeft_3_w} alt="" className='w-full' />
      </div>

      {/* 🟡 Circle 4 🟡*/}
      <div className={`hidden lg:block absolute top-[-10px] right-36 w-48 -z-0`}>
        <img src={themeToggling ? images.topRight_4 : images.topRight_4_w} alt="" className='w-full' />
      </div>

      {/* 🟡 Circle 5 🟡*/}
      <div className={`hidden lg:block absolute bottom-0 top-96 right-[-120px] w-72 -z-0 `}>
        <img src={themeToggling ? images.bottomRight_5 : images.bottomRight_5_w} alt="" className='w-full' />
      </div>

      {/* 🟡 UI For ==> Graph 🟡*/}
      <h1 className='relative font-bold text-[28px] pt-4 md:text-4xl lg:text-5xl lg:leading-[60px]'>The Most Secure Platform <br /> On Steller</h1>
      <p className='relative pt-8 w-full lg:w-[650px] mx-auto '>There are many variations of passages of lorem Ipsum Available</p>
      <p className='relative pt-2 w-full lg:w-[650px] mx-auto '>but the majority have suffered alternation</p>
      <Link to="/nftExplore"><button className='min-w-[104px] bg-secondary text-xs text-white p-3 w-1/6 rounded-md mt-7'>Explore NFTs</button></Link>
    </section>
  )
}

export default NFTHeroSection