export const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-2">
      <div>KAYA</div>
      <ul className="flex gap-4">
        <li>GUIDEBOOKS</li>
        <li>CLIMBING ORGS</li>
        <li>GYMS</li>
        <li>FOR BRANDS</li>
        <li>BLOG</li>
        <li>SHOP</li>
        <li>ABOUT</li>
      </ul>
      <div className="flex gap-4">
        <button className="text-orange-600 px-4 py-1 rounded">Sign Up</button>
        <button className="bg-gray-400 text-orange-600 px-4 py-1 rounded">Login</button>
      </div>
    </div>
  );
};
