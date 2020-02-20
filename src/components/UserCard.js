import React from "react";

const UserCard = () => {
  return (
    <div className="box box-danger">
      <div className="box-header with-border">
        <h3 className="box-title">Latest Members</h3>

        <div className="box-tools pull-right">
          <span className="label label-danger">8 New Members</span>
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
            data-widget="remove"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div className="box-body no-padding">
        <ul className="users-list clearfix">
          <li>
            <img src="/img/user1-128x128.jpg" alt="User Image" />
            <a className="users-list-name" href="#">
              Alexander Pierce
            </a>
            <span className="users-list-date">Today</span>
          </li>
          <li>
            <img src="/img/user8-128x128.jpg" alt="User Image" />
            <a className="users-list-name" href="#">
              Norman
            </a>
            <span className="users-list-date">Yesterday</span>
          </li>
          <li>
            <img src="/img/user7-128x128.jpg" alt="User Image" />
            <a className="users-list-name" href="#">
              Jane
            </a>
            <span className="users-list-date">12 Jan</span>
          </li>
          <li>
            <img src="/img/user6-128x128.jpg" alt="User Image" />
            <a className="users-list-name" href="#">
              John
            </a>
            <span className="users-list-date">12 Jan</span>
          </li>
          <li>
            <img src="/img/user2-160x160.jpg" alt="User Image" />
            <a className="users-list-name" href="#">
              Alexander
            </a>
            <span className="users-list-date">13 Jan</span>
          </li>
          <li>
            <img src="/img/user5-128x128.jpg" alt="User Image" />
            <a className="users-list-name" href="#">
              Sarah
            </a>
            <span className="users-list-date">14 Jan</span>
          </li>
          <li>
            <img src="/img/user4-128x128.jpg" alt="User Image" />
            <a className="users-list-name" href="#">
              Nora
            </a>
            <span className="users-list-date">15 Jan</span>
          </li>
          <li>
            <img src="/img/user3-128x128.jpg" alt="User Image" />
            <a className="users-list-name" href="#">
              Nadia
            </a>
            <span className="users-list-date">15 Jan</span>
          </li>
        </ul>
      </div>
      <div className="box-footer text-center">
        <a href="javascript:void(0)" className="uppercase">
          View All Users
        </a>
      </div>
    </div>
  );
};

export default UserCard;
