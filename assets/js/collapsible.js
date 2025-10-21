/**
 * Collapsible sections functionality
 * Makes sections collapsible for better page organization
 */

document.addEventListener('DOMContentLoaded', function() {
    // Find all collapsible headers
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    
    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isCollapsed = content.classList.contains('collapsed');
            
            // Toggle collapsed state
            if (isCollapsed) {
                content.classList.remove('collapsed');
                this.classList.remove('collapsed');
            } else {
                content.classList.add('collapsed');
                this.classList.add('collapsed');
            }
        });
    });
});
