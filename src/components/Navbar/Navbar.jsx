import { Button } from "../ui/button";
import NavLinks from "./NavLinks";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User2 } from "lucide-react";



const Navbar = () => {

    return (
        <nav className="flex justify-between py-2 px-1">
            {/* nav start */}
            <h1 className="order-2 md:order-1 text-2xl font-bold">Logo</h1>
            {/* nav center */}
            {/* large device */}
            <div className="hidden md:order-2 md:flex">
                <NavLinks isSmallDevie={false}></NavLinks>
            </div>
            {/* small device */}
            <div className="order-1 md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="destructive">toggle me</Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>
                                <h1 className="order-2 md:order-1 text-2xl font-bold">Logo</h1>
                            </SheetTitle>
                            <SheetDescription>
                                <NavLinks isSmallDevie={true}></NavLinks>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            {/* nav end */}
            <div className="order-3">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" size="icon"><User2></User2></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator></DropdownMenuSeparator>
                        <DropdownMenuItem>profile</DropdownMenuItem>
                        <DropdownMenuItem>logout</DropdownMenuItem>
                        <DropdownMenuItem>settings</DropdownMenuItem>
                        <DropdownMenuItem>subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default Navbar;