import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

const DeleteBoat = () => {
    const [boatList, setBoatList] = useState([]);
    useEffect(() => {
        facade.fetchData("boats")
            .then(data => {
                setBoatList(data);
            })
    }, []);

    function deleteBoat(id) {
        let conFirmmAction = confirm(`Are you sure you want to delete boat ${id}?`)
        if (conFirmmAction) {
            facade.deleteData(`boat/delete/${id}`)
                .then(data => {
                    setBoatList(data);
                    console.log(data);
                    alert(`Deleted boat ${id}`)
                })
        } else {
            alert("Action cancelled")
        }
    }

    const [query, setQuery] = useState("");

    return (

        //<main style={{ padding: "1rem 0" }}>

        <div>
            <h2>Delete Boat</h2>
            <h3>Select a boat to delete it from the database:</h3>
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
                            <tr onClick={() => deleteBoat(Boat.id)}>
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

export default DeleteBoat;