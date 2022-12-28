import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel(){
  const [currImage,setImage]=useState(0)
  return(
    <div className="carousel">
      <div className="inner"
        style={{ backgroundImage: `url(${images[currImage].img})` }}>
          <div className="left" onClick={()=>currImage>0&&setImage(currImage-1)}>
            <ArrowBackIosIcon />
          </div>
          <div className="center">
            <h1>{images[currImage].title}</h1>
            <span>{images[currImage].subtitle}</span>
          </div>
          <div className="right" onClick={()=>currImage<images.length-1&& setImage(currImage+1)}>
            <ArrowForwardIosIcon />
          </div>
        </div>
    </div>
  )
}
export default Carousel;






























//           className="right"
//           onClick={() => {
//             currImg < images.length - 1 && setCurrImg(currImg + 1);
//           }}
//         >