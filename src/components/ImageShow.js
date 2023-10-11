function ImageShow ({ image }) {
    return <div>
        <img src={image.urls.small} alt={image.alt.dexcription} />
    </div>;
}

export default ImageShow;