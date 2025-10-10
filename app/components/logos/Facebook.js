import Image from "next/image";
import faceBook from "../../public/images/facebook.png";

function Facebook() {
    return (
        <Image
            src={faceBook}  alt="Landscape picture"
            width={25}
            height={25}
        />
    )
}
export default Facebook