import React, { useState, useEffect } from 'react';

const InitializationText = () => {
  return (
    <div>
      <h2 className="title">Rating Stars with ReactJS</h2>
      <p className="title-sub">By Oles Odynets</p>
      <p className="title-hidden">A simple rating widget using ReactJS and FontAwesome icons.</p>
      <div className="hr"></div>
    </div>
  );
};

const StarChooser = ({ stars, onSubmit }) => {
  const getActiveStar = value => {
    return stars >= value ? " active" : "";
  };

  const setStar = value => {
    onSubmit(value);
  };

  return (
    <div>
      <div id="starfield">
        {[1, 2, 3, 4, 5].map(value => (
          <div
            key={value}
            className={`star${getActiveStar(value)}`}
            onClick={() => setStar(value)}
          >
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

const Commender = ({ rate }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const messages = {
      1: "Oh. Sorry you had a bad experience :(",
      2: "We will try to improve.",
      3: "Appreciate it!",
      4: "Thank you! :0",
      5: "You're Awesome! :)"
    };
    setMessage(messages[rate]);
  }, [rate]);

  if (rate !== 0 && message.length) {
    return (
      <div id="commender">
        <p className="commender_tit">
          You rated this {`${rate} ${(rate > 1) ? "stars" : "star"}`}
        </p>
        <p className="commender_tit">{message}</p>
      </div>
    );
  } else {
    return null;
  }
};

const Rating = () => {
  const [choosedStars, setChoosedStars] = useState(0);

  const setStar = value => {
    setChoosedStars(value);
  };

  return (
    <div>
      <InitializationText />
      <StarChooser stars={choosedStars} onSubmit={setStar} />
      <Commender rate={choosedStars} />
    </div>
  );
};

export default Rating;
