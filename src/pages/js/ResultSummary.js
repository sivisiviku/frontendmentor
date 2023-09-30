import '../css/result_summary.css'
import reactionIcon from '../../assets/result_summary/images/icon-reaction.svg'
import memoryIcon from '../../assets/result_summary/images/icon-memory.svg'
import verbalIcon from '../../assets/result_summary/images/icon-verbal.svg'
import visualIcon from '../../assets/result_summary/images/icon-visual.svg'

function ResultSummary() {
    return <div className="container">
        <div className='content'>
            <div className='result'>
                <h3>Your Result</h3>
                <div className='score'>
                    <h1>76</h1>
                    <p>of 100</p>
                </div>
                <div className='score-description'>
                    <h2>Great</h2>
                    <p>You scored higher than 65% of the people who have taken these tests.</p>
                </div>
            </div>
            <div className='summary'>
                <div className='summary-title-wrapper'>
                    <h3>Summary</h3>
                </div>
                <div className='summary-detail-wrapper'>
                    <div className='reaction'>
                        <div className='summary-detail-tittle'>
                            <img src={reactionIcon} />
                            <p>Reaction</p>
                        </div>
                        <p><span className='actual-score'>80</span><span className='max-score'> / 100</span></p>
                    </div>
                    <div className='memory'>
                        <div className='summary-detail-tittle'>
                            <img src={memoryIcon} />
                            <p>Memory</p>
                        </div>
                        <p><span className='actual-score'>92</span><span className='max-score'> / 100</span></p>
                    </div>
                    <div className='verbal'>
                        <div className='summary-detail-tittle'>
                            <img src={verbalIcon} />
                            <p>Verbal</p>
                        </div>
                        <p><span className='actual-score'>61</span><span className='max-score'> / 100</span></p>
                    </div>
                    <div className='visual'>
                        <div className='summary-detail-tittle'>
                            <img src={visualIcon} />
                            <p>Visual</p>
                        </div>
                        <p><span className='actual-score'>72</span><span className='max-score'> / 100</span></p>
                    </div>
                </div>
                <div className='button-wrapper'>
                    <button className='button'>Continue</button>
                </div>
            </div>
        </div>
    </div>
}

export default ResultSummary