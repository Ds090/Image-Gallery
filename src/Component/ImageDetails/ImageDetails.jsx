import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ImageDetails() {
    
    const { id } = useParams();
    const [image, setImage] = useState({});
    

    async function downloadImage() {
        const respnse = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        const data = await respnse.json();
        console.log(data);
        setImage({
            url: data.photo.url,
            description: data.photo.description,
            title: data.photo.title,
        });
    }

    useEffect(() => {
        downloadImage();
      }, []);

    return(
        <div className='w-full mt-5 flex justify-center items-center'>
            <div className='flex flex-wrap justify-center items-center py-3 px-3 bg-[#042e5e] w-[500px] lg:w-auto md:w-auto gap-4 shadow-md shadow-[#8997a7]'>
                <div><img src={image.url} className='w-[300px] rounded-md shadow-md shadow-blue-400'/></div>
                <div className='space-y-5 pl-3'>
                    <p className='text-3xl w-[500px] text-white font-bold '>{image.title}</p>
                    <p className='w-[500px] text-white'>{image.description}</p>
                </div>
            </div>
        </div>
    )
    }
    




export default ImageDetails;