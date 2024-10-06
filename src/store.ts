import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency } from "./types"
import { getCryptos } from "./services/CryptoService"

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[],
    fetchCryptos: () => Promise<void>

}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({

    cryptoCurrencies: [],

    fetchCryptos: async () => {
        //console.log("fetching cryptos")
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
})))