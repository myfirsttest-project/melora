import Image from "next/image";
import youtube from "@/public/images/youtube.png";

function YoutubeLogo () {
    return (
        <Image
            src={youtube}
            alt="Landscape picture"
            width={25}
            height={25}
        />
    )
}
export default YoutubeLogo;