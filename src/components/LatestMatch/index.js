// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestmatches} = props
  return (
    <div className="latestmatchCont">
      <div className="logoAndLocCont">
        <div>
          <p className="competiveTeamHead">{latestmatches.competingTeam}</p>
          <p className="competiveTeamHead">{latestmatches.date}</p>
          <p className="venue">{latestmatches.venue}</p>
          <p className="result">{latestmatches.result}</p>
        </div>
        <div>
          <img
            className="competiveTeamLogo"
            src={latestmatches.competingTeamLogo}
            alt={`latest match ${latestmatches.competingTeam}`}
          />
        </div>
      </div>

      <div className="inningsCont">
        <p className="head">First Innings</p>
        <p className="desc">{latestmatches.firstInnings}</p>
        <p className="head">Second Innings</p>
        <p className="desc">{latestmatches.secondInnings}</p>
        <p className="head">Man of the Match</p>
        <p className="desc">{latestmatches.manOftheMatch}</p>
        <p className="head">Umpires</p>
        <p className="desc">{latestmatches.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
