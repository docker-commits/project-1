import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Slider from "react-slick";
import {Card, CardContent, Typography } from "@material-ui/core";
function BottomSlide() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
        });
    }, []);

    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
            
          },
        ],
      };

    return (
        <div className="container">
      
        {countries.length === 0 ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <Slider {...settings}>
            {countries.map((country) => (
              <div className="out" key={country.countryInfo._id}>
               <div className="block__space">
                <Card className="card">
                  <CardContent>
                  <img
                    className="rounded-circle"
                    alt={"users here"}
                    src={`${country.countryInfo.flag}`}
                    height={56}
                    width={56}
                  />
                  <div className="card-body">
                    <Typography><h5 className="card-title">{country.country}</h5>
                    <small className="card-text text-sm-center text-muted">
                      Cases
                    </small></Typography>
                    
                    <Typography><h5 className="card__cases">{country.cases}</h5>
                    <small className="card-text text-sm-center text-muted">
                      Recovered
                    </small></Typography>
                    
                    <Typography><h5 className="card__cases">{country.recovered}</h5>
                    <small className="card-text text-sm-center text-muted">
                      Active:
                    </small></Typography>
                    
                   <Typography> <h5 className="card__cases">{country.active}</h5></Typography>
                    
                  </div>
                  </CardContent>
                </Card>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    )
}

export default BottomSlide
