import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

const allOwners = () => {
    const [owners,setOwners] = useState([]);
    useEffect(() => {
        facade.fetchData("owners/")
        .then(data =>{
            setOwners(data);
        })
    }, []);

   

    const [query, setQuery] = useState("");
    return (
        
        <main style={{ padding: "1rem 0" }}>
            
            <div>
                <h2>Owners</h2>
                {/* <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>address</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            owners.map((Owner)=>(
                                <tr>
                                    <td>{Owner}</td>
                                    <td>{}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> */}
            </div>
        </main>
        
    );
}

export default allOwners;