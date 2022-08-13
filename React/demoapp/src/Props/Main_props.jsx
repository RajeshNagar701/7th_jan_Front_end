import React from 'react'
import Props_comp from './Props_comp'

function Main_props() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
             <Props_comp img="https://via.placeholder.com/600/92c952" title="TV" subtitle="42 sAMSUNG lcd" desc=" 42 sAMSUNG lcd 42 sAMSUNG lcd "/>
             <Props_comp img="https://via.placeholder.com/600/771796" title="Mobile" subtitle="Mobile sAMSUNG Mobile" desc=" Mobile sAMSUNG Mobile 42 sAMSUNG lcd "/>
             <Props_comp img="https://via.placeholder.com/600/24f355" title="Ac" subtitle="Ac sAMSUNG Ac" desc=" Ac sAMSUNG Ac Ac sAMSUNG lcd "/>
            </div>
        </div>
    </div>
  )
}

export default Main_props