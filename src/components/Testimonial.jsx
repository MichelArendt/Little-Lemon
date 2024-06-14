import '../assets/css/components/Testimonial.css';

function Testimonial({name, stars, comment}) {
    const starsNbr = Number(stars);

    return(
        <section className='testimonial'>
            <img src={`/assets/imgs/avatars/avatar-${name.toLowerCase()}.jpg`} />
            <h1 className='text--section-title'>{name}</h1>
            <div>
                <span className={`material-symbols-sharp ${starsNbr >= 1 ? 'testimonial__star-yellow' : 'testimonial__star-grey'}`}>
                    star
                </span>
                <span className={`material-symbols-sharp ${starsNbr >= 2 ? 'testimonial__star-yellow' : 'testimonial__star-grey'}`}>
                    star
                </span>
                <span className={`material-symbols-sharp ${starsNbr >= 3 ? 'testimonial__star-yellow' : 'testimonial__star-grey'}`}>
                    star
                </span>
                <span className={`material-symbols-sharp ${starsNbr >= 4 ? 'testimonial__star-yellow' : 'testimonial__star-grey'}`}>
                    star
                </span>
                <span className={`material-symbols-sharp ${starsNbr >= 5 ? 'testimonial__star-yellow' : 'testimonial__star-grey'}`}>
                    star
                </span>
            </div>
            <p className='text--card-paragraph'>"{comment}"</p>
        </section>
    );
}

export default Testimonial;