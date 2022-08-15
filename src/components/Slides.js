import React from 'react';

function Slides({slides}) {
  const [slideState, changeSlide]=useState(0);

  useEffect(()=> {
    if(slideState==0){
      document.getElementById('previous').disabled=true;
      document.getElementById('restart').disabled=true;
    }
  });
  
  const restart =()=> {
    if(slideState !==0){
      document.getElementById('restart').disabled=true;
    }
  };
  
  const previous =()=> {
    if(slideState !==0){
      changeSlide(slideState - 1);
      document.getElementById('next').disabled=false;
    }
    else{
      document.getElementById('previous').disabled=true;
      document.getElementById('next').disabled=false;
    }
  };
  const next=()=> {
    if(slideState !=slides.length -1) {
      changeSlide(slideState + 1);
      document.getElementById('previous').disabled=false;
      document.getElementById('restart').disabled=false;
    }
    else{
      document.getElementById('next').disabled=true;
    }
  };
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined">Restart</button>
                <button data-testid="button-prev" className="small">Prev</button>
                <button data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slideState].descp}</h1>
                <p data-testid="text">{slides[slideState].descp}</p>
            </div>
        </div>
    );

}

export default Slides;
