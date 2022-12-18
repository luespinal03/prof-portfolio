import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { images } from './constants';



function App() {
  return (
    <div className='text-center mt-20 p-14'>
      <h1 className='text-7xl text-white'>Luis Espinal</h1>

      <div className='flex justify-center mt-10'>
        <img src={images.profilePic} alt='' />
      </div>

      <div className='flex flex-wrap justify-center mt-10'>
        <a href='https://github.com/luespinal03' className='px-2 hover:scale-125'><AiFillGithub size={35} /></a>
        <a href='https://www.linkedin.com/in/luis-espinal-440489165/' className='px-2 hover:scale-125'><AiFillLinkedin size={35} /></a>
      </div>


      <h2 className='text-7xl text-white mt-10'>Web and Swift IOS Development</h2>

      <div className="mt-10">
        <p className='text-4xl text-slate-300 mt-10'>I'm a Software Developer interested in building projects and solving any problems when they come up. I enjoy working in teams and brainstorming with my teammates in search for the best solution to the problem so we can deliver the best user experience possible.</p>
        <p className='text-4xl text-slate-300 mt-10'>My military background has given me leadership and fellowship skills. I'm primarily trained in MERN stack but I am very adaptable and very excited to work in collaborative environments.</p>
      </div>
    </div>
  );
}

export default App;
