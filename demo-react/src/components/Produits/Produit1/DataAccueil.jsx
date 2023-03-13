import React, { useState, useEffect } from "react";
const DataAccueil = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let compenentMounted = true;

  useEffect(() => {
    const getDataAccueil = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/DataAccueil");
      if (compenentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log;
      }

      return () => {
        compenentMounted = false;
      };
    };
    getDataAccueil();
  }, []);

  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <img src={DataAccueil.image} className="card-img-top" alt="" />

          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default DataAccueil;
