import React , { useState} from 'react';
import {CircleStencil , Cropper} from 'react-advanced-cropper'
import 'react-advanced-cropper/dist/style.css';

const Croppers = () =>{

    const [image] = useState<string>('./assests/react.svg');

    return (
        <>
          <div> 
               <Cropper 
                 src={image}
                 stencilComponent={CircleStencil}
                   stencilProps={
                    {
                        aspectRatio :{
                            minimum : 16/8,
                            maximum : 4/8
                        },
                        movable : false,
                        resizable : false,
                        grid : true,
                    }
                 }
               >
               </Cropper>
          </div>
        </>
    )
}
export default Croppers;