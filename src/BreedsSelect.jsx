export const BreedsSelect = props => {
  return (
    <select name="" id="" onChange={e => props.selectChange(e.target.value)}>
      {props.breeds.map((breed, index) => {
        return (
          <option value={breed} key={index}>
            {breed}
          </option>
        )
      })}
    </select>
  )
}

export default BreedsSelect
