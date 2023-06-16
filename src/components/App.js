import React, { useEffect, useState } from "react";

function App() {
  const [randomDog, setDog] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setDog(data.message);
        setIsLoaded(true);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  }, []);

  if(!isLoaded) return <p>Loading...</p>;

  return (<img src={randomDog} alt="A Random Dog"/>)
}

export default App;
