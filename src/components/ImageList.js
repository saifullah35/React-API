import ImageShow from './ImageShow';

function ImageList ({ images }) {
    const renderedImages = images.mao((image) => {
        return <ImageShow image={image} />;

    });

    return <div>{renderedImages} </div>;
}

export default ImageList;