// Portfolio data - you can customize this with your actual project data
const portfolioData = {
  "project1": {
    title: "HR Analytics Dashboard",
    technology: "Power BI",
    description: "A comprehensive HR analytics dashboard that provides insights into employee performance, retention rates, and workforce demographics. This dashboard helps HR managers make data-driven decisions about talent management and resource allocation.",
    features: [
      "Employee performance metrics and trends",
      "Attrition analysis with predictive indicators",
      "Department-wise headcount visualization",
      "Diversity and inclusion statistics",
      "Recruitment funnel efficiency metrics"
    ],
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "img/project1.jpg"
  },
  "project2": {
    title: "Sales Forecasting Dashboard",
    technology: "Excel, SQL",
    description: "An advanced sales forecasting tool that combines historical data with market trends to predict future sales performance. This dashboard helps sales teams set realistic targets and allocate resources effectively.",
    features: [
      "Historical sales data analysis",
      "Seasonality and trend detection",
      "Forecast accuracy measurements",
      "Product-wise performance predictions",
      "Regional sales comparisons"
    ],
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "img/project2.jpg"
  },
  "project3": {
    title: "Employee Productivity Insights",
    technology: "Tableau",
    description: "A productivity monitoring dashboard that tracks and visualizes employee output, efficiency metrics, and workflow patterns. This tool helps managers identify top performers and areas for process improvement.",
    features: [
      "Task completion rates and timelines",
      "Workload distribution analysis",
      "Efficiency trend tracking",
      "Team comparison metrics",
      "Productivity forecasting"
    ],
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "img/project3.jpg"
  },
  "project4": {
    title: "Customer Segmentation Dashboard",
    technology: "Power BI, Excel",
    description: "A customer segmentation analysis tool that categorizes clients based on purchasing behavior, demographics, and engagement levels. This dashboard enables targeted marketing strategies and personalized customer experiences.",
    features: [
      "RFM (Recency, Frequency, Monetary) analysis",
      "Customer lifetime value calculations",
      "Demographic segmentation",
      "Behavioral pattern identification",
      "Segment performance tracking"
    ],
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "img/project4.jpg"
  },
  "project5": {
    title: "Inventory Management Dashboard",
    technology: "Excel, Power BI",
    description: "An inventory optimization dashboard that tracks stock levels, turnover rates, and supply chain efficiency. This tool helps businesses minimize carrying costs while preventing stockouts.",
    features: [
      "Real-time inventory tracking",
      "Stock turnover analysis",
      "Reorder point alerts",
      "Supplier performance metrics",
      "Inventory valuation reports"
    ],
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "img/project5.jpg"
  },
  "project6": {
    title: "Finance Performance Tracker",
    technology: "Tableau",
    description: "A comprehensive financial performance dashboard that monitors revenue, expenses, profitability, and key financial ratios. This tool provides stakeholders with clear insights into the organization's financial health.",
    features: [
      "Income statement visualization",
      "Expense categorization and trends",
      "Profit margin analysis",
      "Financial ratio calculations",
      "Budget vs. actual comparisons"
    ],
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "img/project6.jpg"
  },
  "project7": {
    title: "Marketing Campaign Dashboard",
    technology: "Power BI",
    description: "A marketing performance dashboard that tracks campaign effectiveness, ROI, and customer acquisition metrics. This tool helps marketers optimize their strategies and allocate budgets more effectively.",
    features: [
      "Multi-channel campaign tracking",
      "Conversion rate analysis",
      "Customer acquisition cost calculations",
      "ROI by campaign and channel",
      "Lead generation metrics"
    ],
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "img/project7.jpg"
  },
  "project8": {
    title: "Clinic Operations Dashboard",
    technology: "Power BI, Excel",
    description: "A healthcare operations dashboard that monitors patient flow, appointment scheduling, and resource utilization in clinical settings. This tool helps healthcare providers improve patient care and operational efficiency.",
    features: [
      "Patient wait time analysis",
      "Appointment scheduling efficiency",
      "Resource utilization rates",
      "Patient satisfaction metrics",
      "Treatment outcome tracking"
    ],
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "img/project8.jpg"
  },
  "project9": {
    title: "Recruitment Funnel Dashboard",
    technology: "SQL, Tableau",
    description: "A recruitment analytics dashboard that visualizes the hiring pipeline from application to onboarding. This tool helps HR teams optimize their recruitment processes and reduce time-to-hire.",
    features: [
      "Application pipeline visualization",
      "Time-to-fill metrics",
      "Source effectiveness analysis",
      "Candidate quality assessments",
      "Diversity hiring metrics"
    ],
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "img/project9.jpg"
  }
};

// Initialize portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
  initializePortfolio();
});

function initializePortfolio() {
  // Create modal element
  createModal();
  
  // Add click event listeners to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project-id');
      openModal(projectId);
    });
  });
}

function createModal() {
  // Create modal HTML structure
  const modalHTML = `
    <div id="portfolio-modal" class="modal">
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="modal-header">
          <h3 id="modal-title"></h3>
          <span class="modal-tech" id="modal-tech"></span>
        </div>
        <div class="modal-body">
          <div class="modal-image" id="modal-image"></div>
          <p class="modal-description" id="modal-description"></p>
          <div class="modal-features">
            <h4>Key Features:</h4>
            <ul id="modal-features"></ul>
          </div>
        
        </div>
      </div>
    </div>
  `;
  
  // Append modal to body
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Add event listener to close modal
  document.querySelector('.close-modal').addEventListener('click', closeModal);
  
  // Close modal when clicking outside content
  document.getElementById('portfolio-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function openModal(projectId) {
  const project = portfolioData[projectId];
  if (!project) return;
  
  // Set modal content
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-tech').textContent = project.technology;
  document.getElementById('modal-description').textContent = project.description;
  
  // Set modal image
  const modalImage = document.getElementById('modal-image');
  modalImage.style.backgroundImage = `url(${project.imageUrl})`;
  
  // Set features list
  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = '';
  project.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
  
  // Set button links
  document.getElementById('modal-live-btn').href = project.liveUrl;
  document.getElementById('modal-source-btn').href = project.sourceUrl;
  
  // Show modal
  const modal = document.getElementById('portfolio-modal');
  modal.style.display = 'block';
  
  // Add show class after a short delay for transition
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

function closeModal() {
  const modal = document.getElementById('portfolio-modal');
  modal.classList.remove('show');
  
  // Wait for transition to complete before hiding
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}