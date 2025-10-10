import Image from 'next/image'
import meloraImage from "../../../public/images/melora.png";
import React from "react";

export function MeloraLogo() {
    return (
        <div className={"logoClass"}>
            <Image
                src={meloraImage}
                alt="Landscape picture"
                width={200}
                height={60}
            />
        </div>
    )
}
export default MeloraLogo;