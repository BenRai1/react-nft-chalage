import React from "react"
import CollectionCard from "./CollectionCard"

const styles = {
    apeList: `flex bg-black overflow-auto `,
}

export default function Apelist({ apeListData }) {
    return (
        <div className={styles.apeList}>
            {apeListData.map((ape) => (
                <div>
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
