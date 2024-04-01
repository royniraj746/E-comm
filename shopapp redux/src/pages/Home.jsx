import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { FindAllProduct } from "../service/api";
import { useDispatch } from "react-redux";

const Home = () => {
  const [loading, setLoading] = useState(false);
  

  const dispatch = useDispatch();
  const [posts, setData] = useState([]);

  const handleIdChange = (id) => {
    console.log("delete Id",id)
    const newTours = posts.filter(tour => tour._id !== id);
    console.log("newTours" ,newTours);
    setData(newTours);
    
  };

  useEffect(() => {
    getTodo();

  }, []);
  async function getTodo() {
    setLoading(true);
    const todoData = await FindAllProduct(dispatch);

    setData(todoData);
    setLoading(false);
  }


  return (
    <div>
      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
                posts.map((post) => (
                  <Product key={post._id} post={post}  removeTour={handleIdChange} />
                ))
              }
            </div>) :
            <div className="flex justify-center items-center">
              <p>No Data Found</p>
            </div>
      }
    </div>
  );
};

export default Home;
