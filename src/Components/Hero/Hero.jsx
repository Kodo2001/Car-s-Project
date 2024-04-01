import './Hero.css'
import arrowBtn from '../../Assets/arrowBtn.png'
import playIcon from '../../Assets/playIcon.png'
import pauseIcon from '../../Assets/pauseIcon.png'

function Hero({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) {
  return (
    <div className='hero'>

      <dev className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </dev>

      <div className="hero-explore">
        <p>explore the features</p>
        <img src={arrowBtn} alt="" />
      </div>

      <div className="hero-dot-play">
        
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange" :"hero-dot"} ></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange" :"hero-dot"} ></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange" :"hero-dot"} ></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pauseIcon:playIcon} alt="" /> 
          <p>Watch the video</p>
        </div>

      </div>


    </div>
  )
}

export default Hero

