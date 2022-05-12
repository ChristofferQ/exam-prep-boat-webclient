import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>address</th>
                        <th>phone</th>
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