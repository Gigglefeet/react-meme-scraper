import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';

export default function MemeGen() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memes, setMemes] = useState([]);
  const [img, setImg] = useState('apcr');

  // enter text for the top and bottom of the meme

  const onChangeTopText = (e) => {
    setTopText(e.target.value);
  };
  const onChangeBottomText = (e) => {
    setBottomText(e.target.value);
  };
  const memeImg = `https://api.memegen.link/images/${img}/${topText}/${bottomText}`;

  useEffect(() => {
    axios
      .get('https://api.memegen.link/templates/')
      .then((res) => {
        console.log(res);
        setMemes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <img className="MemeImage" src={memeImg} alt={memeImg.name} />
      <select
        id="selectImg"
        onChange={() => {
          const imgSelect = document.getElementById('selectImg');
          const selectedValue = imgSelect.value;
          setImg(selectedValue);
        }}
      >
        {memes.map((meme) => (
          <option key={meme.id} value={meme.id}>
            {meme.name}
          </option>
        ))}
      </select>

      <div className="MemeText">
        <label htmlFor="top">TopText</label>
        <input type="text" value={topText} onChange={onChangeTopText} />
        <br />
        <label htmlFor="bottom">BottomText</label>
        <input type="text" value={bottomText} onChange={onChangeBottomText} />
        <br />
      </div>
      <div>
        <Button memeImg={memeImg} />
      </div>
    </div>
  );
}

// handling the onChange Event.

// const [bottomText, setBottomText] = useState('');

// function handleChange(e) {
// console.log(e.target.value);
