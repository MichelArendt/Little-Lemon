import { Link } from 'react-router-dom'

import '../assets/css/components/Card.css';
import svg from '../assets/imgs/svg/basket.svg'

function Card({image, title, price, description}) {
    return(
        <div className='card'>
            <img src={image} alt='Greek Salad'  />
            <div className='card__content'>
                <div className='card-content__container-title'>
                    <h1 className='text--card-title'>{title}</h1>
                    <p className='font__markazi color-secondary-1'>{price}</p>
                </div>
                <p className='text--card-paragraph'>{description}</p>
                <Link to='#'>Order a Delivery <img src={svg} height='20px' width='20px' /> </Link>
            </div>
        </div>
    );
}

export default Card;