import aleaCoin from "@/public/aleatory.png";
import Image from "next/image";

const LastTransactions = () => {
  return (
    <div className="w-full bg-[#262626] max-w-[1000px] p-4">
      <p>Last Transactions:</p>
      <div className="flex flex-col gap-[10px]">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white text-black px-2 py-2 flex items-center justify-between"
          >
            <div className=" flex gap-[20px] items-center p-1">
              <Image
                src={aleaCoin}
                alt="Aleatory Coin Logo"
                className="w-[35px] h-[41.4px] object-cover"
              />
              <div>
                <p>Anne</p>
                <p>{transaction.date}</p>
              </div>
            </div>
            <p>${transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastTransactions;

const transactions = [
  {
    id: 1,
    amount: 0.0001,
    currency: "Aleatory",
    price: 1000,
    date: "2022-01-01",
  },
  {
    id: 2,
    amount: 0.0001,
    currency: "Aleatory",
    price: 1000,
    date: "2022-01-01",
  },
  {
    id: 3,
    amount: 0.0001,
    currency: "Aleatory",
    price: 1000,
    date: "2022-01-01",
  },
  {
    id: 4,
    amount: 0.0001,
    currency: "Aleatory",
    price: 1000,
    date: "2022-01-01",
  },
];
