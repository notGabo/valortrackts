import Image from "next/image";
import DefaultUser from "@/components/icons/DefaultUser";

const UserCardInfo = () => {
    return ( 
        <article className="rounded-xl bg-gray-900 p-2  m-5">
            <div className="grid bg-gray-800 p-2 w-[50px] h-[50px] rounded-full place-content-center">
            < DefaultUser className="fill-rose-600 relative h-8"/>
            </div>
        </article>
        )};
    export default UserCardInfo;