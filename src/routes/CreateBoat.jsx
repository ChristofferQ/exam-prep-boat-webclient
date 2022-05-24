import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    facade.postData("createboat", value)

    console.log({ value });
}

const CreateBoat = () => {
    return (
        <div>
            <h2>Create Boat</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="brand">Brand</label>
                <input type="brand" name="brand" id="brand" />

                <label htmlFor="make">Make</label>
                <input type="make" name="make" id="make" />

                <label htmlFor="name">Name</label>
                <input type="name" name="name" id="name" />

                <label htmlFor="boatImage">Image</label>
                <input type="boatImage" name="boatImage" id="boatImage" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateBoat;