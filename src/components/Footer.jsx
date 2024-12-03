const Footer = () => {
  return (
    <footer className="footer bg-white p-5 rounded-bl-xl rounded-br-xl border-t-2">
      <p className="text-center text-[#1e3799] text-base font-medium">
        &copy; {new Date().getFullYear()} All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
