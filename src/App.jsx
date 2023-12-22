import './App.css'
import CustomRouts from './routes/CoustomRoutes';
import Heading from './Component/Heading/heading';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div className=''>
        <Link to='/' ><Heading/></Link>
        <CustomRouts/>

      </div>
    </>
  )
}

export default App
