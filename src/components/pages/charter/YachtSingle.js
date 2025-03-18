import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaImg from "../media/MediaImg";
import Slider from "react-slick";

const YachtSingle = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://www.adriaticsailingadventure.com/backend/wp-json/wp/v2/yacht/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  var heroSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000   
};


  return (
    <div className="single-post container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

          <Slider {...heroSlider}>
            <MediaImg id={post.acf.main_photo} size="full" />
            <MediaImg id={post.acf.Exterior_photo} size="full" />
            <MediaImg id={post.acf.cockpit} size="full" />
            <MediaImg id={post.acf.master_cabin} size="full" />
            <MediaImg id={post.acf.life_style} size="full" />
          </Slider>

          <div className="row">
            <div className="col-md-3 col-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" fill="white" viewBox="0 0 512 512"><path d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z"/></svg>
              <p>
                {post.acf.lenght}
              </p>
            </div>
            <div className="col-md-3 col-6">
              <strong>Length:</strong> {post.acf.lenght}
            </div>
            <div className="col-md-3 col-6">
              <strong>Length:</strong> {post.acf.lenght}
            </div>
            <div className="col-md-3 col-6">
              <strong>Length:</strong> {post.acf.lenght}
            </div>
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

            <div className="row mt-4">
              <div className="col-md-6">
                <div className="card p-3">
                  <h4>Yacht Details</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Length:</strong> {post.acf.lenght}</li>
                    <li className="list-group-item"><strong>Beam:</strong> {post.acf.beam}</li>
                    <li className="list-group-item"><strong>Draft:</strong> {post.acf.draft}</li>
                    <li className="list-group-item"><strong>Cabins:</strong> {post.acf.cabins}</li>
                    <li className="list-group-item"><strong>Heads:</strong> {post.acf.heads}</li>
                    <li className="list-group-item"><strong>Sleeps:</strong> {post.acf.sleeps}</li>
                    <li className="list-group-item"><strong>Cabins Configuration:</strong> {post.acf.cabins_configuration}</li>
                    <li className="list-group-item"><strong>Crew Cabins:</strong> {post.acf.crew_cabins}</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card p-3">
                  <h4>Performance & Equipment</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Builder:</strong> {post.acf.builder}</li>
                    <li className="list-group-item"><strong>Model:</strong> {post.acf.model}</li>
                    <li className="list-group-item"><strong>Build Year:</strong> {post.acf.build_year}</li>
                    <li className="list-group-item"><strong>Engine:</strong> {post.acf.engine}</li>
                    <li className="list-group-item"><strong>Cruising Speed:</strong> {post.acf.cruising_speed}</li>
                    <li className="list-group-item"><strong>Fuel Consumption:</strong> {post.acf.fuel_consumption}</li>
                    <li className="list-group-item"><strong>Tender:</strong> {post.acf.tender}</li>
                    <li className="list-group-item"><strong>Outboard Engine:</strong> {post.acf.outboard_engine}</li>
                  </ul>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default YachtSingle;
