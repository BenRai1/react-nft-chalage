import React from "react"
import { FaEthereum } from "react-icons/fa"

const styles = {
    collectionCard: `cursor-pointer w-60 bg-[#1f2937] rounded-[20px] border-2 border-black	m-3 overflow-hidden border border-white`,
    collectionCardImage: ``,
    infoContainer: `p-3`,
    infoTitle: `text-base text-white font-bold `,
    id: `text-[#64748b]`,
    priceContainer: `flex align-center mt-[10px] `,
    price: `pl-2 text-[#cbd5e1]`,
    icon: `text-white`,
}

const CollectionCard = ({ id, name, url }) => {
    return (
        <div className={styles.collectionCard}>
            <img src={url} className={styles.collectionCardImage} />
            <div className={styles.infoContainer}>
                <div className={styles.infoTitle}>{name}</div>
                <div className={styles.id}>#{id}</div>
                <div className={styles.priceContainer}>
                    <FaEthereum className={styles.icon} />
                    <div className={styles.price}>7</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
