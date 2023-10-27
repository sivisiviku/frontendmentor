import imageHeaderMobile from '../../assets/stats_preview/image-header-mobile.jpg'

export default function StatsPreview() {
    return <div className="bg-black fixed left-0 right-0 top-0 bottom-0 flex">
        <div className="m-auto bg-violet-950 w-[375px] rounded-xl text-center sm:text-left sm:flex sm:w-[1440px]">
            <img className='mb-4 sm:mb-0 opacity-50 rounded-t-xl sm:order-last sm:rounded-l-none sm:rounded-r-xl' src={imageHeaderMobile} alt="people-working" />
            <div className='p-8 sm:pr-48 sm:py-20 sm:pl-20'>
                <h1 className='text-white text-4xl font-extrabold mb-4'>Get <span className='text-purple-500'>insights</span> that help your business grow.</h1>
                <p className='text-gray-400 mb-8'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div className='flex flex-col sm:flex-row sm:justify-between gap-6'>
                    <div>
                        <h1 className='text-white font-bold text-3xl'>10k+</h1>
                        <p className='text-gray-400 text-sm'>COMPANIES</p>
                    </div>
                    <div>
                        <h1 className='text-white font-bold text-3xl'>314</h1>
                        <p className='text-gray-400 text-sm'>TEMPLATES</p>
                    </div>
                    <div>
                        <h1 className='text-white font-bold text-3xl'>12M+</h1>
                        <p className='text-gray-400 text-sm'>QUERIES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}