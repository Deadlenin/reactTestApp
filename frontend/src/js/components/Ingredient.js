const Ingredient = ({ amount, measurement, name }) =>
    <li>
        <span>Amount {amount}</span>
        <span>Measurement {measurement}</span>
        <span>Name {name}</span>
    </li>;

export default Ingredient