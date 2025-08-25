// Vehicle Data with Multiple Images
const vehiclesData = [
    {
        id: 1,
        make: 'toyota',
        model: 'Camry',
        year: 2020,
        price: 24900,
        type: 'sedan',
        mileage: 32000,
        transmission: 'Automatic',
        fuel: 'Gasoline',
        color: 'Silver',
        featured: true,
        images: [
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
            'https://images.unsplash.com/photo-1550355191-aa8a80b41353?w=800&h=600&fit=crop&crop=center&auto=format&q=80'
        ],
        description: 'Well-maintained Toyota Camry with excellent fuel economy and reliability. Features include backup camera, Bluetooth connectivity, and advanced safety features.',
        features: ['Backup Camera', 'Bluetooth', 'Cruise Control', 'Power Windows', 'A/C']
    },
    {
        id: 2,
        make: 'honda',
        model: 'CR-V',
        year: 2019,
        price: 27500,
        type: 'suv',
        mileage: 28000,
        transmission: 'Automatic',
        fuel: 'Gasoline',
        color: 'Blue',
        featured: true,
        images: [
            'https://images.hgmsites.net/hug/honda-cr-v_100755452_h.jpg',
            'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&auto=format&q=75',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format&q=75'
        ],
        description: 'Spacious and reliable Honda CR-V perfect for families. Excellent cargo space and Honda\'s renowned build quality.',
        features: ['All-Wheel Drive', 'Sunroof', 'Honda Sensing', 'Apple CarPlay', 'Heated Seats']
    },
    {
        id: 3,
        make: 'ford',
        model: 'F-150',
        year: 2021,
        price: 42000,
        type: 'truck',
        mileage: 15000,
        transmission: 'Automatic',
        fuel: 'Gasoline',
        color: 'Black',
        featured: true,
        images: [
            'https://media.autoexpress.co.uk/image/private/s--A05aFATR--/v1562245870/autoexpress/2018/02/1fordraptor_0.jpg',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
            'https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800&h=600&fit=crop&crop=center&auto=format&q=80'
        ],
        description: 'Powerful Ford F-150 with excellent towing capacity and modern features. Perfect for work and recreation.',
        features: ['4x4', 'Towing Package', 'Bed Liner', 'Navigation', 'Premium Sound']
    },
    {
        id: 4,
        make: 'bmw',
        model: '3 Series',
        year: 2018,
        price: 32000,
        type: 'sedan',
        mileage: 35000,
        transmission: 'Automatic',
        fuel: 'Gasoline',
        color: 'White',
        featured: false,
        images: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center&auto=format&q=80'
        ],
        description: 'Luxury BMW 3 Series with sporty performance and premium interior. Well-maintained with full service history.',
        features: ['Leather Seats', 'Sport Package', 'Premium Audio', 'Navigation', 'Sunroof']
    },
    {
        id: 5,
        make: 'mercedes',
        model: 'GLC 300',
        year: 2020,
        price: 45000,
        type: 'suv',
        mileage: 22000,
        transmission: 'Automatic',
        fuel: 'Gasoline',
        color: 'Silver',
        featured: false,
        images: [
            'https://vehicle-images.dealerinspire.com/7354-11001115/W1NKJ4HB8SF294761/3d0d792d9727d6f64b7fefaf11477015.jpg',
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
            'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop&crop=center&auto=format&q=80'
        ],
        description: 'Elegant Mercedes-Benz GLC 300 with luxury features and smooth performance. Perfect blend of comfort and capability.',
        features: ['4MATIC AWD', 'MBUX Infotainment', 'Panoramic Roof', 'Premium Package', 'LED Headlights']
    },
    {
        id: 6,
        make: 'audi',
        model: 'A4',
        year: 2019,
        price: 28500,
        type: 'sedan',
        mileage: 30000,
        transmission: 'Automatic',
        fuel: 'Gasoline',
        color: 'Gray',
        featured: false,
        images: [
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
            'https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
            'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop&crop=center&auto=format&q=80'
        ],
        description: 'Sophisticated Audi A4 with refined driving dynamics and premium interior appointments. Excellent condition.',
        features: ['Quattro AWD', 'Virtual Cockpit', 'Bang & Olufsen Sound', 'S-Line Package', 'Adaptive Cruise']
    },
    {
        id: 7,
        make: 'toyota',
        model: 'RAV4',
        year: 2021,
        price: 29900,
        type: 'suv',
        mileage: 18000,
        transmission: 'Automatic',
        fuel: 'Gasoline',
        color: 'Red',
        featured: false,
        images: [
            'https://static2.3birdsmarketing.com/Clients/TOYOTABRANDASSETS/2021toyotarav4_1.jpeg',
            'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop&auto=format&q=75',
            'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=600&fit=crop&auto=format&q=75'
        ],
        description: 'Nearly new Toyota RAV4 with advanced safety features and excellent fuel economy. Perfect compact SUV.',
        features: ['Toyota Safety Sense', 'All-Wheel Drive', 'Wireless Charging', 'Roof Rails', 'LED Lighting']
    },
    {
        id: 8,
        make: 'honda',
        model: 'Civic',
        year: 2020,
        price: 21500,
        type: 'sedan',
        mileage: 25000,
        transmission: 'Manual',
        fuel: 'Gasoline',
        color: 'Blue',
        featured: false,
        images: [
            'https://images.unsplash.com/photo-1654870646430-e5b6f2c0fa93?w=800&h=600&fit=crop&auto=format&q=75',
            'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=600&fit=crop&auto=format&q=75',
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop&auto=format&q=75'
        ],
        description: 'Sporty Honda Civic with manual transmission for driving enthusiasts. Great fuel economy and reliability.',
        features: ['Manual Transmission', 'Sport Mode', 'Honda Sensing', 'Apple CarPlay', 'Dual-Zone Climate']
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('vehicleModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initializeNavigation();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            loadFeaturedVehicles();
            break;
        case 'vehicles':
            loadAllVehicles();
            initializeFilters();
            break;
        case 'contact':
            initializeContactForm();
            break;
    }
    
    // Initialize modal functionality
    initializeModal();
});

// Navigation Functions
function initializeNavigation() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (page === '' || page === 'index.html') return 'index';
    if (page === 'vehicles.html') return 'vehicles';
    if (page === 'contact.html') return 'contact';
    return 'index';
}

// Vehicle Display Functions
function loadFeaturedVehicles() {
    const featuredContainer = document.getElementById('featuredVehicles');
    if (!featuredContainer) return;
    
    const featuredVehicles = vehiclesData.filter(vehicle => vehicle.featured);
    
    featuredContainer.innerHTML = featuredVehicles.map(vehicle => 
        createVehicleCard(vehicle)
    ).join('');
    
    // Add event listeners for vehicle cards
    addVehicleCardListeners();
}

function loadAllVehicles() {
    const vehiclesContainer = document.getElementById('vehiclesGrid');
    if (!vehiclesContainer) return;
    
    displayVehicles(vehiclesData);
    addVehicleCardListeners();
}

function displayVehicles(vehicles) {
    const vehiclesContainer = document.getElementById('vehiclesGrid');
    const noResults = document.getElementById('noResults');
    
    if (vehicles.length === 0) {
        vehiclesContainer.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    vehiclesContainer.innerHTML = vehicles.map(vehicle => 
        createVehicleCard(vehicle)
    ).join('');
}

function createVehicleCard(vehicle) {
    const formatPrice = (price) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(price);
    
    const formatMileage = (mileage) => new Intl.NumberFormat('en-US').format(mileage);
    
    return `
        <div class="vehicle-card" data-vehicle-id="${vehicle.id}">
            <div class="vehicle-image-container">
                <img src="${vehicle.images[0]}" alt="${vehicle.year} ${vehicle.make} ${vehicle.model}" class="vehicle-image">
                ${vehicle.featured ? '<div class="vehicle-badge">Featured</div>' : ''}
            </div>
            <div class="vehicle-info">
                <h3 class="vehicle-title">${vehicle.year} ${vehicle.make.charAt(0).toUpperCase() + vehicle.make.slice(1)} ${vehicle.model}</h3>
                <div class="vehicle-price">${formatPrice(vehicle.price)}</div>
                <div class="vehicle-details">
                    <div><strong>Mileage:</strong> ${formatMileage(vehicle.mileage)} mi</div>
                    <div><strong>Transmission:</strong> ${vehicle.transmission}</div>
                    <div><strong>Fuel:</strong> ${vehicle.fuel}</div>
                    <div><strong>Color:</strong> ${vehicle.color}</div>
                </div>
                <div class="vehicle-actions">
                    <button class="btn btn-primary btn-small view-details" data-vehicle-id="${vehicle.id}">View Details</button>
                    <button class="btn btn-secondary btn-small contact-dealer" data-vehicle="${vehicle.year} ${vehicle.make} ${vehicle.model}">Contact</button>
                </div>
            </div>
        </div>
    `;
}

function addVehicleCardListeners() {
    // View Details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const vehicleId = parseInt(this.dataset.vehicleId);
            showVehicleDetails(vehicleId);
        });
    });
    
    // Contact Dealer buttons
    document.querySelectorAll('.contact-dealer').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const vehicleName = this.dataset.vehicle;
            window.location.href = `contact.html?vehicle=${encodeURIComponent(vehicleName)}`;
        });
    });
    
    // Vehicle card click
    document.querySelectorAll('.vehicle-card').forEach(card => {
        card.addEventListener('click', function() {
            const vehicleId = parseInt(this.dataset.vehicleId);
            showVehicleDetails(vehicleId);
        });
    });
}

// Modal Functions
function initializeModal() {
    if (closeModal) {
        closeModal.addEventListener('click', closeVehicleModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeVehicleModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeVehicleModal();
        }
    });
}

function showVehicleDetails(vehicleId) {
    const vehicle = vehiclesData.find(v => v.id === vehicleId);
    if (!vehicle || !modal || !modalBody) return;
    
    const formatPrice = (price) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(price);
    
    const formatMileage = (mileage) => new Intl.NumberFormat('en-US').format(mileage);
    
    modalBody.innerHTML = `
        <div class="vehicle-detail">
            <div class="vehicle-detail-image">
                <img src="${vehicle.images[0]}" alt="${vehicle.year} ${vehicle.make} ${vehicle.model}" 
                     style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
                <div style="text-align: center; color: #64748b; font-style: italic; margin-bottom: 2rem; padding: 0.5rem; background-color: #f8fafc; border-radius: 6px; border-left: 3px solid #2563eb;">
                    📸 Contact us for more images of this vehicle
                </div>
            </div>
            <div class="vehicle-detail-info">
                <h2>${vehicle.year} ${vehicle.make.charAt(0).toUpperCase() + vehicle.make.slice(1)} ${vehicle.model}</h2>
                <div class="vehicle-price" style="font-size: 1.8rem; margin: 1rem 0;">${formatPrice(vehicle.price)}</div>
                
                <div class="vehicle-specs" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
                    <div><strong>Year:</strong> ${vehicle.year}</div>
                    <div><strong>Make:</strong> ${vehicle.make.charAt(0).toUpperCase() + vehicle.make.slice(1)}</div>
                    <div><strong>Model:</strong> ${vehicle.model}</div>
                    <div><strong>Type:</strong> ${vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}</div>
                    <div><strong>Mileage:</strong> ${formatMileage(vehicle.mileage)} miles</div>
                    <div><strong>Transmission:</strong> ${vehicle.transmission}</div>
                    <div><strong>Fuel Type:</strong> ${vehicle.fuel}</div>
                    <div><strong>Color:</strong> ${vehicle.color}</div>
                </div>
                
                <div class="vehicle-description" style="margin: 2rem 0;">
                    <h3>Description</h3>
                    <p>${vehicle.description}</p>
                </div>
                
                <div class="vehicle-features" style="margin: 2rem 0;">
                    <h3>Features</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem;">
                        ${vehicle.features.map(feature => `<div>• ${feature}</div>`).join('')}
                    </div>
                </div>
                
                <div class="vehicle-actions" style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="contact.html?vehicle=${encodeURIComponent(vehicle.year + ' ' + vehicle.make + ' ' + vehicle.model)}" 
                       class="btn btn-primary">Contact About This Vehicle</a>
                    <button class="btn btn-secondary" onclick="scheduleTestDrive('${vehicle.year} ${vehicle.make} ${vehicle.model}')">Schedule Test Drive</button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Initialize carousel
    currentCarouselIndex = 0;
}

function closeVehicleModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Carousel Functions
let currentCarouselIndex = 0;

function changeCarouselImage(direction) {
    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (images.length === 0) return;
    
    // Hide current image and dot
    images[currentCarouselIndex].classList.remove('active');
    if (dots[currentCarouselIndex]) {
        dots[currentCarouselIndex].classList.remove('active');
    }
    
    // Calculate new index
    currentCarouselIndex += direction;
    if (currentCarouselIndex >= images.length) currentCarouselIndex = 0;
    if (currentCarouselIndex < 0) currentCarouselIndex = images.length - 1;
    
    // Show new image and dot
    images[currentCarouselIndex].classList.add('active');
    if (dots[currentCarouselIndex]) {
        dots[currentCarouselIndex].classList.add('active');
    }
}

function showCarouselImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (images.length === 0 || index < 0 || index >= images.length) return;
    
    // Hide current image and dot
    images[currentCarouselIndex].classList.remove('active');
    if (dots[currentCarouselIndex]) {
        dots[currentCarouselIndex].classList.remove('active');
    }
    
    // Show new image and dot
    currentCarouselIndex = index;
    images[currentCarouselIndex].classList.add('active');
    if (dots[currentCarouselIndex]) {
        dots[currentCarouselIndex].classList.add('active');
    }
}

// Filter Functions
function initializeFilters() {
    const makeFilter = document.getElementById('make-filter');
    const typeFilter = document.getElementById('type-filter');
    const priceFilter = document.getElementById('price-filter');
    const clearFilters = document.getElementById('clear-filters');
    
    if (makeFilter) makeFilter.addEventListener('change', applyFilters);
    if (typeFilter) typeFilter.addEventListener('change', applyFilters);
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    if (clearFilters) clearFilters.addEventListener('click', clearAllFilters);
}

function applyFilters() {
    const makeFilter = document.getElementById('make-filter');
    const typeFilter = document.getElementById('type-filter');
    const priceFilter = document.getElementById('price-filter');
    
    const selectedMake = makeFilter ? makeFilter.value.trim() : '';
    const selectedType = typeFilter ? typeFilter.value.trim() : '';
    const selectedPriceRange = priceFilter ? priceFilter.value.trim() : '';
    
    // Show loading state
    showFilteringState(true);
    
    // Add small delay to show filtering is happening
    setTimeout(() => {
        let filteredVehicles = vehiclesData.filter(vehicle => {
            let matchesMake = true;
            let matchesType = true;
            let matchesPrice = true;
            
            // Filter by make (case-insensitive comparison)
            if (selectedMake) {
                matchesMake = vehicle.make.toLowerCase() === selectedMake.toLowerCase();
            }
            
            // Filter by type (case-insensitive comparison)
            if (selectedType) {
                matchesType = vehicle.type.toLowerCase() === selectedType.toLowerCase();
            }
            
            // Filter by price range
            if (selectedPriceRange) {
                const price = vehicle.price;
                switch (selectedPriceRange) {
                    case '0-15000':
                        matchesPrice = price < 15000;
                        break;
                    case '15000-25000':
                        matchesPrice = price >= 15000 && price < 25000;
                        break;
                    case '25000-35000':
                        matchesPrice = price >= 25000 && price < 35000;
                        break;
                    case '35000-50000':
                        matchesPrice = price >= 35000 && price < 50000;
                        break;
                    case '50000+':
                        matchesPrice = price >= 50000;
                        break;
                }
            }
            
            return matchesMake && matchesType && matchesPrice;
        });
        
        // Hide loading state and show results
        showFilteringState(false);
        displayVehicles(filteredVehicles);
        addVehicleCardListeners();
        
        // Update filter count display
        updateFilterCount(filteredVehicles.length, vehiclesData.length);
    }, 300);
}

function clearAllFilters() {
    const makeFilter = document.getElementById('make-filter');
    const typeFilter = document.getElementById('type-filter');
    const priceFilter = document.getElementById('price-filter');
    
    if (makeFilter) makeFilter.value = '';
    if (typeFilter) typeFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    
    displayVehicles(vehiclesData);
    addVehicleCardListeners();
    updateFilterCount(vehiclesData.length, vehiclesData.length);
}

// Helper functions for filtering visual feedback
function showFilteringState(isFiltering) {
    const loadingElement = document.getElementById('loading');
    const vehiclesGrid = document.getElementById('vehiclesGrid');
    
    if (isFiltering) {
        if (loadingElement) loadingElement.style.display = 'block';
        if (vehiclesGrid) vehiclesGrid.style.opacity = '0.5';
    } else {
        if (loadingElement) loadingElement.style.display = 'none';
        if (vehiclesGrid) vehiclesGrid.style.opacity = '1';
    }
}

function updateFilterCount(filteredCount, totalCount) {
    // Create or update filter count display
    let countDisplay = document.getElementById('filter-count');
    const filtersSection = document.querySelector('.filters .container');
    
    if (!countDisplay && filtersSection) {
        countDisplay = document.createElement('div');
        countDisplay.id = 'filter-count';
        countDisplay.style.cssText = `
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background-color: #e0e7ff;
            color: #3730a3;
            border-radius: 6px;
            font-weight: 500;
            text-align: center;
            font-size: 0.9rem;
        `;
        filtersSection.appendChild(countDisplay);
    }
    
    if (countDisplay) {
        if (filteredCount === totalCount) {
            countDisplay.textContent = `Showing all ${totalCount} vehicles`;
            countDisplay.style.backgroundColor = '#f0fdf4';
            countDisplay.style.color = '#166534';
        } else if (filteredCount === 0) {
            countDisplay.textContent = 'No vehicles match your filters';
            countDisplay.style.backgroundColor = '#fef2f2';
            countDisplay.style.color = '#991b1b';
        } else {
            countDisplay.textContent = `Showing ${filteredCount} of ${totalCount} vehicles`;
            countDisplay.style.backgroundColor = '#e0e7ff';
            countDisplay.style.color = '#3730a3';
        }
    }
}

// Contact Form Functions
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    // Pre-fill vehicle interest if passed in URL
    const urlParams = new URLSearchParams(window.location.search);
    const vehicleParam = urlParams.get('vehicle');
    if (vehicleParam) {
        const vehicleInterestField = document.getElementById('vehicleInterest');
        if (vehicleInterestField) {
            vehicleInterestField.value = decodeURIComponent(vehicleParam);
        }
        
        // Also set subject to vehicle information
        const subjectField = document.getElementById('subject');
        if (subjectField) {
            subjectField.value = 'vehicle';
        }
    }
    
    contactForm.addEventListener('submit', handleContactFormSubmit);
    
    // Add real-time validation
    const requiredFields = contactForm.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', validateField);
        field.addEventListener('input', clearFieldError);
    });
}

function validateField(event) {
    const field = event.target;
    const fieldContainer = field.closest('.form-group');
    
    // Remove existing error message
    const existingError = fieldContainer.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Validate field
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required.';
    } else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
    } else if (field.type === 'tel' && field.value && !isValidPhone(field.value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number.';
    }
    
    if (!isValid) {
        field.style.borderColor = '#ef4444';
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = errorMessage;
        fieldContainer.appendChild(errorDiv);
    } else {
        field.style.borderColor = '#d1d5db';
    }
    
    return isValid;
}

function clearFieldError(event) {
    const field = event.target;
    const fieldContainer = field.closest('.form-group');
    const existingError = fieldContainer.querySelector('.error-message');
    
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '#d1d5db';
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const requiredFields = form.querySelectorAll('[required]');
    let isFormValid = true;
    
    // Validate all required fields
    requiredFields.forEach(field => {
        const fieldValid = validateField({ target: field });
        if (!fieldValid) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        // Scroll to first error
        const firstError = form.querySelector('.error-message');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Show success message
        showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Remove vehicle parameter from URL if it exists
        if (window.location.search.includes('vehicle=')) {
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, 2000);
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanedPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanedPhone) && cleanedPhone.length >= 10;
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

function scheduleTestDrive(vehicleName) {
    window.location.href = `contact.html?vehicle=${encodeURIComponent(vehicleName)}&subject=test-drive`;
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images with error handling
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Handle image loading errors
        img.addEventListener('error', function() {
            // Create a fallback colored rectangle
            const fallbackColor = ['#e2e8f0', '#cbd5e1', '#94a3b8'][Math.floor(Math.random() * 3)];
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            const ctx = canvas.getContext('2d');
            
            // Fill with color
            ctx.fillStyle = fallbackColor;
            ctx.fillRect(0, 0, 800, 600);
            
            // Add text
            ctx.fillStyle = '#64748b';
            ctx.font = '24px Inter, Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Car Image', 400, 280);
            ctx.fillText('Loading...', 400, 320);
            
            // Replace the broken image
            this.src = canvas.toDataURL();
            this.style.opacity = '1';
        });
        
        // Set initial opacity for smooth loading
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
    
    // Handle images added dynamically (for vehicle cards)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    const newImages = node.querySelectorAll ? node.querySelectorAll('img') : [];
                    newImages.forEach(img => {
                        img.addEventListener('error', function() {
                            const fallbackColor = ['#e2e8f0', '#cbd5e1', '#94a3b8'][Math.floor(Math.random() * 3)];
                            const canvas = document.createElement('canvas');
                            canvas.width = 800;
                            canvas.height = 600;
                            const ctx = canvas.getContext('2d');
                            
                            ctx.fillStyle = fallbackColor;
                            ctx.fillRect(0, 0, 800, 600);
                            
                            ctx.fillStyle = '#64748b';
                            ctx.font = '24px Inter, Arial, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Car Image', 400, 280);
                            ctx.fillText('Loading...', 400, 320);
                            
                            this.src = canvas.toDataURL();
                            this.style.opacity = '1';
                        });
                    });
                }
            });
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.vehicle-card, .benefit, .feature, .faq-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
