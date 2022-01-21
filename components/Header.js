import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user } = useMoralis();

    return (
        <div className="sticky top-0 z-50 p-5 bg-black shadow-sm text-pink-700 border-b-2 border-pink-700">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative w-24 h-24 mx-auto hidden lg:inline-grid">
                    <Image 
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src="/papareactwatermark.png"
                    />

                </div>
                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 rounded-full lg:mx-auto border-pink-500 border-8">
                        {/* Avatar */}
                        <Avatar logoutOnPress/>
                    </div>
                    {/* Welcome message */}
                    <h1 className="text-3xl">Welcome to the METAVERSE</h1>
                    {/* username */}
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                    {/* change username */}
                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default Header
