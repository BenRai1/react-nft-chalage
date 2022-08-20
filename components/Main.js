import React, { useEffect, useState } from "react"
import picture from "../assets/redfur.jpg"
import Image from "next/image"
import { BsInstagram } from "react-icons/bs"
import { FiTwitter } from "react-icons/fi"
import { TbDots } from "react-icons/tb"

const styles = {
    main: `flex bg-[#334155] max-h-50px `,
    apeContainer: `flex`,
    imageContainer: `w-60 mr-[10px]`,
    image: ` rounded-[30px]`,
    info: `content-between border-2  border-rose-500 `,
    header: `flex`,
    name: `text-white text-3xl  mr-5 `,
    id: `text-gray text-3xl`,
    ownerInfo: `flex  border-2`,
    ownerImageContainer: `rounded-full overflow-hidden w-10 mr-3`,
    ownerInfo: `flex`,
    profilePicture: ``,
    walletAddress: `text-white text-xs`,
    owner: `text-sx text-[#84cc16]`,
    icons: `flex border-2 `,
    icon: `text-white w-10 rounded-full border-2 border-white `,
}

export default function Main(selectedApe, apeListData) {
    const [activeApe, setActiveApe] = useState(selectedApe.apeListData[0])
    console.log("Selected Ape Id:")
    console.log(selectedApe.selectedApe)
    console.log("Ape List Data:")
    console.log(selectedApe.apeListData)

    useEffect(() => {
        setActiveApe(selectedApe.apeListData[selectedApe.selectedApe])

        console.log("Active Ape:")
        console.log(activeApe)
    }, [selectedApe.selectedApe, apeListData])
    return (
        <div className={styles.main}>
            <div className={styles.apeContainer}>
                <div className={styles.imageContainer}>
                    <img src={activeApe.image_original_url} className={styles.image} />
                </div>
                <div className={styles.info}>
                    <div className={styles.header}>
                        <div className={styles.name}>{activeApe.name}</div>
                        <div className={styles.id}>#{activeApe.token_id}</div>
                    </div>
                    <div className={styles.ownerInfo}>
                        <div className={styles.ownerImageContainer}>
                            <Image src={picture} className={styles.profilePicture} />
                        </div>
                        <div>
                            <div className={styles.walletAddress}>
                                0x1E3a7fF5De47b18fb5cb12e044925F26433A6bce
                            </div>
                            <div className={styles.owner}>@benburger</div>
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <BsInstagram className={styles.icon} />
                    <FiTwitter className={styles.icon} />
                    <TbDots className={styles.icon} />
                </div>
            </div>
        </div>
    )
}
