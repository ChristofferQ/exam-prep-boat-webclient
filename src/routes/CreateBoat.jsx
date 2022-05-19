import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

const CreateBoat = () => {
    return (
        <div>
            <h2>Create Boat</h2>
            <form id="createBoat" action="/">
                Brand: <input type="text" name="Boat.name" /><br />
                Make: <input type="text" name="" /><br />
                Name: <input type="text" name="" /><br />
                Image: <input type="text" name="" /><br />
                <input type="button" onclick="myFunction()" value="Submit" />
            </form>
            <br />
        </div>
    )
}

export default CreateBoat;