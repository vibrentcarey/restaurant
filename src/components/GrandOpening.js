import React, { useEffect, useState } from 'react';

const GrandOpening = () => {
  const [count, setCount] = useState(59)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count = count - 1)
    }, 1000)

    return (() => {
      clearInterval(interval)
    })
  }, [count])

  return (
    <div className='flex flex-col items-center'>
      <div className='prose'>
        <h2>Grand Opening Sale Ends In</h2>
        <div className='flex flex-col items-center'>

          <span class="font-mono text-3xl countdown">
            <span className='text-primary' style={{ '--value': 0 }}></span>h

            <span className='text-primary' style={{ '--value': 0 }}></span>m

            <span className='text-primary' style={{ '--value': count > 0 || '00' }}></span>s

          </span>
          </div>
        </div>
      </div>
      );
};

      export default GrandOpening;