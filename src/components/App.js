import React, {useEffect, useState} from "react";

function App() {

    const [image, setImage] = useState(null)

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) =>response.json())
        .then(data => setImage(data.message))
    }, [])

    if(!image) {
        return <p>Loading...</p>
    }
    
    return (
        <div>
            <h1>🐶 Dog Loader 🐶</h1>
            <img src={image} alt="A Random Dog"/>
        </div>
    )
}
export default App;
