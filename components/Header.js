import React from "react"
import Image from "next/image"
import logo from "../assets/logo.png"
import { BiTargetLock } from "react-icons/bi"
import { BsSun } from "react-icons/bs"
import axios from "axios"

const styles = {
    header: `bg-black w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    headerText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerActions: ` flex items-center justify-end space-x-4`,
    headerSwitchContainer: `text-white font-bold text-[#c8cacd] bg-[#475569] rounded-full p-2`,
    headerLogin: `text-black font-bold text-[#c8cacd] bg-gradient-to-r from-[#59f9b7] to-[#66feea] rounded-full px-3 py-1`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <Image src={logo} height={40} width={40} />
            </div>
            <div className={styles.searchBar}>
                <div className={styles.searchIcon}>
                    <BiTargetLock />
                </div>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search for anything"
                />
            </div>

            <div className={styles.headerItems}>
                <div className={styles.headerItem}>Drops</div>
                <div className={styles.headerItem}>Marketplace</div>
                <div className={styles.headerItem}>Creat</div>
            </div>
            <div className={styles.headerActions}>
                <button className={styles.headerSwitchContainer}>
                    <BsSun />
                </button>
                <button className={styles.headerLogin}>GET IN</button>
            </div>
            <div></div>
        </div>
    )
}
