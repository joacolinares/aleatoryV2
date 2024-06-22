import Image from "next/image";
import aleaCoin from "@/public/aleatory.png";

const UserTransactions = () => {
  //Deberia haber una variable que se llame compro para saber si compro alguna vez ALEA para mostrar las ultimas transacciones o no
  let compro = true;

  return (
    <div className="w-full bg-[#262626] max-w-[1000px] p-2 sm:p-4 border border-accentLight">
      <p>Your Last Transactions:</p>
      {compro ? (
        <div className="flex flex-col gap-[10px]">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white text-black px-2 py-2 flex flex-col sm:flex-row items-center justify-between"
            >
              <div className=" flex flex-col sm:flex-row gap-[10px] items-center p-1 text-center sm:text-start w-full">
                <Image
                  src={aleaCoin}
                  alt="Aleatory Coin Logo"
                  className="w-[30px] h-[36.4px] object-cover"
                />
                <div className="overflow-hidden w-full">
                  <p className="break-words text-xs sm:text-base">
                    Wallet address: 0x1234567890abcdef
                  </p>
                  <p>{transaction.date}</p>
                  <p>{transaction.time}</p>
                </div>
              </div>
              <div>
                <p>Amount: ${transaction.amount}</p>
                <p>Fee: ${transaction.fee}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-base underline mt-[20px]">
          You haven&apos;t bought any Aleatory yet!
        </p>
      )}
    </div>
  );
};

export default UserTransactions;

const transactions = [
  {
    id: 1,
    amount: 0.0001,
    fee: 0.0000001,
    currency: "Aleatory",
    price: 1000,
    date: "2022-01-01",
    time: "13:00:23",
  },
  {
    id: 2,
    amount: 0.0001,
    fee: 0.0000001,
    currency: "Aleatory",
    price: 1000,
    date: "2022-01-01",
    time: "13:00:23",
  },
];
