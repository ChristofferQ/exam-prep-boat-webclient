import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

const Boat = () => {
    const [boatList, setBoatList] = useState([]);
    useEffect(() => {
        facade.fetchData("boats")
            .then(data => {
                setBoatList(data);
            })
    }, []);

    const [query, setQuery] = useState("");

    return (

        //<main style={{ padding: "1rem 0" }}>

        <div>
            <h2>Boats</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand</th>
                        <th>Make</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Harbour ID</th>
                        <th>Owner ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boatList.map((Boat, index) => (
                            <tr>
                                <td>{Boat.id}</td>
                                <td>{Boat.brand}</td>
                                <td>{Boat.make}</td>
                                <td>{Boat.name}</td>
                                <td>{Boat.image}</td>
                                <td>{Boat.harbourId}</td>
                                <td>{Boat.ownerId}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Boat;