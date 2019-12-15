import React from 'react'
import { Progress } from 'semantic-ui-react'

const Rate = (props) => <div className='ui-progress'><Progress style={props.barStyle} size='tiny' color= 'orange' percent={props.percent} /></div>

export default Rate;