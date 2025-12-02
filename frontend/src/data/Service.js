const Service = {
  web_development: [
    {
      project_name: "CareerGenAI",
      category: "AI-Based Career Recommendation Platform",
      client: "Internal Project – Aryahs World Infotech",
      duration: "3 Months",
      target_audience: "Students from Class 5 to Graduation",
      technologies_used: [
        "React.js",
        "Node.js",
        "Python",
        "TensorFlow",
        "Generative AI",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion"
      ],
      overview: "CareerGenAI is an AI-powered platform designed to guide students from Class 5 to Graduation in selecting the right career path based on their interests, strengths, skills, and academic background. It provides personalized career suggestions and career roadmaps using AI.",
      problem_statement: "Students often struggle to choose the right career due to lack of awareness, guidance, and exposure. Traditional counselling is expensive and limited, making it inaccessible to many students from school to college level.",
      solution: "CareerGenAI offers an affordable, AI-driven career counselling system that evaluates a student's abilities, interests, subjects, and personality traits to recommend the best-suited career options.",
      key_features: [
        "AI-generated personalized career recommendations",
        "Career paths for Class 5 to Graduation",
        "Skill and interest evaluation",
        "Subject-wise guidance",
        "Stream selection assistant after Class 10",
        "Career roadmaps",
        "Future scope and salary insights",
        "Student dashboard",
        "Modern UI"
      ],
      architecture: {
        frontend: "React + Tailwind CSS + Framer Motion",
        backend: "Node.js / Express",
        database: "MongoDB",
        ai_engine: "Python + TensorFlow + Generative AI models",
        modules: [
          "Student Assessment Module",
          "Career Recommendation Engine",
          "Roadmap Generator",
          "Admin Dashboard"
        ]
      },
      screenshots: [
        "student_dashboard.jpg",
        "career_suggestion_page.jpg",
        "assessment_test_ui.jpg",
        "career_roadmap_preview.jpg"
      ],
      results: [
        "Improved student clarity towards career direction",
        "AI-driven decision making",
        "Empowered parents and educators",
        "Reduced confusion during stream selection"
      ],
      status: "Completed",
      call_to_action: "Want to build an education or AI platform? Contact Aryahs World Infotech today."
    },

    {
      project_name: "Dr. Rathod – Dental Clinic Website",
      category: "Website Development / Healthcare",
      client: "Dr. Rathod Dental Clinic",
      duration: "1 Month",
      technologies_used: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express",
        "MongoDB"
      ],
      overview: "A modern and professional website for Dr. Rathod Dental Clinic showcasing dental services, treatments, doctor profile, and appointment booking.",
      problem_statement: "The clinic needed a clean, trustworthy website to display dental services and allow appointment booking.",
      solution: "Created a premium medical website with modern UI, services, testimonials, and appointment features.",
      key_features: [
        "Clinic homepage",
        "Doctor profile",
        "Treatment list",
        "Appointment form",
        "Gallery",
        "Testimonials",
        "Responsive design"
      ],
      architecture: {
        frontend: "React + Tailwind CSS + Framer Motion",
        backend: "Node.js / Express",
        database: "MongoDB",
        modules: [
          "Appointment Form Module",
          "Service Listing Module",
          "Doctor Profile Module",
          "Testimonials Section"
        ]
      },
      screenshots: [
        "clinic_homepage.jpg",
        "treatments_page.jpg",
        "doctor_profile_section.jpg",
        "appointment_form_ui.jpg"
      ],
      results: [
        "More online appointment requests",
        "Enhanced clinic trust",
        "Better information access"
      ],
      status: "Completed",
      call_to_action: "Need a professional medical website? Contact Aryahs World Infotech."
    },

    {
      project_name: "Aryahs World Infotech (OPC) Pvt. Ltd.",
      category: "IT & Software Development Company",
      client: "Self / Corporate",
      duration: "Ongoing",
      technologies_used: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Flutter",
        "Python",
        "TensorFlow",
        "PyTorch",
        "Generative AI",
        "6G Security Models",
        "Cloud Computing",
        "DevOps",
        "Docker",
        "AWS",
        "Framer Motion",
        "Tailwind CSS"
      ],
      overview: "Corporate website for Aryahs World Infotech showcasing services, AI products, 6G research, and software development solutions.",
      problem_statement: "Needed a modern and premium digital presence to showcase expertise and services.",
      solution: "Built a modern animated React website with full sections: Home, About Us, Services, Projects, Testimonials, Tech Stack, and Contact.",
      key_features: [
        "Premium animated UI",
        "Full-screen mobile menu",
        "Services showcase",
        "Portfolio section",
        "Testimonials",
        "Tech stack section",
        "Inquiry form"
      ],
      architecture: {
        frontend: "React + Tailwind CSS + Framer Motion",
        backend: "Node.js + Express.js",
        database: "MongoDB",
        modules: [
          "Services Module",
          "Projects Module",
          "Testimonials Module",
          "Inquiry Form Module",
          "Team & About Section",
          "Tech Stack Module"
        ]
      },
      screenshots: [
        "homepage_banner.jpg",
        "services_section.jpg",
        "projects_portfolio_ui.jpg",
        "contact_page_ui.jpg"
      ],
      results: [
        "Stronger digital brand presence",
        "Increased project inquiries",
        "Professional corporate identity"
      ],
      status: "Live",
      call_to_action: "Want a premium website or app? Contact Aryahs World Infotech."
    }
  ],
  ai_ml: [
    {
      "project_name": "Crop Yield Prediction using Genotype & Phenotype Data",
      "category": "AI/ML – Agriculture Technology",
      "client": "Research / Internal Project – Aryahs World Infotech",
      "duration": "2 Months",
      "technologies_used": [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "XGBoost",
        "Matplotlib"
      ],
      "overview": "A machine learning and deep learning–based system that predicts crop yield using processed genotype and phenotype data. The project focuses on using SNP-derived genetic features and observed plant traits to build an accurate yield prediction model.",
      "problem_statement": "Predicting crop yield through manual methods is slow and resource-heavy. Researchers and farmers require a fast, reliable ML-based solution that uses genetic and phenotype traits to estimate yield before harvesting.",
      "solution": "We developed a complete ML pipeline that processes genotype data (geno_data.csv) and phenotype data (pheno_data.csv), merges them, and trains multiple models—including XGBoost and Deep Neural Networks—to accurately predict crop yield. The system includes preprocessing, feature selection, correlation analysis, model training, and evaluation.",
      "dataset_used": {
        "genotype_data": {
          "file": "geno_data.csv",
          "description": "Cleaned and pre-processed SNP genotype matrix.",
          "features": "SNP markers (encoded as numeric values)",
          "preprocessing": [
            "Missing value handling",
            "Normalization",
            "Optional SNP reduction for performance"
          ]
        },
        "phenotype_data": {
          "file": "pheno_data.csv",
          "description": "Crop phenotype traits for each sample.",
          "target_variable": "Crop yield (continuous value)",
          "preprocessing": [
            "Outlier removal",
            "Trait scaling",
            "Sample alignment with genotype data"
          ]
        }
      },
      "model_architecture": {
        "type": "Hybrid ML Pipeline",
        "models_trained": [
          "XGBoost Regressor",
          "Deep Neural Network (DNN)",
          "Random Forest",
          "Linear Regression"
        ],
        "best_performing_model": "XGBoost"
      },
      "training_pipeline": [
        "Load geno_data.csv and pheno_data.csv",
        "Merge datasets on common sample IDs",
        "Data cleaning and alignment",
        "Normalization and feature scaling",
        "Train-test split",
        "Hyperparameter tuning for XGBoost and DNN",
        "Model training and evaluation"
      ],
      "evaluation_metrics": {
        "rmse": "Optimized RMSE after tuning",
        "r2_score": "Improved R² score with feature selection",
        "additional_metrics": [
          "Mean Absolute Error (MAE)",
          "Explained Variance Score"
        ]
      },
      "results": [
        "High accuracy crop yield prediction using merged genotype-phenotype dataset",
        "Improved R² after reducing irrelevant SNPs",
        "Strong performance using XGBoost on processed features",
        "Processed dataset saved as processed_data.csv for reuse"
      ],
      "deployment": "Model can be exported as a .pkl file and integrated into a web dashboard or API for real-time predictions.",
      "status": "Completed",
      "call_to_action": "Need an AI model for agriculture or genetics? Contact Aryahs World Infotech."
    },
    {
      "project_name": "6G Security: End-to-End AI-Based Intrusion Detection and Secure Data Transfer",
      "category": "AI/ML – Cybersecurity / 6G Networks",
      "client": "Research / Internal Project – Aryahs World Infotech",
      "duration": "4 Months",
      "technologies_used": [
        "Python",
        "TensorFlow",
        "Keras",
        "Flower Federated Learning",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Quantization Toolkit",
        "FastAPI",
        "Matplotlib"
      ],
      "overview": "An advanced AI-driven 6G security framework consisting of four major components: Secure Data Transfer, Cross-Layer Authentication Engine (C-LAE), Federated Learning Intrusion Detection (FL-ID), and Lightweight Intrusion Detection (LITE-ID) for low-resource 6G devices. The project ensures privacy, distributed intelligence, and real-time threat detection for next-generation communication systems.",
      "objectives": [
        {
          "objective_id": 1,
          "name": "Objective 1: 6G Secure Data Transfer with AI-based Risk Assessment",
          "description": "Designed a secure data transfer pipeline for 6G communication systems using AI-based risk scoring and anomaly monitoring. The system ensures encrypted transmission, continuous risk evaluation, and detection of malicious patterns in network traffic.",
          "dataset_used": "Custom network traffic samples + synthetic 6G packet logs",
          "solution": "Implemented encryption, packet validation, and AI-based threat scoring to secure real-time data transfer.",
          "key_features": [
            "AI-based risk classification",
            "Encrypted packet transfer",
            "Real-time anomaly detection",
            "Secure session management"
          ],
          "results": [
            "Improved packet-level security",
            "Reduced attack success rate",
            "Enhanced throughput with minimal overhead"
          ]
        },
        {
          "objective_id": 2,
          "name": "Objective 2: C-LAE – Cross-Layer Authentication Engine for 6G",
          "description": "Developed an AI-based Cross-Layer Authentication Engine (C-LAE) that performs multi-layer authentication using physical, network, and application-level data for enhanced device identity verification in 6G networks.",
          "dataset_used": {
            "source": "Custom multi-layer dataset + simulated RF fingerprints + network metadata",
            "layers_used": [
              "Physical Layer (RF fingerprints, RSSI, SNR)",
              "Network Layer (IP flows, MAC identifiers)",
              "Application Layer (behavior metadata)"
            ]
          },
          "solution": "Implemented a cross-layer feature fusion model combining RF signal features, network traffic patterns, and application metadata to authenticate users and detect spoofing attempts.",
          "key_features": [
            "Multi-layer authentication engine",
            "RF fingerprint spoof-detection",
            "Cross-layer feature fusion",
            "Detection of fake devices/base stations",
            "Behavior-based anomaly scoring"
          ],
          "results": [
            "Improved authentication accuracy across layers",
            "High spoof detection rate",
            "Reduced false positives using multi-layer fusion",
            "Deployable on both edge and cloud environments"
          ]
        },
        {
          "objective_id": 3,
          "name": "Objective 3: Federated Learning-Based Intrusion Detection (FL-ID)",
          "description": "Developed a decentralized IDS using Flower Federated Learning with TensorFlow. Multiple clients trained locally on different slices of the CICIDS2017 dataset without sharing raw data, ensuring privacy.",
          "dataset_used": "CICIDS2017 dataset (CSV format), label column: ' Label'",
          "solution": "Implemented multi-client federated learning using Flower where each client performs local training on CSV-based data splits. The server aggregates model weights at each round.",
          "modules": [
            "run_fl.py for server + multi-client orchestration",
            "Custom FedAvg strategy",
            "Model weight aggregation",
            "Local training, validation, and logging"
          ],
          "key_features": [
            "Privacy-preserving distributed training",
            "Multi-client local training using CSV files",
            "Custom FedAvg strategy",
            "Server-side accuracy logging"
          ],
          "results": [
            "Significant accuracy improvement each FL round",
            "Zero raw-data sharing between clients",
            "Optimized loss convergence across federated nodes"
          ]
        },
        {
          "objective_id": 4,
          "name": "Objective 4: LITE-ID – Lightweight AI-Based IDS for 6G",
          "description": "Built a low-resource, quantized LSTM model for intrusion detection optimized for deployment on constrained 6G edge devices.",
          "dataset_used": "NSL-KDD subset (cleaned and reduced)",
          "solution": "Trained a small LSTM model, applied post-training quantization, and exported it for mobile/IoT-level inference.",
          "key_features": [
            "Quantized LSTM model",
            "Low computational cost",
            "High detection accuracy",
            "Reduced memory footprint"
          ],
          "results": [
            "Successful deployment on resource-limited environments",
            "High prediction accuracy with minimal latency",
            "Increased security coverage in 6G edge devices"
          ]
        }
      ],
      "overall_results": [
        "Fully functional 6G security pipeline covering secure data transfer, C-LAE authentication, FL-IDS, and lightweight IDS.",
        "Optimized AI models for both cloud and edge environments.",
        "Strong accuracy, reduced inference time, and improved data privacy.",
        "Successful demonstration of next-generation secure communication design."
      ],
      "status": "Completed",
      "call_to_action": "Looking to build next-generation AI security or 6G-based systems? Contact Aryahs World Infotech."
    },
    {
      "project_name": "Ethereum Fraud Detection Using Machine Learning",
      "category": "AI/ML – Blockchain Security",
      "client": "Research / Internal Project – Aryahs World Infotech",
      "duration": "1.5 Months",
      "technologies_used": [
        "Python",
        "Scikit-learn",
        "TensorFlow",
        "Pandas",
        "NumPy",
        "XGBoost",
        "Matplotlib",
        "Seaborn"
      ],
      "overview": "An AI-based fraud detection system designed to analyze Ethereum blockchain transaction patterns and detect suspicious or malicious behavior such as scams, phishing, money laundering, and abnormal transfer activity.",
      "problem_statement": "Ethereum is frequently targeted by fraudulent actors deploying scam smart contracts, wash trading, phishing wallets, and suspicious transaction flows. Detecting fraud manually is extremely difficult due to high transaction volume and complex blockchain patterns. A smart, automated AI model is required.",
      "solution": "Built a machine learning pipeline that processes Ethereum wallet metadata, transaction features, timing behavior, and network graph relationships. The model classifies wallets or transactions as legitimate or fraudulent using supervised learning techniques.",
      "dataset_used": {
        "source": "Ethereum Fraud Dataset (CSV format)",
        "description": "Contains normal and fraudulent Ethereum transactions with labeled targets.",
        "features_included": [
          "Transaction count",
          "Incoming/outgoing ETH",
          "Average transaction value",
          "Time between transactions",
          "Smart contract interactions",
          "Network graph features"
        ],
        "preprocessing_steps": [
          "Missing value handling",
          "Feature scaling",
          "Outlier removal",
          "Balancing classes using SMOTE",
          "Train-test split"
        ]
      },
      "model_architecture": {
        "type": "Binary Classification ML Pipeline",
        "models_trained": [
          "XGBoost",
          "Random Forest",
          "Logistic Regression",
          "DNN (TensorFlow)"
        ],
        "best_performing_model": "XGBoost"
      },
      "training_pipeline": [
        "Load Ethereum transaction dataset",
        "Clean and preprocess transaction features",
        "Feature engineering and graph-based enrichment",
        "Normalize and scale numerical features",
        "Apply class balancing for fraudulent cases",
        "Train multiple ML models",
        "Select best-performing model based on metrics"
      ],
      "evaluation_metrics": {
        "accuracy": "High accuracy after hyperparameter tuning",
        "precision": "Strong precision for fraud identification",
        "recall": "High detection rate for rare fraud cases",
        "additional_metrics": [
          "F1 Score",
          "AUC-ROC Curve",
          "Confusion Matrix"
        ]
      },
      "key_features": [
        "Real-time fraud transaction classification",
        "Graph-based wallet behavior analysis",
        "Detection of abnormal ETH flows",
        "Identification of high-risk wallets",
        "Highly accurate fraud detection model"
      ],
      "results": [
        "Successfully identified fraudulent Ethereum transactions with strong ML accuracy",
        "Reduced false positives using advanced feature engineering",
        "Model ready for integration into blockchain monitoring dashboards"
      ],
      "deployment": "Model can be deployed via FastAPI or integrated into a blockchain analytics tool to monitor live Ethereum transactions.",
      "status": "Completed",
      "call_to_action": "Need AI-based fraud detection or blockchain security solutions? Contact Aryahs World Infotech."
    },

  ],
  app_development: [
    {
      "project_name": "Bailgada – Android & iOS Mobile Application",
      "category": "Mobile App Development (Flutter / Cross-Platform)",
      "client": "Bailgada Team",
      "duration": "1.5 Months",
      "technologies_used": [
        "Flutter",
        "Dart",
        "Firebase",
        "Node.js (optional backend)",
        "Cloud Firestore",
        "REST APIs",
        "Provider / Bloc State Management"
      ],
      "overview": "Bailgada is a modern mobile application built for Android and iOS to digitize the traditional Bailgada (Bullock Cart Race) experience. The app provides event information, registration support, live updates, results, and community announcements — available in both Marathi and English languages.",
      "problem_statement": "Traditional Bailgada events are managed manually, causing issues with participant registration, event scheduling, transparency, and communication. There is no dedicated digital platform for farmers, event organizers, and the local community.",
      "solution": "Developed a clean, user-friendly and multilingual mobile application with features like race details, participant registration, announcements, real-time updates, and contact information. The app is lightweight, fast, and designed for rural network conditions.",
      "key_features": [
        "Multilingual support (Marathi + English)",
        "Event details and race categories",
        "Participant registration form",
        "Organizer announcements and updates",
        "Gallery for event photos",
        "Contact information section",
        "Rules & Guidelines section",
        "Offline-friendly caching",
        "Modern UI with clean typography"
      ],
      "ui_ux_details": {
        "design_style": "Minimal, clean and culturally themed",
        "color_palette": "Warm rural tones + premium UI elements",
        "language_toggle": "Marathi ↔ English switch",
        "navigation": "Bottom navigation + custom top bar"
      },
      "architecture": {
        "frontend": "Flutter (Android + iOS)",
        "backend": "Firebase Firestore / Node.js (optional)",
        "authentication": "Firebase Auth (if enabled)",
        "state_management": "Provider or Bloc",
        "data_flow": "Cloud Firestore ↔ Flutter app",
        "deployment": "Play Store + App Store"
      },
      "screenshots": [
        "home_screen.jpg",
        "event_details.jpg",
        "registration_form.jpg",
        "announcements_screen.jpg",
        "gallery_page.jpg"
      ],
      "results": [
        "Digitized event information for rural communities",
        "Easy participant registration",
        "Improved communication between organizers and participants",
        "Modern app accessible even on low network connectivity"
      ],
      "status": "Completed & Live",
      "call_to_action": "Want to build a cross-platform mobile app like Bailgada? Contact Aryahs World Infotech today."
    },
    {
      "project_name": "Asorex – Building Material Ordering & Delivery Platform",
      "category": "Mobile App Development (Android + iOS)",
      "client": "Asorex Team",
      "duration": "2 Months",
      "technologies_used": [
        "Flutter",
        "Dart",
        "Firebase",
        "Node.js",
        "Express.js",
        "Cloud Firestore",
        "Google Maps API",
        "Payment Gateway Integration",
        "Provider / Bloc State Management"
      ],
      "overview": "Asorex is a cross-platform mobile application designed for ordering and delivering construction and building materials such as cement, sand, bricks, steel, and aggregates. The platform connects material suppliers (providers) with customers and supports real-time order tracking, delivery management, and service booking.",
      "problem_statement": "Construction material ordering traditionally requires manual calls, price negotiation, and uncertain delivery timelines. Customers lack a unified platform to compare prices, check availability, and request timely delivery. Suppliers also face difficulty managing orders and reaching new customers.",
      "solution": "Built a seamless mobile application that allows customers to browse building materials, compare prices, place orders, schedule deliveries, and make secure payments. Providers receive real-time orders and manage inventory, pricing, and delivery schedules. A complete booking system manages logistics, delivery status, and communication.",
      "key_features": [
        "Customer app + Provider app + Admin dashboard",
        "Browse building materials (cement, sand, bricks, steel, etc.)",
        "Real-time price and availability updates",
        "Instant booking and scheduled deliveries",
        "Location-based delivery services",
        "Secure online payments",
        "Live order tracking on map",
        "Provider inventory management",
        "Order history and invoices",
        "Push notifications for updates",
        "In-app customer-provider communication"
      ],
      "ui_ux_details": {
        "design_style": "Clean, modern, and professional",
        "color_palette": "Construction-inspired theme with blues, greys, and accents",
        "navigation": "Bottom navigation for customers, provider-side dashboard layout",
        "micro_interactions": "Smooth transitions and real-time loading animations"
      },
      "architecture": {
        "frontend": "Flutter (Android + iOS)",
        "backend": "Node.js + Express.js",
        "database": "Firebase Firestore",
        "authentication": "Firebase Auth (Phone, Google, Email)",
        "storage": "Firebase Storage (material images, documents)",
        "notifications": "Firebase Cloud Messaging (FCM)",
        "maps_and_location": "Google Maps API for delivery tracking",
        "payment_integration": "Razorpay / Stripe"
      },
      "screenshots": [
        "material_catalog.jpg",
        "provider_dashboard.jpg",
        "order_booking_page.jpg",
        "delivery_tracking.jpg",
        "payment_screen.jpg"
      ],
      "results": [
        "Digitized the construction material ordering process",
        "Improved delivery management with real-time tracking",
        "Increased visibility for suppliers",
        "Reduced order confusion and improved customer satisfaction"
      ],
      "status": "Completed & Ready for Deployment",
      "call_to_action": "Want to build a powerful delivery or marketplace app like Asorex? Contact Aryahs World Infotech today."
    },
    {
      "project_name": "GenAI Food Ingredient Detection App",
      "category": "Mobile App Development (Android + iOS) + AI/ML",
      "client": "Internal Project – Aryahs World Infotech",
      "duration": "2 Months",
      "technologies_used": [
        "Flutter",
        "Dart",
        "TensorFlow Lite",
        "YOLOv8",
        "OpenCV",
        "FastAPI",
        "Python",
        "Generative AI (OpenAI API / LLaMA)",
        "Firebase",
        "REST APIs"
      ],
      "overview": "A cross-platform AI-powered mobile application that identifies food ingredients from photos using computer vision and provides detailed insights such as nutritional information, allergens, food safety alerts, and recipe recommendations using Generative AI.",
      "problem_statement": "Users struggle to understand what ingredients are present in their food, especially in mixed dishes. Many people have dietary restrictions, allergies, or want nutritional transparency. Manual checking is slow and inaccurate.",
      "solution": "Built a portable AI system that uses image recognition to detect food items and ingredients. The app uses Generative AI to analyze detected ingredients, generate nutritional summaries, identify allergens, and suggest healthy recipes.",
      "key_features": [
        "Food ingredient detection from images",
        "AI-powered nutrition analysis",
        "Allergen identification (nuts, dairy, gluten, etc.)",
        "Food safety warnings (expired, spoiled, unhealthy)",
        "Generative AI-based recipe suggestions",
        "Calorie and macro breakdown",
        "History of scanned food items",
        "Dark mode + modern UI",
        "Multilingual support"
      ],
      "ai_capabilities": {
        "model_used": "YOLOv8 + Custom trained food classification model",
        "pipeline": [
          "Image capture → Ingredient detection",
          "Ingredient list → Generative AI processing",
          "Output: Nutrition, safety, allergens, recipes"
        ],
        "generative_ai_tasks": [
          "Nutritional breakdown",
          "Recipe creation",
          "Dietary recommendations",
          "Allergy warnings"
        ]
      },
      "ui_ux_details": {
        "design_style": "Premium, modern, clean",
        "color_palette": "Green + white health-focused theme",
        "experience": "Scan → Detect → Analyze → Get Insights",
        "animations": "Smooth scan animations + Lottie effects"
      },
      "architecture": {
        "frontend": "Flutter (Android + iOS)",
        "backend": "FastAPI + Python",
        "database": "Firebase Firestore",
        "authentication": "Firebase Auth",
        "storage": "Firebase Storage for scanned images",
        "ai_engine": {
          "cv_model": "YOLOv8 / TensorFlow Lite",
          "gen_model": "OpenAI or LLaMA-based API"
        }
      },
      "screenshots": [
        "scan_food_screen.jpg",
        "ingredient_detection.jpg",
        "nutrition_result.jpg",
        "allergen_warning.jpg",
        "recipe_suggestions.jpg"
      ],
      "results": [
        "Accurately detects food ingredients from images",
        "Provides real-time food safety and nutritional data",
        "Helps users track calories and diet quality",
        "Enable healthy eating through AI-backed insights"
      ],
      "status": "Completed",
      "call_to_action": "Want to build a powerful AI-driven mobile app like this? Contact Aryahs World Infotech today."
    }

  ]
};
