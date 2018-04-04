import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './BatchDetails.css'

class BatchDetails extends PureComponent {

  // handleClick = () => {
  //   const {game,history,players} = this.props
  //   switch(this.buttonText(players)) {
  //     case "join":
  //       this.props.joinGame(game.id)
  //       history.push(`/games/${game.id}`)
  //       break
  //     case "enter":
  //     case "watch":
  //       history.push(`/games/${game.id}`)
  //       break
  //     default:
  //       return null
  //   }
  // }
  // buttonText = (players) => {
  //   const id = this.props.userId
  //   const game = this.props.game
  //   if (players.includes(id)) {
  //     if (game.status === "started") return "enter"
  //     return "..."
  //   } else {
  //     if (game.status === 'started') return "watch"
  //     return "join"
  //   }
  // }
  render() {
    const {batch} = this.props
    console.log(this.props.match);

    return (
      <Card className="batch-card">
        <CardContent>
          <Typography variant="headline" component="h2">
            Batch #{batch.id}
          </Typography>
          <Typography color="textSecondary">
            Students: {batch.students.length}
          </Typography>
        </CardContent>

        <CardActions>
        {
          <Button
            size="small"
          >
              view
          </Button>
        }
        </CardActions>
      </Card>
    )
  }
}

export default connect(null)(BatchDetails)
