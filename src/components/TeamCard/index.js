// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props
  const {id, teamImageUrl, name} = item
  return (
    <Link className="linkcn" to={`team-matches/${id}`}>
      <li className="teamcardCont">
        <img className="teamcardimag" src={teamImageUrl} alt={name} />
        <p className="teamcardname">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
