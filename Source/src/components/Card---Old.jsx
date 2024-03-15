import '../App.css'

export default function Info ({image, alt, title, text}) {
    return (
        <div className="card image">
            <img src={image} alt={alt} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}