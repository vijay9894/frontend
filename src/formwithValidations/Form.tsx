import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import Cropper from "react-cropper"


interface ImageCropProps {
    src: string;
    onCropDone : (base64 : string)=>void;
    onCancel:()=>void;
}

const Form = ({ src , onCropDone , onCancel }: ImageCropProps) => {

    const cropRef = useRef<HTMLImageElement>(null);
    const [enableCrop, setEnableCrop] = useState(false);
     const [preview, setPreview] = useState<string>(src);

    const handleFileChange =( event : React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend =()=>{
                const base64String = reader.result as string;
                setEnableCrop(true);
                setPreview(base64String);
            }
        }
    } 

    const handleSave = () =>{
        if(enableCrop && cropRef.current){
            const cropper = (cropRef.current as any).cropper;
            const croppedCanvas = cropper.getCroppedCanvas({
                width : 800,
                height: 800,
                imageSmoothingQuality: 'high'
            })
            const croppedBase64 = croppedCanvas.toDataURL('image/jpeg');
            onCropDone(croppedBase64);
        }else{
            onCropDone(src);
        }
    }

    const handleCrop =()=>{
        if(cropRef.current){
            const cropper = (cropRef.current as any).crropper;
            const canvas = cropper.getCroppedCanvas();
            if(canvas){
                setPreview(canvas.toDataURL('image/jpeg'));
            }    
        }
    }

    return (
        <>
            <div>
                <input type="file" accept="image/*" onChange={handleFileChange}></input>
                {enableCrop ? (
                    <Cropper
                        className=""
                        src={src}
                        initialAspectRatio={NaN}
                        aspectRatio={NaN}
                        guides={true}
                        dragMode="move"
                        cropBoxMovable={true}
                        cropBoxResizable={true}
                        zoomable={true}
                        scalable={true}
                        rotatable={true}
                        viewMode={0}
                        responsive={true}
                        checkOrientation={false}
                        ref={cropRef}
                        crop={handleCrop}
                    >
                    </Cropper>
                ) : <img src={src} alt="Preview" className="w-full h-full rounded-lg max-h-[70vh] max-w-[70vw]" />}
            </div>
            <div>
                {!enableCrop && (<Button className="mt-5" variant="default" color="secondary" onClick={() => { setEnableCrop(true) }} > Crop </Button>)}
            </div>
            <Button variant="default" color="primary" onClick={handleSave}>
                Save
            </Button>
            <Button variant="default" color="primary" onClick={onCancel}> Cancel </Button>
        </>
    )
}

export default Form;