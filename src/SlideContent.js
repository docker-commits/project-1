import React, { useState, useEffect } from "react";

function SlideContent() {


    const [countries, setCountries] = useState([]);

    useEffect(() => {
      fetch("https://my-json-server.typicode.com/typicode/demo/posts")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
        });
    }, []);


    return (
        <div>
            {countries.map((country) => (
                        <div className="slide__copm" key={country.id}>
                            <h5 className="card-title">{country.title}</h5>
                        
                      </div>

                        ))}
        </div>
    )
}

export default SlideContent

