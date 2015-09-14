var Count = require('react-count');

VisitorCount = React.createClass({

  render: function(){
    return(
          <li className="item">
            <a href="#" className="title">Online counter</a>
            <Count isOnlineCounter={true}
                  counterText="views"
                  firebaseHost="https://chatdbc.firebaseio.com"
                  firebaseResourceId='online-counter'/>
            <div className="post">
              <pre className="brush: html">
                &lt;Count isOnlineCounter=&#123;true&#125; counterText=&quot;views&quot; firebaseHost=&quot;https://counter-button.firebaseio.com/&quot;/ firebaseResourceId=&#39;online-counter&#39;&gt;
              </pre>
            </div>
          </li>
      )
    }
})
