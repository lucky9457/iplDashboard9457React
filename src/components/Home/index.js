// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isfetched: false, teamData: []}

  componentDidMount() {
    this.getapiData()
  }

  getapiData = async () => {
    const responseData = await fetch('https://apis.ccbp.in/ipl')
    const responseJson = await responseData.json()
    console.log(responseJson)
    const teams = responseJson.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({
      teamData: teams,
      isfetched: true,
    })
  }

  render() {
    const {teamData, isfetched} = this.state

    return (
      <div className="main">
        <div className="ipl-head-cont">
          <img
            className="image-ipl"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="iplheading">IPL Dashboard</h1>
        </div>
        <ul className="cardsCont">
          {isfetched ? (
            teamData.map(each => <TeamCard key={each.id} item={each} />)
          ) : (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default Home
