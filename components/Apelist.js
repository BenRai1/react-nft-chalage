import React from "react"
import { AiOutlineConsoleSql } from "react-icons/ai"
import CollectionCard from "./CollectionCard"

const styles = {
    apeList: `flex bg-black overflow-x-auto`,
}

export default function Apelist({ apeListData, setSelectedApe }) {
    return (
        <div className={styles.apeList}>
            {apeListData.map((ape) => (
                <div
                    onClick={() => {
                        setSelectedApe(ape.token_id)
                        // console.log(`New Ape Token ID: ${ape.token_id}`)
                        // setSelectedApeId(ape.token_id)
                        // console.log(`New selected Ape ID: ${selectedApeId}`)
                    }}
                >
                    <CollectionCard
                        key={ape.token_id}
                        id={ape.token_id}
                        name={ape.name}
                        url={ape.image_url}
                    />
                </div>
            ))}
        </div>
    )
}
