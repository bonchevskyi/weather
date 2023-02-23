interface Props {
    image: string,
    titleLocation: string,
}

function LocationBox({ image, titleLocation }: Props) {
    return (
        <div className="location">
            <div className="location_inner">
                <img src={image} width="100%" alt={titleLocation} />
                <span style={{ fontSize: '2rem' }}>{titleLocation}</span>
            </div>
        </div>
    );
}
export default LocationBox;
