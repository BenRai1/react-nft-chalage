import React from "react"
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
