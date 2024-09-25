import toyotaImg from './images/toyotaSupre.jpg';


const Card1 = () => {
    return (
        <div className="max-w-[280px] bg-slate-500 bg-opacity-25 p-6 rounded-lg border-gray-50 border-1 transition-all hover:scale-[1.1] flex flex-col">
            <img className='rounded-lg min-w-full max-h-[200px] object-cover' src={toyotaImg} alt="img-card-toyota-car" />
            <h1 className='text-3xl font-bold text-center text-white my-3 text-wrap'>TOYOTA SUPRA</h1>
            <p className=' text-xs text-center text-white mb-3'>LOREM IPSUM DOLOR SIT AMET.
                CONSECTETUR ADIPISCING ELIT.</p>


            <div className='flex flex-wrap justify-center items-center gap-2'>
                <button className='bg-transparent text-[#2ca6bd] py-1 px-5 border border-[#2ca6bd] rounded-2xl'>DETAILS</button>
                <button className='bg-[#03c9f0] text-white py-1 px-5 rounded-2xl'>BUY NOW</button>
            </div>
        </div>
    )
}

export default Card1;