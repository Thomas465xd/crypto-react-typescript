import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2 className="price">Price:</h2>
                    <div className="result">
                        <div className="">
                            <p>The Price is: <span>{result.PRICE}</span></p>
                            <p>Higher Today: <span>{result.HIGHDAY}</span></p>
                            <p>Lower Today: <span>{result.LOWDAY}</span></p>
                            <p>24 Hours Variation: <span>{result.CHANGE24HOUR}</span></p>
                            <p>24 Hours Change: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Hour Change: <span>{result.CHANGEPCTHOUR}</span></p>
                        </div>
                        <img 
                            src={`https://www.cryptocompare.com/${result.IMAGEURL}`} 
                            alt="" 
                        />
                    </div>
                </>
            )}
        </div>
    )
}
