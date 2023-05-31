const Notification = (props) => {
  const { cardNo,textContent, logo, className } = props
 return <div className = {cardNo}>
      <img src={logo} className="logo"></img>
      <p className="notification">{textContent}</p>
 </div>
};

const element = (
  <div className="background-cont">
    <h1 className="heading">Notification</h1>
    <div className = "card-cont">
      <Notification
        cardNo = "card-1" 
        textContent="Information Message"
        logo="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="info"
      />
      <Notification
        cardNo = "card-2" 
        textContent="Success Message"
        logo="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="info"
      />

      <Notification
        cardNo = "card-3" 
        textContent="Warning Message"
        logo="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="info"
      />
      <Notification
        cardNo = "card-4" 
        textContent="Error Message"
        logo="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="info"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
