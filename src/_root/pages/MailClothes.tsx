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
        console.log(localStorage.getItem('mailId'));
    }, []);

    const fetchClothes = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/clothes/list/${localStorage.getItem('mailId')}`);
            setClothes(response.data)
        }
        catch (error) {
            console.log("Error while retrieving clothes list", error);
        }
    }


    return (
        <>
            <div className="bg-stone-50 rounded-lg pagination" >
                <Grid className="w-full">
                    <div>
                        <Grid container className="ps-4 py-2 bg-white">
                            <img className="w-8 ms-2" src="/assets/images/mailIcon.png" />
                            <span className="ps-4 my-auto text-lg text-dark-1 fw-semibold ">{localStorage.getItem('mailName')}</span>
                        </Grid>
                    </div>
                    <Grid container spacing={2} className="px-4 mt-2 " style={{ maxHeight: 'calc(100vh - 145px)', overflowY: 'auto' }}>

                        {clothes.map((clothe) => (
                            <Grid item xs={3} key={clothe.id} className="py-3 my-auto relative" >
                                <Card className=" w-full mx-auto rounded-lg">
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
                                            className="bg-stone-50 hover:bg-stone-600 text-stone-950 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 hover:text-stone-50 transition ease-in duration-150"
                                        >
                                            A d d <span className="px-2"> t o </span>C a r t
                                        </Button>

                                    </CardFooter>
                                </Card>
                                <div className="bg-gray-200 text-stone-950 font-semibold rounded-bl-3xl mt-2 absolute right-0 top-2 pt-1 pb-2 ">
                                    <span className="px-4 ">{
                                        clothe.quantity === 1 ? (
                                            <span>Unique</span>
                                        ) : (
                                            <span>{clothe.quantity}</span>
                                        )
                                    }</span>
                                </div>
                            </Grid>
                        ))}


                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Home
