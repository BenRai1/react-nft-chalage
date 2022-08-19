import React from "react"
import Image from "next/image"
import { FaEthereum } from "react-icons/fa"
import ape from "../assets/redfur.jpg"
const styles = {
    collectionCard: `cursor-pointer w-60 bg-[#4a4c1e] rounded-[20px] border-2 border-black	m-3 overflow-hidden`,
    collectionCardImage: ``,
    infoContainer: `p-3`,
    infoTitle: `text-base text-white font-bold `,
    id: `text-[#64748b]`,
    priceContainer: `flex align-center mt-[10px]`,
    price: `pl-2 text-[#cbd5e1]`,
}

const CollectionCard = ({ id, name, url }) => {
    return (
        <div className={styles.collectionCard}>
            <img src={url} className={styles.collectionCardImage} />
            <div className={styles.infoContainer}>
                <div className={styles.infoTitle}>{name}</div>
                <div className={styles.id}>#{id}</div>
                <div className={styles.priceContainer}>
                    <FaEthereum />
                    <div className={styles.price}>7</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
