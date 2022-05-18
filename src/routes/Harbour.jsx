import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import facade from "../apiFacade";



const Harbour = () => {
  const [harbourList, setHarbourList] = useState([]);
  useEffect(() => {
    facade.fetchData("harbours")
      .then(data => {
        setHarbourList(data);
      })
  }, []);

  const [query, setQuery] = useState("");

  return (

    <div>
      <h2>Harbour</h2>
      <table className="table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody >
          {
            harbourList.map((Harbour, index) => (
              <tr>
                <td>{Harbour.harbourId}</td>
                <td>{Harbour.name}</td>
                <td>{Harbour.address}</td>
                <td>{Harbour.capacity}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

/*
return (
  <main style={{ padding: "1rem 0" }}>
    <h2>Harbour</h2>

    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/HarbourId">hej</Link>
    </nav>
  </main>
);
}

*/


export default Harbour;
