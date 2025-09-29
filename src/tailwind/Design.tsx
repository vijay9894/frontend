import { AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { FiShoppingCart } from "react-icons/fi";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Avatar } from "@radix-ui/react-avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Pratice from "./Pratice";




function Design() {
    const navigate = useNavigate();
    const socialBooks = useSelector((state: any) => state.Social.books);
    const mathBooks = useSelector((state: any) => state.Maths.books)
    let totalBookCount = 0;

    let socialcount = 0;
    for (let i = 0; i < socialBooks.length; i++) {
        socialcount = socialcount + 1;
    }

    let mathsCount = 0;
    for (let i = 0; i < mathBooks.length; i++) {
        mathsCount = mathsCount + 1;
    }

    totalBookCount = socialcount + mathsCount;

    function handleAccountClick() {
        navigate('/home');
    }

    function handleLogout() {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        navigate('/');
    }

    return (
        <>
            <div className="h-20 flex items-center rounded-lg border border-gray-200">
                <div className="ml-40 text-2xl ">
                    <button className="cursor-pointer">
                        <NavigationMenu>
                            <NavigationMenuList>Pro</NavigationMenuList>
                        </NavigationMenu>
                    </button>
                </div>
                <div className="ml-15 text-2xl ">
                    <button className="cursor-pointer">
                        <NavigationMenu>
                            <NavigationMenuList>Teams</NavigationMenuList>
                        </NavigationMenu>
                    </button>
                </div>
                <div className="ml-15 text-2xl ">
                    <button className="cursor-pointer">
                        <NavigationMenu>
                            <NavigationMenuList>Pricing</NavigationMenuList>
                        </NavigationMenu>
                    </button>
                </div>
                <div className="ml-15 text-2xl ">
                    <button className="cursor-pointer">
                        <NavigationMenu>
                            <NavigationMenuList>Documentation</NavigationMenuList>
                        </NavigationMenu>
                    </button>
                </div>
            </div>

            <div className="h-25 flex items-center shadow-xl rounded-lg border border-gray-200">
                <div className="ml-40 text-bold text-4xl ">
                    <h1>NPM</h1>
                </div>
                <div className="ml-15 text-2xl flex">
                    <IoIosSearch className=" text-3xl ml-2 mt-3 text-gray-400" />
                    <input className=" ml-5 border border-gray-300 h-15 w-300 pl-3 bg-gray-200 focus:outline-none" placeholder="Search..." type="text" >
                    </input>
                </div>
                <div className="ml-1 text-2xl ">
                    <Button className="cursor-pointer h-15 w-30">Search</Button>
                </div>
                <div className="ml-10 text-2xl cursor-pointer flex" onClick={() => navigate('/cart')}>
                    <FiShoppingCart />
                    <div className="text-sm text-white bg-red-600 h-4 w-5 flex justify-center items-center rounded-full">
                        {totalBookCount}
                    </div>
                </div>
                <div className="ml-10">
                    <DropdownMenu>
                        <DropdownMenuTrigger>  <Avatar className="mt-8 cursor-pointer">
                            <AvatarImage className="h-10 rounded-lg" src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>  </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40 bg-black text-white">
                            <DropdownMenuLabel className="text-xl font-semibold">My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className=" text-md cursor-pointer" onClick={handleAccountClick}>Profile</DropdownMenuItem>
                            <DropdownMenuItem className="text-md cursor-pointer" onClick={handleLogout}>Log Out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="ml-40 h-145 w-420 mt-8 shadow-xl/20 rounded-lg border border-gray-200 flex">
                <div className="w-120 h-130 mt-3 ml-10 rounded-lg">
                    <h1 className="mt-6 ml-10 text-2xl font-semibold"> Popular Libraries</h1>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> react </h2>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> react-dom </h2>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> lodash </h2>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> axios </h2>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> chalk </h2>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> tslib </h2>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> next </h2>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> commander </h2>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> inquirer </h2>
                    <hr className="mt-2 "></hr>
                    <h2 className="mt-1 text-2xl font-semibold"> express </h2>
                    <hr className="mt-2 "></hr>
                </div>
                <div className="w-150 h-130 mt-3 ml-10 rounded-lg">
                    <h1 className="mt-6 ml-10 text-2xl font-semibold"> Discover Libraries</h1>
                    <hr className="mt-2 "></hr>
                    <div className="grid grid-cols-2 gap-3">
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-74 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold"> Front-end</h2>
                            </div>
                        </div>
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-74 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold"> Backend </h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-74 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold">CLI</h2>
                            </div>
                        </div>
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-74 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold"> Documentation </h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-49 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold"> CSS </h2>
                            </div>
                        </div>
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-49 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold"> Testing </h2>
                            </div>
                        </div>
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-49 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold"> IOT  </h2>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-74 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold">CLI</h2>
                            </div>
                        </div>
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-74 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold"> Documentation </h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-74 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold">FrameWorks</h2>
                            </div>
                        </div>
                        <div className=" mt-2 h-17 ">
                            <div className="h-17 w-74 flex justify-center items-center border border-gray-200 shadow-md">
                                <h2 className="mt-1 text-2xl font-semibold"> Robotics  </h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 h-17 w-150 flex justify-center items-center border border-gray-200 shadow-md">
                        <h2 className="text-2xl font-semibold"> Math</h2>
                    </div>
                </div>
                <div className="w-100 h-130 mt-3 ml-10 rounded-lg">
                    <h1 className="mt-6 ml-10 text-2xl font-semibold">By The Numbers</h1>
                    <hr className="mt-2 "></hr>
                    <h4 className="mt-1 font-semibold"> Packages </h4>
                    <h1 className="mt-1 text-2xl font-semibold"> 3,651,516</h1>
                    <hr className="mt-3 "></hr>
                    <h4 className="mt-1 font-semibold"> Downloaders - Last Week  </h4>
                    <h1 className="mt-1 text-2xl font-semibold"> 1,900,000+</h1>
                    <hr className="mt-3 "></hr>
                    <h4 className="mt-1 font-semibold"> Downloaders - Last Month  </h4>
                    <h1 className="mt-1 text-2xl font-semibold"> 8,312,000+</h1>
                    <hr className="mt-3 "></hr>
                </div>
            </div>
        </>
    )
}

export default Design