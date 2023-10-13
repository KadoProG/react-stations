import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const fetchData = async () => {
    await fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        result => {
          // console.log(result)
          setDogUrl(result.message)
        },
        error => {
          console.error(error)
        },
      )
  }

  const handleClick = () => {
    fetchData()
  }
  return (
    <div className="container">
      <div>
        <p>これがいぬああああああああああああああ</p>
      </div>
      <div>
        <DogImage imageUrl={dogUrl} />
        <button onClick={() => handleClick()}>更新</button>
      </div>
    </div>
  )
}

export default Description
