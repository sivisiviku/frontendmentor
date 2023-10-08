import heroImage from '../../assets/order_summary/images/illustration-hero.svg'
import iconMusic from '../../assets/order_summary/images/icon-music.svg'

export default function OrderSummary() {
    return <div className='flex justify-center h-screen bg-blue-100'>
        <div className='m-auto shadow-lg w-[375px] rounded-2xl'>
            <img src={heroImage} className='rounded-t-2xl' />
            <div className='bg-white p-8 text-center rounded-b-2xl'>
                <p className='text-2xl font-bold mb-4'>Order Summary</p>
                <p className='text-sm text-gray-500 mb-8'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <div className='flex justify-between mb-8'>
                    <img src={iconMusic} className='h-full' />
                    <div className='w-full text-left ml-4'>
                        <p className='font-bold'>Annual Plan</p>
                        <small className='text-gray-500'>$59.99/year</small>
                    </div>
                    <a className='self-center text-sm text-blue-700 cursor-pointer hover:text-violet-400'>Change</a>
                </div>
                <div className='flex flex-col'>
                    <button className='bg-blue-700 py-2 rounded-md text-white text-sm font-semibold mb-6 hover:bg-violet-400'>Proceed to Payment</button>
                    <button className='text-sm font-semibold text-gray-500 hover:text-black'>Cancel Order</button>
                </div>
            </div>
        </div>
    </div>
}