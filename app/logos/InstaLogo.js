import Image from "next/image";
import instagramIcon from "@/public/images/instagram.png";

export function instaLogo() {
    return (
        <Image
            src={instagramIcon}
            alt="Landscape picture"
            width={25}
            height={25}
        />
    )
}
export default instaLogo;