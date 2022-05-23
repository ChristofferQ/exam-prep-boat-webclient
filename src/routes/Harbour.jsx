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
      })
  };

  function myFunction() {
    console.log("Hello World");
  }

  const [query, setQuery] = useState("");

  return (

    <div>
      <h2>Harbour</h2>
      <h3>Select a harbour to see all boats belonging to it:</h3>
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
      <div>
        <h3>Title </h3>
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
    </div>
  )
}

export default Harbour;
