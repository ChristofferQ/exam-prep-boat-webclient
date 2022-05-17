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

        <main style={{ padding: "1rem 0" }}>

            <div>
                <h2>Owners</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Adddress</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ownerList.map((Owner) => (
                                <tr>
                                    <th scope="row">{Owner.id}</th>
                                    <td>{Owner.name}</td>
                                    <td>{Owner.address}</td>
                                    <td>{Owner.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Owners;