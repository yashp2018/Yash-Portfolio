import React from 'react';
import profilePhoto from '../assets/images/Profile_Photo.jpg';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { CTA } from "../components";
import { experiences, skills } from "../constants";

// Styles
import "react-vertical-timeline-component/style.min.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const About = () => {
  return (
    <section className='max-container'>
      {/* Hero Section with Animated Background */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white mb-12 shadow-2xl'
      >
        <div className='absolute inset-0 bg-[url("https://www.transparenttextures.com/patterns/carbon-fibre.png")] opacity-30'></div>
        <div className='relative z-10 flex flex-col lg:flex-row items-center gap-8'>
          <div className='flex-shrink-0'>
            <div className='w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]'>
              <img
                src={profilePhoto}
                alt='Yash Patil'
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
              />
            </div>
          </div>

          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-4 tracking-tight'>
              Hello, I'm <span className='bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent'>Yash Patil</span> 👋
            </h1>
            <p className='text-xl mb-6 text-blue-100/80 font-light'>
              Full Stack Developer & Python Enthusiast
            </p>
            
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
              {[
                { label: 'Years Experience', val: '2+' },
                { label: 'Projects', val: '10+' },
                { label: 'Technologies', val: '5+' },
                { label: 'Satisfaction', val: '100%' },
              ].map((stat, i) => (
                <div key={i} className='bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10'>
                  <div className='text-2xl font-bold text-blue-400'>{stat.val}</div>
                  <div className='text-xs uppercase tracking-wider text-gray-400'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Info Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
        {/* Personal Details Card */}
        <div className='bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow'>
          <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3'>
            <span className='p-2 bg-blue-100 rounded-lg text-blue-600 font-serif'>📋</span> Personal Details
          </h3>
          <div className='grid grid-cols-1 gap-4'>
            {[
              { icon: '📧', label: 'Email', val: 'yash03465@gmail.com', color: 'blue' },
              { icon: '📱', label: 'Phone', val: '+91 9313798295', color: 'green' },
              { icon: '📍', label: 'Location', val: 'Vadodara, Gujarat', color: 'purple' },
            ].map((item, i) => (
              <div key={i} className='flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-all border border-transparent hover:border-gray-200'>
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center text-xl`}>{item.icon}</div>
                <div>
                  <p className='text-xs font-bold text-gray-400 uppercase'>{item.label}</p>
                  <p className='text-gray-800 font-medium'>{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className='bg-white rounded-3xl p-8 shadow-xl border border-gray-100'>
          <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3'>
            <span className='p-2 bg-green-100 rounded-lg text-green-600'>🎯</span> Education
          </h3>
          <div className='space-y-4'>
            <div className='p-5 border border-blue-100 bg-gradient-to-r from-blue-50 to-transparent rounded-2xl relative overflow-hidden'>
               <div className='absolute right-[-10px] top-[-10px] text-6xl opacity-5 grayscale'>🎓</div>
               <h4 className='font-bold text-blue-900'>MCA</h4>
               <p className='text-gray-600 text-sm'>K.K. Wagh Institute of Engineering</p>
               <span className='inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full'>CGPA: 6.95 | 2025</span>
            </div>
            <div className='p-5 border border-green-100 bg-gradient-to-r from-green-50 to-transparent rounded-2xl'>
               <h4 className='font-bold text-green-900'>BCA</h4>
               <p className='text-gray-600 text-sm'>Sardar Patel University</p>
               <span className='inline-block mt-2 px-3 py-1 bg-green-600 text-white text-xs rounded-full'>CGPA: 7.24 | 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Skills Section */}
      <div className='py-12 bg-slate-50 rounded-3xl px-8 mb-12 border border-gray-200'>
        <div className='text-center mb-12'>
          <h3 className='text-3xl font-bold text-slate-800'>Technical Mastery</h3>
          <div className='h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full'></div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Frontend */}
          <div className='space-y-4'>
            <h4 className='font-bold text-blue-600 flex items-center gap-2'><span className='text-2xl'>⚡</span> Frontend</h4>
            {['React.js', 'Tailwind', 'Next.js'].map(s => (
              <div key={s} className='group'>
                <div className='flex justify-between mb-1 text-sm font-medium'><span className='text-gray-700'>{s}</span><span>90%</span></div>
                <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1 }} className='h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' />
                </div>
              </div>
            ))}
          </div>
          {/* Backend */}
          <div className='space-y-4'>
             <h4 className='font-bold text-green-600 flex items-center gap-2'><span className='text-2xl'>🔧</span> Backend</h4>
             {['Node.js', 'Python', 'FastAPI'].map(s => (
              <div key={s} className='group'>
                <div className='flex justify-between mb-1 text-sm font-medium'><span className='text-gray-700'>{s}</span><span>85%</span></div>
                <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1 }} className='h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' />
                </div>
              </div>
            ))}
          </div>
          {/* Database */}
          <div className='space-y-4'>
             <h4 className='font-bold text-purple-600 flex items-center gap-2'><span className='text-2xl'>🗄️</span> Database</h4>
             {['MongoDB', 'MySQL', 'PostgreSQL'].map(s => (
              <div key={s} className='group'>
                <div className='flex justify-between mb-1 text-sm font-medium'><span className='text-gray-700'>{s}</span><span>80%</span></div>
                <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} transition={{ duration: 1 }} className='h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Experience Timeline */}
      <div className='py-16'>
        <div className='text-center mb-16'>
          <h3 className='text-4xl font-bold text-slate-900'>Work Experience</h3>
          <p className='text-gray-500 mt-2'>A timeline of my professional growth</p>
        </div>

        <VerticalTimeline lineColor="#e2e8f0">
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
                </div>
              }
              contentStyle={{
                background: '#ffffff',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                borderBottom: `4px solid ${experience.iconBg}`,
                borderRadius: '1.5rem',
              }}
            >
<a
  href={experience.link}
  target="_blank"
  rel="noopener noreferrer"
  className="visit-btn"
>
  <strong>Visit Website</strong>
</a>


              <div>
                <h3 className='text-gray-900 text-xl font-bold'>{experience.title}</h3>
                <p className='text-blue-600 font-medium' style={{ margin: 0 }}>{experience.company_name}</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className='text-gray-600 text-sm pl-1 tracking-wider'>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Featured Projects Slider */}
      <div className='py-20 px-8 bg-slate-900 rounded-[3rem] text-white overflow-hidden shadow-2xl mb-12'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-4'>
          <div>
            <h3 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent'>Featured Projects</h3>
            <p className='text-gray-400 mt-2'>Swipe to explore my latest creations</p>
          </div>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          className="mySwiper !pb-14"
        >
          {/* Slide 1 */}
          <SwiperSlide className='max-w-[400px]'>
  <div className='bg-slate-800 p-8 rounded-3xl border border-white/10 h-[350px] flex flex-col justify-between group'>
    <div>
      <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📦</div>
      <h4 className='text-2xl font-bold text-white mb-2'>Inventory System</h4>
      <p className='text-gray-400 text-sm'>
        Full-stack inventory management with real-time WhatsApp notifications
      </p>
    </div>

    <div className='flex flex-wrap gap-2 items-center justify-between'>
      <div className='flex gap-2'>
        <span className='px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30'>React.js</span>
        <span className='px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30'>Node.js</span>
      </div>

      <a
        href="https://your-inventory-site.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-cyan-300 hover:text-white"
      >
        Visit Website
      </a>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide className='max-w-[400px]'>
  <div className='bg-slate-800 p-8 rounded-3xl border border-white/10 h-[350px] flex flex-col justify-between group'>
    <div>
      <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🪙</div>
      <h4 className='text-2xl font-bold text-white mb-2'>Cryptex Platform</h4>
      <p className='text-gray-400 text-sm'>
        Cryptocurrency & stock market website with live API data visualization
      </p>
    </div>

    <div className='flex flex-wrap gap-2 items-center justify-between'>
      <div className='flex gap-2'>
        <span className='px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs border border-yellow-500/30'>JavaScript</span>
        <span className='px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30'>WebSockets</span>
      </div>

      <a
        href="https://your-cryptex-site.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-cyan-300 hover:text-white"
      >
        Visit Website
      </a>
    </div>
  </div>
</SwiperSlide>



          {/* Add more Slides as needed */}
        </Swiper>
      </div>

      <hr className='border-slate-200 my-12' />
      <CTA />
    </section>
  );
};

export default About;