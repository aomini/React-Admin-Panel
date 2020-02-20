import React from "react";

const SingleChat = () => {
  return (
    <div className="box box-warning direct-chat direct-chat-warning">
      <div className="box-header with-border">
        <h3 className="box-title">Direct Chat</h3>

        <div className="box-tools pull-right">
          <span
            data-toggle="tooltip"
            title="3 New Messages"
            className="badge bg-yellow"
          >
            3
          </span>
          <button
            type="button"
            className="btn btn-box-tool"
            data-widget="collapse"
          >
            <i className="fa fa-minus"></i>
          </button>
          <button
            type="button"
            className="btn btn-box-tool"
            data-toggle="tooltip"
            title="Contacts"
            data-widget="chat-pane-toggle"
          >
            <i className="fa fa-comments"></i>
          </button>
          <button
            type="button"
            className="btn btn-box-tool"
            data-widget="remove"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div className="box-body">
        <div className="direct-chat-messages">
          <div className="direct-chat-msg">
            <div className="direct-chat-info clearfix">
              <span className="direct-chat-name pull-left">
                Alexander Pierce
              </span>
              <span className="direct-chat-timestamp pull-right">
                23 Jan 2:00 pm
              </span>
            </div>
            <img
              className="direct-chat-img"
              src="/img/user1-128x128.jpg"
              alt="message user image"
            />
            <div className="direct-chat-text">
              Is this template really for free? That's unbelievable!
            </div>
          </div>

          <div className="direct-chat-msg right">
            <div className="direct-chat-info clearfix">
              <span className="direct-chat-name pull-right">Sarah Bullock</span>
              <span className="direct-chat-timestamp pull-left">
                23 Jan 2:05 pm
              </span>
            </div>
            <img
              className="direct-chat-img"
              src="/img/user3-128x128.jpg"
              alt="message user image"
            />
            <div className="direct-chat-text">You better believe it!</div>
          </div>

          <div className="direct-chat-msg">
            <div className="direct-chat-info clearfix">
              <span className="direct-chat-name pull-left">
                Alexander Pierce
              </span>
              <span className="direct-chat-timestamp pull-right">
                23 Jan 5:37 pm
              </span>
            </div>
            <img
              className="direct-chat-img"
              src="/img/user1-128x128.jpg"
              alt="message user image"
            />
            <div className="direct-chat-text">
              Working with AdminLTE on a great new app! Wanna join?
            </div>
          </div>

          <div className="direct-chat-msg right">
            <div className="direct-chat-info clearfix">
              <span className="direct-chat-name pull-right">Sarah Bullock</span>
              <span className="direct-chat-timestamp pull-left">
                23 Jan 6:10 pm
              </span>
            </div>
            <img
              className="direct-chat-img"
              src="/img/user3-128x128.jpg"
              alt="message user image"
            />
            <div className="direct-chat-text">I would love to.</div>
          </div>
        </div>

        <div className="direct-chat-contacts">
          <ul className="contacts-list">
            <li>
              <a href="#">
                <img
                  className="contacts-list-img"
                  src="/img/user1-128x128.jpg"
                  alt="User Image"
                />

                <div className="contacts-list-info">
                  <span className="contacts-list-name">
                    Count Dracula
                    <small className="contacts-list-date pull-right">
                      2/28/2015
                    </small>
                  </span>
                  <span className="contacts-list-msg">
                    How have you been? I was...
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="contacts-list-img"
                  src="/img/user7-128x128.jpg"
                  alt="User Image"
                />

                <div className="contacts-list-info">
                  <span className="contacts-list-name">
                    Sarah Doe
                    <small className="contacts-list-date pull-right">
                      2/23/2015
                    </small>
                  </span>
                  <span className="contacts-list-msg">
                    I will be waiting for...
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="contacts-list-img"
                  src="/img/user3-128x128.jpg"
                  alt="User Image"
                />

                <div className="contacts-list-info">
                  <span className="contacts-list-name">
                    Nadia Jolie
                    <small className="contacts-list-date pull-right">
                      2/20/2015
                    </small>
                  </span>
                  <span className="contacts-list-msg">
                    I'll call you back at...
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="contacts-list-img"
                  src="/img/user5-128x128.jpg"
                  alt="User Image"
                />

                <div className="contacts-list-info">
                  <span className="contacts-list-name">
                    Nora S. Vans
                    <small className="contacts-list-date pull-right">
                      2/10/2015
                    </small>
                  </span>
                  <span className="contacts-list-msg">
                    Where is your new...
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="contacts-list-img"
                  src="/img/user6-128x128.jpg"
                  alt="User Image"
                />

                <div className="contacts-list-info">
                  <span className="contacts-list-name">
                    John K.
                    <small className="contacts-list-date pull-right">
                      1/27/2015
                    </small>
                  </span>
                  <span className="contacts-list-msg">
                    Can I take a look at...
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="contacts-list-img"
                  src="/img/user8-128x128.jpg"
                  alt="User Image"
                />

                <div className="contacts-list-info">
                  <span className="contacts-list-name">
                    Kenneth M.
                    <small className="contacts-list-date pull-right">
                      1/4/2015
                    </small>
                  </span>
                  <span className="contacts-list-msg">
                    Never mind I found...
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-footer">
        <form action="#" method="post">
          <div className="input-group">
            <input
              type="text"
              name="message"
              placeholder="Type Message ..."
              className="form-control"
            />
            <span className="input-group-btn">
              <button type="button" className="btn btn-warning btn-flat">
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleChat;
