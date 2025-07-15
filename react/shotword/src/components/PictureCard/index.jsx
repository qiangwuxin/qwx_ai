import './style.css';
import{
  useState
}from 'react'
const PictureCard = (props) => {
  const {
    word,
    audio,
    uploadImg
  } = props
  const [imgPreview,setImgPreview]=useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');
  const uploadImgDate=(e)=>{
   //  html5的文件上传功能
  //可选链操作符？.
  const file=e.target.files?.[0];
  if(!file){
    return;
  }
  console.log(file);
  //图片预览  I/O操作 异步 
  return new Promise((resolve,reject)=>{
    //html5
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=(e)=>{
      // console.log(reader.result);
      //响应式业务
      setImgPreview(reader.result);
      //如何将图片数据交给父组件
      uploadImg(reader.result);
      resolve(reader.result);
    }
    reader.onerror=(error)=>{reject(error);};
  })
  }
  const playAudio=()=>{
    const audioEle=new Audio(audio);
    audioEle.play();
  }
  return (
    <div className="card">
     <input 
     type="file" 
     accept=".jpg,.jpeg,.png,.gif" 
     id="selectImage" 
     onChange={uploadImgDate}
     />
     <label htmlFor="selectImage"  className="upload">
      <img src={imgPreview} alt="preview" />
      </label>
      <div className="word">{word}</div>
      {audio && (
        <div className="playAudio" onClick={playAudio}>
            <img width="20px" src="https://res.bearbobo.com/resource/upload/Omq2HFs8/playA-3iob5qyckpa.png" alt="logo" />
        </div>
      )}
      </div>
  )
}

export default PictureCard;