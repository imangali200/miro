'use client';
export default function Footer() {
    return (
        <footer className="bg-[#050038] text-white p-10 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-4 underline decoration-2 underline-offset-4">Product</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li><a href="#" className="hover:underline">Online whiteboard</a></li>
                        <li><a href="#" className="hover:underline">Apps & Integrations</a></li>
                        <li><a href="#" className="hover:underline">Templates</a></li>
                        <li><a href="#" className="hover:underline">Miroverse</a></li>
                        <li><a href="#" className="hover:underline">Miro Developer Platform</a></li>
                        <li><a href="#" className="hover:underline">Miro for Devices</a></li>
                        <li><a href="#" className="hover:underline">Security & Compliance</a></li>
                        <li><a href="#" className="hover:underline">Accessibility</a></li>
                        <li><a href="#" className="hover:underline">Changelog</a></li>
                        <li className="pt-4"><a href="#" className="hover:underline border-b border-white pb-1 italic">View demo →</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4">Solutions</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li><a href="#" className="hover:underline">Meetings and Workshops</a></li>
                        <li><a href="#" className="hover:underline">Brainstorming & Ideation</a></li>
                        <li><a href="#" className="hover:underline">Agile Workflows</a></li>
                        <li><a href="#" className="hover:underline">Diagramming</a></li>
                        <li><a href="#" className="hover:underline">Research & Design</a></li>
                        <li><a href="#" className="hover:underline">Strategy & Planning</a></li>
                        <li><a href="#" className="hover:underline">Mind Map</a></li>
                        <li><a href="#" className="hover:underline">Concept Map</a></li>
                        <li><a href="#" className="hover:underline">Online Sticky Notes</a></li>
                        <li><a href="#" className="hover:underline">Flowchart</a></li>
                        <li><a href="#" className="hover:underline">Wireframing</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li><a href="#" className="hover:underline">Miro Academy</a></li>
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Status</a></li>
                        <li><a href="#" className="hover:underline">Miro Community</a></li>
                        <li><a href="#" className="hover:underline">Miro Professional Network</a></li>
                        <li><a href="#" className="hover:underline">Miro Experts Directory</a></li>
                        <li><a href="#" className="hover:underline">Miro Events</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4">Company</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Careers 🚀</a></li>
                        <li><a href="#" className="hover:underline">Miro in the News</a></li>
                        <li><a href="#" className="hover:underline">Customer Stories</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4">Plans and Pricing</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li><a href="#" className="hover:underline">Pricing</a></li>
                        <li><a href="#" className="hover:underline">Business</a></li>
                        <li><a href="#" className="hover:underline">Enterprise</a></li>
                        <li><a href="#" className="hover:underline">Consultants</a></li>
                        <li><a href="#" className="hover:underline">Education</a></li>
                        <li><a href="#" className="hover:underline">Startups</a></li>
                        <li><a href="#" className="hover:underline">NPOs</a></li>
                        <li className="pt-4"><a href="#" className="hover:underline border-b border-white pb-1 italic">Contact sales →</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Instagram</a>
                    <a href="#">YouTube</a>
                </div>
                
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <span>© 2022 Miro</span>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Manage Cookies</a>
                </div>
            </div>
        </footer>
    );
}