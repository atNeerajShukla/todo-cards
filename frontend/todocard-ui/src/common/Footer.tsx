
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {currentYear} Neeraj Shukla | <a href="https://simplifiedjs.com" className="text-white">SimplifiedJS</a>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

