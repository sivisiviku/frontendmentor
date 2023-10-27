import '../css/preview_card.css' 
import carImage1 from '../../assets/preview_card/icon-sedans.svg'
import carImage2 from '../../assets/preview_card/icon-suvs.svg'
import carImage3 from '../../assets/preview_card/icon-luxury.svg'

export default function PreviewCard() {
    return <div className="py-8 sm:fixed sm:left-0 sm:right-0 sm:top-0 sm:bottom-0 sm:flex">
        <div className="m-auto w-[265px] sm:flex sm:w-max">
            <div className='sedans rounded-t-lg sm:w-[280px] sm:rounded-l-lg sm:rounded-tr-none'>
                <img className='mb-6' src={carImage1} alt='sedan' />
                <h1 className='mb-5'>SEDANS</h1>
                <p className='mb-4 sm:mb-16'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                    or on your next road trip.</p>
                <button className='text-orange-400 focus:bg-transparent focus:text-white'>Learn More</button>
            </div>
            <div className='suvs sm:w-[280px]'>
                <img className='mb-6' src={carImage2} alt='suv' />
                <h1 className='mb-5'>SUVS</h1>
                <p className='mb-4 sm:mb-16'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                    and off-road adventures.</p>
                <button className='text-cyan-700 focus:bg-transparent focus:text-white'>Learn More</button>
            </div>
            <div className='luxury rounded-b-lg sm:w-[280px] sm:rounded-r-lg sm:rounded-bl-none'>
                <img className='mb-6' src={carImage3} alt='luxury' />
                <h1 className='mb-5'>Luxury</h1>
                <p className='mb-4 sm:mb-16'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                    rental and arrive in style.</p>
                <button className='text-cyan-950 focus:bg-transparent focus:text-white'>Learn More</button>
            </div>
        </div>
    </div>
}