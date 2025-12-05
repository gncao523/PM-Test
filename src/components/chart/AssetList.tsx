import React from 'react'
import btcIcon from '../../assets/images/btc.png'
import ethIcon from '../../assets/images/eth.png'

interface Asset {
    symbol: string
    name: string
    price: string
    change: string
    isBitcoin: boolean
}

interface AssetListProps {
    assets: Asset[]
    selectedIndex: number
    onSelect: (index: number) => void
}

const AssetList: React.FC<AssetListProps> = ({ assets, selectedIndex, onSelect }) => {
    return (
        <div className="lg:col-span-3 space-y-3 mt-8">
            {assets.map((asset, index) => (
                <div
                    key={index}
                    onClick={() => onSelect(index)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-colors ${
                        selectedIndex === index
                            ? 'bg-[#ED1D25] border-[#ED1D25]'
                            : 'bg-white border-gray-300 hover:border-[#ED1D25]'
                    }`}
                >
                    <div className="flex items-center gap-3">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <img
                                src={asset.isBitcoin ? btcIcon : ethIcon}
                                alt={asset.name}
                                className="w-10 h-10 object-contain"
                            />
                        </div>

                        {/* Symbol and Name - Middle */}
                        <div className="flex-1 min-w-0">
                            <div
                                className={`font-['Gilroy'] font-bold text-base ${
                                    selectedIndex === index ? 'text-white' : 'text-black'
                                }`}
                            >
                                {asset.symbol}
                            </div>
                            <div
                                className={`text-sm font-['RobotoRegular'] ${
                                    selectedIndex === index ? 'text-white' : 'text-gray-500'
                                }`}
                            >
                                {asset.name}
                            </div>
                        </div>

                        {/* Price and Change - Right */}
                        <div className="flex items-center justify-center gap-x-1 tracking-widest">
                            <div
                                className={`font-['Gilroy'] font-bold text-base mb-1 ${
                                    selectedIndex === index ? 'text-white' : 'text-black'
                                }`}
                            >
                                ₽ {asset.price}
                            </div>
                            <div
                                className={`text-base font-['RobotoRegular'] font-bold ${
                                    selectedIndex === index ? 'text-white' : 'text-green-600'
                                }`}
                            >
                                {asset.change}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AssetList

