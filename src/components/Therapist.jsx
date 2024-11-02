import React from 'react'
import './Therapist.css'
import { useState } from 'react'
import { color } from 'framer-motion';

const Therapist = () => {   
  const [activeBlock, setActiveBlock] = useState('Block1');  
   
  const data = [
    {id:'Block1', name:'The-Rapist', content:'Block1', color:'lightyellow', image:'/t1.jpeg'},
    {id:'Block2', name:'The-Rapist', content:'Block2', color:'lightgreen', image:'/t1.jpeg'},
    {id:'Block3', name:'The-Rapist', content:'Block3', color:'lightblue', image:'/t1.jpeg'},
    {id:'Block4', name:'The-Rapist', content:'Block4', color:'#dacfff', image:'/t1.jpeg'}
  ]  

  const activeColor = data.find(block => block.id === activeBlock)?.color || 'white';

  return (
    <div 
      id='therapist'
      className='therapist'
      style={{
        backgroundColor: activeColor
      }}
    > 
      <div className='therapistinner'>
          {data.map(block => (
          <div key={block.id} 
              onMouseEnter={() => setActiveBlock(block.id)} 
          > 
            <div
              style={{backgroundColor: block.color}} 
            >
              <h3>{block.name}</h3>
              <img src={block.image} alt="not found" />                  
            </div>
          </div>
          ))}
      </div> 
      <div className='therapistinner2'>
          {data.map(block => (
              <div
                  key={block.id}
                  style={{
                  zIndex: activeBlock === block.id ? 4 : 1,
                  display: activeBlock === block.id ? 'flex' : 'none',
                  backgroundColor: activeBlock === block.id ? block.color : 'white',
                  }}
              >
                <h3>{block.name}:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati autem voluptas sit, sed natus earum maiores cumque atque veniam nesciunt eius nisi, numquam, nihil reprehenderit debitis. Dolor, architecto perspiciatis!</p>
              </div>
          ))}
      </div> 
    </div>
  )
}

export default Therapist