import { Menu, Search, ShoppingBag, User } from "lucide-react";

function Header() {
  return (
    <header className="border-b stick">
      <nav className="flex items-center gap-8 w-[95%] m-auto h-12 justify-between">
        <div className="text-lg font-medium">
          <a href="/">dev.shopp</a>
        </div>
        <ul className="items-center flex-1 hidden gap-4 md:flex">
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/store/mobiles">Mobiles</a>
          </li>
          <li>
            <a href="/store/tv">TV &amp; display</a>
          </li>
          <li>
            <a href="/store/laptop">Laptop</a>
          </li>
          <li>
            <a href="/store/accessories">Accessories</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button title="Search">
            <Search />
          </button>
          <a title="Cart" className="relative" href="/cart">
            <ShoppingBag />
          </a>
          <a className="max-md:hidden" title="Profile" href="/signin">
            <User />
          </a>
          <button className="inline-block md:hidden" title="Menu">
            <Menu />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
