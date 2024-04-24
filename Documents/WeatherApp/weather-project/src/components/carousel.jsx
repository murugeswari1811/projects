import { Carousel } from "@material-tailwind/react";

const Carousels = () => {
    return(
        <>
            <Carousel className="rounded-xl">
                
         <img
            src="https://wallpapers.com/images/hd/perfect-weather-with-gradient-sky-ym0nn79vhoqg34v3.jpg"
            alt="image 1"
            className="h-full w-full object-cover relative"
        />
        <img
            src="https://wallpapers.com/images/featured/weather-xqhs9axpy8btfd3y.jpg"
            alt="image 2"
            className="h-full w-full object-cover relative"
        />
        <img
        src="https://i.redd.it/ja15159x9zi01.jpg"
        alt="image 3" 
        className="h-full w-full object-cover relative"
        />
        </Carousel>

        </>
    )
}

export default Carousels;
