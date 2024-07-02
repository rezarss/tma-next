import React, { useState, useEffect } from "react";
import { Coin } from "lucide-react";

const CoinClickerGame = () => {
  const [coins, setCoins] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(10);

  const handleCoinClick = () => {
    setCoins((prevCoins) => prevCoins + clickPower);
  };

  const handleUpgrade = () => {
    if (coins >= upgradeCost) {
      setCoins((prevCoins) => prevCoins - upgradeCost);
      setClickPower((prevPower) => prevPower + 1);
      setUpgradeCost((prevCost) => Math.floor(prevCost * 1.5));
    }
  };

  useEffect(() => {
    const savedCoins = localStorage.getItem("coins");
    const savedClickPower = localStorage.getItem("clickPower");
    const savedUpgradeCost = localStorage.getItem("upgradeCost");

    if (savedCoins) setCoins(parseInt(savedCoins));
    if (savedClickPower) setClickPower(parseInt(savedClickPower));
    if (savedUpgradeCost) setUpgradeCost(parseInt(savedUpgradeCost));
  }, []);

  useEffect(() => {
    localStorage.setItem("coins", coins.toString());
    localStorage.setItem("clickPower", clickPower.toString());
    localStorage.setItem("upgradeCost", upgradeCost.toString());
  }, [coins, clickPower, upgradeCost]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">بازی کلیکر سکه</h1>
      <div className="text-2xl mb-4">سکه‌ها: {coins}</div>
      <button
        onClick={handleCoinClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mb-4 transition duration-300 ease-in-out transform hover:scale-110"
      >
        <div className="h-8 w-8 bg-red-500">Coin</div>
      </button>
      <div className="text-xl mb-2">قدرت کلیک: {clickPower}</div>
      <button
        onClick={handleUpgrade}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={coins < upgradeCost}
      >
        ارتقا ({upgradeCost} سکه)
      </button>
    </div>
  );
};

export default CoinClickerGame;
