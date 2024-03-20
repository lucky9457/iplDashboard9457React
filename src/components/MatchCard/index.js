// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchData} = props
  const {
    umpires,
    result,
    manOftheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = recentMatchData
  console.log(recentMatchData)
  const matchstatusClass = matchStatus === 'Won' ? 'statuswon' : 'statusLoss'
  return (
    <li className="recent-match-card">
      <img
        className="imgTeamlogo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="CompetingteamHead">{competingTeam}</p>
      <p className="resultPara">{result}</p>
      <p className={`${matchstatusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
