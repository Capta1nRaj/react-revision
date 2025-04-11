import { useRef, useState } from "react";

export default function Index() {
    const inputRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const [isFirstImage, setIsFirstImage] = useState<boolean>(true);

    const handleClick = () => {
        inputRef.current?.focus();
    }

    const handleImageClick = () => {
        if (imageRef.current) {
            imageRef.current.src =
                isFirstImage ?
                    'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' :
                    "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            setIsFirstImage(!isFirstImage);
        }
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
            <img ref={imageRef} src={'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="image" />
            <button onClick={handleImageClick}>Load Image</button>
        </div>
    )
}