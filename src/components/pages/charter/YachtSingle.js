import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const YachtSingle = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://www.adriaticsailingadventure.com/backend/wp-json/wp/v2/yacht/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;


  return (
    <div className="single-post container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

          {post.acf && (
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
          )}

        </div>
      </div>
    </div>
  );
};

export default YachtSingle;
