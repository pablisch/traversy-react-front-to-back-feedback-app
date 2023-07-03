import { useState } from "react"

const RatingSelect = () => {
  const [selected, setSelected] = useState(10)

  const handleChange = () => {
    
  }

  return (
    <div>
      <ul>
        <li>
          <input type="radio" id="num1" name='rating' value='1' onChange={handleChange} checked={selected === 1} />
        </li>
        <li>
          <input type="radio" id="num2" name='rating' value='2' onChange={handleChange} checked={selected === 2} />
        </li>
        <li>
          <input type="radio" id="num3" name='rating' value='3' onChange={handleChange} checked={selected === 3} />
        </li>
        <li>
          <input type="radio" id="num4" name='rating' value='4' onChange={handleChange} checked={selected === 4} />
        </li>
        <li>
          <input type="radio" id="num5" name='rating' value='5' onChange={handleChange} checked={selected === 5} />
        </li>
        <li>
          <input type="radio" id="num6" name='rating' value='6' onChange={handleChange} checked={selected === 6} />
        </li>
        <li>
          <input type="radio" id="num7" name='rating' value='7' onChange={handleChange} checked={selected === 7} />
        </li>
        <li>
          <input type="radio" id="num8" name='rating' value='8' onChange={handleChange} checked={selected === 8} />
        </li>
        <li>
          <input type="radio" id="num9" name='rating' value='9' onChange={handleChange} checked={selected === 9} />
        </li>
        <li>
          <input type="radio" id="num10" name='rating' value='10' onChange={handleChange} checked={selected === 10} />
        </li>
      </ul>
    </div>
  )
}
export default RatingSelect