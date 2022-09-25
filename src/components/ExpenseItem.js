function ExpenseItem(props) {
const month = props.date.toLocaleString('en-US', { month:'long' });
const day = props.date.toLocaleString('en-US', { day:'2-digit' });
const year = props.date.getFullYear(); //beware of functions name.

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
            <div>
                <p>{props.title}</p>
                <p>{props.amount}</p>
            </div>
        </div>
    );
}
export default ExpenseItem;