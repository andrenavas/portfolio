import './Cards.css'

interface Technology {
    id: number;
    name: string;
    image: string;
}

interface CardsProps {
    technology: Technology;
}

const Cards: React.FC<CardsProps> = ({ technology }) => {
    return (
        <div className='container-card'>
            <span className='title-card'>{technology.name}</span>
            {/* <figure className='container-img'> */}
            <img className='logo-tech' src={technology.image} alt='technologies logo' />
            {/* </figure> */}
        </div>
    )
}

export default Cards;