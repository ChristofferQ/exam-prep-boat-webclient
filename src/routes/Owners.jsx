import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";
import HarbourId from "./HarbourId";

const Owners = () => {
    const [ownerList, setOwnerList] = useState([]);
    useEffect(() => {
        facade.fetchData("owners")
            .then(data => {
                setOwnerList(data);
            })
    }, []);

    const [query, setQuery] = useState("");

    return (

        //<main style={{ padding: "1rem 0" }}>

        <div>
            <h2>Owners</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ownerList.map((Owner, index) => (
                            <tr>
                                <td>{Owner.id}</td>
                                <td>{Owner.name}</td>
                                <td>{Owner.address}</td>
                                <td>{Owner.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Owners;