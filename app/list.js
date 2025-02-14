import * as bootstrap from "bootstrap";
import './list.scss'; // Make sure to compile SCSS to CSS if necessary

document.addEventListener("DOMContentLoaded", () => {

    // Tooltip for any elements that require tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Popover for any elements that need popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl);
    });

    // Toast for any toasts on the page (optional feature for notifications)
    const toastElList = [].slice.call(document.querySelectorAll('.toast'));
    toastElList.forEach(toastEl => {
        new bootstrap.Toast(toastEl).show(); // Automatically show the toast
    });

    // Dropdown for any dropdown elements
    const dropdownList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownList.forEach(dropdownEl => {
        new bootstrap.Dropdown(dropdownEl);
    });

    // Event listeners for Edit/Delete buttons
    const editButtons = document.querySelectorAll('.btn-primary');
    const deleteButtons = document.querySelectorAll('.btn-danger');

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Edit button clicked! Implement editing functionality.");
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Delete button clicked! Implement delete functionality.");
        });
    });

    
    const toggleListVisibilityButton = document.querySelector('#toggle-list-visibility');
    if (toggleListVisibilityButton) {
        toggleListVisibilityButton.addEventListener('click', () => {
            const table = document.querySelector('#student-list-table');
            table.classList.toggle('d-none');
        });
    }

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});