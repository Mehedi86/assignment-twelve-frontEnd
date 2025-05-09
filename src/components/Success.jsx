
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Success = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className='container mx-auto border border-stone-200 rounded p-6 mt-12'>
            <h1 className='text-4xl font-semibold text-center py-12'>Success Counter</h1>
            <div className='grid grid-cols-4 gap-4'>
                <div className='rounded text-center p-6 bg-neutral-100'>
                    <h1 className='text-2xl font-semibold'>Total Biodatas</h1>
                    {inView && <CountUp end={200} duration={4} className='text-4xl text-black font-bold' />}
                </div>
                <div className='rounded text-center p-6 bg-neutral-100'>
                    <h1 className='text-2xl font-semibold'>Girls Biodatas</h1>
                    {inView && <CountUp end={116} duration={4} className='text-4xl text-black font-bold' />}
                </div>
                <div className='rounded text-center p-6 bg-neutral-100'>
                    <h1 className='text-2xl font-semibold'>Boys Biodatas</h1>
                    {inView && <CountUp end={94} duration={4} className='text-4xl text-black font-bold' />}
                </div>
                <div className='rounded text-center p-6 bg-neutral-100'>
                    <h1 className='text-2xl font-semibold'>Marriage Completed</h1>
                    {inView && <CountUp end={40} duration={4} className='text-4xl text-black font-bold' />}
                </div>
            </div>
        </div>
    );
};

export default Success;
