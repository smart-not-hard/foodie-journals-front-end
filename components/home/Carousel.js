
const Carousel = () => (
    <div className="container mb-3 p-0">
        <div id="carouselControls" className="carousel slide " data-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-container">
                    <div className="carousel-item active ">
                        <img className="carousel-img d-block img-thumbnail m-5 mx-auto" src="https://www.carlsbadfoodtours.com/wp-content/uploads/2015/12/09112015_15minute_pastasauce_tomato.v1-1200x800.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-img d-block img-thumbnail m-5 mx-auto" src="https://appgrooves.com/cdn/lifegoal/220/e/53014-45519-56524-56048_w1200.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-img d-block img-thumbnail m-5 mx-auto" src="https://841973.smushcdn.com/1754547/wp-content/uploads/2019/03/delicious-spanish-foods.jpg?lossy=1&strip=1&webp=1" alt="Third slide"/>
                    </div>

                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>

)

export default Carousel;
