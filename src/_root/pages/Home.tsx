import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const Home = () => {

  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetchClothes();
  }, []);

  const fetchClothes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/clothes/list");
      setClothes(response.data)
    }
    catch (error) {
      console.log("Error while retrieving clothes list", error);
    }
  }


  return (
    <>
      <div className="bg-stone-100 rounded-ld pagination" style={{ maxHeight: 'calc(100vh - 90px)', overflowY: 'auto' }}>
        <Grid container spacing={2} className="px-4 mt-2">
          
            {clothes.map((clothe) => (
               <Grid item xs={3} key={clothe.id} className="py-3">
               <Card className=" w-full mx-auto rounded-lg border-2 border-stone-100">
                 <CardHeader shadow={false} floated={false} className="h-96">
                   <img
                     src={"/assets/uploaded/" + clothe.imageUrl}
                     alt={clothe.imageUrl}
                     className="h-full w-full object-cover rounded"
                   />
                 </CardHeader>
                 <CardBody className="px-4 pb-2">
                   <div className="pt-2 pb-3 flex items-center justify-between">
                     <Typography color="blue-gray" className="font-semibold text-lg">
                       {clothe.title}
                     </Typography>
                     <Typography color="blue-gray" className="font-medium">
                       $ {clothe.price}
                     </Typography>
                   </div>
                   <Typography
                     variant="small"
                     color="gray"
                     className="font-normal opacity-75"
                   >
                     {clothe.description}
                   </Typography>
                 </CardBody>
                 <CardFooter className="pt-0 overflow-hidden rounded-b-lg">
                   <Button
                     ripple={false}
                     fullWidth={true}
                     className="bg-stone-50 hover:bg-stone-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 hover:text-stone-50 transition ease-in duration-150"
                   >
                     A d d <span className="px-2"> t o </span>C a r t
                   </Button>
                 </CardFooter>
               </Card>
             </Grid>
            ))}
         

        </Grid>
      </div>
    </>
  )
}

export default Home
