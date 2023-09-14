import React, { useState } from 'react'

function test() {
    const [state, setstate] = useState([
        {
            name: 'test1',
            age: 20
        }, {
            name: 'test2',
            age: 21
        },
        {
            name: 'test3',
            age: 20
        }, {
            name: 'test4',
            age: 21
        },
        {
            name: 'test5',
            age: 20
        }, {
            name: 'test6',
            age: 21
        }
    ])

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    const handleOnMouseMove = (e) => {
        const { currentTarget } = e;
        
        const { offsetLeft, offsetTop } = currentTarget;
        
        const x = e.clientX - offsetLeft;
        const y = e.clientY - offsetTop;
        
        setPosition({
          x: x,
          y: y
        });
      };
      
      

    console.log(position)


  return (
    <div className='flex flex-wrap justify-center items-center max-w-[916px] w-full gap-[8px] relative' >
        
        {
            state.map((item, index) => {
                return (
                    <>  
                        <div on key={index} onMouseMove={handleOnMouseMove} className={`bg-gray-400 h-[260px] w-[300px] rounderd-[10px] cursor-pointer relative border-2`} > 
                            <p>{item.name}</p>
                        </div>
                    </>
                )
            })
        }

    </div>
  )
}

export default test