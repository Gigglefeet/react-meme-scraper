import axios from 'axios';
export default function Button(props) {
  const download = () => {
    axios({
      url: props.memeImg,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'your_meme.jpg');
      document.body.appendChild(link);
      link.click();
    });
  };
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          download();
        }}
      >
        Download Image
      </button>
    </div>
  );
}
