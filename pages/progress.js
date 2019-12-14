import React from 'react'
import { Progress } from 'semantic-ui-react'

const Rate = (props) => <div className='ui-progress'><Progress style={{width:'326px', margin:'35px auto 47px'}} size='tiny' color= 'orange' percent={props.percent} /></div>

export default Rate;