import { useState } from "react"
import { genRandTicket } from "./helper"
import Ticket from "./Ticket"

export default function Lottery({ n, winCondition }) {
    let [ticket, setTicket] = useState(genRandTicket(n))
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genRandTicket(n))
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations You Won!"}</h3>
        </div>
    )
}