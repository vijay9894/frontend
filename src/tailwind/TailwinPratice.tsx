
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { TbMenuOrder } from "react-icons/tb";

function TailwindPratice() {


    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) =>{
                console.log("latitude : " , position.coords.latitude)
                 console.log("longitude : ", position.coords.longitude);
            } , (error)=>{alert("error")})
        }else{
            console.log("Geolocation is not supported by this browser.");
        }
    }

    return (
        <>
         <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
                <div className="text-xl font-bold">MyApp</div>

                <div className="hidden md:flex md:grid-cols-3 gap-2">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">About</a>
                    <a href="#" className="hover:text-gray-300">Services</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger className=" block md:hidden p-2 rounded hover:bg-blue-700">
                       <TbMenuOrder/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem> <a href="#" className="hover:text-gray-300">Home</a></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem> <a href="#" className="hover:text-gray-300">About</a></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem> <a href="#" className="hover:text-gray-300">Services</a></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem> <a href="#" className="hover:text-gray-300">Contact</a></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
            <button onClick={getLocation}> get Location </button>
            <div className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae a porro voluptatum. Dolorum, eligendi cupiditate. Tempore aliquid iusto magnam, illo corrupti, voluptate voluptatibus sint a, fuga maxime enim fugit!Loremlorem
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, optio in? Odio, quae laborum quo dolores quasi adipisci minus. Quam ad quas velit cumque, provident vitae nisi voluptatum officiis cum.lorem
                </p>
            </div>
            <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Responsive Heading</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                <div className="bg-blue-200 p-4 rounded flex items-center justify-center transform transition-transform duration-300 hover:scale-103 cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, excepturi quaerat delectus aliquam nemo illo. Quam quos laudantium hic sit? Nemo fuga labore quam quidem, natus itaque ratione commodi eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem tempora doloremque laboriosam quam ipsam nemo assumenda ipsa nulla aperiam? Fuga nostrum eum cupiditate ratione, quidem architecto reprehenderit debitis reiciendis.</div>
                <div className="bg-blue-200 p-4 rounded flex items-center justify-center transform transition-transform duration-300 hover:scale-103 cursor-pointer">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique tenetur et accusamus maiores dolore id laboriosam libero distinctio magnam esse quia eum, repudiandae eos sequi minima. Ullam ad natus at. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, dignissimos molestias nesciunt numquam inventore, repudiandae fugit eligendi sed, ullam omnis accusantium! Id nisi itaque illo voluptate, consequatur labore maiores dolorem!</div>
                <div className="bg-blue-200 p-4 rounded flex items-center justify-center transform transition-transform duration-300 hover:scale-103 cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero aut recusandae necessitatibus quod voluptate? Ipsa laboriosam consequuntur nostrum cum optio, iusto dolorum et nam sit earum velit. Non, inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem doloremque rem culpa nobis odit ullam iusto totam impedit! Dignissimos amet ullam optio neque qui ipsa in atque harum quas omnis. lorem</div>
                <div className="bg-blue-200 p-4 rounded flex items-center justify-center transform transition-transform duration-300 hover:scale-103 cursor-pointer">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ad animi ipsam, culpa perspiciatis ab illo numquam nostrum voluptates iure nemo, veritatis dolor ducimus rem inventore ratione beatae odit sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas aliquid quod officia voluptatem, voluptate illum voluptates earum eveniet adipisci nam unde deleniti blanditiis architecto, accusamus facere inventore eius fuga nemo?</div>
                <div className="bg-blue-200 p-4 rounded flex items-center justify-center transform transition-transform duration-300 hover:scale-103 cursor-pointer">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas aspernatur quos! Quis numquam aspernatur dignissimos! Mollitia optio, sint, tempore a tenetur provident architecto in possimus nam aut, excepturi quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sint mollitia, obcaecati, nihil doloribus esse est laudantium repellendus, quae odio temporibus dolorum deserunt. Neque, odit voluptatum maiores magni ratione quo?</div>
            </div>
        </>
    )
}

export default TailwindPratice;
