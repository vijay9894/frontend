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

function Pratice() {


    function handleClick() {
        alert("Ticket Booked Successfully")
    }

    const movies = [
        { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" }
        , { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" },
        { name: "Bahubali", actor: "Prabhas", about: "Telugu Film Indian Biggest BlockBuster" }
    ]

    return (
        <>
            <div className="h-20 bg-green-50 flex justify-end items-center">
                <Avatar className="m-5 cursor-pointer" onClick={() => alert("Profile Clicked")}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="h-170 bg-black flex">
                {movies.map((item) => (
                    <Card className="w-96 mx-2 my-2 pb-12 h-50  bg-white text-black flex">
                        <CardHeader>
                            <CardTitle className="font-semibold">{item.name}</CardTitle>
                            <CardDescription>{item.actor}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p><Button className="cursor-pointer" onClick={handleClick}> Book Ticket </Button></p>
                        </CardContent>
                        <CardFooter>
                            <p>{item.about}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Pratice;