const Adminsidebar=()=>{
    return(
        <>
            <section id="sidebar">
                <a href="#" className="brand">
                    <i className='bx bxs-smile'></i>
                    <span className="text">AdminHub</span>
                </a>
                <ul className="side-menu top">
                    <li className="active">
                        <a href="#">
                            <i className='bx bxs-dashboard' ></i>
                            <span className="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-shopping-bag-alt' ></i>
                            <span className="text">My Store</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-doughnut-chart' ></i>
                            <span className="text">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-message-dots' ></i>
                            <span className="text">Message</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-group' ></i>
                            <span className="text">Team</span>
                        </a>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#">
                            <i className='bx bxs-cog' ></i>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout">
                            <i className='bx bxs-log-out-circle' ></i>
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>




            <section id="content">

                <nav>
                    <i className='bx bx-menu' ></i>
                    <a href="#" className="nav-link">Categories</a>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                                <button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden />
                        <label form="switch-mode" className="switch-mode"></label>
                        <a href="#" className="notification">
                            <i className='bx bxs-bell' ></i>
                            <span className="num">8</span>
                        </a>
                        <a href="#" className="profile">
                            <img src="img/people.png"/>
                        </a>
                </nav>

                const Main = () => {
                return (
                <main>
                    <div className="head-title">
                        <div clclassNameass="left">
                            <h1>Dashboard</h1>
                            <ul class="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i class='bx bx-chevron-right' ></i></li>
                                <li>
                                    <a class="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" class="btn-download">
                            <i class='bx bxs-cloud-download' ></i>
                            <span class="text">Download PDF</span>
                        </a>
                    </div>

                    <ul class="box-info">
                        <li>
                            <i class='bx bxs-calendar-check' ></i>
                            <span class="text">
						<h3>1020</h3>
						<p>New Order</p>
					</span>
                        </li>
                        <li>
                            <i class='bx bxs-group' ></i>
                            <span class="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
                        </li>
                        <li>
                            <i class='bx bxs-dollar-circle' ></i>
                            <span class="text">
						<h3>$2543</h3>
						<p>Total Sales</p>
					</span>
                        </li>
                    </ul>


                    <div class="table-data">
                        <div class="order">
                            <div class="head">
                                <h3>Recent Orders</h3>
                                <i class='bx bx-search' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Date Order</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                            <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status completed">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                            <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                            <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status process">Process</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                            <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                            <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status completed">Completed</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="todo">
                            <div class="head">
                                <h3>Todos</h3>
                                <i class='bx bx-plus' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <ul class="todo-list">
                                <li class="completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="not-completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="not-completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
                );
            }



                const DashboardPage = () => {
                return (
                <section id="content">
                <Navbar />
                <Main />
                </section>
                );
            }
        </>
    )

}
export default Adminsidebar