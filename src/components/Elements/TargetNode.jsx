import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useDispatch } from 'react-redux';
import { setDragType } from '../../store/slices/nodeSlice';

const TargetNode = () => {

  const dispatch = useDispatch()

  const myStyle = {
    'width': '100%',
    'height': '100%',
    'color': '#3baa7c',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'backgroundColor': 'transparent'
  }
  const onDragStart = (e) => {
    console.log(e.target);
    dispatch(setDragType({
      type:'target'
    }))
  }
  return (
    <div id='endnode' style={myStyle} draggable onDragStart={onDragStart}>
      <AdjustIcon />
    </div>
  )
}

export default TargetNode
