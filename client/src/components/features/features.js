import React, {useEffect} from "react";
import features1 from '../../images/features1.jpg';
import features2 from '../../images/features2.jpg';
import features4 from '../../images/features4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
      }, []);
  return (
    <div className="p-8 bg-gradient-to-r from-cyan-200 via-blue-200 to-orange-100 mt-12 mb-12">
        {/* Heading */}
        <h2 data-aos="fade-down" className="text-5xl font-extrabold text-center mb-10 tracking-wide leading-tight"> Features</h2>


        {/* Feature Boxes Section */}
        <div className=" justify-center ">

          {/* Objectives Box */}
          <div data-aos="fade-right" className="flex mr-8 ml-8 gap-14 mb-8 h-[40vh] ">
            
            <div className="bg-white shadow-lg p-7 rounded-lg w-1/2 text-center transition-all duration-300 transform hover:bg-gray-200 hover:shadow-xl hover:scale-105 hover:transition-transform">
              <div className="flex items-center justify-center mb-4 mt-4">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.WoBzHN6R-_xLFjxqM4WKRQHaHa&pid=Api&P=0&h=180"
                  alt="Objectives Icon"
                  className="w-8 h-8 mr-2"
                />
                <h3 className="font-semibold text-3xl">Objectives</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Equipping students with job-ready skills, bridging industry needs, and enhancing employability through flexible training.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src={features4}
                alt="Feature Image"
                className="w-full h-[40vh] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>

          {/* Mission Box */}
          <div data-aos="fade-left" className="flex mr-8 ml-8 gap-14 mb-8 h-[40vh]">

            {/* Right Column (Image) */}
            <div className="w-1/2">
              <img
                src={features2}
                alt="Feature Image"
                className="w-full h-[40vh] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            {/* Left Column (Mission and Data) */}
            <div className="bg-white shadow-lg p-7 rounded-lg mb-4 w-1/2 text-left transition-all duration-300 transform hover:bg-gray-200 hover:shadow-xl hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.Jj48WD4RpB34KZ_UiGJKhgHaHa&pid=Api&P=0&h=180"
                  alt="Mission Icon"
                  className="w-8 h-8 mr-2"
                />
                <h3 className="font-semibold text-2xl">Mission</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Empowering youth through skill-integrated education to enhance employability and foster entrepreneurship.
              </p>
            </div>  
          </div>

          {/* Vision Box */}
          <div data-aos="fade-right" className="flex mr-8 ml-8 gap-14 mb-8 h-[40vh]">
            {/* Left Column (Vision and Data) */}
            <div className="bg-white shadow-lg p-7 rounded-lg w-1/2 text-left transition-all duration-300 transform hover:bg-gray-200 hover:shadow-xl hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.aEoAshK5l2vsC_2xr2Q0tAHaHa&pid=Api&P=0&h=180"
                  alt="Vision Icon"
                  className="w-8 h-8 mr-2"
                />
                <h3 className="font-semibold text-2xl">Vision</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Expanding access to work-integrated education, creating job-ready programs that empower individuals across diverse backgrounds.
              </p>
            </div>

            {/* Right Column (Image) */}
            <div className="w-1/2">
              <img
                src={features1}
                alt="Feature Image"
                className="w-full h-[40vh] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
  );
}
export default Features;