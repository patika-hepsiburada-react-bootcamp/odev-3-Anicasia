import { usePoll } from "../context/PollContext";
import './styles.css'

function Options({ item }) {
    const { setSelectedOption } = usePoll();

    const handleChange = ({ target }) => setSelectedOption(target.value);

    return (
    <div className="OptionCard" >
        <input
        type="radio"
        value={item.id}
        name="option"
        onChange={handleChange}
        />
        <span>{item.name}</span>
    </div>

    );
}

export default Options;
