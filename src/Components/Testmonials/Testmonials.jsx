import img1 from '../../../public/assets/Ellipse 1.png'
import img2 from '../../../public/assets/Ellipse 1 (1).png'
import img3 from '../../../public/assets/Ellipse 1 (2).png'

const Testmonials = () => {
    return (
        <div className='my-20 mt-20'>
            <h1 className="text-4xl font-bold text-center my-6 mb-12">Testimonials</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center mx-24">
                <div>
                    <img className='mx-auto' src={img1} alt="" />
                    <p className='pt-3'>Corey Korsgaard</p>
                    <div className="divider mx-7 lg:mx-28"></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div>
                <img className='mx-auto' src={img2} alt="" />
                    <p className='pt-3'>Corey Korsgaard</p>
                    <div className="divider mx-7 lg:mx-28"></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div>
                <img className='mx-auto' src={img3} alt="" />
                    <p className='pt-3'>Corey Korsgaard</p>
                    <div className="divider mx-7 lg:mx-28"></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
        </div>
    );
};

export default Testmonials;