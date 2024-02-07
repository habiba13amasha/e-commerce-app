import Images1 from "./Images/img1.jpg";
import Images2 from "./Images/img2.jpg";
import Images3 from "./Images/img3.jpg";
import "./Slider.css";


function Slider(){
    return(
      <>
        <div id="carouselExampleIndicators" className="carousel slide">
           <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
           </div>
           <div className="carousel-inner">
            <div className="carousel-item active">
             <img src={Images1} alt="" className="d-block w-100 height-500"/>
            </div>
            <div className="carousel-item">
            <img src={Images2} alt="" className="d-block w-100 height-500"/> 
            </div>
           <div className="carousel-item">
            <img src={Images3} alt="" className="d-block w-100 height-500"/>
           </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
     </> 
    );
}
export default Slider;