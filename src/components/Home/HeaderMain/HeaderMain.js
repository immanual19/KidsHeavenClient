import React from 'react';
import kidReading from '../../../images/kidReading.jpeg';
import kidPlaying from '../../../images/kidPlaying.jpeg';
import kidDrawing from '../../../images/kidDrawing.jpeg';
const HeaderMain = () => {
    return (
        <section className="my-3">
        <div style={{margin:'0 auto'}} id="carouselExampleCaptions" class="carousel slide w-75" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={kidReading} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome to KidsHeaven</h5>
        <p>A reliable place for your kid with every facilities.</p>
        <button type="button" class="btn btn-primary">Explore More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={kidPlaying} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>She will be Learning to socialize</h5>
        <p>Kids Heaven is a place for kids to learn while playing at our beautiful playground.</p>
        <button type="button" class="btn btn-primary">Explore More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={kidDrawing} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Growing with Creativity</h5>
        <p>Besides, playing and learning, kids will learn to grow with a creative mind</p>
        <button type="button" class="btn btn-primary">Explore More</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </section>
    );
};

export default HeaderMain;