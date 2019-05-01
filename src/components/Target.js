import React from 'react'
import {Image} from 'semantic-ui-react'
import {isEmpty} from 'lodash'

const Target = props => {
  return (
    <div
      className="container"
      id="target"
      onDragOver={e => {e.preventDefault(); e.stopPropagation()}}
      onDrop={e => {e.preventDefault(); props.handleDropOfItemOnTarget()}}
    >
      {
        isEmpty(props.droppedItem)
        ?
        null
        :
        <Image
          src={props.droppedItem.image}
          style={{height: "140px", width: "140px"}}
        />
      }
    </div>
  )
}

export default Target
