




export default function NavBar() {
  return (

    <div class="font-[Poppins]">
      <nav className="bg-white">
        <h1 className="text-3xl font-bold underline">
          Brad Burr
        </h1>        
        <div className="">
          <ul className="flex items-center gap-[4vw]">
            <li>
              <a className="hover:text-gray-50" href="#">Projects</a>
            </li>
            <li>
              <a className="hover:text-gray-50" href="#">Experience</a>
            </li>
            <li>
              <a className="hover:text-gray-50" href="#">Collaboration</a>
            </li>
            <li>
              <a className="hover:text-gray-50" href="#">Contact Info</a>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
}
