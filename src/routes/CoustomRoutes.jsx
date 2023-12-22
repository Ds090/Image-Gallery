import { Routes, Route } from 'react-router-dom';
import ImageSet from '../Component/ImageSet/Image';
import ImageDetails from '../Component/ImageDetails/ImageDetails';

function CustomRouts() {
    return(
        <Routes>
            <Route path='/' element={<ImageSet/>} />
            <Route path='/photos/:id' element={<ImageDetails/>} />
        </Routes>
    )
}

export default CustomRouts;