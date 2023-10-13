import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'

export const DogListContainer = () => {
  const urlBreeds = 'https://dog.ceo/api/breeds/list/all' // 犬の種類を取得
  const [breeds, setBreeds] = useState([]) // 犬の種類
  const [selectedBreed, setSelectedBreed] = useState('') // 選択中の種類
  const [dogs, setDogs] = useState([])
  useEffect(() => {
    // ロード時に実行
    fetchDataBreeds()
  }, [])

  // 種類を取得して更新
  const fetchDataBreeds = async () => {
    await fetch(urlBreeds)
      .then(res => res.json())
      .then(
        result => {
          const arr = []
          Object.keys(result.message).forEach(key => {
            arr.push(key)
          })
          setBreeds(arr)
        },
        error => {
          console.error(error)
        },
      )
  }
  // Selectが変更されたら実行
  const handleChange = value => {
    setSelectedBreed(value)
  }

  const handleClick = async () => {
    const url =
      'https://dog.ceo/api/breed/' + selectedBreed + '/images/random/12'
    await fetch(url)
      .then(res => res.json())
      .then(
        result => {
          setDogs(result.message)
        },
        error => {
          console.error(error)
        },
      )
  }

  return (
    <>
      <BreedsSelect
        selectChange={value => handleChange(value)}
        breeds={breeds}
      />
      <button onClick={handleClick}>表示</button>
      <div className="images">
        {dogs.map((dog, index) => {
          return <DogImage imageUrl={dog} key={index} />
        })}
      </div>
    </>
  )
}

export default DogListContainer
