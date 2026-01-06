const TOPIC_MAP = {
        "MTH101": ["Set Theory", "Number Systems", "Mathematical Induction", "Sequences & Series", "Quadratic Equations", "Complex Numbers","Binomial Theorem","Partial Fraction & Remainder Theorem", "Circular Measures","Trigonometry"],
        "PHY101": ["Units & Dimensions","Dot Product of Vectors","Fluid Dynamics","Vectors & Scalars", "Newton’s Laws", "Projectile Motion","Kinematics","center of mass","Angular Velocity","Simple Harmonic Motion","Work, Energy, Power", "Equilibrium","Thermodynamics"],
        "CHM101": ["Atomic Structure","Redox Reaction","Energetics","Electronic Configuration","Corrosion of Metals","Colligative Properties","Chemical Bonding", "Stoichiometry", "Acids and Bases", "Reaction Kinetics","Electrolysis","Chemical Equilibrium"],
        "COS101": ["History of computer","Basic components of computer","Introduction to Algorithms", "Data Structures","internet and its application","Hardware","Software","Programming Fundamentals", "Operating Systems"],
        "STA111": ["Data Collection", "Measures of Central Tendency", "Probability Theory", "errors and approximation"],
        "STA121": ["Population and sample","Sample distribution and proportion", "Regression and correlation", "Probability and elementary time analysis ", "Hypothesis Testing"],
        "BIO101": ["The Cell", "Cell Division","Vital Activities","Genetics", "Taxonomy","Mitosis and Meiosis","Ecology","Mutation","Adaptation","Plant and Animal Physiology"],
        "GST": ["Language","Listening and speaking skills","Speech sounds","Comprehension", "Lexis and Structure", "Stress"],
        "GES151": ["Agricultural Systems", "plant production","Soil Science", "Crop Production", "Aquaculture","Cultural Practices","Livestock Management","Farm Machinery","Historical Development","Economic Opportunities","Forestry and Environment","Rural Development","Importance and Challenges","Animal Husbandry"]
    };
    
    let selectedSubject = null;

    document.addEventListener('DOMContentLoaded', initializeSetup);
    document.getElementById('practiceForm').addEventListener('submit', launchPracticeMode);

    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    function initializeSetup() {
        selectedSubject = getQueryParameter('subject');
        
        if (!selectedSubject || !TOPIC_MAP[selectedSubject]) {
            document.getElementById('subjectName').textContent = "Error: Invalid Subject Selected";
            return;
        }

        document.getElementById('subjectName').textContent = `Subject: ${selectedSubject}`;
        updateTrialStatus();
        populateTopics();
        setupTimeButtons();
    }

    function updateTrialStatus() {
        const trialKey = `trials_${selectedSubject}`;
        const trials = parseInt(localStorage.getItem(trialKey) || '0');
        const isUnlocked = localStorage.getItem(`unlocked_${selectedSubject}`) === 'true';
        const remaining = Math.max(0, 3 - trials);
        const trialStatus = document.getElementById('trialStatus');
        
        if (isUnlocked) {
            trialStatus.innerHTML = `<span style="color: #28a745;">✓ UNLOCKED - Full Access</span>`;
            trialStatus.className = 'trial-status good';
        } else if (remaining > 0) {
            trialStatus.innerHTML = `<span style="color: #28a745;">✓ ${remaining} free trials remaining</span>`;
            trialStatus.className = 'trial-status good';
        } else {
            trialStatus.innerHTML = `<span style="color: #dc3545;">✗ No trials left - Go to Home to unlock</span>`;
            trialStatus.className = 'trial-status warning';
        }
    }

    function populateTopics() {
        const topicSelect = document.getElementById('topicSelect');
        const topics = TOPIC_MAP[selectedSubject];

        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            topicSelect.appendChild(option);
        });
    }

    function showTopicSetup() {
        document.getElementById('topicPracticeSetup').style.display = 'block';
        document.getElementById('topicPracticeSetup').scrollIntoView({ behavior: 'smooth' });
    }
    
    function setupTimeButtons() {
        document.querySelectorAll('#timeOptions .time-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('#timeOptions .time-btn').forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
                document.getElementById('selectedTime').value = this.getAttribute('data-time');
            });
        });
    }

    function launchPracticeMode(event) {
        event.preventDefault();
        
        const topicSelect = document.getElementById('topicSelect');
        const numQuestions = document.getElementById('numQuestionsPractice').value;
        const selectedTopic = topicSelect.value; 
        const timeLimit = document.getElementById('selectedTime').value; 
        
        if (!selectedTopic) {
            alert("Please select a topic to start the session.");
            return;
        }
        
        const qCount = parseInt(numQuestions);
        if (qCount < 10 || qCount > 50 || isNaN(qCount)) {
            alert("Please enter a valid question count between 10 and 50.");
            return;
        }

        const params = new URLSearchParams();
        params.append('mode', 'practice'); 
        params.append('subject', selectedSubject);
        params.append('count', qCount);
        params.append('topics', selectedTopic);
        params.append('time', timeLimit); 

        window.location.href = `cbt_engine.html?${params.toString()}`;
    }

    function launchExamMode() {
        const params = new URLSearchParams();
        params.append('mode', 'exam');
        params.append('subject', selectedSubject);
        params.append('count', 50);
        params.append('time', 30);
        params.append('topics', 'all');

        window.location.href = `cbt_engine.html?${params.toString()}`;
    }
