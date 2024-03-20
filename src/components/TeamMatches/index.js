// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

const colorBac = {}

class TeamMatches extends Component {
  state = {isloading: true, imageurl: '', latestmatch: {}, recentmatches: []}

  componentDidMount() {
    this.getapi()
  }

  getapi = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responsedata = await response.json()
    console.log(responsedata)
    const data = {
      teamBannerUrl: responsedata.team_banner_url,
      latestMatchDetails: responsedata.latest_match_details,
      recentMatches: responsedata.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = data

    console.log(latestMatchDetails)
    const CapitalizedlatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOftheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const capitalizedrecentMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOftheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      recentmatches: capitalizedrecentMatches,
      latestmatch: CapitalizedlatestMatchDetails,
      imageurl: teamBannerUrl,
      isloading: false,
    })
  }

  pagereturn = () => {
    const {recentmatches, latestmatch, imageurl, isloading} = this.state
    console.log(recentmatches)
    return (
      <div className="detailedSectionMain">
        <img className="imageurlBanner" src={imageurl} alt="team banner" />
        <h1 className="latest-match">Latest Matches</h1>
        <div>
          <LatestMatch latestmatches={latestmatch} />
        </div>
        <h1 className="latest-match">Recent Matches</h1>
        <ul className="recentmatchCont">
          {recentmatches.map(each => (
            <MatchCard recentMatchData={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isloading} = this.state

    return <div>{isloading ? this.renderLoader() : this.pagereturn()}</div>
  }
}
export default TeamMatches
