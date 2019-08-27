const { Link } = ReactRouterDOM

const Sidebar = () => (
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  {/* Sidebar */}

    {/* <!-- Sidebar - Brand  --> */}
    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
      <div className="sidebar-brand-icon">
        <img src="./client/img/icon.png" />
      </div>
      <div className="sidebar-brand-text mx-3">Insta Follow</div>
    </Link>

    {/* <!-- Divider  --> */}
    <hr className="sidebar-divider my-0" />

    {/* <!-- Nav Item - Dashboard  --> */}
    <li className="nav-item active">
      <Link className="nav-link" to="/">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </Link>
    </li>

    {/* <!-- Divider  --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading  --> */}
    <div className="sidebar-heading">
      Actions
    </div>

    {/* <!-- Nav Item - Like Collapse Menu  --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLike" aria-expanded="true" aria-controls="collapseLike">
        <i className="fas fa-fw fa-heart"></i>
        <span>Like</span>
      </a>
      <div id="collapseLike" className="collapse" aria-labelledby="headingLike" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <!-- <h6 className="collapse-header">Custom Components:</h6>  --> */}
          <Link className="collapse-item" to="/script/like_user">User Media</Link>
          <Link className="collapse-item" to="/script/like_followers">Followers</Link>
          <Link className="collapse-item" to="/script/like_my_feed">Your Feed</Link>
          <Link className="collapse-item" to="/script/like_location">Location</Link>
          <Link className="collapse-item" to="/script/like_by_hashtag">
            Like Hashtag
            <i className="fas fa-fw fa-star"></i>
          </Link>
          <Link className="collapse-item" to="/script/like_user_fans">
            User Fans
            <i className="fas fa-fw fa-star"></i>
          </Link>
          <Link className="collapse-item" to="/script/like_hashtag_fans">
            Hashtag Fans
            <i className="fas fa-fw fa-star"></i>
          </Link>

          {/* <Link className="collapse-item" to="/like">All</Link> */}
          {/* <a className="collapse-item" href="like/hashtag.html">Hashtag</a> */}
          {/* <a className="collapse-item" href="like/user-medias.html">User Medias</a> */}
        </div>
      </div>
    </li>

    {/* <!-- Nav Item - Follow Collapse Menu  --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFollow" aria-expanded="true" aria-controls="collapseFollow">
        <i className="fas fa-fw fa-user-friends"></i>
        <span>Follow</span>
      </a>
      <div id="collapseFollow" className="collapse" aria-labelledby="headingFollow" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <!-- <h6 className="collapse-header">Custom Utilities:</h6>  --> */}
          <Link className="collapse-item" to="/follow/followers">Followers</Link>
          <Link className="collapse-item" to="/follow/followings">Followees</Link>
          <Link className="collapse-item" to="/script/follow_by_hashtag">Hashtag Authors</Link>

        </div>
      </div>
    </li>

    {/* <!-- Nav Item - Unfollow Collapse Menu  --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUnfollow" aria-expanded="true" aria-controls="collapseUnfollow">
        <i className="fas fa-fw fa-user"></i>
        <span>Unfollow</span>
      </a>
      <div id="collapseUnfollow" className="collapse" aria-labelledby="headingUnollow" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <Link className="collapse-item" to="/script/find_nondual_followings">Non-mutual followers</Link>
        </div>
      </div>
    </li>


    {/* <!-- Nav Item - Download Collapse Menu  --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseDownload" aria-expanded="true" aria-controls="collapseDownload">
        <i className="fas fa-fw fa-file-download"></i>
        <span>Download</span>
      </a>
      <div id="collapseDownload" className="collapse" aria-labelledby="headingDownload" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <!-- <h6 className="collapse-header">Custom Utilities:</h6>  --> */}
          <Link className="collapse-item" to="/script/load_followers">Followers</Link>
          <Link className="collapse-item" to="/script/load_stories">Stories</Link>
        </div>
      </div>
    </li>

    {/* <!-- Nav Item - Comment Collapse Menu  --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseComment" aria-expanded="true" aria-controls="collapseDownload">
        <i className="fas fa-fw fa-file-download"></i>
        <span>Comment</span>
      </a>
      <div id="collapseComment" className="collapse" aria-labelledby="headingDownload" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <!-- <h6 className="collapse-header">Custom Utilities:</h6>  --> */}
          <Link className="collapse-item" to="/script/comment_by_hashtag">Hashtag</Link>
          <Link className="collapse-item" to="/script/comment_by_user">User</Link>
        </div>
      </div>
    </li>

    {/* <!-- Divider  --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading  --> */}
    <div className="sidebar-heading">
      Useful links
    </div>

    {/* <!-- Nav Item -   --> */}
    <li className="nav-item">
      <Link className="nav-link" href="" target="_blank">
        <i className="fab fa-fw fa-chrome"></i>
        <span>Rate extension</span>
      </Link>
    </li>

    {/* <!-- Divider  --> */}
    <hr className="sidebar-divider d-none d-md-block" />

    <li className="nav-item">
      <Link className="nav-link" to="/logs">
        <i className="fas fa-fw fa-file-alt"></i>
        <span>Logs</span>
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/legal">
        <i className="fas fa-fw fa-file-signature"></i>
        <span>Legal</span>
      </Link>
    </li>

    {/* <!-- Sidebar Toggler (Sidebar)  --> */}
    {/* <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div> */}

    {/* <!-- End of Sidebar  --> */}
  </ul>
)
