import { useRef, useState } from "react";
import 'cropperjs/dist/cropper.css';
import Cropper from "react-cropper";


const ReactCropper = () => {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const cropperRef = useRef<any>(null);

    const [imagePreview, setImagePreview] = useState<string>("");
    const [croppedImage, setCroppedImage] = useState<string>("");
    const [isCropped , setIsCropped] = useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
            setIsCropped(false);
        }
    }


    const handleButtonClick = () => {
        fileInputRef.current?.click();
    }

    const handleCrop = () => {
        const cropper = (cropperRef.current as any)?.cropper;
        if (cropper) {
            const croppedDataUrl = cropper.getCroppedCanvas().toDataURL();
            setCroppedImage(croppedDataUrl);
            setIsCropped(false);
        }
        return;
    }

    const saveImage = () =>{
        if(croppedImage){
             setIsCropped(true);
        }
    }

    const handleEditImage = () =>{ 
        setIsCropped(false);
    }

    const handleSubmit = () =>{
        if(croppedImage){

        }
    }

    const handleDelete = () =>{
        setCroppedImage("");
        setImagePreview("");
        setIsCropped(false);
    }



    return (
     <>
            <input className="hidden" type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} ></input>

            {!imagePreview && (
                <button className="p-4 m-4 bg-blue-400 cursor-pointer rounded-2xl" onClick={handleButtonClick}> Upload Image </button>
            )}
            {imagePreview && !isCropped &&(
                <div>
                    <Cropper
                        src={imagePreview}
                        className="mt-5 ml-20 w-100 h-100"
                        aspectRatio={NaN}
                        guides={true}
                        ref={cropperRef}
                        viewMode={1}
                        dragMode="move"
                        scalable={true}
                        cropBoxResizable={true}
                        cropBoxMovable={true}
                        responsive={true}
                        background={false}
                        autoCropArea={1}          
                        zoomable={true}          
                        movable={true}
                        crop={handleCrop}
                    >
                    </Cropper>
                    {/* <button className="p-4 m-4 bg-blue-400 cursor-pointer rounded-2xl" onClick={handleCrop}>
                        Crop Image
                    </button> */}
                    <h2 className="mt-2 text-2xl font-bold mb-4">Live Preveiw</h2>
                </div>

            )}

            {croppedImage && (
                <>
                <div>
                    <img src={croppedImage} alt="Cropped" className="ml-20 mt-5 w-200 h-100" />
                    {!isCropped && (  <button className="p-4 m-4 bg-blue-400 cursor-pointer rounded-2xl" onClick={saveImage}> Save Changes </button>)}
                    {isCropped && (  <button className="p-4 m-4 bg-blue-400 cursor-pointer rounded-2xl" onClick={handleEditImage}> Edit Image  </button>)}
                    {isCropped && (  <button className="p-4 m-4 bg-blue-400 cursor-pointer rounded-2xl" onClick={handleSubmit}> Submit  </button>)}
                    <button className="p-4 m-4 bg-red-400 cursor-pointer rounded-2xl" onClick={handleDelete}> Delete Image</button>
                </div>
                </>
            )}
        </>
    )
}
export default ReactCropper;