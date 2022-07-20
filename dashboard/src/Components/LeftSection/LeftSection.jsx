import React from 'react'
import LeftHead from './LeftHead/LeftHead'
import LeftMenu from './LeftMenu/LeftMenu'
import TrainerCard from './TrainerCard/TrainerCard'


const LeftSection = () => {
  return (
    <aside className="Aside-Section">
        <LeftHead/>
        <LeftMenu/>
        <TrainerCard/>
    </aside>
  )
}

export default LeftSection