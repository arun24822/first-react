import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {

    return(
        <div className='expenses'>
            <h1>Hi There</h1>
            <p>
                This is Arun Kumar Chauhan
            </p>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem 
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></ExpenseItem>
            </div>
    );
}

export default Expenses;