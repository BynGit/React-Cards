import imgFruitCard2 from './images/imgFruitCard2.jpg'


const Card2 = () => {
    return (
        <div className="relative max-w-[280px] h-[386px] transition-all hover:scale-[1.1] flex flex-col-reverse">
            <img className='w-full h-full object-cover absolute' src={imgFruitCard2} alt="fruit-img" />
            <div className='z-10 rounded-t-[10%] text-center bg-[#a5ca8e] gap-4 flex flex-col justify-center items-center p-5'>
                <h2 className='font-bold text-2xl'>Make your <span className='text-[#39731d]'>choice</span> right now!</h2>
                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                {/* <a href='/'>{'Learn How ->'}</a> */}
            </div>

        </div>)
}

export default Card2;