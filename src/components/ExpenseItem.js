import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
const month = props.date.toLocaleString('en-US', { month:'long' });
const day = props.date.toLocaleString('en-US', { day:'2-digit' });
const year = props.date.getFullYear(); //beware of functions name.

    return (
        <div>
            <ExpenseDate date = {props.date} />
            <div>
                <p>{props.title}</p> 
                <p> </p>
                <p>{props.amount}</p>
            </div>
        </div>
    );
}
export default ExpenseItem;