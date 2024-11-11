
export default function EventCard({ title, image }) {
    return (
        <div>
            <a href={`${title}`}>
                <img src={image} alt={title} />
            </a>
        </div>
    );
}
