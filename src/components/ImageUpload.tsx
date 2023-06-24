import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';

interface ImageUploadProps {
    onImageUpload: (files: File[]) => void;
    maxImages: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({onImageUpload, maxImages}) => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        const newImages = acceptedFiles.slice(0, maxImages - selectedImages.length).map((file) => URL.createObjectURL(file));
        setSelectedImages((prevImages) => [...prevImages, ...newImages]);
        onImageUpload(acceptedFiles.slice(0, maxImages - selectedImages.length));
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div {...getRootProps()} className="image-upload">
            <input {...getInputProps()} accept="image/*"/>
            {selectedImages.map((image, index) => (
                <img key={index} src={image} alt="Preview" className="preview-image"/>
            ))}
            {selectedImages.length < maxImages && (
                <>
                    {isDragActive ? (
                        <p>Перенесите фото сюда</p>
                    ) : (
                        <p>
                            Перенесите до {maxImages - selectedImages.length} фото сюда, или нажмите чтобы выбрать
                            фото
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default ImageUpload;
