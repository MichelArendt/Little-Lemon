import '../assets/css/Homepage.css'
import image from '../assets/imgs/restaurant/restaurant.jpg'
import image_greekSalad from '../assets/imgs/food/greek_salad.jpg'
import Button from '../components/Button'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <>
            <article className='homepage__section-hero'>
                <section>
                    <h1 className='text--display-title color-primary-2'>Little Lemon</h1>
                    <h2 className='text--display-subtitle color-highlight-1'>Chigaco</h2>
                    <div>
                        <p className='text--lead color-highlight-1'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                    </div>
                    <Button url={'/reservations'} value={'Reserve a table'} />
                </section>

                <img src={image} alt='Little Lemon restaurant'  />
            </article>

            <article className='homepage__section-weeks_specials'>
                <h1 className='text--display-title color-primary-1'>
                    This week's special!
                </h1>

                <Button url={'#'} value={'Online Menu'} />

                <section>
                    <Card 
                        image={image_greekSalad} 
                        title={'Greek Salad'}
                        price={'$12.99'}
                        description={'The famous greek salad of crispy lettuce, peppers, olives and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'}
                    />
                </section>

                <section>
                    Bruschetta
                </section>

                <section>
                    Lemon Dessert
                </section>
            </article>
        </>
    )
}