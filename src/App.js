import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import { images } from './constants';



function App() {
  return (
    <div className='text-center mt-20 p-14'>
      <h1 className='text-5xl text-white'>Luis Espinal</h1>

      <div className='flex justify-center mt-20'>
        <img src={images.profilePic} alt='' />
      </div>

      <div className='flex flex-wrap justify-center mt-10'>

        <a href='https://github.com/luespinal03' className='px-4 hover:scale-125'><AiFillGithub size={35} /></a>

        <a href='https://www.linkedin.com/in/luis-espinal-440489165/' className='px-4 hover:scale-125'><AiFillLinkedin size={35} /></a>

        <a href="mailto:luisespinal294@gmail.com" className='px-4 hover:scale-125'><AiTwotoneMail size={35} /></a>
      </div>


      <h2 className='text-5xl text-white mt-20'>Web and Swift IOS Development</h2>

      <div className="mt-20">
        <p className='text-2xl text-slate-300 mt-10'>I'm a Software Developer interested in building projects and solving any problems when they come up. I enjoy working in teams and brainstorming with my teammates in search for the best solution to the problem so we can deliver the best user experience possible.</p>
        <p className='text-2xl text-slate-300 mt-10'>My military background has given me leadership and fellowship skills. I'm primarily trained in MERN stack but I am very adaptable and very excited to work in collaborative environments.</p>
      </div>
    </div>
  );
}

export default App;
