export default function AlertCounter(props) {
    return(
        <div className="AlertCounter--container">


        <div className="AlertCounter--tickerContainer">

            <div className="AlertCounter--tickerContainer--bubble">
                <p classname="AlertCounter--tickerContainer--bubble--ticker">{props.ticker}</p>
                <div classname="AlertCounter--tickerContainer--bubble--counter"> {props.myCount}</div>
            </div>
        </div>
        </div>
    )
}