import React, { useEffect, useState } from "react"
import picture from "../assets/redfur.jpg"
import Image from "next/image"
import { BsInstagram } from "react-icons/bs"
import { FiTwitter } from "react-icons/fi"
import { TbDots } from "react-icons/tb"

const styles = {
    main: `flex bg-black max-h-50px border-b border-[#1f2937] p-3 justify-between`,
    apeContainer: `flex w-full `,
    imageContainer: `w-60 mr-[10px]`,
    image: ` rounded-[30px]`,
    info: `flex flex-col justify-between `,
    header: `flex`,
    name: `text-white text-3xl  mr-5 `,
    id: `text-[#64748b] text-3xl`,
    ownerInfo: `flex`,
    ownerImageContainer: `rounded-full overflow-hidden w-10 mr-3`,
    profilePicture: ``,
    walletAddress: `text-white text-xs`,
    owner: `text-sx text-[#84cc16]`,
    iconsContainer: `flex flex-col justify-end `,
    icons: `flex`,
    icon: `text-white w-10 rounded-full border border-white w-10 h-10 p-2`,
}

export default function Main({ selectedApe, apeListData }) {
    const [activeApe, setActiveApe] = useState(apeListData[0])
    console.log("Selected Ape Id:")
    console.log(selectedApe)
    console.log("Ape List Data:")
    console.log(apeListData)

    useEffect(() => {
        setActiveApe(apeListData[selectedApe])

        console.log("Active Ape:")
        console.log(activeApe)
    }, [selectedApe, apeListData])
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
                            <img
                                src={activeApe.owner.profile_img_url}
                                className={styles.profilePicture}
                            />
                        </div>
                        <div>
                            <div className={styles.walletAddress}>{activeApe.owner.address}</div>
                            <div className={styles.owner}>@benburger</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.iconsContainer}>
                <div className={styles.icons}>
                    <BsInstagram className={styles.icon} />
                    <FiTwitter className={styles.icon} />
                    <TbDots className={styles.icon} />
                </div>
            </div>
        </div>
    )
}
