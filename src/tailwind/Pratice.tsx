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



function Pratice() {
    return (
        <div className="h-screen bg-black ">
            <Card className="w-96 bg-white text-black">
                <CardHeader>
                    <CardTitle className="font-semibold">Bahubali Movie</CardTitle>
                    <CardDescription>ACtor Prabhas</CardDescription>
                </CardHeader>
                <CardContent>
                    <p><Button className="cursor-pointer "> See Movie </Button></p>
                </CardContent>
                <CardFooter>
                    <p>Telugu Film Indian Biggest BlockBuster </p>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Pratice;