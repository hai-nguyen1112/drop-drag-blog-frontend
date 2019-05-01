import React from 'react'
import {Image} from 'semantic-ui-react'
import {isEmpty} from 'lodash'

const Item = props => {
  return (
    <div id="item-holder">
      {
        isEmpty(props.item)
        ?
        null
        :
        <Image
          src={props.item.image}
          style={{height: "140px", width: "140px"}}
          draggable={true}
          onDragStart={() => props.handleUpdateDraggedItemState(props.item)}
        />
      }
    </div>
  )
}

export default Item
