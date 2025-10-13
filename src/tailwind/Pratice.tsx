import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay"

function Pratice() {


    function handleClick() {
        alert(<h1 className="font-bold">Ticket Booked Successfully</h1>);
    }

    const movies = [
        { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" }
        , { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" },
        { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" },
        { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" }
        , { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" },
        { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" },
        { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" }
        , { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" },
        { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" }

    ]

    return (
        <>
            <div className="mt-10 bg-black h-70 flex items-center justify-center border-2 border-white rounded-xl">
                <Carousel plugins={[
                    AutoPlay({delay : 2000})
                ]} className="ml-10 w-full h-72 flex items-center justify-center">
                    <CarouselContent>
                        {movies.map((item) => (
                            <CarouselItem className="basis-1/4">
                                <button className=" focus:outline-none cursor-pointer hover:scale-105 transition-transform duration-300 ">
                                <Card className="w-96 mx-2 my-2 pb-12 h-50 bg-white text-black flex shadow-xl/30">
                                    <CardHeader>
                                        <CardTitle className="font-semibold">{item.name}</CardTitle>
                                        <CardDescription>{item.actor}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button className="cursor-pointer" onClick={handleClick}>
                                            Book Ticket
                                        </Button>
                                    </CardContent>
                                    <CardFooter>
                                        <p>{item.about}</p>
                                    </CardFooter>
                                </Card>
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext />
                </Carousel>
           </div>

        </>
    )
}

export default Pratice;