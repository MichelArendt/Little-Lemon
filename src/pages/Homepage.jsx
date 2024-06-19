import '../assets/css/Homepage.css'

import image from '../assets/imgs/restaurant/restaurant.jpg'
import image_greekSalad from '../assets/imgs/food/greek_salad-card.png'
import image_bruschetta from '../assets/imgs/food/bruschetta-card.png'
import image_lemonDessert from '../assets/imgs/food/lemon_dessert-card.png'
import image_restaurantChef from '../assets/imgs/restaurant/restaurant_chef.jpg'
import image_marioAndAdrian from '../assets/imgs/restaurant/Mario_and_Adrian.jpg'

import Button from '../components/Button'
import Card from '../components/Card'
import Testimonial from '../components/Testimonial'

export default function Main() {
    return (
        <>
            <article className='homepage__section-hero'>
                <section>
                    <h1 className='text--display-title color-primary-2'>Little Lemon</h1>
                    <h2 className='text--display-subtitle color-highlight-1'>Chigaco</h2>
                    <div className='padding-vertical'>
                        <p className='text--lead color-highlight-1'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <Button url={'/reservations'}>Reserve a table</Button>
                </section>

                <img src={image} alt='Little Lemon restaurant'  />
            </article>

            <article className='homepage__section-weeks_specials'>
                <h1 className='text--display-title color-primary-1'>
                    This week's special!
                </h1>

                <Button url={'#'}>Online Menu</Button>

                <section>
                    <Card
                        image={image_greekSalad}
                        title={'Greek Salad'}
                        price={'$12.99'}
                        description={'The famous greek salad of crispy lettuce, peppers, olives and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'}
                    />
                </section>

                <section>
                    <Card
                        image={image_bruschetta}
                        title={'Bruschetta'}
                        price={'$5.99'}
                        description={'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'}
                    />
                </section>

                <section>
                    <Card
                        image={image_lemonDessert}
                        title={'Lemon Dessert'}
                        price={'$5.00'}
                        description={'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'}
                    />
                </section>
            </article>

            <article className='homepage__section-testimonials'>
                <h1 className='text--section-title color-primary-2'>Testimonials</h1>

                <div className='testimonials-container'>
                    <Testimonial
                        name='Pedro'
                        stars='5'
                        comment='Absolutely loved the ambiance and the flavors at Little Lemon! A delightful dining experience!'
                    />

                    <Testimonial
                        name='Amanda'
                        stars='4'
                        comment='Great food and service. Little Lemon is a wonderful spot for a nice meal.'
                    />

                    <Testimonial
                        name='Carla'
                        stars='3'
                        comment='Decent food and atmosphere, but a bit overpriced. Still enjoyed the evening at Little Lemon.'
                    />

                    <Testimonial
                        name='Yasmin'
                        stars='5'
                        comment="An unforgettable culinary journey. Little Lemon's menu is both innovative and delicious!"
                    />
                </div>
            </article>

            <article className='homepage__section-about'>
                <div className='about__container-text'>
                    <h1 className='text--display-title color-primary-1'>Little Lemon</h1>
                    <h2 className='text--display-subtitle color-primary-2'>Chigaco</h2>
                    <p className='text--lead'>
                        We are a family-owned Mediterranean restaurant, dedicated to bringing the rich and diverse flavors of the Mediterranean to your table.<br /><br />

                        Our focus is on preserving the authenticity of traditional recipes while infusing them with a modern twist to delight your palate.<br /><br />

                        From savory mezze platters to succulent grilled meats and fresh seafood, every dish is crafted with the finest ingredients and utmost care.<br /><br />

                        Our warm and inviting atmosphere is perfect for family gatherings, romantic dinners, and casual outings alike.<br /><br />

                        At Little Lemon, we strive to create an unforgettable dining experience that blends the best of tradition and innovation.
                    </p>
                </div>
                <div className='about__container-image'>
                    <img src={image_marioAndAdrian} />
                    <img src={image_restaurantChef} />
                </div>
            </article>
        </>
    )
}