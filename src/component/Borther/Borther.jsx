import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Borther = () => {
    // const [money] = useContext(MoneyContext);
    const [money,setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Borther</h2>
            <p> Granepa:{money}</p>
            <button onClick={() => setMoney(money+1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Borther;