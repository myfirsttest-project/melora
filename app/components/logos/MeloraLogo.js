import Image from 'next/image'
import React from "react";

export function MeloraLogo() {
    return (
        <div className={"logoClass"}>
            <Image
                src="/images/melora.png"
                alt="Landscape picture"
                width={200}
                height={60}
            />
        </div>
    )
}
export default MeloraLogo;