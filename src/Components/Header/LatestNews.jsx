import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='w-11/12 flex items-center mx-auto my-4 py-3 px-3 bg-gray-200'>
      <p className='bg-[#D72050] text-xl font-bold text-white py-3 rounded-sm mr-4 px-5'>Latest</p>
      <Marquee pauseOnHover={true} speed={70} >
        <Link to="/auth" className='text-xl'>Major tech companies, including Google and Microsoft, are intensifying their competition in the AI-driven search market. Google's Gemini AI and Microsoft's Copilot are being enhanced with generative AI to provide more personalized and interactive search experiences. Experts predict that AI-powered search will revolutionize how users find information, shifting from traditional keyword searches to conversational and contextual responses.</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;