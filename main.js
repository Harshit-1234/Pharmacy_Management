// Basic functions to load content based on navigation
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent(event.target.getAttribute('href').substring(1));
    });
});

function loadContent(section) {
    var content = document.getElementById('content');
    switch (section) {
        case 'inventory':
            content.innerHTML = '<h4>Medicine Inventory</h4><p>Manage medicine details here...</p>';
            break;
        case 'sales':
            content.innerHTML = '<h4>Sales & Billing</h4><p>Manage sales and billing here...</p>';
            break;
        case 'purchase':
            content.innerHTML = '<h4>Purchase Management</h4><p>Record purchases from suppliers...</p>';
            break;
        case 'customers':
            content.innerHTML = '<h4>Customer Management</h4><p>Maintain customer details...</p>';
            break;
        case 'suppliers':
            content.innerHTML = '<h4>Supplier Management</h4><p>Manage supplier records...</p>';
            break;
        case 'reports':
            content.innerHTML = '<h4>Reports</h4><p>Generate sales, inventory, and financial reports...</p>';
            break;
        default:
            content.innerHTML = '<h4>Welcome, Admin</h4><p>Select a section from the sidebar...</p>';
    }
}
