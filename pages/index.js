import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import Apelist from "../components/Apelist"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Home() {
    const [apeListData, setApeListData] = useState([])

    useEffect(() => {
        const getMyNfts = async () => {
            const openseaData = await axios.get(
                "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xf888D486EB686ECcb44ff354D8B2cB5388bcf25C&order_direction=desc&offset=0&limit=20&include_orders=false"
            )
            console.log(openseaData.data.assets)
            setApeListData(openseaData.data.assets)
        }
        return getMyNfts
    }, [])

    return (
        <div>
            <Header />
            <Apelist apeListData={apeListData} />
        </div>
    )
}
