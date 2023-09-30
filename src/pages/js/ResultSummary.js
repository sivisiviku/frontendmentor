import '../css/result_summary.css'

function ResultSummary() {
    return <div className="container">
        <div className='content'>
            <div className='result'>
                <h3>Your Result</h3>
                <div className='score'>
                    <h1>76</h1>
                    <p>of 100</p>
                </div>
                <h2>Great</h2>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className='summary'>
                <h3>Summary</h3>
                <div className='reaction'>
                    <p>Reaction</p>
                    <p>80/100</p>
                </div>
                <div className='memory'>
                    <p>Reaction</p>
                    <p>92/100</p>
                </div>
                <div className='verbal'>
                    <p>Reaction</p>
                    <p>61/100</p>
                </div>
                <div className='visual'>
                    <p>Reaction</p>
                    <p>72/100</p>
                </div>
                <div className='button-wrapper'>
                    <button className='button'>Continue</button>
                </div>
            </div>
        </div>
    </div>
}

export default ResultSummary