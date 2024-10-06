import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { ChangeEvent, FormEvent, useState } from "react"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CryptoSearchForm() {

    const cryptocurrencies = useCryptoStore((state) => state.cryptoCurrencies) 
    const fetchData = useCryptoStore((state) => state.fetchData) 
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    })

    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(pair).includes('')) {
            setError('All fields are required')
            return
        }

        setError('')
        fetchData(pair)
    }

    return (
        <form 
            action="" 
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Coin:</label>
                <select 
                    name="currency" 
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >
                    <option value="">-- Select --</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptocurrency">Cryptocurrency:</label>
                <select 
                    name="cryptocurrency" 
                    id="cryptocurrency"
                    onChange={handleChange}
                    value={pair.cryptocurrency}
                >
                    <option value="">-- Select --</option>
                    {cryptocurrencies.map(crypto => (
                        <option value={crypto.CoinInfo.Name} key={crypto.CoinInfo.FullName}>
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Quote"/>
        </form>
    )
}
