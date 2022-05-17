import { Link } from "react-router-dom";

const Harbour = () => {
   /*  const [harbourList, setHarbourList] = useState([]);
    useEffect(() => {
        facade.fetchData("harbour")
            .then(data => {
                setOwnerList(data);
            })
    }, []); */



    
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


export default Harbour;
