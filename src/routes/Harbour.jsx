import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import facade from "../apiFacade";



const Harbour = () => {
  const [harbourList, setHarbourList] = useState([]);
  const [boatList, setBoatList] = useState([]);
  useEffect(() => {
    facade.fetchData("harbours")
      .then(data => {
        setHarbourList(data);
      })
  }, []);

  function boatsByHarbourId(id) {
    facade.fetchData(`harbour/${id}`)
      .then(data => {
        setBoatList(data);
        console.log(data)
      })
  };
  //BoatsByHarbourId(1)

  function myFunction() {
    console.log("Hello World");
  }

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
        <tbody>
          {
            harbourList.map((Harbour, index) => (
              <tr onClick={() => boatsByHarbourId(Harbour.harbourId)}>
                <td>{Harbour.harbourId}</td>
                <td>{Harbour.name}</td>
                <td>{Harbour.address}</td>
                <td>{Harbour.capacity}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h3>Boats beloning to the selected harbour</h3>
      <table className="table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Make</th>
            <th>Name</th>
            <th>Image</th>
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
