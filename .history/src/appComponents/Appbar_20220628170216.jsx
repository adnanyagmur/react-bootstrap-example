
const Appbar =()=>{

    return(
        <>
  <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
    <a class="navbar-brand">Hakkımda</a>
    <a class="navbar-brand">Portfolyo</a>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

</>
    )
}

export default Appbar;