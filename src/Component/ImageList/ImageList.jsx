import axios from "axios";
import { useEffect, useState } from "react";
import Image from "../ImageCom/Image";

function ImageList() {
  const [ImageList, setImageList] = useState([]);
  const [isloading, setloading] = useState(true);


  async function downloadImage() {
    setloading(true);
    const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");

    const ImageResult = response.data.photos;

    console.log(response.data);

    const Imagedata = await axios.all(ImageResult);

    console.log(Imagedata);

    const res = Imagedata.map((imageData) => {
      return {
        id: imageData.id,
        image: imageData.url,
        title: imageData.title,
        description: imageData.description,
      };
    });

    console.log(res);
    setImageList(res);
    setloading(false);
  }

  useEffect(() => {
    downloadImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps, no-undef
  }, []);

  return (
    <div className="m-2 text-xl font-serif font-semibold flex flex-col items-center justify-center flex-wrap">
      <h2 className="text-center mb-[50px] font-bold text-4xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">
        Image List
      </h2>

      <div className="flex flex-wrap flex-row justify-around items-center w-[100%]">
        <div className="flex flex-wrap flex-row justify-evenly gap-1 ">
            {isloading? "Loading....": ImageList.map((I) => (<Image image={I.image} key={I.id} id={I.id}/>))}

        </div>
      </div>
    </div>
  );
}

export default ImageList;
